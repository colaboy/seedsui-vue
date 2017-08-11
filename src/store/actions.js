import Device from '@/utils/device.js'
export default {
  setPlatform (context) {
    context.commit('setPlatform', Device.platform)
  },
  setOs (context) {
    context.commit('setOs', Device.os)
  },
  setOsVersion (context) {
    context.commit('setOsVersion', Device.osVersion)
  }
}
