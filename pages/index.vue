<template>
  <div class="flex flex-col justify-center h-screen">
    <!-- <albums-carousel /> -->
    <template v-if="currentPlaybackStore.hasPlayback">
      <tape-sprite class="w-[40rem] mx-auto mb-8" />
      <currently-playing class="rounded-md w-[40rem] fixed bottom-8 right-8" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import {useCurrentPlaybackStore} from '~~/store/playing-now';

const currentPlaybackStore = useCurrentPlaybackStore();
const intervalId = ref<number | null>(null);

onMounted(async () => {
  // intervalId.value = setInterval(async () => {
  // }, 1000) as unknown as number;

  await currentPlaybackStore.getCurrentPlayback();
});

onUnmounted(() => {
  clearInterval(intervalId.value);
});
</script>
