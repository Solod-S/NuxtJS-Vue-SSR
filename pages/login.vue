<template>
  <form>
    <div class="form-group">
      <input type="text" class="fotm-control" />
    </div>
    <div class="form-group">
      <input type="password" class="fotm-control" />
    </div>
    <p>
      <nuxt-link to="/">Home</nuxt-link>
    </p>
    <button class="btn btn-primary">Login</button>
  </form>
</template>
<style scoped>
form {
  widows: 600px;
}
</style>
>

<script>
export default {
  layout: "empty",
};
</script>
// рендер в layouts/empty.vue (
<nuxt />
)
