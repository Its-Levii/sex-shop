<template>
  <div class="catalogo">
    <h2 class="titulo-principal">Catálogo de Productos</h2>

    <div class="buscador">
      <label for="categoria">Filtrar por categoría:</label>
      <select id="categoria" v-model="categoriaSeleccionada" class="select-categoria">
        <option value="">Todas</option>
        <option v-for="cat in categorias" :key="cat" :value="cat">{{ cat }}</option>
      </select>
    </div>

    <section v-for="cat in categoriasFiltradas" :key="cat" class="categoria-section">
      <h3>{{ cat }}</h3>

      <div class="productos-grid">
        <div
          v-for="producto in productosFiltrados(cat)"
          :key="producto.id"
          class="producto-card"
          @click="verDetalles(producto.id)"
        >
          <CardPrime class="card-prime hover:shadow-2xl transition-transform transform hover:-translate-y-1">
  <template #header>
    <div class="relative header-img">
      <img :src="producto.imagen" :alt="producto.nombre" />
      <div class="etiquetas">
        <TagPrime v-if="producto.nuevo" severity="success" value="Nuevo" />
        <TagPrime v-if="producto.descuento > 0" severity="warning" :value="`-${producto.descuento}%`" />
      </div>
    </div>
  </template>

  <template #title>
    {{ producto.nombre }}
  </template>

  <template #subtitle>
    <div class="categoria-subtitulo">
      <i class="pi pi-tag"></i> {{ producto.nombre }}
    </div>
  </template>

  <template #content>
    <div class="contenido">
      <div>
        <span v-if="producto.descuento > 0" class="precio-antiguo">
          {{ producto.precio.toLocaleString() }} COP
        </span>
        <span class="precio-actual">
          {{
            producto.descuento > 0
              ? (producto.precio * (1 - producto.descuento / 100)).toLocaleString()
              : producto.precio.toLocaleString()
          }}
          COP
        </span>
      </div>

      <div class="rating">
        <RatingPrime :modelValue="producto.rating" readonly cancel="false" />
        <span>({{ producto.opiniones }} opiniones)</span>
      </div>

      <p :class="producto.stock > 0 ? 'stock' : 'agotado'">
        {{ producto.stock > 0 ? 'En stock' : 'Agotado' }}
      </p>

      <TagPrime
        v-if="producto.envioGratis"
        severity="info"
        value="Envío gratis"
        class="mt-2"
      />
    </div>
  </template>
</CardPrime>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { productos, categorias } from "@/data/productos.js";

export default {
  name: "CatalogoView",
  components: {
    
  },
  data() {
    return {
      productos,
      categorias,
      categoriaSeleccionada: "",
    };
  },
  computed: {
    categoriasFiltradas() {
      if (!this.categoriaSeleccionada) return this.categorias;
      return [this.categoriaSeleccionada];
    },
  },
  methods: {
    productosFiltrados(cat) {
      return this.productos.filter((p) => p.categoria === cat);
    },
    verDetalles(id) {
      this.$router.push({ name: "producto-detalle", params: { id } });
    },
  },
};
</script>

<style scoped>
.catalogo {
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px 20px;
}

.titulo-principal {
  text-align: center;
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 60px;
  color: #e91e63;
}

.buscador {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  gap: 10px;
}

.buscador label {
  font-size: 1.2rem;
  color: #333;
}

.select-categoria {
  padding: 12px 18px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
}

.select-categoria:hover {
  border-color: #e91e63;
}

.categoria-section {
  margin-bottom: 80px;
}

.categoria-section h3 {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: #e91e63;
}

.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  justify-items: center;
  
}

.producto-card {
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.producto-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.card-prime {
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header-img {
  position: relative;
  background: #f7f7f7;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-img img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  padding: 10px;
}

.etiquetas {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.categoria-subtitulo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  color: #777;
  margin-top: -5px;
}

.contenido {
  text-align: center;
  padding: 15px 10px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.precio-antiguo {
  text-decoration: line-through;
  color: #999;
  font-size: 1rem;
  margin-right: 5px;
}

.precio-actual {
  color: #e91e63;
  font-size: 1.4rem;
  font-weight: 700;
}

.rating {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  font-size: 0.9rem;
  color: #666;
}

.stock {
  color: #16a34a;
  font-weight: 600;
  margin-top: 10px;
}

.agotado {
  color: #dc2626;
  font-weight: 600;
  margin-top: 10px;
}

.categoria-section {
  background-color: #f9f9f9;
  padding: 40px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.etiquetas .p-tag {
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .titulo-principal {
    font-size: 2.2rem;
  }

  .categoria-section h3 {
    font-size: 1.6rem;
  }

  .productos-grid {
    gap: 20px;
  }

  .card-prime {
    border-radius: 12px;
  }

  .header-img {
    height: 200px;
  }
}
</style>
