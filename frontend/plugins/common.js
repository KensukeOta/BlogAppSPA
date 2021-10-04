const getAuthUser = async function () {
  try {
    const res = await this.$axios.$get('/api/user');
    this.user = res;
  } catch (error) {
    console.log(error);
  }
};

export default ({ }, inject) => {
  inject('getAuthUser', getAuthUser);
}
