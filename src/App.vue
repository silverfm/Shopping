<template>
  <div>
    <router-view></router-view>
    <MainTabBar />
  </div>
</template>

<style lang="less">
</style>

<script>
import MainTabBar from 'components/tabbar/MainTabBar'
export default {
  components: {
    MainTabBar,
  }
}
</script>
