<template>
  <div class="topnav">
    <div class="toggleButton" @click="toggleAside">
      <img src="../assets/icon_list.png" />
    </div>

    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" />
      </router-link>
    </div>

    <ul class="menu">
      <li>
        <router-link to="/">主页</router-link>
      </li>
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    return { toggleAside }
  },
}
</script>

<style lang="scss" scoped>
 img {
      height: 3em;
      width: 3em;
    }
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  >.logo {
    max-width: 6em;
    margin: auto;
    margin-left: 2em;
    > img {
      height: 3em;
      width: 3em;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: auto 1em;
    }
  }
  > .toggleButton {
    img {
      width: 24px;
      height: 24px;
    }
    display: none;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: auto;
    }
    > .toggleButton {
      display: flex;
    }
  }
}
</style>