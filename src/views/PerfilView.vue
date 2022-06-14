<template>
  <div>
    <h1>Cargar imagen</h1>
    <TheUploader @emitirFichero="gestionarFichero"></TheUploader>
</div>
</template>

<script setup>
import TheUploader from '@/components/TheUploader.vue';
import {defineStore} from "../store/datosPersonales"

const gestionarFichero = (imagen) =>{
    if(imagen){
        store.subirFoto(imagen)
    }
}
</script>

<style>

</style>
