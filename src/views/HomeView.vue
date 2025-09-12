<script>
import { productos } from "@/data/productos.js";

export default {
  name: "HomeView",
  data() {
    return {
      productosDestacados: productos.filter(p => p.destacado)
    };
  },
  methods: {
    verDetalles(id) {
      this.$router.push({ name: "producto-detalle", params: { id } });
    }
  }
};
</script>

<template>
  <div>
    <h2 class="titulo">Productos Destacados</h2>
    <div class="grid">
      <div
        v-for="producto in productosDestacados"
        :key="producto.id"
        class="card"
        @click="verDetalles(producto.id)"
      >
        <div class="imagen-container">
          <img :src="producto.imagen" :alt="producto.nombre" />
        </div>
        <div class="info">
          <h3>{{ producto.nombre }}</h3>
          <p class="precio">{{ producto.precio }} COP</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.titulo {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 25px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  background: #fff;
  color: #333;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.imagen-container {
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.imagen-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.info {
  padding: 15px;
  text-align: center;
}

.precio {
  color: hotpink;
  font-weight: bold;
  margin-top: 8px;
}
</style>
