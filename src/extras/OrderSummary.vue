<template>
  <div class="order-summary">
    <h3>Resumen del pedido</h3>
    <div v-if="carrito && carrito.length">
      <div v-for="item in carrito" :key="item.id" class="row">
        <div class="left">{{ item.nombre }} x{{ item.cantidad }}</div>
        <div class="right">{{ subtotal(item) }} COP</div>
      </div>
      <div class="divider"></div>
      <div class="row total">
        <div class="left"><strong>Total</strong></div>
        <div class="right"><strong>{{ total.toLocaleString() }} COP</strong></div>
      </div>
    </div>
    <div v-else>
      <p>El carrito está vacío.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderSummary",
  props: {
    carrito: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    subtotal(item) {
      const s = item.cantidad * item.precio * (1 - (item.descuento || 0) / 100);
      return s.toLocaleString();
    },
  },
  computed: {
    total() {
      return this.carrito.reduce(
        (sum, item) => sum + item.cantidad * item.precio * (1 - (item.descuento || 0) / 100),
        0
      );
    },
  },
};
</script>

<style scoped>
.order-summary {
  background: #1a1a1a;
  color: #fff;
  padding: 18px;
  border-radius: 8px;
}
.row {
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
}
.divider {
  height: 1px;
  background: #333;
  margin: 12px 0;
}
.total {
  color: hotpink;
  font-size: 1.05rem;
}
.left { max-width: 70%; }
.right { text-align: right; }
</style>
