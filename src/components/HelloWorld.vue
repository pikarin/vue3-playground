<template>
  <section class="container px-4 mx-auto text-center space-y-4">
    <h1>{{ msg }}</h1>
    <button
      class="px-4 py-2 shadow bg-blue-500 hover:bg-blue-600 rounded text-white"
      @click="count++"
    >
      count is: {{ count }}
    </button>
    <p>
      Edit <code>components/HelloWorld.vue</code> to test hot module
      replacement.
    </p>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: { type: String, required: true },
  },
  data() {
    return {
      count: 0,
    }
  },
}
</script>
