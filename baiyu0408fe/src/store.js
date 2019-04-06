import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    'TOGGLE_LOADING_STATE' (state) {
      state.loading = !state.loading
    }
  },
  actions: {
    toggleLoadingState ({ commit }) {
      commit('TOGGLE_LOADING_STATE')
    }
  }
})
