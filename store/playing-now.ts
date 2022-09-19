import { defineStore } from 'pinia';

export const useCurrentPlaybackStore = defineStore('playingNow', {
  state: (): {
    playback: Spotify.PlaybackState;
    context: SpotifyApi.AlbumObjectFull | SpotifyApi.PlaylistObjectFull;
  } => ({
    playback: null,
    context: null,
  }),

  getters: {
    hasPlayback: (state) => state.playback != null,
    isPlaying: (state) => state.playback && !state.playback.paused,
    hasCurrentTrack: (state) => state.playback && state.playback.track_window.current_track != null,
    currentAlbum: (state) => state.playback && state.playback.track_window.current_track.album,
    currentArtists: (state) =>
      state.playback && state.playback.track_window.current_track.artists.map((artist) => artist.name).join(', '),
    currentTrack: (state) => state.playback && state.playback.track_window.current_track,
    currentTrackProgress: (state) => state.playback && state.playback.position,
    currentTrackDuration: (state) => state.playback && state.playback.duration,
    currentContext: (state) => state.context,
    currentContextDuration: (state) => {
      if (state.context != null && state.context.tracks != null) {
        return (
          state.context.tracks.items as Array<SpotifyApi.TrackObjectSimplified | SpotifyApi.PlaylistTrackObject>
        ).reduce<number>((duration, item) => {
          if ((item as SpotifyApi.TrackObjectFull).id == null) {
            return duration + (item as SpotifyApi.PlaylistTrackObject).track.duration_ms;
          }
          return duration + (item as SpotifyApi.TrackObjectFull).duration_ms;
        }, 0);
      }
      return 0;
    },
    currentContextProgress: (state) => {
      if (state.playback != null && state.context != null && state.context.tracks != null) {
        const currentTrack = state.playback.track_window.current_track;
        const items = state.context.tracks.items as Array<
          SpotifyApi.TrackObjectSimplified | SpotifyApi.PlaylistTrackObject
        >;

        let progress = 0;

        for (let index = 0; index < items.length; index += 1) {
          const item = state.context.tracks.items[index];
          const trackObject =
            (item as SpotifyApi.TrackObjectSimplified).id == null
              ? (item as SpotifyApi.PlaylistTrackObject).track
              : (item as SpotifyApi.TrackObjectSimplified);

          if (trackObject.id === currentTrack.id || trackObject.name === currentTrack.name) {
            break;
          }

          progress += trackObject.duration_ms;
        }

        return progress + state.playback.position;
      }

      return 0;
    },
  },
});

export default useCurrentPlaybackStore;
