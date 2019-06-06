import Vue from 'vue';
import Vuex from 'vuex';
import global from './global';
import vuex from './vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global: global,
    vuex: vuex
  }
})
