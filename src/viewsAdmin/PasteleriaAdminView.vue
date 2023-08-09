<template>
    <div class="contenedor ">
        <h1 class="py-4 text-center"> Admin Pasteleria</h1>
        <AdministrarProductos :categoriaProducto="'pas'"/>
      </div>

</template>

<script setup>
    import AdministrarProductos from "../componentesAdmin/AdministrarProductos.vue"
</script>

<style lang="scss" scoped>
.contenedor {
    background-color: rgba(90, 160, 90, 0.63);
    min-height: 100vh;
    max-width: 100vw;
}
</style>