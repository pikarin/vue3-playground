<template>
  <h1 class="mt-4 text-center text-2xl">Todo App</h1>

  <h2 class="mt-4 text-center text-xl">Menggunakan Renderless Component</h2>
  <TodoAppUsingRenderless class="mt-2 bg-indigo-200 rounded shadow-md" />

  <h2 class="mt-6 text-center text-xl">Menggunakan Composition API</h2>
  <TodoAppUsingComposition class="mt-2 bg-blue-200 rounded shadow-md" />
</template>

<script>
import TodoAppUsingComposition from './TodoAppUsingComposition.vue'
import TodoAppUsingRenderless from './TodoAppUsingRenderless.vue'

export default {
  name: 'ShowcaseTodoApp',
  components: { TodoAppUsingComposition, TodoAppUsingRenderless },
}
</script>
