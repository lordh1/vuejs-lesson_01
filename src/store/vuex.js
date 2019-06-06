import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    cars: []
  },
  mutations: {
    setCars(state, val) {
      state.cars = val;
    }
  },
  actions: {
    async apiGetCars(context) {
      let options = {
        method: 'GET'
      };

      try {
        context.commit('global/setLoader', true, { root: true });
        const request = await fetch("http://bookingcars.cypel.pl:8080/car/find", options);
        const data = await request.json();
        console.log(data);
        await context.commit('setCars', data);
        context.commit('global/setLoader', false, { root: true });
      }
      catch (err) {
        alert(err);
      }

    }
  }
};
