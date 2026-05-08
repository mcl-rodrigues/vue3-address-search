import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import AddressesView from '../views/Addresses.vue'
import AboutView from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/enderecos',
    name: 'addresses',
    component: AddressesView,
  },
  {
    path: '/enderecos/editar/:id',
    name: 'edit-address',
    component: HomeView,
  },
  {
    path: '/sobre',
    name: 'about',
    component: AboutView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
