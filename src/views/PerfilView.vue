<template>
  <div>
    <h1>Cargar imagen</h1>
    <TheUploader @emitirFichero="gestionarFichero"></TheUploader>
</div>
</template>

<script setup>
import TheUploader from '@/components/TheUploader.vue'

const gestionarFichero = (imagen) =>{
    console.log('Te escucho', imagen)
}
</script>

