<template>
    <div>
        <h1 class="py-3 text-center">{{ $t("pintxos.titulo") }}</h1>
        <ProductosMontano :categoriaProducto="'pin'"/>
    </div>
</template>

<script setup>
    import ProductosMontano from "../components/ProductosMontano.vue"
</script>

<style lang="scss" scoped>

</style>