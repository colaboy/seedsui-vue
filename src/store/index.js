import Vue from 'vue'
import Vuex from 'vuex'
import system from './modules/system'
import router from './modules/router'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    system,
    router
  },
  strict: process.env.NODE_ENV !== 'production'
})
