<template>
  <div class="login">
    <h2>Iniciar Sesión</h2>

    <form @submit.prevent="handleLogin">
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
      <ButtonPrime type="submit" label="Iniciar sesión" class="p-button-pink" />
    </form>

    <p class="register-text">
      ¿No tienes cuenta?
      <router-link to="/register" class="link">Regístrate aquí</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (!savedUser) {
        alert("No hay usuarios registrados. Por favor, regístrate primero.");
        return;
      }

      if (
        savedUser.email === this.email &&
        savedUser.password === this.password
      ) {
        localStorage.setItem("user", JSON.stringify(savedUser));
        window.dispatchEvent(new Event("user-login"));
        this.$router.push("/");
      } else {
        alert("Correo o contraseña incorrectos.");
      }
    },
  },
};
</script>

<style scoped>
.login {
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

.register-text {
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
