<template>
  <nav class="main-menu">
    <router-link to="/">Sobre mi</router-link>

    

    <router-link to="/about">Contacto</router-link>

    

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
  /* border: 1px solid black; */
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 159, 1),
    rgba(240, 255, 0, 1)
  );
  display: flex;

  align-items: center;
  justify-content: center;

  box-shadow: 0 0 10px black;

}
.main-menu a {
  text-decoration: none;
  padding: 0.8em;
  color: black;
  
}

.main-menu a:hover {
  
  background-color: rgb(252, 252, 252);
  box-shadow: rgb(0 0 0 / 30%) 0px 0px 2px, rgb(231 238 236) 0px 0px 0px 0.75px;
}


</style>


