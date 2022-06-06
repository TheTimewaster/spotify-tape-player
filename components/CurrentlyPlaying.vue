<template>
  <div class="bg-dark-500 flex p-4">
    <img
      class="mr-4 h-full w-auto" :src="currentPlaybackStore.currentAlbum.images[1].url"
      :alt="currentPlaybackStore.currentAlbum.name" :width="currentPlaybackStore.currentAlbum.images[1].width"
      :height="currentPlaybackStore.currentAlbum.images[1].height" />
    <div class="text-white">
      <p class="text-lg">
        {{ currentPlaybackStore.currentTrack.name }}
      </p>
      <p>{{ currentPlaybackStore.currentArtists }}</p>

      <p>{{ currentPlaybackStore.currentProgress }} / {{ currentPlaybackStore.currentDuration }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCurrentPlaybackStore } from "~~/store/playing-now";

const currentPlaybackStore = useCurrentPlaybackStore();
</script>

<style scoped>
</style>
