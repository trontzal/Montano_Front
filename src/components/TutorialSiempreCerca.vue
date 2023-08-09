<template>
    <div class="contenedor-fondo p-3">
        <div class="contenedor">
            <div class="texto-siempre-cerca">
                <h2>{{ $t("home.cerca") }}</h2>
                <p>{{ $t("home.tutorial") }}</p>
            </div>
            <div class="video-container ">
                <iframe src="https://www.youtube.com/embed/nSsYgbDBlI0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
                
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.contenedor-fondo{
    background-color: #008948;
    min-height: 40vh;
    margin-bottom: 2rem;
}

.contenedor{
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.texto-siempre-cerca{
    margin: auto auto;
    min-height: 9rem;
    align-items: center;
}
.texto-siempre-cerca p{
    font-weight: 500;
    color: white;
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* Proporción de aspecto (16:9) */
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  width: 100%;
  height: 100%;
}

/* Estilos para dispositivos tablets pequeñas */
@media (max-width: 780px) {
  .contenedor{
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows:  1fr, 2fr;
  }
  .texto-siempre-cerca{
    margin-top: 2rem;
    margin-bottom: -2.5rem;
}
}


/* Estilos para dispositivos móviles */
@media (max-width: 480px) {
  .card-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>