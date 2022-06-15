<template>
  <div class="contenido">
    <article class="carta">
      <div class="carta_contenido">
        <h3 class="carta_titulo">Ficha 1</h3>
        <span class="carta_subtitulo">Area programacion</span>
        <p class="carta_descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ut?</p>
      </div>
    </article>
  </div>

  <!-- <div class="container-body">
    <div class="tarjeta-container">
    

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
  <img :src="url" alt="Alpaquita">
  </div> -->
</template>

<script setup>
//Importacion el store de Pinia o variables centralizada de nuestra app
// import { getStorage } from  "@firebase/storage";

// import {ref, getDownloadURL} from "@firebase/storage";

import { useStoreDatosPersonales } from "@/store/datosPersonales.js";
import { getURL } from "@/hook/firebase.cloud";
import { ref } from "vue";

const url = ref("");

const datos = useStoreDatosPersonales();
datos.setDatosCurriculum();

const store = useStoreDatosPersonales();
store.setDatosCurriculum();

(async () => {
  try {
    url.value = await getURL();
  } catch (error) {
    alert(error.message);
  }
})();
</script>

<style>
.contenido{
   display:flex; 
   justify-content: center; 
   align-items: center; 
}
.carta {
  position: relative;
  width: 250px;
  height: 250px;
  color: #a18a96;
  background: url(../assets/avatar2.svg);
  background-size: cover;
  border-radius: 20px;
  overflow: hidden;
}
.carta_contenido {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-top-left-radius: 20px;
  transform: translateY(70px);
  transition: transform 0.25s;
}
.carta_contenido::before {
  content: '';
  position: absolute;
  top: -47px;
  right: -45px;
  width: 100px;
  height: 100px;
  transform: rotate(-175deg);
  border-radius: 50%;
  box-shadow: inset 48px 48px #fff;
}

.carta_titulo {
  color: #6a515e;
  line-height: 15px;
  
}
.carta_subtitulo {
  display: block;
  font-size: 12px;
  margin-bottom: 10px;
}
.carta_descripcion {
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.5s;
}
.carta:hover .carta_contenido {
  transform: translateY(0);
}
.carta:hover .carta_descripcion {
  opacity: 1;
  transition-delay: 0.25s;
}

/* .container-body {
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
.cssprueba {
  background-color: red;
  border: 1px solid black;
  font-size: 1rem;
} */
</style>
