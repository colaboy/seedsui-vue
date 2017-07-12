<template>
<div>
  <header>
    <Titlebar title="Titlebar" back="true"></Titlebar>
  </header>
  <article>
    <div class="description">
        titlebar
    </div>
    <Titlebar title="左中右对齐，默认layout属性为lcr，若修改为空则左对齐">
      <div slot="left">
        <a class="titlebar-button" href="javascript:history.go(-1)">
            <i class="icon icon-arrowleft"></i>
        </a>
        <a class="titlebar-button">
            <i class="icon icon-close"></i>
        </a>
      </div>
      <div slot="right">
        <a class="titlebar-button">
            <i class="icon icon-rdoadd"></i>
        </a>
        <a class="titlebar-button">
            <i class="icon icon-search"></i>
        </a>
      </div>
    </Titlebar>
    <br/>
    <Titlebar title="左对齐" layout="">
      <div slot="left">
        <a class="titlebar-button" href="javascript:history.go(-1)">
            <i class="icon icon-arrowleft"></i>
        </a>
        <a class="titlebar-button">
            <i class="icon icon-close"></i>
        </a>
      </div>
      <div slot="right">
        <a class="titlebar-button">
            <i class="icon icon-rdoadd"></i>
        </a>
        <a class="titlebar-button">
            <i class="icon icon-search"></i>
        </a>
      </div>
    </Titlebar>
    <div class="description">
        titlebar reverse
    </div>
    <Titlebar titlebarClass="reverse" title="左中右对齐">
      <div slot="left">
        <a class="titlebar-button" href="javascript:history.go(-1)">
            <i class="icon icon-arrowleft"></i>
        </a>
        <a class="titlebar-button">
            <i class="icon icon-close"></i>
        </a>
      </div>
      <div slot="right">
        <a class="titlebar-button">
            <i class="icon icon-rdoadd"></i>
        </a>
        <a class="titlebar-button">
            <i class="icon icon-search"></i>
        </a>
      </div>
    </Titlebar>
    <br/>
    <Titlebar titlebarClass="reverse" title="左对齐" layout="">
      <div slot="left">
        <a class="titlebar-button" href="javascript:history.go(-1)">
            <i class="icon icon-arrowleft"></i>
        </a>
        <a class="titlebar-button">
            <i class="icon icon-close"></i>
        </a>
      </div>
      <div slot="right">
        <a class="titlebar-button">
            <i class="icon icon-rdoadd"></i>
        </a>
        <a class="titlebar-button">
            <i class="icon icon-search"></i>
        </a>
      </div>
    </Titlebar>
  </article>
</div>
</template>

<script>
export default {
  name: 'TitlebarDemo',
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/styles/variables.less";
  .description{
      color: #9e9e9e;
      text-align: center;
      height: 32px;
      line-height: 32px;
  }  
</style>
