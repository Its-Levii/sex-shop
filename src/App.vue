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
      <div class="footer-content">
        <div class="footer-section contacto">
          <h4>Contacto</h4>
          <p>Email: <a href="mailto:contacto@sexshopcbn.com">contacto@sexshopcbn.com</a></p>
          <p>Teléfono: <a href="tel:+525512345678">+52 55 1234 5678</a></p>
          <p>Dirección: Av. Principal 123, Ciudad de México, México</p>
        </div>
        <div class="footer-section redes">
          <h4>Redes Sociales</h4>
          <div class="redes-links">
            <a href="https://facebook.com/sexshopcbn" target="_blank" aria-label="Facebook">
              <span class="icon-facebook"></span>
            </a>
            <a href="https://instagram.com/sexshopcbn" target="_blank" aria-label="Instagram">
              <span class="icon-instagram"></span>
            </a>
            <a href="https://twitter.com/sexshopcbn" target="_blank" aria-label="Twitter/X">
              <span class="icon-twitter"></span>
            </a>
            <a href="https://tiktok.com/@sexshopcbn" target="_blank" aria-label="TikTok">
              <span class="icon-tiktok"></span>
            </a>
          </div>
        </div>
        <div class="footer-section privacidad">
          <h4>Términos y Privacidad</h4>
          <p>
            SexShop CBN respeta tu privacidad. Toda la información proporcionada es tratada de forma confidencial y segura. Consulta nuestros <a href="#">términos y condiciones</a> y <a href="#">política de privacidad</a> para más detalles sobre el uso de tus datos y derechos como usuario.
          </p>
        </div>
      </div>
      <div class="footer-copy">
        <p>© 2025 SexShop CBN | Todos los derechos reservados</p>
      </div>
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
  background: #222;
  color: #aaa;
  font-size: 15px;
  padding: 30px 0 0 0;
  margin-top: 40px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  max-width: 1100px;
  margin: auto;
  padding-bottom: 18px;
}

.footer-section {
  flex: 1 1 260px;
  min-width: 220px;
  margin-bottom: 18px;
}

.footer-section h4 {
  color: hotpink;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.footer-section a {
  color: hotpink;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-section a:hover {
  color: #fff;
  text-decoration: underline;
}

.redes-links {
  display: flex;
  gap: 18px;
  margin-top: 8px;
}

.redes-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.icon-facebook, .icon-instagram, .icon-twitter, .icon-tiktok {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
}

.icon-facebook {
  background-image: url('data:image/svg+xml;utf8,<svg fill="hotpink" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0z"/></svg>');
}
.icon-instagram {
  background-image: url('data:image/svg+xml;utf8,<svg fill="hotpink" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.414 3.635 1.381 2.668 2.348 2.385 3.521 2.326 4.798.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.277.342 2.45 1.309 3.417.967.967 2.14 1.25 3.417 1.309C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.059 2.45-.342 3.417-1.309.967-.967 1.25-2.14 1.309-3.417.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.277-.342-2.45-1.309-3.417-.967-.967-2.14-1.25-3.417-1.309C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>');
}

.icon-twitter {
  background-image: url('data:image/svg+xml;utf8,<svg fill="hotpink" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.917 0 .386.044.762.127 1.124C7.691 8.77 4.066 6.797 1.64 3.94c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.418A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"/></svg>');
}

.icon-tiktok {
  background-image: url('data:image/svg+xml;utf8,<svg fill="hotpink" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.004 2.003h3.002c.001 2.209 1.792 4 4.001 4v3.001c-1.657 0-3.001-1.343-3.001-3.001h-1.001v10.001c0 2.209-1.792 4.001-4.001 4.001s-4.001-1.792-4.001-4.001c0-2.209 1.792-4.001 4.001-4.001.345 0 .682.045 1.001.13V8.003c-.329-.042-.663-.13-1.001-.13-3.314 0-6.001 2.687-6.001 6.001s2.687 6.001 6.001 6.001c3.314 0 6.001-2.687 6.001-6.001V2.003z"/></svg>');
}

.footer-copy {
  text-align: center;
  padding: 12px 0 0 0;
  color: #aaa;
  font-size: 14px;
  border-top: 1px solid #333;
  margin-top: 18px;
}

@media (max-width: 900px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }
  .footer-section {
    min-width: 0;
    width: 100%;
    text-align: center;
  }
}
</style>