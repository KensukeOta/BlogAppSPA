<template>
  <div>
    {{ user.name }}さん、ようこそ！
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const user = await $axios.$get('/api/user');
    return {
      user
    }
  }
}
</script>

