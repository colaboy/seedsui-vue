import Device from '@/assets/scripts/device.js'
export default {
  setIsWeixin (context) {
    /* var ua = navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) === 'micromessenger') {
      this.$store.commit('setIsWeixin', true)
    } */
    if (Device.isWeixin) {
      context.commit('setIsWeixin', true)
    }
  },
  setIsAndroid (context) {
    if (Device.isAndroid) {
      context.commit('setIsAndroid', true)
    }
  },
  setIsBadAndroid (context) {
    /* var ua = navigator.userAgent.toLowerCase()
    var androidPattern = /android\s*(\d*\.*\d*)/i
    var androidVersion = androidPattern.exec(ua)?androidPattern.exec(ua)[1]:''
    if (androidVersion && androidVersion < 5) {
      this.$store.commit('setIsBadAndroid', true)
    } */
    var androidVersion = Device.androidVer
    if (androidVersion && androidVersion < 5) {
      context.commit('setIsBadAndroid', true)
    }
  },
  setIsIos (context) {
    /* var isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) */
    if (Device.isIos) {
      this.$store.commit('setIsIos', true)
    }
    context.commit('setIsIos', true)
  }
}
