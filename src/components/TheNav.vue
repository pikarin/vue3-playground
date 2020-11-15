<template>
  <nav class="container px-4 md:px-0 mx-auto items-center">
    <RouterLink
      v-for="route in routes"
      :key="route.name"
      class="inline-block px-3 py-3 hover:bg-indigo-700 hover:bg-opacity-75 hover:text-white"
      :to="{ name: route.name }"
      v-text="route.text"
    />
  </nav>
</template>

<script>
export default {
  name: 'TheNav',
  data: () => ({
    routes: [
      {name: 'home', text: 'Buttons'},
      {name: 'todoapp', text: 'Todo App'},
    ]
  })
}
</script>

<style scoped>
.router-link-active {
  @apply bg-indigo-700 bg-opacity-75;
}
</style>
