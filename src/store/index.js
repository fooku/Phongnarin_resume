import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    anime: 'a'
  },
  mutations: {
    UPDATE_ANIME(state, value) {
      state.anime = value
    }
  },
  actions: {
    updateAnime({ commit }, value) {
      commit('UPDATE_ANIME', value)
    }
  },
  modules: {}
})
