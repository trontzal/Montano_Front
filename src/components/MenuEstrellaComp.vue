<template>
    
    <div class="contenedor">
        <h1 class="titulo">{{ $t("menu_estrella.titulo") }}</h1>
        <div class="contenedor-documento">
            <div class="documento-mini" style="background-image: url(https://drive.google.com/thumbnail?authuser=0&amp;id=1i2RgrY1P7dKnAQ2l7QCOyN0hRSN7-_dX5ipzjWp-6SE&amp;sz=w1469-k-nu);"></div>
            <iframe class="documento" src="https://docs.google.com/document/d/1Fek1ICXidmzrQuPHTV5_71lizC0mCG05eED1rsy3u0M" 
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
        </div>
        
        

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.contenedor{
    width: 90vw;
    margin: 0 auto;
    padding: 1.5rem;
}

.titulo{
    text-align: center;
}

.titulo:first-letter{
   text-transform: capitalize;
 }

 .contenedor-documento{
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; 
 }
 .documento{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
 }


/* Estilos para dispositivos tablets */
@media (max-width: 850px) {
    .documento{
        display: none;
    }
.documento-mini{
    display: block;
}

}

/* Estilos para dispositivos tablets pequeñas */
@media (max-width: 600px) {

}


/* Estilos para dispositivos móviles */
@media (max-width: 480px) {

}


</style>