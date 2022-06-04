<template>
  <div
    :key="item.album.id"
    class="p-4 bg-gray-800 rounded-lg transition-colors cursor-pointer hover:(bg-gray-700)"
    @click="playMedia"
  >
    <img
      class="mb-4"
      :src="item.album.images[0].url"
      :width="item.album.images[0].width"
      :height="item.album.images[0].height"
      alt=""
    />
    <div class="text-center text-white">
      <h2>{{ item.album.name }}</h2>
      <p>{{ item.album.artists[0].name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'nuxt/dist/app/compat/capi';

const props = defineProps({
  item: {
    type: Object as PropType<SpotifyApi.SavedAlbumObject>,
  },
});

const emit = defineEmits<{ (e: 'playMedia', albumId: string): void }>();

const playMedia = () => {
  emit('playMedia', props.item.album.id);
};
</script>

<style scoped></style>
