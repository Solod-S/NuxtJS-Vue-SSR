<template>
  <section>
    <h1>Error 401</h1>
    <nuxt-link :to="'/'">Home</nuxt-link>
  </section>
</template>
<style scoped>
h1 {
  color: red;
  margin-right: 10px;
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
// scoped === style only here
