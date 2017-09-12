import Vue from 'vue'
import Vuex from 'vuex'
import system from './modules/system'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    system
  },
  strict: process.env.NODE_ENV !== 'production'
})
