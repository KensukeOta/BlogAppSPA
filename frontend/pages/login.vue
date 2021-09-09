<template>
  <section>
    <h1>Login</h1>
    <form @submit.prevent="submit">
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
      password: ''
    }
  },
  methods: {
    async submit () {
      this.$axios.$get('/sanctum/csrf-cookie').then(response => {
        this.$axios.$post('/api/login', {
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response);
          this.$router.push('/about');
        })
        .catch(error => {
          console.log(error);
        });
      });
    }
  }
}
</script>
