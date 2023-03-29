<template>
  <div>
    <div class="container centered">
      <h1>{{ pageTitle }}</h1>
    </div>
    <div class="container">
      <ul class="userList">
        <li v-for="user of users" :key="user.phone">
          <a href="#" @click.prevent="goTo(user)">
            {{ user.name }} => {{ user.email }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: "Users Page",
    };
    // users: [1, 2, 3, 4, 5],
  },
  methods: {
    goTo(user) {
      this.$router.push("/users/" + user.id);
    },
  },
  async fetch({ store, error }) {
    try {
      if (store.getters["users/users"].length === 0) {
        await store.dispatch("users/fetchAllUser");
      }
    } catch (e) {
      error(e);
    }
  },
  // фетчим данные в VUEX(сторе)
  computed: {
    users() {
      return this.$store.getters["users/users"];
    },
  },
  // для обращения к VUEX(стору) за гетером
  // забираем гетером данные

  // async asyncData({ $axios, error, store }) {
  //   try {
  //     const users = await store.dispatch("users/fetchAllUser");

  //     // return { users };
  //     // без гетера
  //   } catch (error) {
  //     error(e);
  //   }

  // ждем стор, передаем в диспатч екшен (путь), ждем промис с ответом
  // return $axios
  //   .$get("https://jsonplaceholder.typicode.com/users")
  //   .then((users) => {
  //     return { users };
  //   })
  //   .catch((err) => error(err));
  // -----------------
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({ users: [1, 2, 3, 4, 5] });
  //   }, 1000);
  // });
  // },
};
</script>

<style>
.centered {
  text-align: center;
  margin-bottom: 40px;
}
.userList {
  text-align: center;
}
</style>
