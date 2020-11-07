<template>
  <button
    class="rounded border border-transparent transition ease-in-out duration-300"
    :class="[...colorClass, ...sizeClass]"
  >
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    color: {
      type: String,
      default: 'none',
      validator: (color) =>
        [
          'light',
          'dark',
          'red',
          'green',
          'blue',
          'orange',
          'indigo',
          'none',
        ].includes(color),
    },
    size: {
      type: String,
      default: 'base',
      validator: (size) => ['sm', 'base', 'lg', 'none'].includes(size),
    },
  },
  computed: {
    colorClass() {
      const colors = {
        light: [
          'bg-gray-100',
          'border-gray-100',
          'text-gray-700',
          'hover:bg-white',
        ],
        dark: ['bg-gray-700', 'text-white', 'hover:bg-gray-900'],
        red: ['bg-red-500', 'hover:bg-red-700', 'text-white'],
        green: ['bg-green-500', 'hover:bg-green-600', 'text-white'],
        blue: ['bg-blue-500', 'hover:bg-blue-700', 'text-white'],
        orange: ['bg-orange-500', 'hover:bg-orange-600', 'text-white'],
        indigo: ['bg-indigo-500', 'hover:bg-indigo-700', 'text-white'],
      }

      return colors[this.color] ?? []
    },
    sizeClass() {
      const sizes = {
        sm: ['text-sm', 'px-2', 'py-1'],
        base: ['text-base', 'px-4', 'py-2'],
        lg: ['text-xl', 'font-semibold', 'px-6', 'py-3'],
      }
      return sizes[this.size] ?? []
    },
  },
}
</script>
