<script>
import { productos, categorias } from "@/data/productos.js";

export default {
  name: "CatalogoView",
  data() {
    return {
      productos,
      categorias
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
  <div class="catalogo p-6 space-y-16">
    <h2 class="text-3xl font-bold mb-12 text-center">Catálogo de Productos</h2>

    <section
      v-for="cat in categorias"
      :key="cat"
      class="categoria-section"
    >
      <h3 class="text-2xl font-semibold mb-8 text-pink-500 border-b border-pink-500 pb-2">
        {{ cat }}
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="producto in productos.filter(p => p.categoria === cat)"
          :key="producto.id"
          class="card"
          @click="verDetalles(producto.id)"
        >
          <div class="imagen-container">
            <img
              :src="producto.imagen"
              :alt="producto.nombre"
            />
          </div>

          <div class="info">
            <h3 class="text-lg font-semibold text-gray-800">{{ producto.nombre }}</h3>
            <p class="precio">{{ producto.precio.toLocaleString() }} COP</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
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
  min-height: 320px;
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
  margin-top: auto;
}

.precio {
  color: hotpink;
  font-weight: bold;
  margin-top: 8px;
}
</style>
