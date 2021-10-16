<template>
  <Topnav />
  <div class="banner">
    <h1>荔枝UI</h1>
    <h2>一个基于Vue3和TypeScript的UI框架</h2>
    <span class="actions">
      <a href="https://github.com/excellent-liutong/litchi-ui">GitHub</a>
      <router-link to="/doc" >开始</router-link >
    </span>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'

export default {
  components: {
    Topnav
  }
}
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightblue;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: white;
      display: inline-block;
      $h:28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>