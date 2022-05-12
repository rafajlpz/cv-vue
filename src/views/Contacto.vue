<template>
  <div class="container-body">
    <div class="tarjeta-container">
      <h1></h1>
      
          <div class="footer-tarjeta" >github/rafajlpz</div>
      </div>
    </div>
  
</template>

<script setup>
import { ref } from "vue";

let datos = ref({});

const obtenerDatos = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/rafajlpz/lectura-json/main/datos.json"
    );
    datos.value = await response.json();
    console.log(datos.value);
  } catch (error) {
    console.log(error, "Hay un error del fetch aqui");
  }
};
obtenerDatos();
</script>

<style>
.container-body {
  display: flex;
}
.tarjeta-container {
  display: flex;
  flex-direction: column;

  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 0.7rem;
  margin: auto;
  width: 25rem;
  height: 30rem;

  border-radius: 0.75rem;

  background-color: rgba(8, 8, 8, 0.747);
  box-shadow: 1.1em 1.2em 1.5em rgba(151, 140, 140, 0.5);
}
.footer-tarjeta {
    

    display: flex;
    height: 25%;
    background-color: rgba(216, 118, 37, 0.671);
    margin-top: auto;
    justify-content: center;
    align-items: center;
    
   
  
}
</style>
