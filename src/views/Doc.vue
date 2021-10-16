<template>
  <Topnav />
  <div class="topnav">
    <div class="logo"></div>
    <div class="menu"></div>
  </div>
  <div class="content">
    <aside v-if="asideVisible">
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/button">Button 按钮</router-link>
        </li>
        <li>
          <router-link to="/doc/switch">Switch 开关</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 对话框</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 标签页</router-link>
        </li>
      </ol>
    </aside>
    <main>
    <router-view/> 
    </main>

  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
import { inject, Ref, } from 'vue'
export default {
  components: {
    Topnav
  },
    setup(){
const asideVisible = inject<Ref<boolean>>('asideVisible')
    return{asideVisible}
  }

}
</script>
<style lang="scss" scoped>
aside {
  background: lightcyan;
  width: 150px;
  height: 200px;
  padding: 16px;
  > h2 {
    margin: 2px 0;
  }
  > ol > li {
    padding: 4px 0;
  }
}
main{
  
}
</style>