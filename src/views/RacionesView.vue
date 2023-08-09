<template>
    <div>
       <h1 class="py-3 text-center">{{ $t("raciones.titulo") }}</h1>
        <ProductosMontano :categoriaProducto="'rac'"/>
    </div>
</template>

<script setup>
    import ProductosMontano from "../components/ProductosMontano.vue"
</script>

<style lang="scss" scoped>

</style>