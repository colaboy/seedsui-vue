'user strict'
let state = {
  platform: '',
  os: 'ios',
  osVersion: '0.0'
}
const actions = {
  setPlatform ({ commit }, arg) {
    commit('storePlatform', arg)
  },
  setOs ({ commit }, arg) {
    commit('storeOs', arg)
  },
  setOsVersion ({ commit }, arg) {
    commit('storeOsVersion', arg)
  }
}
const mutations = {
  storePlatform: (state, arg) => {
    state.platform = arg
  },
  storeOs: (state, arg) => {
    state.os = arg
  },
  storeOsVersion: (state, arg) => {
    state.osVersion = arg
  }
}
const getters = {
}
export default {
  state,
  getters,
  actions,
  mutations
}
