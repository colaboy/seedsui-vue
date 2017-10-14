import Vue from 'vue'
import Vuex from 'vuex'
import system from './modules/store-system'
import router from './modules/store-router'
import loading from './modules/store-loading'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    system,
    router,
    loading
  },
  strict: process.env.NODE_ENV !== 'production'
})
