<template>
  <section>
    <h1>Register</h1>
    <form @submit.prevent="submit">
      <p class="error" v-if="errors.name">{{ errors.name[0] }}</p>
      <p class="error" v-if="errors.email">{{ errors.email[0] }}</p>
      <p class="error" v-if="errors.password">{{ errors.password[0] }}</p>
      <div>
        <label for="name">name</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="email">email</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div>
        <label for="password_confirmation">password_confirmation</label>
        <input type="password" id="password_confirmation" v-model="password_confirmation" />
      </div>
      <button type="submit">register</button>
    </form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: [],
    };
  },
  methods: {
    async submit () {
      this.$axios.$get('/sanctum/csrf-cookie').then(response => {
        this.$axios.post('/api/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        .then(response => {
          console.log(response);
          this.$router.push('/');
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
