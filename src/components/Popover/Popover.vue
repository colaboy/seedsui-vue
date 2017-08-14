<template>
  <div class="popover">
		<ul>
			<li class="underline" v-for="(item, index) in list" :key="index" @click.stop.prevent="item.click">
        <i v-if="item.icon" :class="'icon '+item.icon"></i>
				<label v-if="item.text">{{item.text}}</label>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
  name: 'Popover',
  props: {
    list: {
      type: Array,
      default: function () {
        return [{
          icon: '',
          text: '',
          click: function () { }
        }]
      }
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../assets/styles/variables.less";
  .popover li:nth-of-type(1) .icon {
    color: #32a6f8;
  }

  .popover li:nth-of-type(2) .icon {
    color: #19cbc1;
  }

  .popover li:nth-of-type(3) .icon {
    color: #fe721e;
  }

  .popover li:nth-of-type(4) .icon {
    color: #a46ef6;
  }

  .popover li:nth-of-type(5) .icon {
    color: #ff5656;
  }
</style>
