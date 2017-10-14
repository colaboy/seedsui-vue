'user strict'
let state = {
  isLoading: false
}
const actions = {
  setIsLoading ({ commit }, value) {
    commit('storeIsLoading', value)
  }
}
const mutations = {
  storeIsLoading (state, value) {
    state.isLoading = value
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
