<template>
<h1>Datos de contacto {{datos.Nombre}}</h1>
<div class="tarjeta-container"></div>
  
</template>

<script setup>
import { ref } from 'vue';

let datos = ref({});

const obtenerDatos = async () =>{
    try {
        const response = await fetch('https://raw.githubusercontent.com/rafajlpz/lectura-json/main/datos.json');
        datos.value = await response.json();
        console.log(datos.value)
    } catch (error) {
        console.log(error, 'Hay un error del fetch aqui')
    }
}
obtenerDatos()

</script>

<style>

</style>