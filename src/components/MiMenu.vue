<template>
  <nav class="main-menu">
    <router-link to="/">Sobre mi</router-link>
    <router-link to="/contacto">Contacto</router-link>
    <router-link to="/about">Random</router-link>    
  </nav>
</template>

<script></script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-menu {
  display: flex;
  height: fit-content;

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


</style>


