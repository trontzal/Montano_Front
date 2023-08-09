/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../layouts/AppLayout.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";

const routes = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "/contacto",
        name: "contacto",
        component: () => import("../views/ContactoView.vue"),
      },
      {
        path: "/menu-dia",
        name: "menu-dia",
        component: () => import("../views/MenuDiaView.vue"),
      },
      {
        path: "/menu-estrella",
        name: "menu-estrella",
        component: () => import("../views/MenuEstrellaView.vue"),
      },
      {
        path: "/carniceria",
        name: "carniceria",
        component: () => import("../views/CarniceriaView.vue"),
      },
      {
        path: "/pasteleria",
        name: "pasteleria",
        component: () => import("../views/PasteleriaView.vue"),
      },
      {
        path: "/raciones",
        name: "raciones",
        component: () => import("../views/RacionesView.vue"),
      },
      {
        path: "/pintxos",
        name: "pintxos",
        component: () => import("../views/PintxosView.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("../views/PageNotFoundView.vue"),
        meta: {
          title: "Montaño",
        },
      },
    ],
  },
  {
    path: "/intranet",
    name: "intranet",
    component: AdminLayout, // Use the DashboardLayout for the dashboard routes
    children: [
      {
        path: "",
        name: "adminCarniceria",
        component: () => import("../viewsAdmin/CarniceriaAdminView.vue"),
      },
      {
        path: "",
        name: "adminPasteleria",
        component: () => import("../viewsAdmin/PasteleriaAdminView.vue"),
      },
      {
        path: "",
        name: "adminRaciones",
        component: () => import("../viewsAdmin/RacionesAdminView.vue"),
      },
      {
        path: "",
        name: "adminPintxos",
        component: () => import("../viewsAdmin/PintxosAdminView.vue"),
      },
      {
        path: "",
        name: "adminAgregar",
        component: () => import("../viewsAdmin/AgregarProductoAdminView.vue"),
      },
      {
        path: "",
        name: "todosProductos",
        component: () => import("../viewsAdmin/TodosProductosView.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginAdminView.vue"),
  },
  // {
  //   path: "/intranet",
  //   name: "Intranet",
  //   component: () => import("../views/IntranetView.vue"),
  //   meta: {
  //     requiresAuth: true,
  //   },
  // },
];

// function requireAuth(to, from, next) {
//   if (localStorage.getItem("token")) {
//     next();
//   } else {
//     next("/login");
//   }
// }

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach(requireAuth);

export default router;
