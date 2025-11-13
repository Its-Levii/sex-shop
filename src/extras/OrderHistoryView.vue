<template>
  <div class="orders">
    <h2>Historial de Pedidos</h2>

    <div v-if="orders.length">
      <div v-for="o in orders" :key="o.id" class="order-card">
        <div class="order-head">
          <div>Orden #: <strong>{{ o.id }}</strong></div>
          <div>{{ formatFecha(o.fecha) }}</div>
        </div>
        <div class="order-body">
          <div class="customer">
            <p><strong>Cliente:</strong> {{ o.cliente.nombre }} — {{ o.cliente.telefono }}</p>
            <p><strong>Dirección:</strong> {{ o.cliente.direccion }}, {{ o.cliente.ciudad }}</p>
          </div>

          <div class="items">
            <div v-for="it in o.items" :key="it.id" class="it">
              <span>{{ it.nombre }} x{{ it.cantidad }}</span>
              <span>{{ (it.cantidad * it.precio * (1 - (it.descuento||0)/100)).toLocaleString() }} COP</span>
            </div>
          </div>

          <div class="order-footer">
            <div><strong>Total:</strong> {{ o.total.toLocaleString() }} COP</div>
            <div><strong>Estado:</strong> {{ o.estado }}</div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <p>No hay pedidos aún.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderHistoryView",
  data() {
    return {
      orders: [],
    };
  },
  created() {
    this.orders = JSON.parse(localStorage.getItem("orders")) || [];
  },
  methods: {
    formatFecha(f) {
      try { return new Date(f).toLocaleString(); } catch(e){ return f; }
    }
  }
};
</script>

<style scoped>
.orders { max-width: 1000px; margin: 30px auto; color: #fff; }
.order-card { background: #1b1b1b; padding: 14px; border-radius: 10px; margin-bottom: 12px; }
.order-head { display:flex; justify-content: space-between; margin-bottom: 8px; color: hotpink; }
.order-body { background: #111; padding: 10px; border-radius: 8px; }
.it { display:flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px dashed rgba(255,255,255,0.03); }
.order-footer { display:flex; justify-content: space-between; margin-top: 10px; color: #ddd; }
</style>
