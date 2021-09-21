<template>
  <section>
    <h1>Login</h1>
    <form @submit.prevent="submit">
      <p class="error" v-if="errors.email">{{ errors.email[0] }}</p>
      <p class="error" v-if="errors.password">{{ errors.password[0] }}</p>
      <div>
        <label for="email">email</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">login</button>
    </form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      errors: [],
    };
  },
  methods: {
    async submit () {
      this.$axios.$get('/sanctum/csrf-cookie').then(response => {
        this.$axios.post('/api/login', {
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response);
          this.$router.push('/about');
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
      });
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
