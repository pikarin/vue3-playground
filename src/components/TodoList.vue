<template>
  <ul class="pl-6 font-semibold text-gray-700 space-y-3">
    <li v-for="todo in todos" :key="todo">
      {{ todo }}
      <button
        class="text-sm text-gray-600 underline ml-2 hover:text-gray-700"
        @click.prevent="$emit('delete-todo', todo)"
      >
        Hapus
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  emits: ['delete-todo'],
}
</script>
