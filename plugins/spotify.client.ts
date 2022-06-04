import axios from 'axios'
import Spotify from 'spotify-web-api-js'

export default defineNuxtPlugin(async () => {
  const router = useRouter();
  const params = useUrlSearchParams();
  const config = useRuntimeConfig();
  const storageTokens = useLocalStorage<{ refresh_token: string; access_token: string }>(
    'spotify_tokens',
    ref({
      refresh_token: '',
      access_token: '',
    })
  )

  const spotify = new Spotify()

  if (params.code != null && storageTokens.value.access_token.length === 0) {
    try {
      const postParams = new URLSearchParams({
        code: params.code as string,
        grant_type: 'authorization_code',
        redirect_uri: window.location.origin,
      });

      const { data, status } = await axios.post('https://accounts.spotify.com/api/token', postParams, {
        headers: {
          Authorization: `Basic ${btoa(
            `${config.public['spotify-client-id']}:${config.public['spotify-client-secret']}`
          )}`,
          'content-type': 'application/x-www-form-urlencoded',
        },
      });

      if (status === 200) {
        const { access_token: accessToken, refresh_token: refreshToken } = data;

        storageTokens.value.access_token = accessToken;
        storageTokens.value.refresh_token = refreshToken;
      }
    } catch (error) {
      console.error(error);
    }

    spotify.setAccessToken(storageTokens.value.access_token);
  } else if (storageTokens.value.access_token.length > 0) {
    spotify.setAccessToken(storageTokens.value.access_token);
  } else {
    router.push('/login');
  }

  return {
    provide: {
      spotify,
    },
  };
})
