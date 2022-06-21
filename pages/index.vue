<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <!-- <albums-carousel /> -->
    <template v-if="currentPlaybackStore.hasPlayback">
      <tape-sprite class="w-[40rem] mx-auto mb-8" />
      <currently-playing class="rounded-md w-full max-w-[40rem]" />
      <button class="mt-2 rounded px-4 py-2 bg-dark-500 text-white" @click="player.togglePlay">
        {{ currentPlaybackStore.isPlaying ? 'Pause' : 'Play' }}
      </button>
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

    if (refreshToken.value == null) {
      return navigateTo('/login');
    }

    return true;
  },
});

const { fetch } = useFetchRefreshToken();
if (process.server) {
  try {
    await fetch();
  } catch (error) {
    navigateTo('/login');
  }
}

const currentPlaybackStore = useCurrentPlaybackStore();
const { $spotify } = useNuxtApp();
const accessToken = useCookie('spotify-access-token');
const player = ref<Spotify.Player>(null);

const initSpotifyPlayer = () => {
  useHead({
    title: 'Home',
    script: [
      {
        src: 'https://sdk.scdn.co/spotify-player.js',
      },
    ],
  });

  window.onSpotifyWebPlaybackSDKReady = () => {
    player.value = new Spotify.Player({
      name: '[TEST] Tape Player',
      getOAuthToken: (cb) => cb(accessToken.value),
      volume: 0.5,
    });

    player.value.on('player_state_changed', async (event) => {
      currentPlaybackStore.playback = event;

      if (
        // sometimes event and other properties can be null for some reason
        event == null ||
        event.context == null ||
        event.context.uri == null ||
        // make sure that the fetch for context is only called once
        (currentPlaybackStore.context != null && currentPlaybackStore.context.uri === event.context.uri)
      )
        return;

      if (event.context.uri.startsWith('spotify:album')) {
        const albumId = event.context.uri.split(':')[2];
        const album = await $spotify.getAlbum(albumId);
        currentPlaybackStore.context = album;
      } else if (event.context.uri.startsWith('spotify:playlist')) {
        const playlistId = event.context.uri.split(':')[2];
        const playlist = await $spotify.getPlaylist(playlistId);
        currentPlaybackStore.context = playlist;
      } else if (event.context.uri.startsWith('spotify:artist')) {
        const artistId = event.context.uri.split(':')[2];
        const artist = await $spotify.getArtist(artistId);
        currentPlaybackStore.context = artist;
      }
    });

    player.value.connect();
  };
};

onMounted(() => {
  initSpotifyPlayer();
});
</script>
