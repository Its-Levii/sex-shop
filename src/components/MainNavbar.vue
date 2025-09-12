<template>
  <nav class="navbar">
    <div class="logo">SexShop CBN</div>
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/catalogo">Productos</router-link></li>
      <li><router-link to="/contacto">Contacto</router-link></li>
    </ul>
  </nav>
</template>

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

ul {
  display: flex;
  list-style: none;
  gap: 25px;
}

a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  transition: 0.3s;
}

a:hover {
  color: hotpink;
}

a.router-link-active::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: hotpink;
}
</style>
