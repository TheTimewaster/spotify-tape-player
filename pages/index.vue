<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <!-- <albums-carousel /> -->
    <template v-if="currentPlaybackStore.hasPlayback">
      <tape-sprite class="w-[40rem] mx-auto mb-8" />
      <currently-playing class="rounded-md w-full max-w-[40rem]" />
    </template>
    <p v-else class="text-white text-center">You don't have any playback.</p>
  </div>
</template>

<script lang="ts" setup>
import { useFetchRefreshToken } from '~~/composables/spotify/useRefreshToken';
import { useCurrentPlaybackStore } from '~~/store/playing-now';

definePageMeta({
  middleware: () => {
    const refreshToken = useCookie('spotify-refresh-token');
    const accessToken = useCookie('spotify-access-token');

    if (refreshToken.value == null || accessToken.value == null) {
      navigateTo('/login');
    }

    return true;
  }
})

const { fetch } = useFetchRefreshToken();
if(process.server){
  try {
    await fetch();
  } catch (error) {
    navigateTo('/login');
  }
}

const currentPlaybackStore = useCurrentPlaybackStore();
const accessToken = useCookie('spotify-access-token');
const player = ref<Spotify.Player>(null);

const initSpotifyPlayer = () => {
  useHead({
    title: 'Home',
    script: [
      {
        src: 'https://sdk.scdn.co/spotify-player.js',
      }
    ]
  })

  window.onSpotifyWebPlaybackSDKReady = () => {
    player.value = new Spotify.Player({
      name: '[TEST] Tape Player',
      getOAuthToken: (cb) => cb(accessToken.value),
      volume: 0.5,
    });

    player.value.on('player_state_changed', (event) => {
      currentPlaybackStore.currentPlayback = event;
    });

    player.value.connect();
  }
}

onMounted(() => {
  initSpotifyPlayer();
});

</script>
