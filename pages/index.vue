<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <div class="flex p-4 w-full justify-end">
      <button class="rounded px-4 py-2 bg-dark-500 text-white" @click="logout">Logout</button>
    </div>

    <div class="w-[40rem] flex-1 flex flex-col justify-center items-center">
      <template v-if="currentPlaybackStore.hasPlayback">
        <tape-sprite class="w-full mb-8" />
        <currently-playing class="rounded-md w-full" />
        <button class="mt-2 rounded px-4 py-2 bg-dark-500 text-white" @click="togglePlay">
          {{ currentPlaybackStore.isPlaying ? 'Pause' : 'Play' }}
        </button>
      </template>
      <p v-else class="text-white text-center">You don't have any playback.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTitle } from '@vueuse/core';
import { useCurrentPlaybackStore } from '~~/store/playing-now';

definePageMeta({
  middleware: () => {
    const accessToken = useCookie('spotify-access-token');

    if (accessToken.value == null) {
      return navigateTo('/login');
    }

    return true;
  },
});

const { $getSpotifyPlayer } = useNuxtApp();
const currentPlaybackStore = useCurrentPlaybackStore();

const title = computed<string>(() =>
  currentPlaybackStore.playback == null
    ? 'No Playback | Tape Player'
    : `${currentPlaybackStore.currentTrack.name} - ${currentPlaybackStore.currentArtists} | Tape Player`
);

useTitle(title);

const togglePlay = () => {
  $getSpotifyPlayer().togglePlay();
};

const logout = () => {
  $getSpotifyPlayer().disconnect();
  useCookie('spotify-access-token', undefined);
  navigateTo('/login');
};
</script>
