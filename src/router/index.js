import Vue from 'vue'
import Router from 'vue-router'
const index = () => import('../pages/index')
//随机粒子
const randomParticle = () => import('../pages/randomParticle')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/particle',
      name: '随机粒子',
      component: randomParticle
    },
  ]
})
