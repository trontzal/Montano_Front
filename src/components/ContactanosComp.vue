<template>
            <h2 id="contacto">Contactanos</h2>
            <div class="contenedor-contacto">
        
                <div class="haz-tu-pedido">
                    <p>{{ $t("contacto.pedido") }}</p>
                    <a class="" href="mailto:escuelamontano@grupopenascal.com" target="_blank"><strong>escuelamontano@grupopenascal.com</strong></a>
                    <p>944 130 052 / 688 696 247</p>
                </div>

                <div>
                        <a href="mailto:escuelamontano@grupopenascal.com" target="_blank">
                            <img class="correo" src="../assets/correo.png" alt="">
                        </a>               
                    </div>
                <div>
                    <a href="tel: +34-688-696-247">
                        <img class="telefono" src="../assets/telefono.png" alt="">
                    </a>
                </div>
                <div>
                    <a href="http://www.google.com/url?q=http%3A%2F%2Fwa.link%2F2u7g51&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw1XPZ-kjXn-Dx-YwknovvPC" target="_blank" >
                        <img class="whatsapp" src="../assets/whatsapp.png" alt="">
                    </a>
                </div>
            
            </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.contenedor {
    width: 100vw;
}

h1 {
    padding-top: 2rem;
}

h1,
h2 {
    text-align: center;
}



.subtitulo {
    text-align: start;
}

.contenedor-contenido {
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 2rem;
}

.contenedor-contenido .texto {

    width: 90%;
}

.contenedor-contenido img {
    margin: 0 1rem 1rem auto;

    border-radius: .5rem;
}


.linea-divisora {
    width: 90vw;
    margin: 1.5rem auto;
}

.contenedor-contacto {
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    min-height: 30vh;
    min-height: 30vh;
    margin-top: 2rem;
    padding-bottom: 1rem;
    text-align: center;
}

.contenedor-contacto div {
    align-items: center;
}




.haz-tu-pedido a {
    text-decoration: none;
}

.contenedor-contacto .correo {
    margin: 0 auto;

}

.telefono, .whatsapp {
    width: 10rem;
}

.correo{
    width: 7rem;
}

.telefono,
.whatsapp {

    width: 200px;
}

/* Estilos para dispositivos tablets */
@media (max-width: 850px) {
    .contenedor-contenido {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
    

    .contenedor-contenido img {
        margin: 0 auto;
    }

    .contenedor-contacto {

        grid-template-columns: 1fr 1fr;

    }



}

/* Estilos para dispositivos tablets pequeñas */
@media (max-width: 600px) {
    .contenedor-contacto {

        grid-template-columns: 1fr;

    }
}


/* Estilos para dispositivos móviles */
@media (max-width: 480px) {}
</style>