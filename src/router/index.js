import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Block from '../components/Block.vue'
import Address from '../components/Address.vue'
import Tx from '../components/Tx.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/block/:height/',
    name: 'Block',
    component: Block
  },
  {
    path: '/tx/:hash/',
    name: 'Tx',
    component: Tx
  },
  {
    path: '/address/:address/',
    name: 'Address',
    component: Address
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
