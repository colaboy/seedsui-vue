export default {
  setIsWeixin (context) {
    var ua = navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) === 'micromessenger') {
      this.$store.commit('setIsWeixin', true)
    }
  }
}
