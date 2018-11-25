import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    }
  ]
})
