<template>
  <div class="register">
    <h2>Crear cuenta</h2>

    <form @submit.prevent="handleRegister">
      <input
        type="text"
        v-model="userName"
        placeholder="Nombre de usuario"
        required
      />
      <input
        type="email"
        v-model="email"
        placeholder="Correo electrónico"
        required
      />
      <input
        type="password"
        v-model="password"
        placeholder="Contraseña"
        required
      />
      <ButtonPrime type="submit" label="Registrarse" class="p-button-pink" />
    </form>

    <p class="login-text">
      ¿Ya tienes cuenta?
      <router-link to="/login" class="link">Inicia sesión aquí</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      userName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    handleRegister() {
      if (!this.userName || !this.email || !this.password) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      const userData = {
        userName: this.userName,
        email: this.email,
        password: this.password,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      window.dispatchEvent(new Event("user-login"));

      alert("Registro exitoso. ¡Bienvenido!");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: 80px auto;
  background: #222;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: hotpink;
  font-weight: bold;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  background-color: #333;
  color: #fff;
}

input::placeholder {
  color: #bbb;
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

.login-text {
  text-align: center;
  margin-top: 20px;
  color: #ccc;
}

.link {
  color: hotpink;
  font-weight: bold;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
  color: deeppink;
}
</style>
