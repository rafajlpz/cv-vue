<template>
  <div>
    <input accept="image/*" type="file" @change="configurarSubida" />
  </div>
</template>

<script setup>

const emits = defineEmits([
    'emitirFichero'
])



const configurarSubida = (e) =>{
    //Comprobamos si hay ficheros seleccionados
    if(e.target.files.length>0){
        //Se o enviamos al padre
    emits('emitirFichero', e.target.files[0])
    }
   
}


</script>

<style></style>
