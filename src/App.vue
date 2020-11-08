<template>
  <img class="mx-auto h-20" alt="Vue logo" src="./assets/logo.png" />
  <!-- <ShowcaseButtons /> -->
  <ShowcaseTodoApp />
</template>

<script>
import ShowcaseButtons from './components/ShowcaseButtons.vue'
import ShowcaseTodoApp from './components/ShowcaseTodoApp.vue'

export default {
  name: 'App',
  components: {
    // ShowcaseButtons,
    ShowcaseTodoApp,
  },
}
</script>
