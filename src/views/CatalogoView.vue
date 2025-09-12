<template>
  <div class="catalogo p-6 space-y-16">
    <h2 class="text-3xl font-bold mb-12 text-center">Catálogo de Productos</h2>

    <div class="buscador">
      <label for="categoria" class="mr-2 font-semibold">Filtrar por categoría:</label>
      <select id="categoria" v-model="categoriaSeleccionada" class="select-categoria">
        <option value="">Todas</option>
        <option v-for="cat in categorias" :key="cat" :value="cat">{{ cat }}</option>
      </select>
    </div>

    <section
      v-for="cat in categoriasFiltradas"
      :key="cat"
      class="categoria-section"
    >
      <h3 style="margin-left: 45%; font-size: 2.5rem;">
        {{ cat }}
      </h3>

      <div>
        <div
          v-for="producto in productosFiltrados(cat)"
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

<script>
import { productos, categorias } from "@/data/productos.js";

export default {
  name: "CatalogoView",
  data() {
    return {
      productos,
      categorias,
      categoriaSeleccionada: ""
    };
  },
  computed: {
    categoriasFiltradas() {
      if (!this.categoriaSeleccionada) return this.categorias;
      return [this.categoriaSeleccionada];
    }
  },
  methods: {
    productosFiltrados(cat) {
      return this.productos.filter(p => p.categoria === cat);
    },
    verDetalles(id) {
      this.$router.push({ name: "producto-detalle", params: { id } });
    }
  }
};
</script>

<style scoped>
.buscador {
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 30px;
}
.buscador label {
  font-size: 1.5rem;
  margin-right: 10px;
}

.select-categoria {
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background: #fff;
  color: #333;
}

.card {
  margin-bottom: 30px;
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
