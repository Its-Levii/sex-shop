<script>
import { productos } from "@/data/productos.js";

export default {
  name: "ProductoDetalleView",
  data() {
    return {
      producto: null,
    };
  },
  created() {
    const id = parseInt(this.$route.params.id);
    this.producto = productos.find((p) => p.id === id) || null;
  },
  methods: {
    agregarAlCarrito() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        alert("Debes iniciar sesión para agregar productos al carrito.");
        this.$router.push("/login");
        return;
      }

      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const existe = carrito.find((item) => item.id === this.producto.id);
      if (existe) {
        existe.cantidad += 1;
      } else {
        carrito.push({ ...this.producto, cantidad: 1 });
      }

      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert(`"${this.producto.nombre}" se agregó al carrito 🛒`);
      window.dispatchEvent(new Event("update-cart"));
    },
  },
};
</script>

<template>
  <div v-if="producto" class="detalle">
    <img :src="producto.imagen" :alt="producto.nombre" />

    <div class="info">
      <div class="etiquetas">
        <TagPrime v-if="producto.nuevo" value="Nuevo" severity="success" />
        <TagPrime v-if="producto.envioGratis" value="Envío Gratis" severity="info" />
        <TagPrime v-if="producto.descuento" :value="`${producto.descuento}% OFF`" severity="danger" />
      </div>

      <h2>{{ producto.nombre }}</h2>

      <div class="precio">
        <span v-if="producto.descuento" class="precio-anterior">
          {{ producto.precio.toLocaleString() }} COP
        </span>
        <span class="precio-final">
          {{ (producto.precio * (1 - producto.descuento / 100)).toLocaleString() }} COP
        </span>
      </div>

      <div class="rating">
        <RatingPrime :modelValue="producto.rating" readonly :cancel="false" />
        <span class="opiniones">({{ producto.opiniones }} opiniones)</span>
      </div>

      <p class="descripcion">{{ producto.descripcion }}</p>

      <ButtonPrime
        label="Agregar al carrito"
        class="p-button-pink"
        @click="agregarAlCarrito"
      />
    </div>
  </div>

  <div v-else class="notfound">
    <h2>Producto no encontrado</h2>
    <router-link to="/catalogo">
      <ButtonPrime label="Volver al catálogo" class="p-button-outlined" />
    </router-link>
  </div>
</template>

<style scoped>
.detalle {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 30px;
  align-items: flex-start;
  background: #222;
  color: #fff;
  border-radius: 12px;
}

.detalle img {
  width: 100%;
  max-width: 350px;
  height: 350px;
  object-fit: contain;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
}

.info {
  flex: 1;
  min-width: 300px;
}

.etiquetas {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.precio {
  margin-bottom: 15px;
  font-size: 1.5rem;
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.precio-anterior {
  text-decoration: line-through;
  color: #aaa;
  font-size: 1rem;
}

.precio-final {
  color: hotpink;
  font-weight: bold;
}

.rating {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.opiniones {
  font-size: 0.9rem;
  color: #ccc;
}

.descripcion {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.p-button-pink {
  background: hotpink !important;
  border: none !important;
  color: white !important;
  font-weight: bold;
  padding: 10px 18px;
  border-radius: 6px;
}

.p-button-pink:hover {
  background: deeppink !important;
}

.notfound {
  padding: 40px;
  text-align: center;
}
</style>
