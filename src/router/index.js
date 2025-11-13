import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CatalogoView from "@/views/CatalogoView.vue";
import ProductoDetalleView from "@/views/ProductoDetalleView.vue";
import ContactoView from "@/views/ContactoView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/catalogo",
    name: "catalogo",
    component: CatalogoView,
  },
  {
    path: "/producto/:id",
    name: "producto-detalle",
    component: ProductoDetalleView,
    props: true,
  },
  {
    path: "/contacto",
    name: "contacto",
    component: ContactoView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/carrito",
    name: "carrito",
    component: () => import("@/views/CarritoView.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("@/extras/CheckoutView.vue"),
  },
  {
    path: "/orders",
    name: "orders",
    component: () => import("@/extras/OrderHistoryView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/views/AdminDashboard.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
