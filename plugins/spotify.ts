import Spotify from "spotify-web-api-js";

export default defineNuxtPlugin(() => {
  const accessCookie = useCookie('spotify-access-token');
  console.log(accessCookie.value);

  const spotify = new Spotify()

  if (accessCookie.value != null) {
    spotify.setAccessToken(accessCookie.value)
  }

  return {
    provide: {
      spotify,
    },
  };
})
