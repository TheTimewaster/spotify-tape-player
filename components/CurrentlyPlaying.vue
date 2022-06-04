<template>
  <div v-if="currentPlayback" class="bg-dark-500 flex p-4">
    <img
      class="mr-4"
      :src="playingItem.album.images[2].url"
      :alt="playingItem.album.name"
      :width="playingItem.album.images[2].width"
      :height="playingItem.album.images[2].height"
    />
    <div class="text-white">
      <p class="text-lg">
        {{ playingItem.name }}
      </p>
      <p>{{ playingItem.artists.map((artist) => artist.name).join(', ') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $spotify } = useNuxtApp();
const intervalId = ref<number | null>(null);
const currentPlayback = ref<SpotifyApi.CurrentPlaybackResponse>(null);

const playingItem = computed(() => currentPlayback.value.item);

onMounted(async () => {
  // intervalId.value = setInterval(async () => {
  // }, 1000) as unknown as number;

  currentPlayback.value = await $spotify.getMyCurrentPlaybackState();
});

onUnmounted(() => {
  clearInterval(intervalId.value);
});
</script>

<style scoped></style>
