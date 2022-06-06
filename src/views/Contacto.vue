<template>
  <div class="container-body">
    <div class="tarjeta-container">
      <!-- <h1 v-for="(valor,index) in store.curriculum" :key="index">{{valor.titulo}}</h1> -->

      <h6 class="cssprueba">
        {{
          store.curriculum[0] && store.curriculum[0].titulo
            ? store.curriculum[0].titulo
            : ""
        }}
      </h6>
      <br />
      <h6 class="cssprueba">
        {{
          store.curriculum[1] && store.curriculum[1].titulo
            ? store.curriculum[1].titulo
            : ""
        }}
      </h6>

      <div class="footer-tarjeta">github/rafajlpz</div>
    </div>
  </div>
</template>

<script setup>
//Importacion el store de Pinia o variables centralizada de nuestra app
import { useStoreDatosPersonales } from "@/store/datosPersonales.js";

const datos = useStoreDatosPersonales();
datos.setDatosCurriculum();

const store = useStoreDatosPersonales();
store.setDatosCurriculum();
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
.cssprueba{
  background-color: red;
  border: 1px solid black;
  font-size: 1rem;
}
</style>
