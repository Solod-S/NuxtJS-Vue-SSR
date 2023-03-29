export const state = () => ({ users: [] });
// useState

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
};
// setState (mutations)

export const actions = {
  async fetchAllUser({ commit }) {
    // получаем из контекста метод комит для работы с useState setState
    try {
      const users = await this.$axios.$get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // return users;
      return commit("setUsers", users);
    } catch (e) {
      throw e;
    }
  },
  async takeDate() {
    // console.log(new Date().toString());
    return new Date().toString();
  },

  async fetchUserById({}, userId) {
    // первый параметр контекст, можем достать там комит или диспатч
    //  дальше пейлоад
    const user = await this.$axios.$get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    // console.log(user);
    console.log(`fetchUserById`);
    return user;
  },
};
// перечисляем методы которые будут екшенами в єтом соре

export const getters = {
  users: (state) => state.users,
  users2: (state) => state.users,
};
//гетер
