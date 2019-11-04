import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/css/global.css'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
routes: [
  { path: '/button', component: () => import('./pages/button')},
  { path: '/icon', component: () => import('./pages/icon')},
  { path: '/info', component: () => import('./pages/info')},
  { path: '/menu', component: () => import('./pages/menu')},
  { path: '/modal', component: () => import('./pages/modal')},
]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
