<template>
  <header
    class="bg-indigo-500 text-white bg-gradient-to-r from-indigo-500 to-blue-500"
  >
    <TheNav />
  </header>

  <RouterView />
</template>

<script>
import TheNav from './components/TheNav.vue'

export default {
  name: 'App',
  components: {TheNav}
}
</script>
