<template>

<nav class="navbar navbar ">
  <div class="container-fluid">
          <router-link :to="{ name: 'home' }" class="navbar-brand"><img src="../assets/logo.png" alt="logo" class="logo" ></router-link>

           <nav class="navbar navbar-expand-lg  ">
            <div class="container-fluid" > 
              
              <div class="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
                <ul class="navbar-nav  mb-2 mb-lg-0">
                       
                  
                  <!-- ----------desplegable Escuela Montaño-------- -->
                  <li class="nav-item dropdown " >
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                      {{ $t("navbar.escuela") }}
                    </a>
                    <ul class="dropdown-menu">
                      <li >
                          <router-link :to="{ name: 'about' }" class="dropdown-item">{{ $t("navbar.somos") }}</router-link>
                      </li>
                      <li >
                          <a href="about#contacto" class="dropdown-item">{{ $t("navbar.contacto") }}</a>
                      </li>
                     
                    </ul>
                  </li>
                  
                  <li class="nav-item">
                    <router-link :to="{ name: 'menu-dia' }" class="nav-link">{{ $t("navbar.menu_dia") }}</router-link>
                  </li>
                  
                  <li class="nav-item">
                    <router-link :to="{ name: 'menu-estrella' }" class="nav-link">{{ $t("navbar.menu_estrella") }}</router-link>
                  </li>
                               
                  <!-- ----------desplegable Mas--------- -->
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {{ $t("navbar.mas") }}
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                          <router-link :to="{ name: 'carniceria' }" class="dropdown-item">{{ $t("navbar.carniceria") }}</router-link>
                      </li>
                      <li>
                          <router-link :to="{ name: 'pasteleria' }" class="dropdown-item">{{ $t("navbar.pasteleria") }}</router-link>
                      </li>
                                            <li>
                            <router-link :to="{ name: 'raciones' }" class="dropdown-item">{{ $t("navbar.raciones") }}</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'pintxos' }" class="dropdown-item">{{ $t("navbar.pinchos") }}</router-link>
                        </li>
                    </ul>
                  </li>


                  </ul> 

                  <ul>
                <!-- ----------desplegable idioma--------- -->
                    <li class="nav-item dropdown">

                        <i class="fa-solid fa-globe idioma-icono"></i><select v-model="$i18n.locale">
                          <option v-for=" locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
                        </select>

                    </li>
                  </ul>
              </div>
            </div>
          </nav>   
          <!-- -----------Menu hamburguesa----------- -->

          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="offcanvas offcanvas-start text-bg-" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <!-- <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5> -->
              <button type="button" class="btn-close btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <!-- <li class="nav-item"></li>
                  <a class="nav-link" href="#">Escuela de Montaño</a> -->
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ $t("navbar.escuela") }}
                  </a>
                   <ul class="dropdown-menu dropdown-menu">
                     <li><a class="dropdown-item" href="#">{{ $t("navbar.somos") }}</a></li>
                    <li><a class="dropdown-item" href="#">{{ $t("navbar.contacto") }}</a></li>
                    </ul>


                <li class="nav-item">
                  <a class="nav-link" href="#">{{ $t("navbar.menu_dia") }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">{{ $t("navbar.menu_estrella") }}</a>
                  </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ $t("navbar.mas") }}
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#">{{ $t("navbar.carniceria") }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $t("navbar.pasteleria") }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $t("navbar.raciones") }}</a></li>
                        <li><a class="dropdown-item" href="#">{{ $t("navbar.pinchos") }}</a></li>
              
                   </ul>

                </li>
                    <li class="nav-item dropdown">

                        <i class="fa-solid fa-globe idioma-icono"></i> <select v-model="$i18n.locale">
                          <option v-for=" locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
                        </select>

                    </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-success" type="submit">Search</button> -->
              </form>
            </div>
          </div>
        </div>
      </nav>

</template>

<script setup>


</script> 

<style lang="scss" scoped>
.navbar-toggler {
    display: none;
}

.idioma-icono{
  font-size: 1.1rem;
}

.logo{
  width: 10vw;
  min-width: 100px;
}

.bandera-idioma{
  width: 1.5rem;
  margin-right: .2rem;
}

@media only screen and (max-width: 980px) {
  .logo{
  min-width: 100px;
}

.navbar-toggler {
        display: block;
    }
}


.nav-item .router-link-exact-active {
      color: #128652;
      font-weight: 500;
    }



// .navbar-toggler {
//     top: 300px;
// }

</style>


    