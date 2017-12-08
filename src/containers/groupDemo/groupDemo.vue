<template>
<Page>
  <Header>
    <Titlebar title="group"/>
  </Header>
  <Container>
      <Group title="带标题">
        <ul class="list">
          <li class="list-li border-b" style="padding:8px;"><p>内容内容</p></li>
          <li class="list-li border-b" style="padding:8px;"><p>内容内容</p></li>
          <li class="list-li border-b" style="padding:8px;"><p>内容内容</p></li>
          <li style="padding:8px;"><p>内容内容</p></li>
        </ul>
      </Group>
      <Group>
        <ul class="list">
          <li class="list-li border-b" style="padding:8px;"><p>内容内容</p></li>
          <li class="list-li border-b" style="padding:8px;"><p>内容内容</p></li>
          <li class="list-li border-b" style="padding:8px;"><p>内容内容</p></li>
          <li style="padding:8px;"><p>内容内容</p></li>
        </ul>
      </Group>
  </Container>
</Page>
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
  @import "../../components/seedsui/core/seedsui-variables.less";
</style>
