<template>
  <h1 class="mt-4 text-center text-2xl">Todo App</h1>

  <h2 class="mt-4 text-center text-xl">Menggunakan Renderless Component</h2>
  <TodoAppUsingRenderless class="mt-2 bg-indigo-200 rounded shadow-md" />

  <p class="mt-4 text-center">
    <a
      class="inline-flex items-center text-gray-700 hover:text-gray-900"
      href="https://github.com/pikarin/vue3-playground/blob/main/src/components/TodoAppUsingRenderless.vue"
      target="_blank"
    >
      <span class="inline-block">Lihat source code di sini</span>
      <svg
        class="inline-block ml-1 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </p>

  <h2 class="mt-16 text-center text-xl">Menggunakan Composition API</h2>
  <TodoAppUsingComposition class="mt-2 bg-blue-200 rounded shadow-md" />

  <p class="mt-4 text-center">
    <a
      class="inline-flex items-center text-gray-700 hover:text-gray-900"
      href="https://github.com/pikarin/vue3-playground/blob/main/src/components/TodoAppUsingComposition.vue"
      target="_blank"
    >
      <span class="inline-block">Lihat source code di sini</span>
      <svg
        class="inline-block ml-1 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </p>
</template>

<script>
import TodoAppUsingComposition from './TodoAppUsingComposition.vue'
import TodoAppUsingRenderless from './TodoAppUsingRenderless.vue'

export default {
  name: 'ShowcaseTodoApp',
  components: { TodoAppUsingComposition, TodoAppUsingRenderless },
}
</script>
