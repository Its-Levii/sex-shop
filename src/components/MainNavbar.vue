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
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MainNavbar",
  data() {
    return {
      menuAbierto: false
    };
  }
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
