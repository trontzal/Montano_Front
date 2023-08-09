<template>
    <div>
        <!-- Here you can place elements common to the whole application -->
        <NavbarMontanoIdiomas />
        <router-view/>
        <FooterMontano />
    </div>
</template>

<script  setup>
import NavbarMontanoIdiomas from '../components/NavbarMontanoIdiomas.vue';
import FooterMontano from '../components/FooterMontano.vue';

</script>

<style lang="scss" scoped>

</style>