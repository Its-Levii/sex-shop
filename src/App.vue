<script setup>
import MainNavbar from "@/components/MainNavbar.vue";
</script>

<template>
  <div class="app">
    <MainNavbar />
    <main>
      <router-view />
    </main>
    <footer>
      <p>© 2025 SexShop CBN | Todos los derechos reservados</p>
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #111;
  color: #f5f5f5;
}

main {
  padding: 20px;
  min-height: 80vh;
}

footer {
  text-align: center;
  padding: 15px;
  background: #222;
  color: #aaa;
  font-size: 14px;
}
</style>
