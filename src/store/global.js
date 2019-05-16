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
  },
  actions: {
    async apiGetCars(context) {
      let options = {
        method: 'GET'
      };

      try {
        const request = await fetch("http://bookingcars.cypel.pl:8080/car/find", options);
        const data = await request.json();
        console.log(data);
        await context.commit('setCars', data);
      }
      catch (err) {
        alert(err);
      }

    }
  }
};
