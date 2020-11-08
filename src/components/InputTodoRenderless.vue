<script>
export default {
  name: 'InputTodoRenderless',
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update:todos'],
  data: () => ({
    input: '',
  }),
  computed: {
    newTodo() {
      return this.input.trim()
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.length === 0 || this.todos.includes(this.newTodo)) {
        return
      }

      this.$emit('update:todos', [this.newTodo, ...this.todos])
      this.clearInput()
    },
    removeTodo(todo) {
      this.$emit(
        'update:todos',
        this.todo.filter((t) => t !== tag)
      )
    },
    clearInput() {
      this.input = ''
    },
  },
  render() {
    return this.$slots.default({
      todos: this.todos,
      addTodo: this.addTodo,
      removeTodo: this.removeTodo,
      removeButtonEvents: (todo) => ({
        click: () => {
          this.removeTodo(todo)
        },
      }),
      inputProps: { value: this.input },
      inputEvents: {
        input: (e) => (this.input = e.target.value),
        keydown: (e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            this.addTodo()
          }
        },
      },
    })
  },
}
</script>
