export const actions = {
  async fetchUser() {
    try {
      const users = await this.$axios.$get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return users;
    } catch (e) {
      throw e;
    }
  },
};
// перечисляем методы которые будут екшенами в єтом соре
