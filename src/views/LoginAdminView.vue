<template>
  <div class="container">
    <!-- Formulario de inicio de sesión -->
    <form class="form" @submit.prevent="login">
      <h2>Iniciar Sesión</h2>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Iniciar Sesión</button>
      
    </form>

    <!-- Formulario para agregar nuevos usuarios -->
    <form class="form" @submit.prevent="register" v-if="showRegisterForm">
      <!-- Campos para agregar nuevos usuarios -->
      <!-- ... (nombre, apellido, email, contraseña) ... -->
      <button type="submit">Registrar Nuevo Usuario</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const nombre = ref('');
const apellido = ref('');
const email = ref('');
const password = ref('');
const showRegisterForm = ref(false);

const router = useRouter();

const login = async () => {
  try {
    // Enviar datos a la ruta de inicio de sesión utilizando Axios
    const response = await axios.post('http://127.0.0.1:5000/login', {
      email: email.value,
      password: password.value
      
    });
    console.log(response.data);

    const token_session = response.data;
    localStorage.setItem('token_session', token_session);
    
    // Obtener el token JWT del servidor
    // const token = response.data.token;

    // // Almacenar el token en el LocalStorage o en una cookie para su uso posterior
    // localStorage.setItem('token', token);

    // // Mostrar el formulario para agregar nuevos usuarios después de iniciar sesión
    // showRegisterForm.value = true;

    // Redirigir a la vista "intranet" después de iniciar sesión
    router.push('/intranet');
  } catch (error) {
    console.log(error);
  }
};

const register = async () => {
  try {
    // Enviar datos a la ruta de agregar nuevos usuarios utilizando Axios
    await axios.post('http://127.0.0.1:5000/add_user', {
      nombre: nombre.value,
      apellido: apellido.value,
      email: email.value,
      password: password.value
    });

    // Limpiar los campos después de agregar un nuevo usuario
    nombre.value = '';
    apellido.value = '';
    email.value = '';
    password.value = '';
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

.form h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type='text'],
input[type='email'],
input[type='password'] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type='submit'],
button[type='button'] {
  display: block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type='submit']:hover,
button[type='button']:hover {
  background-color: #45a049;
}
</style>
