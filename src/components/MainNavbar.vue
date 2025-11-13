<template>
  <nav class="navbar">
    <div class="logo">SexShop CBN</div>

    <button class="hamburger" @click="menuAbierto = !menuAbierto" aria-label="Abrir menú">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul :class="['nav-links', { abierto: menuAbierto }]">
      <li>
        <router-link to="/">
          <span class="material-icons">home</span>
          Inicio
        </router-link>
      </li>

      <li>
        <router-link to="/catalogo">
          <span class="material-icons">local_mall</span>
          Productos
        </router-link>
      </li>

      <li>
        <router-link to="/contacto">
          <span class="material-icons">call</span>
          Contacto
        </router-link>
      </li>

      <li v-if="usuario">
        <router-link to="/orders">
          <span class="material-icons">assignment</span>
          Pedidos
        </router-link>
      </li>

      <li v-if="usuario">
        <router-link to="/carrito">
          <span class="material-icons">shopping_cart</span>
          Mi Carrito ({{ carritoCount }})
        </router-link>
      </li>

      <div class="nav-usuario">
        <span v-if="usuario">
          <span class="material-icons">account_circle</span>
          {{ usuario.userName }}
        </span>
        <router-link v-else to="/login">
          <span class="material-icons">login</span>
          Iniciar sesión
        </router-link>

        <button v-if="usuario" @click="cerrarSesion">
          <span class="material-icons">logout</span>
          Cerrar sesión
        </button>

        <router-link v-if="isAdmin" to="/admin" class="admin-link">
          <span class="material-icons">admin_panel_settings</span>
          Admin
        </router-link>
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
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.navbar {
  background: linear-gradient(90deg, #000, #33001b);
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 70px;
}

.logo {
  font-size: 22px;
  font-weight: bold;
  color: hotpink;
}

.nav-links {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 25px;
  margin: 0;
  padding: 0;
}

.nav-links li {
  display: flex;
  align-items: center;
}

.nav-links li a {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
  padding: 10px 12px;
  line-height: 1;
}

.nav-links li a .material-icons {
  font-size: 21px;
  color: hotpink;
  transition: 0.3s;
  position: relative;
  top: 1px;
}

.nav-links li a:hover {
  color: hotpink;
  transform: scale(1.05);
}

.nav-links li a:hover .material-icons {
  color: #fff;
  transform: scale(1.2);
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
  justify-content: center;
  height: 100%;
}

.hamburger span {
  display: block;
  width: 28px;
  height: 3px;
  background: hotpink;
  border-radius: 2px;
  transition: 0.3s;
}

.nav-usuario {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: bold;
}

.nav-usuario span,
.nav-usuario a,
.nav-usuario button {
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-usuario .material-icons {
  font-size: 20px;
}

.nav-usuario span {
  color: hotpink;
  cursor: default;
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

.nav-usuario button .material-icons {
  font-size: 18px;
}

@media (max-width: 700px) {
  .nav-links {
    position: absolute;
    top: 70px;
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
