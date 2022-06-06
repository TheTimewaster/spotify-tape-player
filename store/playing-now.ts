import { defineStore } from "pinia";

export const useCurrentPlaybackStore = defineStore('playingNow', {
  state: (): { currentPlayback: Spotify.PlaybackState } => ({
    currentPlayback: null
  }),

  getters: {
    hasPlayback: (state) => state.currentPlayback != null,
    isPlaying: (state) => !state.currentPlayback.paused,
    currentAlbum: (state) => state.currentPlayback.track_window.current_track.album,
    currentArtists: (state) => state.currentPlayback.track_window.current_track.artists.map(artist => artist.name).join(', '),
    currentTrack: (state) => state.currentPlayback.track_window.current_track,
    currentContext: (state) => state.currentPlayback.context,
    currentProgress: (state) => state.currentPlayback.position,
    currentDuration: (state) => state.currentPlayback.duration,
  }
});

export default useCurrentPlaybackStore;