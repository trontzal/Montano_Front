<template>
  <div class="d-flex justify-content-center" style="background-color: #F4F4F4; padding: 3rem">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4">
          <router-link to="/pintxos">
            <div class="card h-90">
              <img src="../assets/img/Img_Home/PINTXO_ACEITUNA.png" class="card-img-top" alt="">
            </div>
          </router-link>
            <div class="card-body p-4">
              <h5 class="card-title text-center">{{ $t("pintxos.titulo") }}</h5>
            </div>
        </div>
        <div class="col-md-4 mb-4">
          <router-link to="/pasteleria">
            <div class="card h-90">
              <img src="../assets/img/Img_Home/Pasteleria.png" class="card-img-top" alt="">
            </div>
          </router-link>
            <div class="card-body p-4">
              <h5 class="card-title text-center">{{ $t("pasteleria.titulo") }}</h5>
            </div>
        </div>
        <div class="col-md-4 mb-4">
          <router-link to="/carniceria">
            <div class="card h-90">
              <img src="../assets/img/Img_Home/Carniceria.png" class="card-img-top" alt="">
            </div>
          </router-link>
            <div class="card-body p-4">
              <h5 class="card-title text-center">{{ $t("carniceria.titulo") }}</h5>
            </div>
        </div>
        <div class="col-md-4 mb-4">
          <router-link to="/menu-dia">
            <div class="card h-90">
              <img src="../assets/img/Img_Home/Menu_del_dia.png" class="card-img-top" alt="">
            </div>
          </router-link>
            <div class="card-body p-4">
              <h5 class="card-title text-center">{{ $t("menu_dia.titulo") }}</h5>
            </div>
        </div>
        <div class="col-md-4 mb-4">
          <router-link to="/menu-estrella">
            <div class="card h-90">
              <img src="../assets/img/Img_Home/Menu_izarra.png" class="card-img-top" alt="">
            </div>
          </router-link>
            <div class="card-body p-4">
              <h5 class="card-title text-center">{{ $t("menu_estrella.titulo") }}</h5>
            </div>
        </div>
        <div class="col-md-4 mb-4">
          <router-link to="/raciones">
            <div class="card h-90">
              <img src="../assets/img/Img_Home/ULTIMA_BOLSA.png" class="card-img-top" alt="">
            </div>
          </router-link>
            <div class="card-body p-4">
              <h5 class="card-title text-center">{{ $t("raciones.titulo") }}</h5>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.card {
  height: 20rem;
  width: 20rem;
}

/* Estilo para imágenes en las tarjetas */
.card img {
  width: 100%; /* Establecemos el ancho del 100% para todas las imágenes */
  height: 18rem; /* Permite que la altura se ajuste proporcionalmente */
  object-fit: cover; /* Ajustamos el tamaño de la imagen para cubrir toda la tarjeta */
}

/* Media Queries */
@media (max-width: 992px) {
  .card {
    width: 100%; /* Cambiamos el ancho de las tarjetas al 100% en tabletas */
    margin-bottom: 2rem;
  }
}

@media (max-width: 576px) {
  .card {
    height: auto; /* Permitimos que la altura de las tarjetas se ajuste automáticamente en dispositivos móviles */
    margin-bottom: 2rem;
  }
}
</style>

