<template>
  <div class="px-4 py-2 w-full lg:w-1/2 mx-auto">
    <TodoInput
      v-model:todo="todo"
      @click.prevent="addTodo"
      @keydown.enter="addTodo"
    />
    <TodoList :todos="todos" @delete-todo="deleteTodo" />
  </div>
</template>

<script>
import { ref } from 'vue'
import useTodos from '../composables/todos'
import TodoInput from './TodoInput.vue'
import TodoList from './TodoList.vue'

export default {
  name: 'TodoAppUsingComposition',
  components: { TodoInput, TodoList },
  setup() {
    const { inputTodo: todo, todos, addTodo, deleteTodo } = useTodos()

    return { todo, todos, addTodo, deleteTodo }
  },
}
</script>
