'user strict'
let state = {
  isBack: false
}
const actions = {
  setIsBack ({ commit }, arg) {
    commit('storeIsBack', arg)
  }
}
const mutations = {
  storeIsBack: (state, arg) => {
    state.isBack = arg
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
