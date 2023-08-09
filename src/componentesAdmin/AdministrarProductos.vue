<template>
    <div v-if="cargando == true" class="carga">
        <div class="cargando-icono">⏳</div>
        <p>Cargando...</p>
    </div>
    <div v-else class="tarjetasProductos d-flex flex-wrap">
        <div v-for="(producto, index) in productos" :key="index" :producto="producto" class="tarjetaIndividualProducto col-xl-2 col-lg-3 col-md-3 col-sm-12">

            <div class="imagenProducto">
                    <img v-if="producto.img" :src="producto.img" :alt="producto.nombre">
                    <img v-else src="" :alt="producto.nombre">
            </div>
            <div class="contenidoTexto">
                <div class="nombreProducto">
                    {{ producto.nombre }}
                </div>
                <div class="precioProducto">
                    {{ producto.precio }}
                </div>
                <!-- <pre>{{ producto.id }}</pre>
                <pre>{{ producto.img }}</pre> -->
            </div>
            <div class="botones">
                <!-- <button class="btn btn-success">Editar</button> -->
                <button class="btn btn-danger" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + producto.id"><i class="fa-solid fa-trash"></i>  Eliminar</button>
            </div>
        </div>
    </div>

    <!-- @click="eliminarProducto(producto.id)" -->

    <!-- Modal -->
        <div v-for="(producto, index) in productos" :key="index">
          <div :id="'exampleModal' + producto.id" class="modal fade exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div>
                        <h5 class="titulo-modal text-center" id="exampleModalLabel">¿Quieres borrar este producto?</h5>
                    </div>
                    <div class="modal-body">
                        <img class="modal-imagen-meal" :src="producto.img">
                        <p class="text-center"><strong>Nombre producto:</strong> {{ producto.nombre }}</p>
                        <p class="text-center"><strong>Precio: </strong> {{ producto.precio }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger"
                            data-bs-dismiss="modal" @click="eliminarProducto(producto.id)" > Si, borrar. </button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Cancelar </button>
                    </div>
                </div>
            </div>
           </div>
        </div>
</template>

<script setup>
import { ref, watchEffect, defineProps } from 'vue';
import axios from 'axios';

const props = defineProps({
    categoriaProducto: {
        type: String,
        required: true
    }
});

const productos = ref("");
const cargando = ref(true);

async function recibirProductosPorCategoria() {
    cargando.value = true;
    const url = "http://127.0.0.1:5000/productos/" + props.categoriaProducto;
    try {
        const response = await axios.get(url);
        productos.value = response.data;
        cargando.value = false;
    } catch (error) {
        console.log(error);
        cargando.value = false;
    }
}

async function eliminarProducto(idProducto) {
    const url = "http://127.0.0.1:5000/delete_producto/" + idProducto;
    try {
        const response = await axios.delete(url);
        if (response.status === 200) {
            alert("Producto eliminado");
        } else {
            alert("Error al eliminar el producto");
        }
    } catch (error) {
        console.error(error);
    }
}

// Watch for changes to categoriaProducto prop
watchEffect(() => {
    recibirProductosPorCategoria();
});
</script>

<style>
.tarjetasProductos {
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
}

.tarjetaIndividualProducto {
    width: 20rem;
    margin-bottom: 1rem;
    box-shadow: rgba(155, 155, 155, 0.35) 0px 5px 15px;
    background-color: white;
}

.tarjetaIndividualProducto:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.imagenProducto {
    position: relative;
    border: 1px solid rgb(196, 196, 196);
    height: 15rem;
    overflow: hidden;
}

.imagenProducto>img {
    max-width:  100%;
    
    transition: transform 0.3s;
}

.imagenProducto:hover>img {
    transform: scale(1.2);
}

.contenidoTexto {
    display: flex;
    flex-direction: column;
    margin: 1rem 1rem;
    gap: 1rem;
}

.precioProducto {
    text-align: center;
}

.carga {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    /* Ajusta la altura según tus necesidades */
    font-size: 1.5rem;
    color: #555;
}


.cargando-icono {
    margin-right: 8px;
    animation: spin 2s linear infinite;
    /* Añade una animación de rotación */
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.select{
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.botones{
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;
}


  .btn {
    
    color: white;
    cursor: pointer;
  }

  .btn:hover {
    background-color: #45a049;
  }
</style>
