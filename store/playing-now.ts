import { defineStore } from "pinia";

export const useCurrentPlaybackStore = defineStore('playingNow', {
  state: (): { currentPlayback: SpotifyApi.CurrentPlaybackResponse } => ({
    currentPlayback: null
  }),

  actions: {
    async getCurrentPlayback() {
      const currentPlayback = await this.$nuxt.$spotify.getMyCurrentPlaybackState()
      this.currentPlayback = currentPlayback;
    }
  },

  getters: {
    hasPlayback: (state) => state.currentPlayback != null,
    isPlaying: (state) => state.currentPlayback.is_playing,
    currentAlbum: (state) => state.currentPlayback.item.album,
    currentArtists: (state) => state.currentPlayback.item.artists.map(artist => artist.name).join(', '),
    currentTrack: (state) => state.currentPlayback.item,
    currentContext: (state) => state.currentPlayback.context,
    currentProgress: (state) => state.currentPlayback.progress_ms,
  }
});

export default useCurrentPlaybackStore;