<template>
<div class="card shadow border-0 mb-7">
    <div class="card-header">
        <h5 class="my-2 text-center">Productos agregados</h5>
    </div>
    <div class="table-responsive">
        <table class="table table-hover table-nowrap">
            <thead class="thead-light">
                <tr>
                    <th scope="col" class="campo">Imagen</th>
                    <th scope="col" class="campo">Nombre</th>
                    <th scope="col" class="campo">Precio</th>
                    <th scope="col" class="campo">Categoria</th>
                    <th scope="col" class="campo"></th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="producto in paginatedProductos" :key="producto.id">
                    <td class="ancho-10">
                        <img alt="..."
                            :src="producto.img"
                            class="imagen">
                    </td>
                    <td class="ancho-25 responsivo">
                        {{ producto.nombre }}
                    </td>

                    <td class="ancho-10">
                        {{ producto.precio }}
                    </td>
                    <td class="ancho-10">
                        {{ producto.idcat }}
                    </td>

                    <td class="ancho-10 ms-3">
                        
                        <!-- <span class="badge badge-lg badge-dot ">
                            <a  class="btn btn-sm btn-neutral">Editar</a>
                        </span> -->
                        
                        <button class="btn btn-danger btn-sm btn-square btn-neutral borrar" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + producto.id"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="card-footer border-0 py-1 text-center">
        <span class=" text-sm" v-if="productos && productos.length > 0">
            Mostrando {{ (currentPage - 1) * itemsPerPage + 1 }} - 
            {{ Math.min(currentPage * itemsPerPage, productos.length) }} de {{ productos.length }} productos agregados.
        </span>
    </div>

    <div class="card-footer border-0 py-5" v-if="productos && productos.length > 0">
          <nav>
            <ul class="pagination justify-content-center">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link"  @click="goToPage(currentPage - 1)">Previous</a>
              </li>
              <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
                <a class="page-link dark"  @click="goToPage(page)">{{ page }}</a>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <a class="page-link"  @click="goToPage(currentPage + 1)">Next</a>
              </li>
            </ul>
          </nav>
        </div>

</div>

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
import { onMounted, ref, watchEffect, computed } from 'vue';
import axios from 'axios'; 

onMounted(() => {
    recibirTodosProductos()
});

let productos = ref([]);

// // Observa cambios en mealsStore.meals y actualiza meals
// watch(() => mealsStore.meals, (newMeals) => {
//     meals.value = newMeals;
// });

async function recibirTodosProductos() {
    const url = "http://127.0.0.1:5000/all_products";
    try {
        const response = await axios.get(url);
        productos.value = response.data;
        console.log("Aqui estan todos los productos: ", productos.value)
        
    } catch (error) {
        console.log(error);        
    }
}

let currentPage = ref(1);
const itemsPerPage = 10;
let totalPages = ref(1);

// Observa cambios en productos y actualiza la paginación
watchEffect(() => {
    totalPages.value = Math.ceil(productos.value.length / itemsPerPage);
});

// Calcula los productos a mostrar según la página actual
const paginatedProductos = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return productos.value.slice(startIndex, endIndex);
});

function goToPage(page) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
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
</script>

<style lang="scss" scoped>

.ancho-10{
    width: 10%;
}
.ancho-25{
    width: 10%;
}

.campo{
    text-transform: capitalize;
    font-size: medium;
    padding-left: 1rem;
}
.imagen{
    width: 100%;
    margin: 0 auto;
}

.borrar{
    background-color: rgb(157, 32, 32);
    color: white;
}



</style>