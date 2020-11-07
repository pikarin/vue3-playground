<template>
  <BaseButton
    color="none"
    :class="[...outlineClass]"
    class="bg-white hover:text-white"
  >
    <slot>Button</slot>
  </BaseButton>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'ButtonOutline',
  components: { BaseButton },
  props: {
    color: {
      type: String,
      default: 'dark',
      validator: (color) =>
        ['dark', 'red', 'green', 'blue', 'orange', 'indigo'].includes(color),
    },
  },
  computed: {
    outlineClass() {
      const colors = {
        dark: ['border-gray-900', 'text-gray-900', 'hover:bg-gray-900'],
        red: ['border-red-600', 'text-red-600', 'hover:bg-red-600'],
        green: ['border-green-600', 'text-green-600', 'hover:bg-green-600'],
        blue: ['border-blue-700', 'text-blue-700', 'hover:bg-blue-700'],
        orange: ['border-orange-500', 'text-orange-500', 'hover:bg-orange-500'],
        indigo: ['border-indigo-600', 'text-indigo-600', 'hover:bg-indigo-600'],
      }
      return colors[this.color] ?? []
    },
  },
}
</script>
