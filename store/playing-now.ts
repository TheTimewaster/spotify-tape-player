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
        return (state.context.tracks.items as Array<SpotifyApi.TrackObjectSimplified>).reduce<number>(
          (duration, track) => duration + track.duration_ms,
          0
        );
      }
      return 0;
    },
    currentContextProgress: (state) => {
      if (state.playback != null && state.context != null && state.context.tracks != null) {
        const items = state.context.tracks.items as Array<SpotifyApi.TrackObjectSimplified>;
        const index = items.findIndex((track) => track.id === state.playback.track_window.current_track.id);
        return (
          items.slice(0, index).reduce<number>((duration, { duration_ms: durationMs }) => duration + durationMs, 0) +
          state.playback.position
        );
      }
      return 0;
    },
  },
});

export default useCurrentPlaybackStore;
