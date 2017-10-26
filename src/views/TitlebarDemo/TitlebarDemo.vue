<template>
<Page>
  <Header>
    <Titlebar title="Titlebar" />
  </Header>
  <Container>
    <div class="description">
        titlebar
    </div>
    <Titlebar title="左右图标" :lBtn="[{icon:'icon-arrowleft',click:onClickBack}]" :rBtn="[{icon:'icon-hook',click:onClickSubmit}]"/>
    <br/>
    <Titlebar title="左右文字" :lBtn="[{icon:'icon-arrowleft',text:'返回',click:onClickBack}]" :rBtn="[{icon:'icon-search',text:'搜索',click:onClickSubmit}]"/>
    <br/>
    <Titlebar title="多图标" :lBtn="[{icon:'icon-arrowleft',click:onClickBack}]" :rBtn="[{icon:'icon-search',click:onClickBtn1},{icon:'icon-hook',click:onClickBtn2}]"/>
    <div class="description">
        titlebar reverse
    </div>
    <Titlebar theme="reverse" title="左右图标" :lBtn="[{icon:'icon-arrowleft',click:onClickBack}]" :rBtn="[{icon:'icon-hook',click:onClickSubmit}]"/>
    <br/>
    <Titlebar theme="reverse" title="左对文字" :lBtn="[{icon:'icon-arrowleft',text:'返回',click:onClickBack}]" :rBtn="[{icon:'icon-search',text:'搜索',click:onClickSubmit}]"/>
    <br/>
    <Titlebar theme="reverse" title="多图标" :lBtn="[{icon:'icon-arrowleft',click:onClickBack}]" :rBtn="[{icon:'icon-search',click:onClickBtn1},{icon:'icon-hook',click:onClickBtn2}]"/>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'TitlebarDemo',
  methods: {
    onClickBack () {
      console.log('返回')
    },
    onClickSubmit () {
      console.log('确定')
    },
    onClickBtn1 () {
      console.log('1')
    },
    onClickBtn2 () {
      console.log('2')
    }
  },
  data () {
    return {
      msg: 'test'
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../components/seedsui/seedsui-variables.less";
  .description{
      color: #9e9e9e;
      text-align: center;
      height: 32px;
      line-height: 32px;
  }  
</style>
