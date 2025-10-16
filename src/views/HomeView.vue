<template>
  <div class="home-container">
    <CarouselPrime
      :value="slides"
      :numVisible="1"
      :numScroll="1"
      :circular="true"
      :autoplayInterval="5000"
      class="carousel-publicidad"
    >
      <template #item="slotProps">
        <div class="banner-slide">
          <img :src="slotProps.data.imagen" :alt="slotProps.data.titulo" />
          <div class="banner-texto">
            <h3>{{ slotProps.data.titulo }}</h3>
            <p>{{ slotProps.data.descripcion }}</p>
          </div>
        </div>
      </template>
    </CarouselPrime>

    <section class="seccion">
      <h2 class="titulo">Productos Destacados</h2>
      <div class="grid">
        <div
          v-for="producto in productosDestacados"
          :key="producto.id"
          class="card"
          @click="verDetalles(producto.id)"
        >
          <div class="imagen-container">
            <img :src="producto.imagen" :alt="producto.nombre" />
          </div>
          <div class="info">
            <h3>{{ producto.nombre }}</h3>
            <p class="precio">{{ producto.precio.toLocaleString() }} COP</p>
          </div>
        </div>
      </div>
    </section>

    <section class="seccion descuentos">
      <h2 class="titulo">Grandes Descuentos</h2>
      <div class="grid">
        <div
          v-for="producto in productosConDescuento"
          :key="producto.id"
          class="card"
          @click="verDetalles(producto.id)"
        >
          <div class="imagen-container">
            <img :src="producto.imagen" :alt="producto.nombre" />
            <div class="descuento-badge">-{{ producto.descuento }}%</div>
          </div>
          <div class="info">
            <h3>{{ producto.nombre }}</h3>
            <p class="precio">
              <span class="precio-antiguo">{{ producto.precio.toLocaleString() }} COP</span>
              <span class="precio-descuento">{{
                (producto.precio * (1 - producto.descuento / 100)).toLocaleString()
              }} COP</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { productos } from "@/data/productos.js";
import { slides } from "@/data/slides.js";

export default {
  name: "HomeView",
  data() {
    return {
      productos,
      slides,
    };
  },
  computed: {
    productosDestacados() {
      return this.productos.filter((p) => p.destacado);
    },
    productosConDescuento() {
      return this.productos
        .filter((p) => p.descuento >= 20)
        .sort((a, b) => b.descuento - a.descuento);
    },
  },
  methods: {
    verDetalles(id) {
      this.$router.push({ name: "producto-detalle", params: { id } });
    },
  },
};
</script>

<style scoped>
.home-container {
  background-color: #fafafa;
  color: #222;
}

.carousel-publicidad {
  max-width: 100%;
  margin: 20px auto 50px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.banner-slide {
  position: relative;
  width: 100%;
  height: 320px;
}

.banner-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-texto {
  position: absolute;
  bottom: 20px;
  left: 30px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 12px 20px;
  color: #fff;
  border-radius: 8px;
  max-width: 80%;
}

.banner-texto h3 {
  margin: 0 0 6px;
  font-size: 1.4rem;
}

.seccion {
  padding: 40px 20px;
}

.seccion.descuentos {
  background-color: #fff0f5;
}

.titulo {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin: 50px 0 30px;
  color: #222;
  letter-spacing: 1px;
  position: relative;
}

.titulo::after {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #ff4081, #ff80ab);
  margin: 10px auto 0;
  border-radius: 2px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  padding: 20px 40px;
}

.card {
  position: relative;
  background: linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%);
  color: #222;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
}

.card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 8px 20px rgba(255, 64, 129, 0.3);
}

.imagen-container {
  position: relative;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.imagen-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.4s ease;
}

.card:hover .imagen-container img {
  transform: scale(1.1);
}

.descuento-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: linear-gradient(135deg, #ff4081, #ff80ab);
  color: #fff;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: bold;
  box-shadow: 0 3px 6px rgba(255, 64, 129, 0.3);
}

.info {
  padding: 16px 14px 20px;
  text-align: center;
}

.info h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #222;
  transition: color 0.3s;
}


.precio {
  color: #ff4081;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 4px;
}

.precio-antiguo {
  display: inline-block;
  text-decoration: line-through;
  color: #999;
  margin-right: 6px;
  font-size: 0.9rem;
}


.precio-descuento {
  color: #d81b60;
  font-weight: bold;
}

.ver-mas {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.btn-ver-mas {
  background: #e91e63;
  color: #fff;
  border: none;
  padding: 10px 25px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  font-weight: bold;
}

.btn-ver-mas:hover {
  background: #c2185b;
}
</style>

