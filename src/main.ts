import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory,createRouter} from 'vue-router'
import HomePage from './views/HomePage.vue'
import Doc from './views/Doc.vue'
 

const history=createWebHashHistory()
const router=createRouter({
  history,
  routes:[
    {path:'/',component:HomePage},
    {path:'/doc',component:Doc}
  ]
})
const app=createApp(App)
app.use(router)
app.mount('#app')
