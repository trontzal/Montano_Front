 <template> 
 
  <!-- -----------------Site footer ---------------- -->
   <footer class="site-footer bg-">
    <div class="container-fluid  borde contenedor">
      <div class="row">

        <div class="col-xs-3 col-md-4 d-flex p-lg-4 footer-seccion-1">
            <div> 
              <img class="recycling mb-2" src="../assets/recyclinglogo.png" alt="" />
              <p class="texto-1"> Nuestros vasos, platos y cubiertos son biodegradables, compostables: hechos a base de fecula de maiz. </p>
            </div> 
            <p class="texto-2"> Empresa comprometida con el medio ambiente: Peñascal Scoop.</p>   
          </div>

        <div class="col-xs-6 col-md-3 p-lg-3 footer-seccion-2"> 
          <div class="icono-llegar">
            <i class="fa-solid fa-location-dot"></i>
          </div>
            <div class="location-text">
              <h3 class="my-3">Como llegar:</h3>
              <p><i class="fa-solid fa-bus-simple"></i> Bilbobus: A1 </p>
              <p><i class="fa-solid fa-bus-simple"></i>  Metro linea 3 </p>
              <p><i class="fa-solid fa-bus-simple"></i> Bizkaibus A3224 <i class="fa-solid fa-arrow-right"> </i> <i class="fa-solid fa-person-walking"></i>    11 minutos</p>
            </div>
        </div>

        <div class="col-sm-12 col-md-5  ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.065870029503!2d-2.9212682602773956!3d43.270995823811774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4fc1a40c4bcb%3A0x605fd1698ff98ecc!2sMonta%C3%B1o%20Zentroa!5e0!3m2!1ses!2ses!4v1689152373737!5m2!1ses!2ses"
            width="100%"
            height="220"
            style="border: 0; margin: 1rem auto 0; border-radius: 0.3rem;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
         </div>

      </div>
      
    </div> 
    
                  <!-- ------------copyright centrado-------------  -->
    <div class="container">
   <hr/>
        <div class="col-md-12 copyright" >
          <!-- <img class="logo-footer" src="../assets/logotrasparent.png">  -->
            <p class="copyright-text pb-3 m-0">
              Copyright &copy; 2023 Derechos reservados por Escuela Montaño
            </p>
        </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>


.footer-seccion-1{
  display: flex;
  flex-direction: column;
  text-align: center;
}

.footer-seccion-1>div{
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.fa-location-dot{
  font-size: 3rem;
  color: rgb(203, 233, 184);

}


.recycling {
  width: 20%;
  display: block;
  border-radius: 50%;
}

.texto-1{
  font-size: 18px;
  font-weight: bold;
   font-family: 'Open' sans-serif;
}

.texto-2{
  font-size: 12px;
  font-weight: bold;
  font-family: 'Oswald', sans-serif; 
}

.location-text{
  text-align: center;
}


.site-footer{
    background-color: #008948;
}

.contenedor{
      width: 90vw;
    margin: 0 auto;
}

.copyright{
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-footer{
    background-color: #008948;
    max-width: 10rem;
}
.copyright-text{
    align-items:baseline;
}

.icono-llegar{
  text-align: center;
}

.icono-llegar i{
  display: block;
}

@media (max-width: 780px) {
  footer{
    padding-top: 1.5rem;
  }

  .footer-seccion-1{
    padding-bottom: 1rem;
  }

  .copyright{
    flex-direction: column;
  }

  .logo-footer{
    margin: 0 auto;
  }

  .copyright-text{
    text-align: center;
}
  
  
}
</style>










