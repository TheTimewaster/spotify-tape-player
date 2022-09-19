import { useCurrentPlaybackStore } from '~~/store/playing-now';
import SpotifyWeb from 'spotify-web-api-js';

export default defineNuxtPlugin(() => {
  const accessToken = useCookie('spotify-access-token');
  const currentPlaybackStore = useCurrentPlaybackStore();

  const spotifyWeb = new SpotifyWeb();

  if (accessToken.value != null) {
    spotifyWeb.setAccessToken(accessToken.value);
  }

  useHead({
    title: 'Home',
    script: [
      {
        src: 'https://sdk.scdn.co/spotify-player.js',
        body: true,
      },
    ],
  });

  let spotifyPlayer: Spotify.Player;
  window.onSpotifyWebPlaybackSDKReady = () => {
    spotifyPlayer = new Spotify.Player({
      name: '[TEST] Tape Player',
      getOAuthToken: (cb) => cb(accessToken.value),
      volume: 0.5,
    });

    spotifyPlayer.on('player_state_changed', async (event) => {
      currentPlaybackStore.playback = event;

      if (
        // sometimes event and other properties can be null for some reason
        event == null ||
        event.context == null ||
        event.context.uri == null ||
        // make sure that the fetch for context is only called once
        (currentPlaybackStore.context != null && currentPlaybackStore.context.uri === event.context.uri)
      )
        return;

      if (event.context.uri.startsWith('spotify:album')) {
        const albumId = event.context.uri.split(':')[2];
        const album = await spotifyWeb.getAlbum(albumId);
        currentPlaybackStore.context = album;
      } else if (event.context.uri.startsWith('spotify:playlist')) {
        const playlistId = event.context.uri.split(':')[2];
        const playlist = await spotifyWeb.getPlaylist(playlistId);
        currentPlaybackStore.context = playlist;
      }
    });

    spotifyPlayer.connect();
  };

  return {
    provide: {
      spotifyWeb,
      // TODO: this is a very hacky way to get the player instance, maybe refactor to a getter instead?!
      getSpotifyPlayer: () => spotifyPlayer,
    },
  };
});
