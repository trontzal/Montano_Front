import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import { messages } from "./lang/idiomas"; //Constante que esta siendo exportada desde idiomas.js

//Importando Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; //Para importar los estilos css
import "bootstrap/dist/js/bootstrap.js"; //Para importar los js



const i18n = createI18n({
  locale: "Castellano",
  fallback: "Castellano",
  messages,
});

const app = createApp(App);

app.use(i18n);
app.use(router);
app.mount("#app");
