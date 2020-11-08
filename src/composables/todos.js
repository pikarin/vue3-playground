import { computed, reactive, ref, toRefs } from 'vue'

export default () => {
  const state = reactive({
    todos: ['Belajar composition API', 'Tidur tepat waktu'],
    inputTodo: '',
    newTodo: computed(() => state.inputTodo.trim()),
  })

  const addTodo = () => {
    if (state.newTodo.length === 0 || state.todos.includes(state.newTodo)) {
      return
    }

    state.todos = [state.newTodo, ...state.todos]
    state.inputTodo = ''
  }

  const deleteTodo = (todo) => {
    const i = state.todos.indexOf(todo)
    state.todos.splice(i, 1)
  }

  return { ...toRefs(state), addTodo, deleteTodo }
}
