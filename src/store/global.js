import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    loader: false
  },
  mutations: {
    setLoader(state, val) {
      state.loader = val
    }
  },
  getters: {
    getLoader(state) {
      return state.loader;
    }
  }
};
