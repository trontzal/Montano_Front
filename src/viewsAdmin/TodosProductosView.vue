<template>
        <div class="contenedor ">
            <h1 class="py-4 text-center"> Todos los productos</h1>
            <div class="tabla">
            <PanelTabla/>
            </div>
          </div>
</template>

<script setup>
import PanelTabla from "../componentesAdmin/PanelTabla.vue"

</script>

<style lang="scss" scoped>
.tabla{
  display: grid;
  grid-template-columns: 1fr;
  width: 90vw;
  margin: 0 auto;
}
.contenedor{
    background-color: rgba(90, 160, 90, 0.63);
    min-height: 100vh;
}

</style>