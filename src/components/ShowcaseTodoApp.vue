<template>
  <h1 class="mt-4 text-center text-2xl">Todo App</h1>
  <h2 class="mt-4 text-center text-xl-">Menggunakan Renderless Component</h2>
  <InputTodoRenderless
    v-slot="{ todos, addTodo, removeButtonEvents, inputProps, inputEvents }"
    v-model:todos="tasks"
  >
    <div
      class="mt-2 px-4 py-2 w-full lg:w-1/2 mx-auto bg-indigo-200 rounded shadow-md"
    >
      <div class="flex mb-4">
        <input
          type="text"
          v-bind="inputProps"
          class="flex-1 mr-2 border rounded py-2 px-4"
          v-on="inputEvents"
        />
        <BaseButton color="indigo" @click="addTodo">Tambah Todo</BaseButton>
      </div>
      <ul class="pl-6 font-semibold text-gray-700 space-y-3">
        <li v-for="todo in todos" :key="todo">
          {{ todo }}
          <button
            class="text-sm text-gray-600 underline ml-2 hover:text-gray-700"
            v-on="removeButtonEvents(todo)"
          >
            Hapus
          </button>
        </li>
      </ul>
    </div>
  </InputTodoRenderless>

  <!-- <h2>Menggunakan Composition API</h2> -->
</template>

<script>
import InputTodoRenderless from './InputTodoRenderless.vue'
import BaseButton from './BaseButton.vue'

export default {
  name: 'ShowcaseTodoApp',
  components: { InputTodoRenderless, BaseButton },
  data: () => ({
    tasks: ['Belajar composition API', 'Tidur tepat waktu'],
  }),
}
</script>
