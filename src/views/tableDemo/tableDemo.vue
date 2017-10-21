<template>
  <Page>
    <Header>
      <Titlebar title="table"></Titlebar>
    </Header>
    <Container>
      <Sliver title="表格"/>
      <Table>
        <tbody>
          <tr>
            <th class="text-center"><input type="checkbox" class="input-checkbox" /></th>
            <th>姓名</th>
            <th>状态</th>
            <th>性别</th>
            <th>创建时间</th>
          </tr>
          <tr>
            <td class="text-center"><input type="checkbox" class="input-checkbox" /></td>
            <td>葛文</td>
            <td><Mark type="success" text="上班中"/></td>
            <td>女</td>
            <td>2015-04-18</td>
          </tr>
          <tr>
            <td class="text-center"><input type="checkbox" class="input-checkbox" /></td>
            <td>葛文</td>
            <td><Mark type="info" text="上班中"/></td>
            <td>女</td>
            <td>2015-04-18</td>
          </tr>
          <tr>
            <td class="text-center"><input type="checkbox" class="input-checkbox" /></td>
            <td>葛文</td>
            <td><Mark type="info" text="休假中"/></td>
            <td>女</td>
            <td>2015-04-18</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  </Page>
</template>

<script>
  export default {
    name: 'tableDemo'
  }
</script>

<style lang="less" scoped>
  @import "../../assets/seedsui/seedsui-variables.less";
</style>
