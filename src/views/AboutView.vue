<template>
  <div class="contenedor">
    <div class="caja-formulario">
      <h1>Pagina de acceso</h1>
      {{store.getEmailUser}}
      <br />
      <hr />
      <br />
      <form @submit.prevent="autentificar" action="#" id="myForm">
        <div class="control">
          <label for="email"> Correo electronico </label>
          <input v-model="form.email" type="email" id="email"  required/>
        </div>
        <div class="control">
          <label for="password"> Contraseña </label>
          <input v-model="form.password" type="password" id="password" />
        </div>
        <br />
        <button>Login</button>
        <input @click="desconectar" type="button" value="Logout">
      </form>
    </div>
  </div>
</template>

<script setup>
//Importaciones
import { useStoreUsers } from '@/store/users';
import { reactive } from 'vue';

//Inicializar pinia
const store = useStoreUsers();
const form = reactive({
  email: "frio_94@hotmail.com",
  password: "123456"
});
const autentificar = () => {
  store.signIn(form);
};
const desconectar = () =>{
  store.logout()
}
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
