<template>
  <div class="main-home">
    <div class="sobremi">
      <div class="imagen-description">
        <h2>Sobre mi</h2>
        <img src="../assets/alpaquita.jpg" alt="" />
        <p>
         {{data.Descripcion}}
         <hr>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae cupiditate minima quam placeat, repudiandae facilis necessitatibus ea omnis totam suscipit, quisquam, impedit nobis hic expedita esse! Reiciendis incidunt aspernatur veniam? Repellendus, animi nemo at voluptas laborum neque fugiat minus quibusdam eaque excepturi porro velit possimus eligendi voluptatibus, officia quam veritatis illo eveniet tempora dolore beatae. Saepe nemo itaque beatae iure.
        </p>
      </div>
    </div>

    <div class="lenguajes">
      <div class="description-texto1">
        <h2>Front-end Developer</h2>
        <div class="experiencias">
          <div class="caja-iconos">
            <li><i class="fa-brands fa-html5"></i></li>
            <li><i class="fa-brands fa-css3"></i></li>
            <li><i class="fa-brands fa-js"></i></li>
            <li><i class="fa-brands fa-vuejs"></i></li>
          </div>
          <p class="exp1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, vero?
            Id dolore expedita, maiores fuga doloremque iste voluptatum
            cupiditate ut ipsum ab animi, asperiores quis tempore possimus nam
            molestias unde vero enim, dolores laborum vel! Explicabo animi nulla
            ea iste ipsam officia earum consectetur temporibus praesentium odio?
            Cumque, molestias voluptatum! Ipsum quasi illum enim consequuntur
            voluptate
          </p>
        </div>
      </div>
    </div>

    <div class="laboral">
      <div class="description-texto2">
        <h2>Experiencia laboral</h2>
        <div class="experiencias">
          <li>{{data.Experiencia.Exp1}}</li>
          <li>{{data.Experiencia.Exp2}}</li>
        </div>
      </div>
    </div>


    <div class="formacion">
      <div class="description-texto2">
        <h2>Formacion</h2>
        <div class="titulos">
          <li>{{data.Formacion.Titulo3}}</li>
          <li>{{data.Formacion.Titulo1}}</li>
          <li>{{data.Formacion.Titulo4}}</li>
          <li>{{data.Formacion.Titulo2}}</li>
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
.sobremi img{
  float: left;
  border: 1px solid #ddd;
  margin-top: 0.5rem;
  /* width: 150px; */
  padding: 0.25rem;
  border-radius: 2%;
  height: 150px; 
   
}
.sobremi .imagen-description p{
  text-align: justify;
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
.laboral .experiencias{
  width: 80%;
  margin-left: 2rem;
}
.laboral .experiencias li{
  list-style-type: square;
}


.formacion {
  /* display: flex; */
  grid-area: formacion;
  margin: auto;
  height: 15rem;
  width: 95%;
  padding: 0.75em;
}
.formacion .titulos{
/* border: 1px solid black; */
margin-left: 2rem;
width: 50%;
}
.formacion .titulos li{
  list-style-type:square;
}



h2 {
  display: flex;
  justify-content: center;
  

  margin: auto;

  padding: 0.25rem;
  margin-bottom: 0.7rem;
  border-start-start-radius: 10rem;
  border-end-end-radius: 10rem;
  background-color: rgba(173, 216, 230, 0.25);
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

import {ref} from 'vue';
let data = ref({});


const obtenerDatos = async () => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/rafajlpz/lectura-json/main/datos.json');
  data.value = await response.json();
  
  } catch (error) {
    console.log(error)
  }
}
obtenerDatos();
</script>
