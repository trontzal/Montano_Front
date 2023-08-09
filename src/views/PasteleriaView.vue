<template>
    <div>
        <h1 class="py-3 text-center">{{ $t("pasteleria.titulo") }}</h1>
        <ProductosMontano :categoriaProducto="'pas'"/>
    </div>
</template>

<script setup>
    import ProductosMontano from "../components/ProductosMontano.vue"
</script>

<style lang="scss" scoped>

</style>