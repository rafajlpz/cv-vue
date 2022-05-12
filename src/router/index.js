import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/prueba',
    name: 'Prueba',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../components/Prueba.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
