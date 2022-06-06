<template>
  <div></div>
</template>

<script setup lang="ts">
import axios from 'axios';

const config = useRuntimeConfig();
const route = useRoute();

if (route.query.code != null) {
  let host = '';
  if (process.server) {
    const nuxt = useNuxtApp();
    host = `http://${nuxt.ssrContext.req.headers.host}`;
  } else {
    host = window.location.origin;
  }

  const postParams = new URLSearchParams({
    code: route.query.code as string,
    grant_type: 'authorization_code',
    redirect_uri: `${host}/callback`,
  });

  try {
    const response = await axios(
      'https://accounts.spotify.com/api/token',
      {
        data: postParams,
        method: 'POST',
        headers: {
          Authorization: `Basic ${btoa(
            `${config.public['spotify-client-id']}:${config.public['spotify-client-secret']}`
          )}`,
          'content-type': 'application/x-www-form-urlencoded',
        },
      }
    );
    
    useCookie('spotify-refresh-token').value = response.data.refresh_token;
    useCookie('spotify-access-token').value = response.data.access_token;
    
    navigateTo('/')
  } catch (error) {
    navigateTo('/login');
  }
} else {
  navigateTo('/login');
}

</script>

<style scoped></style>
