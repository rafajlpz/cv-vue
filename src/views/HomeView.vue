<template>
  <div class="main-home">
    <div class="sobremi">
      <!-- <img src="../assets/alpaquita.jpg" alt="" /> -->
      <div class="imagen-description">
        <h2>Sobre mi</h2>
        <p>
          Intento de programador junior con conocimientos de html5, css, js y
          vue. Amante de los juegos online siendo antiguo jugador 'profesional'
          de e-sports en Counter-Strike, ahora me dedico a picar codigo
        </p>
      </div>
    </div>


    


    <div class="lenguajes">
      <div class="description-texto1">
        <h2>Front-end Developer</h2>
        <div class="experiencias">
          <div class="adantia">
            <p class="exp1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, vero? Id dolore expedita, maiores fuga doloremque iste voluptatum cupiditate ut ipsum ab animi, asperiores quis tempore possimus nam molestias unde vero enim, dolores laborum vel! Explicabo animi nulla ea iste ipsam officia earum consectetur temporibus praesentium odio? Cumque, molestias voluptatum! Ipsum quasi illum enim consequuntur voluptate </p>
          </div><br>
          <div class="cersia">
            <p class="exp2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquid aut optio enim, excepturi nobis sit? Dolores animi dicta et?</p>
          </div>
        </div>
      </div>
    </div>

  

    <div class="laboral">
      <div class="description-texto2">
        <h2>Experiencia laboral</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo deserunt
          perspiciatis accusamus mollitia expedita animi error officiis impedit
          ea aliquam esse consequuntur incidunt, recusandae eaque tempora cul
        </p>
      </div>
    </div>


  


    <div class="formacion">
      <div class="description-texto2">
        <h2>Formacion</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo deserunt
          perspiciatis accusamus mollitia expedita animi error officiis impedit
          ea aliquam esse consequuntur incidunt, recusandae eaque tempora cul
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.main-home {
  margin-left: auto;
  margin-right: auto;

  max-width: 62.5rem;
  height: 100%;
  background-color: rgba(174, 194, 194, 0.4);
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(3, auto);
  grid-template-areas: "sobremi sobremi sobremi sobremi";
}

.sobremi {
  display: flex;
  margin: auto;
  width: 95%;
  padding: 0.75em;
  grid-area: sobremi;
}
.imagen-container img {
  /* border: 2px solid black; */
  border-radius: 10px;
  height: 10rem;
  width: 8rem;
}

.laboral {
  display: flex;

  margin: auto;
  width: 95%;
  padding: 0.75em;
}

.lenguajes {
  display: flex;

  margin: auto;
  width: 95%;
  padding: 0.75em;
}

.formacion {
  display: flex;

  margin: auto;
  width: 95%;
  padding: 0.75em;
}

h2 {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.25rem;
  margin-bottom: 0.7rem;
  border-start-start-radius: 10rem;
  border-end-end-radius: 10rem;
  background-color: rgba(173, 216, 230, 0.25);
}

hr {
  color: aquamarine;
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
  margin-left: 2.1rem;
  margin-right: 2.1rem;
}
</style>
