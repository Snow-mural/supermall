<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>


<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    display:flex;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #f6f6f6;
    height: 49px;
    box-shadow: 0px -2px 2px rgba(100, 100, 100, .1);
  }

  
</style>