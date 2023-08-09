<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-0 py-3">
      <div class="container-xl">
        <!-- Logo -->
        <router-link class="navbar-brand" :to="{ name: 'home' }">
          <img src="../assets/logo.png" class="h-8" alt="...">
        </router-link>
        <!-- Navbar toggle -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <!-- Nav -->
          <div class="navbar-nav mx-lg-auto">
            <router-link :to="{ name: 'adminCarniceria' }" class="nav-item nav-link mx-2" aria-current="page"><i class="fas fa-drumstick-bite"></i> Carniceria</router-link>
            <router-link :to="{ name: 'adminPasteleria' }" class="nav-item nav-link mx-2" aria-current="page"><i class="fa-solid fa-cake-candles"></i> Pasteleria</router-link>
            <router-link :to="{ name: 'adminRaciones' }" class="nav-item nav-link mx-2" aria-current="page"><i class="fa-solid fa-utensils"></i> Raciones</router-link>
            <router-link :to="{ name: 'adminPintxos' }" class="nav-item nav-link mx-2" aria-current="page"><i class="fa-solid fa-utensils"></i> Pintxos</router-link>
            <router-link :to="{ name: 'adminAgregar' }" class="nav-item nav-link mx-2" aria-current="page"><i class="fa-solid fa-plus"></i>  Agregar Producto</router-link>
            <router-link :to="{ name: 'todosProductos' }" class="nav-item nav-link mx-2" aria-current="page"> Todos los productos</router-link>
          </div>
          <!-- Right navigation -->
          <div class="navbar-nav ms-lg-4">
            <a class="btn btn-sm w-lg-auto background" >Cerrar sesion</a>
          </div>
          <!-- Action -->
          <!-- <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
            <a href="#" class="btn btn-sm btn-primary w-full w-lg-auto">
              Register
            </a>
          </div> -->
        </div>
      </div>
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.background{
    background-color: #008948;
    color: white;
}

</style>