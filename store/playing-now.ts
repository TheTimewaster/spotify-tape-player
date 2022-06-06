import { defineStore } from "pinia";

export const useCurrentPlaybackStore = defineStore('playingNow', {
  state: (): { playback: Spotify.PlaybackState, context: SpotifyApi.AlbumObjectFull | SpotifyApi.PlaylistObjectFull } => ({
    playback: null,
    context: null
  }),

  getters: {
    hasPlayback: (state)=> state.playback != null,
    isPlaying: (state) => !state.playback.paused,
    hasCurrentTrack: (state) => state.playback.track_window.current_track != null,
    currentAlbum: (state) => state.playback.track_window.current_track.album,
    currentArtists: (state) => state.playback.track_window.current_track.artists.map(artist => artist.name).join(', '),
    currentTrack: (state) => state.playback.track_window.current_track,
    currentProgress: (state) => state.playback.position,
    currentDuration: (state) => state.playback.duration,
    currentContext: (state) => state.context,
  }
});

export default useCurrentPlaybackStore;