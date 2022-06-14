<template>
  <mi-menu :correo="store.getEmailUser"></mi-menu>
  <router-view />
  <mi-footer></mi-footer>

</template>

<style>
/* Reseteo */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  height: 100vh;
  /* margin-bottom: 10rem; */
}

body {
  font-size: 1.1rem;
  margin-top: 4.5rem;
  background: url(./assets/photography-paper-21.jpg);
}
</style>
<script setup>
import MiMenu from "./components/MiMenu.vue";
import MiFooter from "./components/MiFooter.vue";
import {useStoreUsers} from './store/users'

//Inicializar store
const store = useStoreUsers();
store.logged();
</script>
