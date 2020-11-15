<template>
  <InputTodoRenderless
    v-slot="{
      todos,
      inputProps: { value: todo },
      updateTodo,
      addTodo,
      removeTodo,
    }"
    v-model:todos="tasks"
  >
    <div class="px-4 py-2 w-full md:w-2/3 lg:w-1/2 mx-auto">
      <TodoInput :todo="todo" @update:todo="updateTodo" @add-todo="addTodo" />
      <TodoList :todos="todos" @delete-todo="removeTodo" />
    </div>
  </InputTodoRenderless>
</template>

<script>
import { ref } from 'vue'
import InputTodoRenderless from './InputTodoRenderless.vue'
import TodoInput from './TodoInput.vue'
import TodoList from './TodoList.vue'

export default {
  name: 'TodoAppUsingRenderless',
  components: { InputTodoRenderless, TodoInput, TodoList },
  data: () => ({
    tasks: ['Belajar renderless component', 'Makan tepat waktu'],
  }),
}
</script>
