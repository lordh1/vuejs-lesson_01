import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Form from './components/Form/Form.vue'
import Components from './components/Components/Components.vue'
import ComputedPropertiesWatchers from './components/ComputedPropertiesWatchers/ComputedPropertiesWatchers'
import Vuex from './components/Vuex/Vuex'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/views',
      name: 'views',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Views.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: Components
    },
    {
      path: '/computed_properties_watchers',
      name: 'computed_properties_watchers',
      component: ComputedPropertiesWatchers
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: Vuex
    }
  ]
})
