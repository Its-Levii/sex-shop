<template>
  <nav class="navbar">
  <div class="logo">SexShop CBN</div>

  <button class="hamburger" @click="menuAbierto = !menuAbierto" aria-label="Abrir menú">
    <span></span>
    <span></span>
    <span></span>
  </button>

  <ul :class="['nav-links', { abierto: menuAbierto }]">
    <li><router-link to="/">Inicio</router-link></li>
    <li><router-link to="/catalogo">Productos</router-link></li>
    <li><router-link to="/contacto">Contacto</router-link></li>

      <li v-if="usuario">
        <router-link to="/orders">Pedidos</router-link>
      </li>

    <li v-if="usuario">
      <router-link to="/carrito">Mi Carrito ({{ carritoCount }})</router-link>
    </li>

    <div class="nav-usuario">
      <span v-if="usuario">Hola, {{ usuario.userName }}</span>
      <router-link v-else to="/login">Iniciar sesión</router-link>
      <button v-if="usuario" @click="cerrarSesion">Cerrar sesión</button>
      <router-link v-if="isAdmin" to="/admin" class="admin-link">Admin</router-link>
    </div>
  </ul>
</nav>

</template>

<script>
export default {
  data() {
    return {
      usuario: null,
      carritoCount: 0,
      menuAbierto: false,
    };
  },
  computed: {
    isAdmin() {
      return (
        this.usuario && (this.usuario.role === "admin" || this.usuario.userName === "admin")
      );
    },
  },
  created() {
    this.usuario = JSON.parse(localStorage.getItem("user"));

    window.addEventListener("user-login", this.actualizarUsuario);
    window.addEventListener("user-logout", this.actualizarUsuario);
    window.addEventListener("update-cart", this.actualizarCarrito);

    this.actualizarCarrito();
  },
  beforeUnmount() {
    window.removeEventListener("user-login", this.actualizarUsuario);
    window.removeEventListener("user-logout", this.actualizarUsuario);
    window.removeEventListener("update-cart", this.actualizarCarrito);
  },
  methods: {
    actualizarUsuario() {
      this.usuario = JSON.parse(localStorage.getItem("user"));
      this.actualizarCarrito();
    },
    actualizarCarrito() {
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      this.carritoCount = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    },
    cerrarSesion() {
      localStorage.removeItem("user");
      localStorage.removeItem("carrito");
      this.actualizarUsuario();
      window.dispatchEvent(new Event("user-logout"));
    },
  },
};

</script>


<style scoped>
.navbar {
  background: linear-gradient(90deg, #000, #33001b);
  padding: 15px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 22px;
  font-weight: bold;
  color: hotpink;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 25px;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  transition: 0.3s;
}

.nav-links li a:hover {
  color: hotpink;
}

.nav-links li a.router-link-active::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: hotpink;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.hamburger span {
  display: block;
  width: 28px;
  height: 3px;
  background: hotpink;
  border-radius: 2px;
  transition: 0.3s;
}

.user-name {
  color: hotpink;
  cursor: pointer;
  font-weight: bold;
}

.user-name:hover {
  color: #fff;
}

.nav-usuario {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: bold;
}

.nav-usuario span {
  color: hotpink;
  cursor: default;
}

.nav-usuario span:hover {
  color: #fff;
}

.nav-usuario a {
  color: hotpink;
  text-decoration: none;
  padding: 6px 12px;
  border: 2px solid hotpink;
  border-radius: 6px;
  transition: 0.3s;
  font-weight: bold;
}

.nav-usuario a:hover {
  background: hotpink;
  color: #fff;
}

.nav-usuario button {
  background: hotpink;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.nav-usuario button:hover {
  background: deeppink;
}


@media (max-width: 700px) {
  .nav-links {
    position: absolute;
    top: 60px;
    right: 40px;
    background: #1a0010;
    flex-direction: column;
    gap: 18px;
    padding: 18px 24px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    display: none;
    z-index: 10;
  }
  .nav-links.abierto {
    display: flex;
  }
  .hamburger {
    display: flex;
  }
}
</style>
