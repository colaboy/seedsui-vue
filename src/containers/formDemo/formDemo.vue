<template>
<Page>
  <Header>
    <Titlebar title="form"></Titlebar>
  </Header>
  <Container>
      <Switch1 :change="onSwitchChange1"/>
      <Switch1 :on="{text:'',value:'1'}" :off="{text:'',value:'0'}" :change="onSwitchChange2"/>
      <Switch1 theme="reverse" :change="onSwitchChange3"/>
      <Switch1 theme="reverse" :on="{text:'',value:'1'}" :off="{text:'',value:'0'}" :change="onSwitchChange4"/>
      <Turn :change="onTurnChange"/>
      <NumBox :decimal="true" :digits="2" :value="0" :max="100" :change="onNumBoxChange"/>
      <Radio name="rdo"/>
      <Checkbox name="cbo"/>
      <InputPre :change="onPreChange" placeholder="自增高控件"/>
      <InputSearch :change="onSearchChange" :submit="onSearchSubmit"/>
      <Range css="margin:10px 12px;" :min="1" :max="100" :value="50" :change="onRangeChange"/>
  </Container>
</Page>
</template>

<script>
export default {
  name: 'FormDemo',
  data () {
    return {
    }
  },
  methods: {
    onSwitchChange1 (value) {
      console.log(value)
    },
    onSwitchChange2 (value) {
      console.log(value)
    },
    onSwitchChange3 (value) {
      console.log(value)
    },
    onSwitchChange4 (value) {
      console.log(value)
    },
    onTurnChange (value) {
      console.log(value)
    },
    onNumBoxChange (value) {
      console.log(value)
    },
    onPreChange (value) {
      console.log(value)
    },
    onSearchChange (value) {
      console.log(value)
    },
    onSearchSubmit (value) {
      console.log(value)
    },
    onRangeChange (value) {
      console.log(value)
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../components/seedsui/core/seedsui-variables.less";
</style>
