<template>
    <div >
        <PortadaCarniceria />
        <ProductosMontano :categoriaProducto="'car'" class="py-4"/>
    </div>
</template>

<script setup>
import PortadaCarniceria from "../components/PortadaCarniceria.vue"
import ProductosMontano from "../components/ProductosMontano.vue"
</script>

<style lang="scss">

</style>