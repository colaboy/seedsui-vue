<template>
<div>
  <header>
    <Titlebar title="group"/>
  </header>
  <article>
      <Group title="带标题">
        <ul class="list">
          <li class="list-li underline" style="padding:8px;"><p>内容内容</p></li>
          <li class="list-li underline" style="padding:8px;"><p>内容内容</p></li>
          <li class="list-li underline" style="padding:8px;"><p>内容内容</p></li>
          <li style="padding:8px;"><p>内容内容</p></li>
        </ul>
      </Group>
      <Group>
        <ul class="list">
          <li class="list-li underline" style="padding:8px;"><p>内容内容</p></li>
          <li class="list-li underline" style="padding:8px;"><p>内容内容</p></li>
          <li class="list-li underline" style="padding:8px;"><p>内容内容</p></li>
          <li style="padding:8px;"><p>内容内容</p></li>
        </ul>
      </Group>
  </article>
</div>
</template>

<script>
export default {
  name: 'GroupDemo',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/seedsui/styles/variables.less";
</style>
