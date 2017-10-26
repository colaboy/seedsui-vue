<template>
  <Dragrefresh className="scrollContainer" ref="refDrag" :topRefresh="onTopRefresh" :topComplete="onTopComplete" :bottomRefresh="onBottomRefresh" :bottomComplete="onBottomComplete">
    <ul class="list">
      <li class="list-li border-b" style="padding-left:0;margin-left:12px;" v-for="(item,index) in list" :key="index">
        {{item.name}}
      </li>
    </ul>
    <NoData :show="showNodata" text="暂无数据"></NoData>
  </Dragrefresh>
</template>
<script>
export default {
  name: 'List',
  props: {
    params: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      showNodata: false,
      max: 0,
      current: 1,
      limit: 10,
      list: []
    }
  },
  watch: {
    params: function (val, oldval) {
      console.log('params变化了')
      this.queryList()
    }
  },
  created () {
    this.queryList()
  },
  methods: {
    onTopRefresh () {
      console.log('头部刷新')
      this.queryList()
    },
    onTopComplete (e) {
      console.log('头部完成')
    },
    onBottomRefresh () {
      console.log('底部刷新')
      this.queryList(true)
    },
    onBottomComplete (e) {
      console.log('底部完成')
    },
    queryList (isNext) {
      // 第一页与下一页
      if (isNext) {
        this.current++
      } else {
        this.current = 1
      }
      var params = this.params
      params.current = this.current // 当前页数(number)
      params.limit = this.limit // 每页行数(number)
      this.$http.getMockData(params).then(response => {
        let result = response
        if (result.code === '1') {
          let data = result.data
          // 上一页下一页
          if (isNext) {
            this.list = this.list.concat(data)
          } else {
            this.list = data
          }
          // 如果是最后一页，则不发请求
          var isNoData = false
          if (data.length < this.limit) {
            isNoData = true
          }
          // 设置分页
          setTimeout(() => {
            this.$refs.refDrag.instance.setPagination(isNext, isNoData)
          }, 500)
          // 设置暂无数据
          if (this.list.length === 0) this.showNodata = true
          else this.showNodata = false
        } else {
          console.log('获取数据失败')
          setTimeout(() => {
            this.$refs.refDrag.instance.setPagination(isNext, true)
          }, 500)
          if (isNext) this.current--
        }
      })
      .catch(err => {
        console.log('获取数据失败' + err)
        setTimeout(() => {
          this.$refs.refDrag.instance.setPagination(isNext, true)
        }, 500)
        if (isNext) this.current--
      })
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../components/seedsui/seedsui-variables.less";
</style>
