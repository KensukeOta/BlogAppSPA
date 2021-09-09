<template>
  <div>
    <p>{{ user.name }}さん、ようこそ！</p>
    <button type="button" @click="logout">ログアウト</button>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const user = await $axios.$get('/api/user');
    return {
      user
    }
  },
  data () {
    return {

    }
  },
  methods: {
    async logout() {
      this.$axios.$post('/api/logout')
        .then(response => {
          console.log(response);
          this.$router.push('/login');
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>

