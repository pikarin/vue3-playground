<template>
  <div class="flex mb-4">
    <input
      :value="todo"
      type="text"
      class="flex-1 mr-2 border rounded py-2 px-4"
      @input="(e) => $emit('update:todo', e.target.value)"
      @keydown.enter="$emit('add-todo')"
    />
    <BaseButton color="indigo" @click="$emit('add-todo')">
      Tambah Todo
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'TodoApp',
  components: { BaseButton },
  props: {
    todo: {
      type: String,
      required: true,
    },
  },
  emits: ['update:todo', 'add-todo'],
}
</script>
