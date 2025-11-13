<template>
  <div class="carrito">
    <h2>Mi Carrito</h2>

    <div v-if="carrito.length > 0" class="lista">
      <div v-for="item in carrito" :key="item.id" class="item">
        <img :src="item.imagen" :alt="item.nombre" />
        <div>
          <h3>{{ item.nombre }}</h3>
          <p>Cantidad: {{ item.cantidad }}</p>
          <p>Precio: {{ (item.precio * (1 - item.descuento / 100)).toLocaleString() }} COP</p>
          <ButtonPrime
            label="Eliminar"
            class="p-button-danger"
            @click="eliminarItem(item.id)"
          />
        </div>
      </div>
      <h3 class="total">Total: {{ total.toLocaleString() }} COP</h3>
    </div>

    <div v-else class="vacio">
      <p>Tu carrito está vacío.</p>
      <router-link to="/catalogo">
        <ButtonPrime label="Ver productos" class="p-button-pink" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarritoView",
  data() {
    return {
      carrito: [],
    };
  },
  created() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Debes iniciar sesión para ver tu carrito.");
      this.$router.push("/login");
      return;
    }
    this.cargarCarrito();
  },
  methods: {
    cargarCarrito() {
      this.carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    },
    eliminarItem(id) {
      this.carrito = this.carrito.filter((i) => i.id !== id);
      localStorage.setItem("carrito", JSON.stringify(this.carrito));
      window.dispatchEvent(new Event("update-cart"));
    },
  },
  computed: {
    total() {
      return this.carrito.reduce(
        (suma, item) =>
          suma + item.cantidad * item.precio * (1 - item.descuento / 100),
        0
      );
    },
  },
};
</script>

<style scoped>
.carrito {
  max-width: 800px;
  margin: 50px auto;
  background: #222;
  padding: 30px;
  border-radius: 12px;
  color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

h2 {
  color: hotpink;
  text-align: center;
  margin-bottom: 30px;
}

.item {
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #444;
  padding: 15px 0;
}

.item img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  background: #fff;
  border-radius: 8px;
}

.total {
  text-align: right;
  color: hotpink;
  margin-top: 20px;
  font-size: 1.3rem;
}

.vacio {
  text-align: center;
  color: #bbb;
}
</style>
