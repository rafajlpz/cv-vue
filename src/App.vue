<template>
  <mi-menu></mi-menu>
  <router-view />
  <mi-footer></mi-footer>

</template>

<style>
/* Reseteo */
*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  display: grid;
  /* auto lo que necesita, 1fr estira todo lo que pueda, y el auto lo mismo que el primero */
  grid-template-rows: 1fr auto;

  padding: 0;
  margin: 0;
  min-height: 100vh;
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
