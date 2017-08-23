
export default {
  setPlatform (context, value) {
    context.commit('setPlatform', value)
  },
  setOs (context, value) {
    context.commit('setOs', value)
  },
  setOsVersion (context, value) {
    context.commit('setOsVersion', value)
  }
}
