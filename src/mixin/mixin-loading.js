// 设置store设备返回按键
import { mapState } from 'vuex'

var mixinLoading = {
  computed: mapState({
    isLoading: state => state.loading.isLoading
  })
}

export default mixinLoading
