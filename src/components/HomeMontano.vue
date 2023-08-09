<template>
  <div class="background-container">
    <div class="line-overlay"></div>
    <h2 class="title1">{{ $t("home.title1") }}</h2>
    <div class="icons-container">
      <div class="icon-wrapper">
        <!-- Icono de WhatsApp -->
        <img src="../assets/img/Img_Home/whatsapp.png" class="whatsapp-icon" alt="WhatsApp" />
        <p class="icon-data">688 69 62 47</p>
      </div>
      <div class="icon-wrapper">
        <!-- Icono de phone -->
        <img src="../assets/img/Img_Home/phone.png" class="phone-icon" alt="phone" />
        <p class="icon-data">944 13 00 52</p>
      </div>
      <div class="icon-wrapper">
        <!-- Icono de carta -->
        <img src="../assets/img/Img_Home/carta.png" class="carta-icon" alt="Carta" />
        <p class="icon-data">escuelamontano@grupopenascal.com</p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.background-container {
  background-image: url('../assets/img/Img_Home/foto_yerson.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10rem;
  min-height: 70vh;
  display: grid;
  justify-content: center;
  align-items: center;
}

.line-overlay {
  position: absolute;
  top: 25rem;
  left: 4rem;
  width: 90%;
  height: 0.6rem;
  background-color: #0D904F;
}

.title1 {
  color: #FFFFFF;
  text-align: center;
  padding-top: 12rem;
  font-size: 4rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.icons-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
  position: relative;
}

.icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.phone-icon,.carta-icon{
    border-radius: 50%;
}

.icons-container img {
  width: 4rem;
  height: 4rem;
}

.icon-data {
  font-size: 1rem;
  margin-top: 0.5rem;
  color: rgb(255, 255, 255);
}

/* Media Queries */

@media (max-width: 1024px) {
  .background-container {
    padding: 8rem;
  }
  
  .title1 {
    font-size: 3.5rem;
    padding-top: 6rem;
  }
}

@media (max-width: 768px) {
  .background-container {
    padding: 6rem;
    background-position: center;
  }
  
  .title1 {
    font-size: 3rem;
    padding-top: 4rem;
  }
  
  .line-overlay {
    top: 15rem;
    left: 2rem;
  }
  
  .icons-container {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  
  .icon-wrapper {
    margin-bottom: 2rem;
    text-align: center;
    width: 100%; /* Agregado: ancho del 100% */
  }
  
  .icons-container img {
    width: 3rem;
    height: 3rem;
    margin-bottom: 0.5rem; /* Agregado: margen inferior */
  }
  
  .icon-data {
    margin-top: 0.5rem;
    text-align: center;
  }
}

@media (max-width: 576px) {
  .background-container {
    padding: 3rem;
    min-height: 50vh;
    background-position: center;
  }
  
  .title1 {
    font-size: 2.5rem;
    padding-top: 2rem;
  }
  
  .line-overlay {
    top: 10rem;
    left: 1.5rem;
  }
  
  .icons-container {
    flex-direction: column;
    align-items: center;
  }
  
  .icons-container img {
    width: 2rem;
    height: 2rem;
  }
}
</style>