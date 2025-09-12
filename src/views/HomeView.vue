<template>
  <div>
    <!-- Carrusel de publicidad -->
    <div class="carrusel">
      <div
        v-for="(slide, idx) in slides"
        :key="idx"
        class="slide"
        :class="{ activo: idx === slideActual }"
      >
        <img :src="slide.imagen" :alt="slide.titulo" />
        <div class="texto">
          <h3>{{ slide.titulo }}</h3>
          <p>{{ slide.descripcion }}</p>
        </div>
      </div>
      <button class="prev" @click="prevSlide">&#10094;</button>
      <button class="next" @click="nextSlide">&#10095;</button>
      <div class="dots">
        <span
          v-for="(slide, idx) in slides"
          :key="idx"
          :class="{ dot: true, activo: idx === slideActual }"
          @click="goToSlide(idx)"
        ></span>
      </div>
    </div>

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
          <p class="precio">{{ producto.precio }} COP</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productos } from "@/data/productos.js";
import { slides } from "@/data/slides.js";

export default {
  name: "HomeView",
  data() {
    return {
      productosDestacados: productos.filter(p => p.destacado),
      slides,
      slideActual: 0,
      intervalo: null
    };
  },
  mounted() {
    this.iniciarCarrusel();
  },
  beforeUnmount() {
    clearInterval(this.intervalo);
  },
  methods: {
    verDetalles(id) {
      this.$router.push({ name: "producto-detalle", params: { id } });
    },
    nextSlide() {
      this.slideActual = (this.slideActual + 1) % this.slides.length;
    },
    prevSlide() {
      this.slideActual =
        (this.slideActual - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(idx) {
      this.slideActual = idx;
    },
    iniciarCarrusel() {
      this.intervalo = setInterval(() => {
        this.nextSlide();
      }, 4000);
    }
  }
};
</script>

<style scoped>
.carrusel {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 30px auto 40px auto;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.18);
  background: #222;
  min-height: 220px;
}

.slide {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0; top: 0;
  transition: opacity 0.6s;
  opacity: 0;
}

.slide.activo {
  display: block;
  position: relative;
  opacity: 1;
  transition: opacity 0.6s;
}

.slide img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
}

.texto {
  position: absolute;
  bottom: 18px;
  left: 20px;
  background: rgba(0,0,0,0.5);
  color: #fff;
  padding: 12px 20px;
  border-radius: 8px;
  max-width: 80%;
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: hotpink;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 22px;
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
}

.prev:hover, .next:hover {
  opacity: 1;
}

.prev {
  left: 10px;
}
.next {
  right: 10px;
}

.dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  opacity: 0.5;
  cursor: pointer;
  transition: background 0.3s, opacity 0.3s;
}

.dot.activo {
  background: hotpink;
  opacity: 1;
}

.titulo {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 25px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  background: #fff;
  color: #333;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.imagen-container {
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.imagen-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.info {
  padding: 15px;
  text-align: center;
}

.precio {
  color: hotpink;
  font-weight: bold;
  margin-top: 8px;
}
</style>
