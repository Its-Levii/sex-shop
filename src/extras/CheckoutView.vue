<template>
  <div class="checkout">
    <h2>Checkout — Información de envío</h2>

    <div class="grid">
      <form class="form" @submit.prevent="procesarPago">
        <label>Nombre completo</label>
        <input v-model="cliente.nombre" required />

        <label>Correo</label>
        <input v-model="cliente.email" type="email" required />

        <label>Teléfono</label>
        <input v-model="cliente.telefono" required />

        <label>Dirección</label>
        <input v-model="cliente.direccion" required />

        <label>Ciudad</label>
        <input v-model="cliente.ciudad" required />

        <label>Método de envío</label>
        <select v-model="metodoEnvio">
          <option value="estandar">Estándar (Gratis)</option>
          <option value="express">Express (+$10.000)</option>
        </select>

        <label>Notas / Comentarios</label>
        <textarea v-model="comentarios" rows="3" />

        
      </form>

      <div class="summary">
        <OrderSummary :carrito="carrito" />
        <div class="shipping">
          <p><strong>Envío:</strong> {{ envioText }}</p>
          <p class="total-final"><strong>Total final:</strong> {{ totalFinal.toLocaleString() }} COP</p>
        
        </div>
        <div class="acciones">
          
          <ButtonPrime label="Comprar por WhatsApp" class="btn-whatsapp" :disabled="procesando" @click="comprarPorWhatsapp" />
        </div>
      </div>
    </div>

    <div v-if="procesando" class="overlay">Procesando pago...</div>

    <div v-if="ordenCreada" class="confirm">
      <h3>Orden creada — #{{ ordenCreada.id }}</h3>
      <p><strong>Fecha:</strong> {{ new Date(ordenCreada.fecha).toLocaleString() }}</p>
      <p><strong>Cliente:</strong> {{ ordenCreada.cliente.nombre }} — {{ ordenCreada.cliente.email }}</p>

      <div class="orden-items">
        <div v-for="it in ordenCreada.items" :key="it.id" class="it">
          <span>{{ it.nombre }} x{{ it.cantidad }}</span>
          <span>{{ (it.cantidad * it.precio * (1 - (it.descuento||0)/100)).toLocaleString() }} COP</span>
        </div>
      </div>

      <p class="total-confirm"><strong>Total:</strong> {{ ordenCreada.total.toLocaleString() }} COP</p>

      <div class="confirm-actions">
        <router-link to="/orders">
          <ButtonPrime label="Ver mis pedidos" class="p-button-outlined" />
        </router-link>
        <ButtonPrime @click="ordenCreada = null" label="Cerrar" class="p-button-secondary" />
      </div>
    </div>

  </div>
</template>

<script>
import OrderSummary from "@/extras/OrderSummary.vue";

