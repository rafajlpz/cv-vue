<template>
  <div class="contenedor">
    <div class="caja-formulario">
      <h1 class="titulo-admin">Administracion</h1>
      {{ store.getEmailUser }}
      <br />
      <hr />
      <br />
      <form @submit.prevent="autentificar" action="#" id="myForm">
        <div class="control">
          <label for="email"> Correo electronico </label>
          <input
            class="inputs"
            v-model="form.email"
            type="email"
            id="email"
            required
          />
        </div>
        <div class="control">
          <label for="password"> Contraseña </label>
          <input
            class="inputs"
            v-model="form.password"
            type="password"
            id="password"
          />
        </div>
        <br />
        <button class="botones">Login</button>
        <input
          class="botones"
          @click="desconectar"
          type="button"
          value="Logout"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
//Importaciones
import { useStoreUsers } from "@/store/users";
import { reactive } from "vue";

//Inicializar pinia
const store = useStoreUsers();
const form = reactive({
  email: "frilo_94@hotmail.com",
  password: "123456",
});
const autentificar = () => {
  store.signIn(form);
};
const desconectar = () => {
  store.logout();
};
</script>

<style>
.contenedor {
  display: flex;

  align-items: center;
  justify-content: center;
  height: auto;
}

.caja-formulario {
  border: 1px solid grey;
  padding: 2rem;
  border-radius: 4px;
  
}
.control {
  display: flex;
  flex-direction: column;
  width: fit-content;
}
.inputs {
  width: 100%;
  background: cornsilk;
  padding: 0.4rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  border: 1px solid orange;
}
.botones {
  /* border-radius: 4px; */
  padding: 0.3rem;
  margin-right: 0.5rem;
  border: 1px solid orange;
  border-radius: 4px;
  background: cornsilk;
}
.titulo-admin {
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-shadow: 1rem 1rem 1.1rem;
  
}

/* .input-grupo{
  position: relative;
}
.input{
  padding: 0.4rem;
  border: none;
  border-radius: 4px;
  font: inherit;
  color: #fff;
  background-color: transparent;
  outline: 2px solid #fff;
}
.input-label{
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(10px, 10px);
  transform-origin: left;
  transition: transform .25s;
}
.input:focus+.input-label,
.input:valid+valid+.input-label{
  transform: translate(0, -30px) scale(.8);
  color: #d1c5fc;
}
.input:is(focus, :valid){
  outline-color: d1c5fc;
} */
</style>
