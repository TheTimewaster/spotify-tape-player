<template>
  <div class="flex overflow-x-auto gap-4 py-4">
    <album-card
      v-for="item in savedAlbums"
      :key="item.album.id"
      class="min-w-[12rem]"
      :item="item"
      @play-media="playMedia"
    />
  </div>
</template>

<script setup lang="ts">
const { $spotify } = useNuxtApp();
const savedAlbums = ref<Array<SpotifyApi.SavedAlbumObject>>([]);

const playMedia = (albumId) => {
  $spotify.play({
    context_uri: `spotify:album:${albumId}`,
  });
};

onMounted(async () => {
  const { items } = await $spotify.getMySavedAlbums({ limit: 10 });

  savedAlbums.value = items;
});
</script>

<style scoped></style>
