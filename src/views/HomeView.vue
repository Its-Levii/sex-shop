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
              <span class="precio-descuento">
                {{ (producto.precio * (1 - producto.descuento / 100)).toLocaleString() }} COP
              </span>
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
      slides
    };
  },
  computed: {
    productosDestacados() {
      return this.productos.filter(p => p.destacado);
    },
    productosConDescuento() {
      return this.productos
        .filter(p => p.descuento >= 20)
        .sort((a, b) => b.descuento - a.descuento);
    }
  },
  methods: {
    verDetalles(id) {
      this.$router.push({ name: "producto-detalle", params: { id } });
    }
  }
};
</script>

<style scoped>
.home-container {
  background: #fdfdfd;
  color: #1a1a1a;
  font-family: "Poppins", sans-serif;
}

.carousel-publicidad {
  width: 100%;
  max-width: 1400px;
  margin: 30px auto 60px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
}

.banner-slide {
  position: relative;
  width: 100%;
  height: 360px;
}

.banner-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9);
  transition: filter 0.5s ease;
}

.banner-slide:hover img {
  filter: brightness(1);
}

.banner-texto {
  position: absolute;
  bottom: 40px;
  left: 50px;
  background: rgba(0, 0, 0, 0.55);
  padding: 20px 28px;
  border-radius: 10px;
  color: #fff;
  backdrop-filter: blur(3px);
  max-width: 70%;
}

.banner-texto h3 {
  font-size: 1.8rem;
  margin-bottom: 8px;
  font-weight: 600;
}

.banner-texto p {
  font-size: 1rem;
  opacity: 0.9;
}

.seccion {
  padding: 60px 30px;
}

.seccion.descuentos {
  background: #fff3f8;
}

.titulo {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 45px;
  color: #111;
  position: relative;
}

.titulo::after {
  content: "";
  width: 90px;
  height: 4px;
  background: linear-gradient(90deg, #ff4081, #ff80ab);
  display: block;
  margin: 12px auto 0;
  border-radius: 2px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  padding: 0 40px;
}

.card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 26px rgba(255, 64, 129, 0.25);
}

.imagen-container {
  position: relative;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.imagen-container img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  transition: transform 0.4s ease;
}

.card:hover .imagen-container img {
  transform: scale(1.05);
}

.descuento-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: linear-gradient(135deg, #ff4081, #ff80ab);
  color: #fff;
  padding: 6px 14px;
  border-radius: 14px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 3px 6px rgba(255, 64, 129, 0.3);
}

.info {
  text-align: center;
  padding: 18px 14px 24px;
}

.info h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 6px;
}

.precio {
  color: #e91e63;
  font-size: 1.1rem;
  font-weight: 700;
}

.precio-antiguo {
  text-decoration: line-through;
  color: #999;
  margin-right: 8px;
  font-size: 0.95rem;
}

.precio-descuento {
  color: #c2185b;
  font-weight: 700;
}

@media (max-width: 768px) {
  .banner-slide {
    height: 260px;
  }
  .banner-texto {
    bottom: 20px;
    left: 20px;
    padding: 14px 18px;
    max-width: 90%;
  }
  .banner-texto h3 {
    font-size: 1.4rem;
  }
  .banner-texto p {
    font-size: 0.9rem;
  }
  .grid {
    padding: 0 15px;
  }
}
</style>
