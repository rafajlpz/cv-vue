<template>
  <nav>
  <MiMenu/>
  </nav>
  <router-view/>
  <mis-datos></mis-datos>
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

</script>

