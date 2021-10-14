<template>
  <div class="topnav">
    <div class="logo">logo</div>
    <ul class="menu">
      <li>菜单一</li>
      <li>菜单二</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>