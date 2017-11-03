'user strict'
let state = {
  platform: '',
  os: 'ios',
  osVersion: '0.0',
  onLine: true
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
  },
  setOnLine ({ commit }, arg) {
    commit('storeOnLine', arg)
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
  },
  storeOnLine: (state, arg) => {
    state.onLine = arg
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
