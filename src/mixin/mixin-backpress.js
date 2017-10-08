// 设置store设备返回按键
import bridge from '@/bridge'
import { mapState, mapActions } from 'vuex'

var mixinBackPress = {
  computed: mapState({
    isBack: state => state.router.isBack
  }),
  methods: {
    ...mapActions([
      'setIsBack'
    ]),
    onPopState () {
      console.log('返回')
      this.setIsBack(true)
    }
  },
  mounted () {
    window.addEventListener('popstate', this.onPopState, false)
  },
  watch: {
    '$route' (to, from) {
      if (this.isBack) {
        console.log('前进')
        this.setIsBack(false)
      }
      // 如果是首页，则物理返回
      if (to.name === 'home') {
        // 绑定返回按键
        bridge.onBack(function () {
          bridge.closeWindow()
        })
      }
    }
  }
}

export default mixinBackPress
