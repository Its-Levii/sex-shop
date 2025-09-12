<template>
  <div class="contacto">
    <h2>Contáctanos</h2>
    <form>
      <input type="text" placeholder="Tu nombre: " required />
      <input type="email" placeholder="Tu correo: " required />
      <textarea placeholder="Tu mensaje: " required></textarea>
      <button type="submit">Enviar</button>
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

button {
  background: hotpink;
  border: none;
  padding: 12px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: deeppink;
}
</style>
