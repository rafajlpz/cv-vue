<template>
  <mi-menu></mi-menu>
  <router-view/>
  <mi-footer></mi-footer>
</template>

<style>
/* Reseteo */
*,
*::before,
*::after{
  box-sizing: border-box;
}


#app{
  display: grid;
  /* auto lo que necesita, 1fr estira todo lo que pueda, y el auto lo mismo que el primero */
  grid-template-rows: auto 1fr auto; 
  
  

  padding: 0;
  margin: 0;
  min-height: 100vh;


}
</style>
<script setup>
import MiMenu from './components/MiMenu.vue';
import MiFooter from './components/MiFooter.vue';

</script>

