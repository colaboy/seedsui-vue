<template>
  <Dragrefresh className="scrollContainer" ref="refDrag" :topRefresh="onTopRefresh" :topComplete="onTopComplete" :bottomRefresh="onBottomRefresh" :bottomComplete="onBottomComplete">
    <ul class="list">
      <li class="list-li underline" style="padding-left:0;margin-left:12px;" v-for="(item,index) in list" :key="index">
        <div class="list-thumbnail" style="width:24px;height:30px;background-size:contain;">
          <span v-if="index>2">{{index+1}}</span>
        </div>
        <div class="list-avatar">
          <span v-if="item.face_url_small" :style="'background-image:url('+item.face_url_small+')'"></span>
        </div>
        <div class="list-container">
          <p class="list-title">{{item.name}}</p>
          <p class="list-font">{{item.dept_name}}</p>
        </div>
        <div class="app-score">{{item.total_score}}分</div>
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
      params.page = this.current // 当前页数(number)
      params.rows = this.limit // 每页行数(number)
      this.$http.reportcheckList(params).then(response => {
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
          this.current--
        }
      })
      .catch(err => {
        console.log('获取数据失败' + err)
        this.current--
      })
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/seedsui/styles/variables.less";
  .list-thumbnail{
    background-color: white;
  }
  .list-thumbnail span{
    font-weight: 500;
    font-size: 16px;
  }
  .list-li:nth-child(1) .list-thumbnail:nth-child(1){
    background-image: url('../../assets/images/1.png');
  }
  .list-li:nth-child(2) .list-thumbnail:nth-child(1){
    background-image: url('../../assets/images/2.png');
  }
  .list-li:nth-child(3) .list-thumbnail:nth-child(1){
    background-image: url('../../assets/images/3.png');
  }
  .list-title{
    color: #000;
  }
  .list-font {
    font-size: 12px;
    color:#808080;
  }
  .app-score{
    font-weight: 500;
    font-size: 16px;
  }
</style>
