<template>
  <div class="container">
    <h1>{{ user.name }}</h1>
    <hr />
    <p>{{ user.email }}</p>
    <p></p>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
    //проверка цифр
  },
  // если тру страница будет открыта
  async asyncData({ params, error, $axios, store }) {
    try {
      // const user = await $axios.$get(
      //   `https://jsonplaceholder.typicode.com/users/${params.id}`
      // );
      const user = await store.dispatch("users/fetchUserById", params.id);

      return { user };
    } catch (error) {
      error(error);
    }
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     // reject(error(new Error("USER NOT FOUND")));
    //     resolve({ user: { name: `Teddy user ${params.id}` } });
    //   }, 1000);
    // });
  },
};
</script>
// динамический роут
