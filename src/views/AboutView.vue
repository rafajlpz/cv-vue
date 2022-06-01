<template>
  <div class="contenedor">
    <div class="caja-formulario">
      <h1>Pagina de acceso</h1>
      <br />
      <hr />
      <br />
      <form @submit.prevent="autentificar" action="#" id="myForm">
        <div class="control">
          <label for="email"> Correo electronico </label>
          <input type="email" id="email" />
        </div>
        <div class="control">
          <label for="password"> Contraseña </label>
          <input type="password" id="password" />
        </div>
        <br />
        <button>Log In</button>
      </form>
    </div>
  </div>
</template>

<script setup>
const autentificar = () => {
  alert("probando...");
};
</script>

<style>
.contenedor {
  display: flex;
  align-items: center;
  justify-content: center;
}

.caja-formulario {
  background-color: grey;
  border: 2px solid black;

  width: 300px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
