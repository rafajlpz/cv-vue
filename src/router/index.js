import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      title: 'Inicio'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
    }
  },
  {
    path: '/vistaperfil',
    name: 'vistaperfil',
    meta:{
      title: 'Cargar foto perfil'
    },
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/PerfilView.vue')
    }
  }
]


  
  const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//Saber
router.beforeEach((to, from, next) =>{
  window.document.title = to.meta.title;
  next()
});

export default router
