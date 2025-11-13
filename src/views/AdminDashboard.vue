<template>
  <div class="admin">
    <h2>Admin Dashboard</h2>
    <div class="search-box">
      <input v-model="searchText" placeholder="Buscar productos, órdenes o cliente..." />
    </div>

    <section class="panel">
      <h3>Productos</h3>

      <div class="add-form">
        <input v-model="nuevo.nombre" placeholder="Nombre" />
        <input v-model.number="nuevo.precio" placeholder="Precio" />
        <input v-model="nuevo.categoria" placeholder="Categoría" />
        <input v-model="nuevo.imagen" placeholder="URL imagen" />
        <input v-model.number="nuevo.descuento" placeholder="Descuento %" />
        <button @click="agregarProducto" class="btn">Agregar</button>
      </div>

      <div class="lista">
        <div v-for="p in filteredProducts" :key="p.id" class="prod">
          <img :src="p.imagen" alt="" />
          <div class="info">
            <div class="name">{{ p.nombre }}</div>
            <div class="meta">{{ p.categoria }} — {{ p.precio.toLocaleString() }} COP</div>
          </div>
          <div class="acciones">
            <button @click="eliminarProducto(p.id)" class="btn-danger">Eliminar</button>
          </div>
        </div>
      </div>
    </section>

    <section class="panel">
      <h3>Órdenes</h3>
      <div v-if="orders.length">
        <div v-for="o in filteredOrders" :key="o.id" class="order">
          <div class="head">
            <div>Orden #{{ o.id }}</div>
            <div>{{ formatFecha(o.fecha) }}</div>
          </div>
          <div class="body">
            <div class="items">
              <div v-for="it in o.items" :key="it.id" class="it">
                <span>{{ it.nombre }} x{{ it.cantidad }}</span>
                <span>{{ (it.cantidad * it.precio * (1 - (it.descuento||0)/100)).toLocaleString() }} COP</span>
              </div>
            </div>
            <div class="order-actions">
              <span><strong>Total:</strong> {{ o.total.toLocaleString() }} COP</span>
              <select v-model="o.estado">
                <option>pagado (simulado)</option>
                <option>procesando</option>
                <option>enviado</option>
                <option>completado</option>
                <option>cancelado</option>
              </select>
              <button @click="guardarEstado(o)" class="btn">Guardar</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No hay órdenes guardadas.</p>
      </div>
    </section>
  </div>
</template>

<script>
import { productos as baseProductos } from "@/data/productos.js";

export default {
  name: "AdminDashboard",
  data() {
    return {
      products: [],
      orders: [],
      searchText: '',
      nuevo: {
        nombre: "",
        precio: 0,
        categoria: "",
        imagen: "",
        descuento: 0,
      },
    };
  },
  created() {
    const stored = JSON.parse(localStorage.getItem("productos_admin"));
    this.products = stored && stored.length ? stored : JSON.parse(JSON.stringify(baseProductos));
    this.orders = JSON.parse(localStorage.getItem("orders")) || [];
  },
  methods: {
    formatFecha(f) {
      try { return new Date(f).toLocaleString(); } catch(e){ return f; }
    },
    guardarProductos() {
      localStorage.setItem("productos_admin", JSON.stringify(this.products));
    },
    eliminarProducto(id) {
      if (!confirm("Eliminar producto?")) return;
      this.products = this.products.filter(p => p.id !== id);
      this.guardarProductos();
      alert("Producto eliminado (local)." );
    },
    agregarProducto() {
      if (!this.nuevo.nombre) { alert('Nombre requerido'); return; }
      const id = Date.now();
      const p = { id, nombre: this.nuevo.nombre, precio: Number(this.nuevo.precio) || 0, categoria: this.nuevo.categoria || 'Sin categoría', imagen: this.nuevo.imagen || '', descuento: Number(this.nuevo.descuento)||0 };
      this.products.unshift(p);
      this.guardarProductos();
      this.nuevo = { nombre:'', precio:0, categoria:'', imagen:'', descuento:0 };
      alert('Producto agregado (local).');
    },
    guardarEstado(o) {
      const idx = this.orders.findIndex(x => x.id === o.id);
      if (idx !== -1) {
        this.orders.splice(idx, 1, o);
      }
      localStorage.setItem('orders', JSON.stringify(this.orders));
      alert('Estado de orden actualizado.');
    }
  }
  ,
  computed: {
    filteredProducts() {
      if (!this.searchText) return this.products;
      const q = this.searchText.toLowerCase();
      return this.products.filter(p => (p.nombre || '').toLowerCase().includes(q) || (p.categoria||'').toLowerCase().includes(q) );
    },
    filteredOrders() {
      if (!this.searchText) return this.orders;
      const q = this.searchText.toLowerCase();
      return this.orders.filter(o => {
        if ((o.id + '').includes(q)) return true;
        if ((o.cliente && o.cliente.nombre && o.cliente.nombre.toLowerCase().includes(q))) return true;
        if (o.usuario && o.usuario.userName && o.usuario.userName.toLowerCase().includes(q)) return true;
       
        for (const it of (o.items||[])) {
          if ((it.nombre||'').toLowerCase().includes(q)) return true;
        }
        return false;
      });
    }
  }
};
</script>

<style scoped>
.admin { max-width: 1100px; margin: 24px auto; color: #fff; }
.panel { background: #1b1b1b; padding: 14px; border-radius: 10px; margin-bottom: 18px; }
.add-form { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px; }
.add-form input { padding:8px; border-radius:6px; border:none; background:#222; color:#fff; }
.btn { background: hotpink; border:none; color:#fff; padding:6px 10px; border-radius:6px; cursor:pointer; }
.btn-danger { background:#c62828; color:#fff; border:none; padding:6px 10px; border-radius:6px; cursor:pointer; }
.lista { display:flex; flex-direction:column; gap:10px; }
.prod { display:flex; gap:12px; align-items:center; padding:8px; background:#111; border-radius:8px; }
.prod img { width:64px; height:64px; object-fit:contain; background:#fff; border-radius:6px; }
.prod .info { flex:1; }
.order { background:#0f0f0f; padding:10px; border-radius:8px; margin-bottom:8px; }
.order .head { display:flex; justify-content:space-between; color:hotpink; margin-bottom:8px; }
.it { display:flex; justify-content:space-between; padding:6px 0; border-bottom:1px dashed rgba(255,255,255,0.03); }
.order-actions { display:flex; gap:10px; align-items:center; margin-top:8px; }
select { padding:6px; border-radius:6px; background:#222; color:#fff; border:none; }

.search-box { margin: 12px 0; }
.search-box input { width: 100%; max-width: 480px; padding: 10px; border-radius: 8px; border: none; background: #222; color: #fff; }
</style>
