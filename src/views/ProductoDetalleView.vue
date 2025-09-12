<script>
import { productos } from "@/data/productos.js";

export default {
  name: "ProductoDetalleView",
  data() {
    return {
      producto: null
    };
  },
  created() {
    const id = parseInt(this.$route.params.id);
    this.producto = productos.find(p => p.id === id) || null;
  }
};
</script>

<template>
  <div v-if="producto" class="detalle">
    <img :src="producto.imagen" :alt="producto.nombre" />
    <div class="info">
      <h2>{{ producto.nombre }}</h2>
      <p class="precio">{{ producto.precio.toLocaleString() }} COP</p>
      <p class="descripcion">{{ producto.descripcion }}</p>
      <button class="btn">Agregar al carrito</button>
    </div>
  </div>

  <div v-else class="notfound">
    <h2>Producto no encontrado</h2>
    <router-link to="/catalogo" class="btn">Volver al catálogo</router-link>
  </div>
</template>

<style scoped>
.detalle {
  display: flex;
  gap: 30px;
  padding: 30px;
  align-items: flex-start;
}

.detalle img {
  width: 350px;
  height: 350px;
  object-fit: contain;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  padding: 10px;
}

.info {
  flex: 1;
}

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.precio {
  color: hotpink;
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 15px;
}

.descripcion {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.btn {
  background: hotpink;
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
}

.btn:hover {
  background: deeppink;
}

.notfound {
  padding: 40px;
  text-align: center;
}
</style>
