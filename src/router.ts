import { createWebHashHistory, createRouter } from 'vue-router'
import HomePage from './views/HomePage.vue'
import Doc from './views/Doc.vue'
import ButtonVue from './views/Button.vue'
import TabsVue from './views/Tabs.vue'
import DialogVue from './views/Dialog.vue'
import SwitchVue from './views/Switch.vue'
import DocDemoVue from './views/DocDemo.vue'


const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: HomePage },
    {
      path: '/doc', component: Doc, children: [
        {
          path: '', component: DocDemoVue
        }, {
        path: 'button', component: ButtonVue
      }, {
        path: 'tabs', component: TabsVue
      }, {
        path: 'dialog', component: DialogVue
      }, {
        path: 'switch', component: SwitchVue
      }]
    },
  ]
})