export default {
  name: "CheckoutView",
  components: { OrderSummary },
  data() {
    return {
      carrito: [],
      ordenCreada: null,
      cliente: {
        nombre: "",
        email: "",
        telefono: "",
        direccion: "",
        ciudad: "",
      },
      metodoEnvio: "estandar",
      comentarios: "",
      procesando: false,
    };
  },
  created() {
    const user = JSON.parse(localStorage.getItem("user")) || null;
    if (user) {
      this.cliente.nombre = user.userName || "";
      this.cliente.email = user.email || "";
    }
    this.cargarCarrito();
  },
  methods: {
    cargarCarrito() {
      this.carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    },
    calcularTotal() {
      return this.carrito.reduce(
        (sum, item) => sum + item.cantidad * item.precio * (1 - (item.descuento || 0) / 100),
        0
      );
    },
    procesarPago() {
      if (!this.carrito.length) {
        alert("El carrito está vacío.");
        return;
      }
      if (!this.cliente.nombre || !this.cliente.email || !this.cliente.telefono || !this.cliente.direccion) {
        alert("Completa los datos de envío.");
        return;
      }

      this.procesando = true;

      // Simula procesamiento de pago
      setTimeout(() => {
        const total = this.calcularTotal();
        const costoEnvio = this.metodoEnvio === "express" ? 10000 : 0;
        const totalFinal = total + costoEnvio;

          const usuario = JSON.parse(localStorage.getItem("user")) || null;
          const orden = {
            id: Date.now(),
            fecha: new Date().toISOString(),
            cliente: { ...this.cliente },
            usuario: usuario ? { userName: usuario.userName, email: usuario.email } : null,
            items: this.carrito,
            metodoEnvio: this.metodoEnvio,
            comentarios: this.comentarios,
            total: totalFinal,
            estado: "pagado (simulado)",
          };

        const pedidos = JSON.parse(localStorage.getItem("orders")) || [];
        pedidos.push(orden);
        localStorage.setItem("orders", JSON.stringify(pedidos));

        // Limpiar carrito
        localStorage.removeItem("carrito");
        window.dispatchEvent(new Event("update-cart"));

        this.procesando = false;
        // Guardar la orden y mostrar confirmación en pantalla
        this.ordenCreada = orden;
        alert(`Pago simulado exitoso. Orden #${orden.id} creada.`);
      }, 1400);
    },
    comprarPorWhatsapp() {
      if (!this.carrito.length) {
        alert('El carrito está vacío.');
        return;
      }
      if (!this.cliente.nombre || !this.cliente.email || !this.cliente.telefono || !this.cliente.direccion) {
        alert('Completa los datos de envío antes de enviar por WhatsApp.');
        return;
      }

      let mensaje = '*Nuevo pedido desde la tienda*%0A%0A';
      mensaje += `*Cliente:* ${this.cliente.nombre}%0A`;
      mensaje += `*Email:* ${this.cliente.email}%0A`;
      mensaje += `*Teléfono:* ${this.cliente.telefono}%0A`;
      mensaje += `*Dirección:* ${this.cliente.direccion}, ${this.cliente.ciudad}%0A`;
      mensaje += `*Método de envío:* ${this.envioText}%0A`;
      if (this.comentarios) mensaje += `*Notas:* ${this.comentarios}%0A`;
      mensaje += `%0A*Productos:*%0A`;

      this.carrito.forEach(item => {
        const subtotal = (item.cantidad * item.precio * (1 - (item.descuento||0)/100)).toLocaleString();
        mensaje += `- ${item.nombre} x${item.cantidad} — ${subtotal} COP%0A`;
      });

      mensaje += `%0A*TOTAL A PAGAR:* ${this.totalFinal.toLocaleString()} COP%0A`;

      // Número del vendedor/tienda (cambiar por el tuyo)
      const numeroWhatsapp = '573012345678';
      const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank');
    }
  },
  computed: {
    envioText() {
      return this.metodoEnvio === "express" ? "Express (+10.000 COP)" : "Estándar (Gratis)";
    },
    totalFinal() {
      const total = this.calcularTotal();
      const costoEnvio = this.metodoEnvio === "express" ? 10000 : 0;
      return total + costoEnvio;
    },
  },
};
</script>

<style scoped>
.btn-whatsapp {
  background: linear-gradient(135deg, #25d366, #128c7e) !important;
  border: none !important;
  color: white !important;
  padding: 0.8rem 1.5rem !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  border-radius: 12px !important;
  box-shadow: 0 4px 12px rgba(18, 140, 126, 0.4) !important;
  transition: transform 0.2s, box-shadow 0.3s !important;
}

.btn-whatsapp:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(18, 140, 126, 0.5) !important;
}

.btn-whatsapp:active {
  transform: scale(0.98);
}

.checkout {
  max-width: 1100px;
  margin: 30px auto;
  color: #fff;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 20px;
}
.form {
  background: #222;
  padding: 18px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form input, .form select, .form textarea {
  padding: 10px;
  border-radius: 8px;
  border: none;
  background: #333;
  color: #fff;
}
.summary { background: #111; padding: 12px; border-radius: 8px; }
.confirm { background: #0f0f0f; padding: 14px; border-radius: 8px; margin-top: 18px; }
.orden-items { margin-top: 8px; }
.orden-items .it { display:flex; justify-content:space-between; padding:6px 0; border-bottom:1px dashed rgba(255,255,255,0.03); }
.total-confirm { color: hotpink; font-weight: bold; margin-top: 8px; }
.confirm-actions { display:flex; gap:10px; margin-top: 12px; }
.shipping {
  margin-top: 12px;
  background: #111;
  padding: 12px;
  border-radius: 8px;
}
.total-final { color: hotpink; font-weight: bold; }
.acciones { margin-top: 8px; }
.overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.6);
  color: #fff;
  font-size: 1.2rem;
}
@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
