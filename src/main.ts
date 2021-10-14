import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Hua from './components/Hua.vue'
import Hua2 from './components/Hua2.vue'
 

const history=createWebHashHistory()
const router=createRouter({
  history,
  routes:[
    {path:'/',component:Hua},
    {path:'/2',component:Hua2}
  ]
})
const app=createApp(App)
app.use(router)
app.mount('#app')
