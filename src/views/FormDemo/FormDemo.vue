<template>
<div class="page">
  <header class="header">
    <Titlebar title="form" back="true"></Titlebar>
  </header>
  <article class="container">
      <Switch1 :change="onSwitchChange1"/>
      <Switch1 :on="{text:'',value:'1'}" :off="{text:'',value:'0'}" :change="onSwitchChange2"/>
      <Switch1 theme="reverse" :change="onSwitchChange3"/>
      <Switch1 theme="reverse" :on="{text:'',value:'1'}" :off="{text:'',value:'0'}" :change="onSwitchChange4"/>
      <Turn :change="onTurnChange"/>
      <NumBox :change="onNumBoxChange"/>
      <InputPre :change="onPreChange"/>
      <InputSearch :change="onSearchChange" :submit="onSearchSubmit"/>
  </article>
</div>
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
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/seedsui/styles/variables.less";
</style>
