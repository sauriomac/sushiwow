import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'sushiwow'
    }
  },
  {
    path: '/cartList',
    name: 'CartList',
    component: () => import('../views/CartList.vue')
  },
  {
    path: '/Philadelphia',
    name: 'sushi1',
    component: () => import('../components/Sushi1.vue'),
    meta:{
      title:'Philadelphia'
    }
  },
  {
    path: '/Kaliforniya',
    name: 'sushi2',
    component: () => import('../components/Sushi2.vue')
  },
  {
    path: '/Sushi3',
    name: 'sushi3',
    component: () => import('../components/Sushi3.vue')
  },
  {
    path: '/Sushi4',
    name: 'sushi4',
    
    component: () => import('../components/Sushi4.vue')
  },
  {
    path: '/Sushi5',
    name: 'sushi5',
    component: () => import('../components/Sushi5.vue')
  },
  {
    path: '/Sushi6',
    name: 'Sushi6',
    component: () => import('../components/Sushi6.vue')
  },
  {
    path: '/Sushi7',
    name: 'Sushi7',
    component: () => import('../components/Sushi7.vue')
  },
  {
    path: '/Sushi8',
    name: 'Sushi8',
    component: () => import('../components/Sushi8.vue')
  },
  {
    path: '/Sushi9',
    name: 'Sushi9',
    component: () => import('../components/Sushi9.vue')
  },
  {
    path: '/ProductDetail',
    name: 'ProductDetail',
    component: () => import('../components/ProductDetail.vue')
  },
  {
    path: '/Checkout',
    name: '/Checkout',
    component: () => import('../components/Checkout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
