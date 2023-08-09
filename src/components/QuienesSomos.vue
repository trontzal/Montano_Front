<template>
    <div class="contenedor">
        <h1>{{ $t("somos.titulo") }}</h1>
        <div class="contenedor-contenido">
            <img src="https://i0.wp.com/conocebilbaoconesme.es/wp-content/uploads/2017/05/p1870735.jpg?resize=584%2C438&ssl=1" alt="">
        
            <div class="texto">
                <h2 class="subtitulo">{{ $t("somos.subtitulo") }}</h2>
                <p>{{ $t("somos.parrafo1") }}</p>
                <p>{{ $t("somos.parrafo2") }}</p>
            </div>
        </div>

        <hr class="linea-divisora">

        <ContactanosComp/>
    </div>
</template>

<script setup>
import ContactanosComp from "@/components/ContactanosComp.vue"

</script>

<style lang="scss" scoped>
.contenedor{
    width: 100vw;
}

h1{
    padding-top: 2rem;
}

h1, h2{
    text-align: center;
}



.subtitulo{
    text-align: start;
}
.contenedor-contenido{
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 2rem;
}

.contenedor-contenido .texto{
    
    width: 90%;
}

.contenedor-contenido img{
    margin: 0 1rem 1rem auto;
    width: 70%;
    border-radius: .5rem;
}


.linea-divisora{
    width: 90vw;
    margin: 1.5rem auto;
}

.contenedor-contacto{
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    height: 30vh;
    min-height: 30vh;
    margin-top: 2rem;
}

.contenedor-contacto div {
align-items: center;
}


.contenedor-contacto img {
    width: 70%;
}

.haz-tu-pedido a{
    text-decoration: none;
}
.contenedor-contacto .correo{
    margin: 0 auto;
    width: 35%;
}

.telefono, .whatsapp{
    border-radius: 1rem;
}

/* Estilos para dispositivos tablets */
@media (max-width: 850px) {
.contenedor-contenido{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
}

.contenedor-contenido img{
    margin: 0 auto;
}

.contenedor-contacto{

    grid-template-columns: 1fr 1fr;

}

.contenedor-contacto img {
    width: 50%;
}

}

/* Estilos para dispositivos tablets pequeñas */
@media (max-width: 600px) {

}


/* Estilos para dispositivos móviles */
@media (max-width: 480px) {

}

</style>