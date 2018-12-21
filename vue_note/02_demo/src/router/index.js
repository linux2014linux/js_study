import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Home from '@/pages/Home'
import DashBoard from '@/pages/DashBoard'
import DemoTable from '@/pages/DemoTable'
import SystemSetting from '@/pages/SystemSetting'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/table',
      name: 'DemoTable',
      component: DemoTable
    },
    {
      path: '/setting',
      name: 'SystemSetting',
      component: SystemSetting
    }
  ]
})
