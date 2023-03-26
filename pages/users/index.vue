<template>
  <div>
    <div class="container centered">
      <h1>This is user page</h1>
    </div>
    <div class="container">
      <ul class="userList">
        <li v-for="user of users" :key="user">
          <a href="#" @click.prevent="goTo(user)"> User: {{ user }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    users: [1, 2, 3, 4, 5],
  }),
  methods: {
    goTo(user) {
      this.$router.push("/users/" + user);
    },
  },
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
