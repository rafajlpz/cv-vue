<template>
  <nav class="main-menu">
    <router-link to="/">Sobre mi</router-link>

    |

    <router-link to="/about">Contacto</router-link>

    |

    <router-link to="/about">Random</router-link>

    |
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
  border: 1px solid black;
  background-color: aqua;
  display: flex;
}
.main-menu a {
  display: block;
  text-decoration: none;
  padding: .5em;
  color: white;
  
}
.main-menu a:hover{
  background-color: #0a4f7f;
  border-color:#0a4f7f ;
}
</style>
