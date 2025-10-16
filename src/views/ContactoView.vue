<template>
  <div class="contacto">
    <h2>Contáctanos</h2>
    <div class="info-extra">
        <h3>Información de Contacto</h3>
      <p>
        Puedes comunicarte con nosotros a través de los siguientes medios:<br>
        <strong>Email:</strong> contacto@sexshop.com<br>
        <strong>Teléfono:</strong> +52 55 1234 5678<br>
        <strong>Dirección:</strong> Av. Principal 123, Ciudad de México, México
      </p>
      <h3>Redes Sociales</h3>
      <ul class="redes">
        <li>
          <a href="https://facebook.com/sexshop" target="_blank">
            <span class="icon-facebook"></span> Facebook
          </a>
        </li>
        <li>
          <a href="https://instagram.com/sexshop" target="_blank">
            <span class="icon-instagram"></span> Instagram
          </a>
        </li>
        <li>
          <a href="https://twitter.com/sexshop" target="_blank">
            <span class="icon-twitter"></span> Twitter/X
          </a>
        </li>
        <li>
          <a href="https://tiktok.com/@sexshop" target="_blank">
            <span class="icon-tiktok"></span> TikTok
          </a>
        </li>
      </ul>
      <h3>Políticas de Uso y Privacidad</h3>
      <p>
        En SexShop nos comprometemos a proteger la privacidad y seguridad de todos nuestros usuarios. La información personal que nos proporciones será utilizada únicamente para procesar tus solicitudes y mejorar tu experiencia en nuestro sitio. No compartimos tus datos con terceros sin tu consentimiento, y aplicamos medidas de seguridad avanzadas para garantizar la confidencialidad de tu información. Te invitamos a consultar nuestra política de privacidad completa para conocer más detalles sobre el tratamiento de tus datos, tus derechos y cómo puedes ejercerlos.
      </p>
      <p>
        El uso de nuestra plataforma implica la aceptación de nuestras condiciones y políticas. Nos reservamos el derecho de modificar estas políticas en cualquier momento, por lo que te recomendamos revisarlas periódicamente. Si tienes dudas o inquietudes sobre el manejo de tu información, puedes contactarnos a través de los medios disponibles en esta página.
      </p>
      <h3>Licencias y Certificados</h3>
      <p>
        Todos los productos ofrecidos en SexShop cuentan con licencias y certificados que garantizan su calidad, seguridad y cumplimiento de las normativas vigentes. Trabajamos únicamente con proveedores reconocidos y productos que han sido sometidos a rigurosos controles de calidad. Nuestro compromiso es ofrecerte artículos confiables y seguros para tu bienestar.
      </p>
      <p>
        Si deseas obtener información específica sobre las certificaciones de algún producto, puedes solicitarla a través de nuestro formulario de contacto. Estamos a tu disposición para brindarte la documentación necesaria y resolver cualquier consulta relacionada con licencias, permisos o estándares de calidad.
      </p>
    </div>
    <h1>Soporte Al Cliente</h1>
    <h4>si tienes mas dudas, quejas o inquietudes puedes dejanos un mensaje de lo que necesites y nosotros trataremos de ayudarte :)</h4>
    <form>
      <input type="text" placeholder="Tu nombre: " required />
      <input type="email" placeholder="Tu correo: " required />
      <textarea placeholder="Tu mensaje: " required></textarea>
      <ButtonPrime type="submit" label="Enviar" class="p-button-pink" />
    </form>
  </div>
</template>

<style scoped>
.contacto {
  max-width: 600px;
  margin: auto;
  background: #222;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input, textarea {
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
}

textarea {
  min-height: 100px;
  resize: none;
}

::v-deep(.p-button.p-button-pink) {
  background-color: hotpink !important;
  border: none !important;
  color: white !important;
  font-weight: bold;
  transition: 0.3s;
  padding: 12px;
  border-radius: 8px;
}

::v-deep(.p-button.p-button-pink:hover) {
  background-color: deeppink !important;
}


.info-extra {
  margin-bottom: 30px;
  margin-top: 30px;
  background: #333;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
}

.info-extra h3 {
  margin-bottom: 8px;
}

.redes {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 15px;
  margin-top: 10px;
  margin-bottom: 50px;
}

.redes li a {
  color: hotpink;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
}

.redes li a:hover {
  color: #fff;
  text-decoration: underline;
}

.icon-facebook {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url('data:image/svg+xml;utf8,<svg fill="hotpink" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0z"/></svg>') no-repeat center/contain;
}

.icon-instagram {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url('data:image/svg+xml;utf8,<svg fill="hotpink" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.414 3.635 1.381 2.668 2.348 2.385 3.521 2.326 4.798.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.277.342 2.45 1.309 3.417.967.967 2.14 1.25 3.417 1.309C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.059 2.45-.342 3.417-1.309.967-.967 1.25-2.14 1.309-3.417.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.277-.342-2.45-1.309-3.417-.967-.967-2.14-1.25-3.417-1.309C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>') no-repeat center/contain;
}

.icon-twitter {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url('data:image/svg+xml;utf8,<svg fill="hotpink" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.917 0 .386.044.762.127 1.124C7.691 8.77 4.066 6.797 1.64 3.94c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.418A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"/></svg>') no-repeat center/contain;
}

.icon-tiktok {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url('data:image/svg+xml;utf8,<svg fill="hotpink" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.004 2.003h3.002c.001 2.209 1.792 4 4.001 4v3.001c-1.657 0-3.001-1.343-3.001-3.001h-1.001v10.001c0 2.209-1.792 4.001-4.001 4.001s-4.001-1.792-4.001-4.001c0-2.209 1.792-4.001 4.001-4.001.345 0 .682.045 1.001.13V8.003c-.329-.042-.663-.13-1.001-.13-3.314 0-6.001 2.687-6.001 6.001s2.687 6.001 6.001 6.001c3.314 0 6.001-2.687 6.001-6.001V2.003z"/></svg>') no-repeat center/contain;
}
</style>
