<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data() {
      return {
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive? {color: this.activeColor} : {}
      }
    },
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 5px;
    margin-bottom: 3px;
  }

  .active {
    color: red;
  }
</style>