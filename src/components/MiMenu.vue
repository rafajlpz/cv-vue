<template>
  <nav class="main-menu">
    <router-link to="/">
    Curriculum</router-link>
    <router-link to="/contacto">Ficha</router-link>
    <router-link to="/about">Random</router-link>
    <span class="correo">{{correo}}</span> 
    
   
  </nav>
</template>

<script setup>


defineProps({
  correo:{
    type: String,
    default: ""
  }
})
  
</script>

<style>

.main-menu {
  display: flex;
  height: fit-content;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;

  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 1.15rem;

  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 159, 1),
    rgba(240, 255, 0, 1)
  );
  
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0.8em black;

}
.main-menu a {
  text-decoration: none;
  padding: 0.85em;
  color: black;
  
}

.main-menu a:hover {
  
  background-color: rgb(252, 252, 252);
  box-shadow: rgb(0 0 0 / 30%) 0 0 2px, rgb(231 238 236) 0 0 0 0.75px;
}

.correo{
  font-size: 0.9rem;
  color: white;
  background-color: green;
  border: 1px solid white;
  border-radius: 4px;
  padding: 0.2rem;
}


</style>