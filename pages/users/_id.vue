<template>
  <h1>User with id: {{ this.$route.params.id }}</h1>
</template>

<script>
export default {
  validate({ params }) {
    console.log(params);
    return /^\d+$/.test(params.id);
    //проверка цифр
  },
  // если тру страница будет открыта
};
</script>
// динамический роут
