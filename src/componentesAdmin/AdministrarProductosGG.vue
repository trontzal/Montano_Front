<template>
    <div v-if="cargando == true" class="carga">
        <div class="cargando-icono">⏳</div>
        <p>Cargando...</p>
    </div>
    <div v-else class="tarjetasProductos d-flex flex-wrap">
        <div v-for="(producto, index) in productos" :key="index"
            class="tarjetaIndividualProducto col-xl-2 col-lg-3 col-md-3 col-sm-12">
            <div class="imagenProducto">
                <img v-if="producto.img" :src="producto.img" alt="">
                <img v-else src="" alt="No hay imagen">
            </div>
            <div class="contenidoTexto">
                <div class="nombreProducto">
                    {{ producto.nombre }}
                </div>
                <div class="precioProducto">
                    {{ producto.precio }}
                </div>
                <pre>{{ producto }}</pre>
            </div>
            <div class="botones">
                <button class="btn">Editar</button>
                <button class="btn" @click="eliminarProducto(producto.id)">Eliminar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductosMontano",
    props: {
        categoriaProducto: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            productos: "",
            cargando: true
        };
    },
    methods: {
        async recibirProductosPorCategoria() {
            this.cargando = true;
            const url = "http://127.0.0.1:5000/productos/" + this.categoriaProducto;
            try {
                const response = await fetch(url);
                const data = await response.json();
                this.productos = data;
                this.cargando = false;
            } catch (error) {
                console.log(error);
                this.cargando = false;
            }
        },
        eliminarProducto(idProducto){
            const url = "http://127.0.0.1:5000/delete_producto/" + idProducto
            fetch(url,{
                method: "DELETE",
            })
            .then(response => {
                if(response.ok){
                    alert("Producto eliminado")
                }else{
                    alert("Error al eliminar el producto")
                }
            })
            .catch(error => {
                console.error(error);
            });
        }
    },
    mounted() {
        this.recibirProductosPorCategoria();
    },
    watch: {
        categoriaProducto: "recibirProductosPorCategoria",
    },
}
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
    border: 1px solid black;
    height: 15rem;
    overflow: hidden;
}

.imagenProducto>img {
    max-width: 100%;
    max-height: 100%;
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
    background-color: #4caf50;
    color: white;
    cursor: pointer;
  }

  .btn:hover {
    background-color: #45a049;
  }
</style>
