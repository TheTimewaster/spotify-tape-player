<template>
  <div class="w-screen h-screen">
    <button class="bg-green-500 p-4 text-center" @click="login" >
      Login with Spotify
    </button>
  </div>
</template>

<script setup lang="ts">
import { useAxios } from '@vueuse/integrations/useAxios';
import { v4 as uuidv4 } from 'uuid';

const runtimeConfig = useRuntimeConfig();
const { data, isLoading } = useAxios();

const login = () => {
  let url = 'https://accounts.spotify.com/authorize';
  url += '?response_type=code';
  url += `&client_id=${  encodeURIComponent( runtimeConfig.public['spotify-client-id'])}`;
  url += `&scope=${  encodeURIComponent('user-read-private streaming user-library-read playlist-read-private user-read-currently-playing user-read-playback-state')}`;
  url += `&redirect_uri=${  encodeURIComponent(window.location.origin)}`;
  url += `&state=${  encodeURIComponent(uuidv4())}`;

  window.location = url as unknown as Location;
};

watch(() => isLoading.value, () => {
  if (!isLoading.value) {
    console.log(data.value);
  }
})
</script>

<style scoped>

</style>