<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
@import "~assets/less/base.less";

#tab-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -2px 1px rgba(100,100,100, 0.1);
}
</style>

