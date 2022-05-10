<template>
  <mi-menu></mi-menu>
  <router-view/>
  <mi-footer></mi-footer>
</template>

<style>
#app{
  display: grid;
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

