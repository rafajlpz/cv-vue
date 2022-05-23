<template>
  <div v-if="loading" class="main-home">
    <div class="sobremi">
      <div class="imagen-description">
        <h2>Sobre mi</h2>

        <img src="../assets/alpaquita.jpg" alt="" />
        <h4>{{ data.Nombre }}</h4>

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
            <li><img src="../assets/icons8-css3-48.png" alt="" /></li>
            <li><img src="../assets/icons8-javascript-48.png" alt="" /></li>
            <li><img src="../assets/icons8-vue-js-48.png" alt="" /></li>
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
        <div class="titulos">
          <li>{{ data.Formacion.Titulo3 }}</li>
          <li>{{ data.Formacion.Titulo1 }}</li>
          <li>{{ data.Formacion.Titulo4 }}</li>
          <li>{{ data.Formacion.Titulo2 }}</li>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.main-home {
  margin-left: auto;
  margin-right: auto;

  max-width: 62.5rem;

  -webkit-box-shadow: 44px 29px 23px 6px rgba(161,156,161,0.62);
-moz-box-shadow: 44px 29px 23px 6px rgba(161,156,161,0.62);
box-shadow: 44px 29px 23px 6px rgba(161,156,161,0.62);

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
  /* display: flex;   */
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
  width: 70%;
  margin: auto;
  margin-top: 1.5rem;
  padding: 0.25rem;
  height: 150px;
  /* border: solid 1px black; */
}

.lenguajes {
  /* display: flex; */
  grid-area: lenguajes;
  margin: auto;
  width: 95%;
  padding: 0.75em;
}

.laboral {
  /* display: flex; */
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
}

.formacion {
  display: flex;
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
}

h2 {
  display: flex;
  justify-content: center;
  color: ghostwhite;

  margin: auto;
  /* border: solid black;  */
  padding: 0.25rem;
  margin-bottom: 0.7rem;
  border-start-start-radius: 10rem;
  border-end-end-radius: 10rem;
  background: rgb(2, 0, 36);
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

.caja-iconos {
  display: flex;
  justify-content: center;
  list-style: none;
  flex-direction: row;
}
.caja-iconos li {
  padding: 2rem;
}

/* hr {
  color: aquamarine;
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
  margin-left: 2.1rem;
  margin-right: 2.1rem;
} */
</style>

<script setup>
import { ref } from "vue";
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
</script>
