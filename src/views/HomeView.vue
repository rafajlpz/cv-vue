<template>
  <div v-if="loading" class="main-home">
    <div class="sobremi">
      <div class="imagen-description">
        <h2>Sobre mi</h2>

        <img src="../assets/alpaquita.jpg" alt="" />
        <h4 class="nombre">{{ data.Nombre }}</h4>

        <p>
          {{ data.Descripcion.Sobremi }}
        </p>
      </div>
    </div>

    <div class="lenguajes">
      <div class="description-texto1">
        <h2>{{ data.Programacion.front }}</h2>
        <div class="experiencias">
          <div class="caja-iconos">
            <li><img src="../assets/icons8-html-5-48.png" alt="html5" /></li>
            <li><img src="../assets/icons8-css3-48.png" alt="css3" /></li>
            <li>
              <img src="../assets/icons8-javascript-48.png" alt="javascript" />
            </li>
            <li><img src="../assets/icons8-vue-js-48.png" alt="vue" /></li>
            <li><img src="../assets/icons8-git-48.png" alt="git" /></li>
          </div>
          <p class="exp1">
            {{ data.Descripcion.FrontDescripcion }}
          </p>
        </div>
      </div>
    </div>

    <div class="laboral">
      <div class="description-texto2">
        <h2>Experiencia laboral</h2>
        <div class="experiencias">
          <li>{{ data.Experiencia.Exp1 }}</li>
          <li>{{ data.Experiencia.Exp2 }}</li>
        </div>
      </div>
    </div>

    <div class="formacion">
      <div class="description-texto2">
        <h2>Formacion</h2>
        <ul class="titulos">
          <li>
            {{
              store.curriculum[0] && store.curriculum[0].titulo
                ? store.curriculum[0].titulo
                : ""
            }}
          </li>
          <li>
            {{
              store.curriculum[1] && store.curriculum[1].titulo
                ? store.curriculum[1].titulo
                : ""
            }}
          </li>
          <li>{{ data.Formacion.Titulo4 }}</li>
          <li>{{ data.Formacion.Titulo2 }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>

.main-home {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.5rem;

  max-width: 62.5rem;
  height: 100vh;
  /* margin-bottom: 1rem; */

  -webkit-box-shadow: 44px 29px 23px 6px rgba(161, 156, 161, 0.62);
  -moz-box-shadow: 44px 29px 23px 6px rgba(161, 156, 161, 0.62);
  box-shadow: 44px 29px 23px 6px rgba(161, 156, 161, 0.62);

  background-color: rgba(174, 194, 194, 0.4);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "sobremi sobremi sobremi sobremi"
    "lenguajes lenguajes lenguajes lenguajes"
    "laboral laboral formacion formacion";
}

.sobremi {
  display: flex;
  overflow: auto;
  margin: auto;
  width: 95%;
  padding: 0.75em;
  grid-area: sobremi;
}
.sobremi img {
  float: left;
  border: 1px solid #ddd;
  margin-top: 0.5rem;
  /* width: 150px; */
  padding: 0.25rem;
  border-radius: 2%;
  height: 175px;
}
.sobremi .imagen-description p {
  text-align: justify;
  /* border: 1px solid black; */
  overflow: auto;
  width: auto;

  margin-top: 1.5rem;
  margin-left: 8rem;
  padding: 0.25rem;
}

.lenguajes {
  /* display: flex; */
  overflow: auto;
  grid-area: lenguajes;

  margin: auto;
  width: 95%;
  padding: 0.75em;
}

.laboral {
  display: flex;
  overflow: auto;
  grid-area: laboral;
  margin: auto;
  height: 15rem;
  width: 95%;
  padding: 0.75em;
}
.laboral .experiencias {
  width: 80%;
  margin-left: 2rem;
}
.laboral .experiencias li {
  list-style-type: square;
  padding: 5px;
}
::-webkit-scrollbar{
  display: none;
}
.formacion {
  display: flex;
  overflow: scroll;

  overflow: -webkit-overflow-scrolling;  
  -webkit-overflow-scrolling: touch;
  
  scrollbar-width: none;
  scroll-behavior: smooth;
  grid-area: formacion;
  margin: auto;
  height: 15rem;
  width: 95%;
  padding: 0.75em;
}
.formacion .titulos {
  /* border: 1px solid black; */
  margin-left: 2rem;
  width: 50%;
}
.formacion .titulos li {
  list-style-type: square;
  padding: 5px;
}

h2 {
  display: flex;
  justify-content: center;
  color: ghostwhite;

  overflow: auto;

  padding: 0.5rem;
  margin-bottom: 0.7rem;
  border-start-start-radius: 10rem;
  border-end-end-radius: 10rem;

  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(116, 144, 165, 1) 0%,
    rgba(118, 147, 167, 1) 26%,
    rgba(111, 163, 180, 1) 77%,
    rgba(173, 216, 230, 1) 95%
  );

  -webkit-box-shadow: 0px 0px 8px 4px rgba(161, 156, 161, 1);
  -moz-box-shadow: 0px 0px 8px 4px rgba(161, 156, 161, 1);
  box-shadow: 0px 0px 8px 4px rgba(161, 156, 161, 1);
}

.nombre {
  width: fit-content;
  padding: 5px;
  border-radius: 8px;

  box-shadow: 0.5px 0.5px inset;

  display: flex;

  margin-left: 8rem;
  margin-top: 1.5rem;
}

.caja-iconos {
  display: flex;
  overflow: auto;
  justify-content: center;
  list-style: none;
  flex-direction: row;
}
.caja-iconos li {
  padding: 2rem;
}

/* Medium devices (landscape tablets, 768px and up) */
/* @media only screen and (max-width: 1060px) {
  body {
    background: black;
  }
  .main-home {
    display: grid;
    max-width: 62.5rem;
  }
} */
</style>

<script setup>
import { ref } from "vue";
import { useStoreDatosPersonales } from "@/store/datosPersonales.js";
let loading = ref(false);
let data = ref({});

const obtenerDatos = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/rafajlpz/lectura-json/main/datos.json"
    );
    data.value = await response.json();
  } catch (error) {
    console.log(error);
  }
  loading.value = true;
};
obtenerDatos();

const store = useStoreDatosPersonales();
store.setDatosCurriculum();
</script>
