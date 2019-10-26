import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Home.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/components/Contact.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/components/Profile.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('@/components/Team.vue')
    },
    {
      path: '/produk',
      name: 'produk',
      component: () => import('@/components/ProdukJasa.vue')
    },
    {
      path: '/berita',
      name: 'berita',
      component: () => import('@/components/Berita.vue')
    },
    {
      path: '/rekanan',
      name: 'rekanan',
      component: () => import('@/components/Rekanan.vue')
    }
  ]
})
