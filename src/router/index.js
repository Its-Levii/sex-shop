import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CatalogoView from "@/views/CatalogoView.vue";
import ProductoDetalleView from "@/views/ProductoDetalleView.vue";
import ContactoView from "@/views/ContactoView.vue";
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;




