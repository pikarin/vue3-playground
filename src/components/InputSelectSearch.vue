<template>
  <div class="relative">
    <button
      ref="button"
      type="button"
      class="block appearance-none w-full border px-3 py-2 text-left bg-white rounded select-none cursor-pointer focus:outline-none focus:shadow-outline"
      :class="{ 'shadow-outline': isOpen }"
      @click="open"
    >
      <span v-if="modelValue" v-text="modelValue" />
      <span v-else class="text-gray-400">Select a band...</span>
    </button>
    <div
      v-show="isOpen"
      class="absolute my-1 right-0 left-0 bg-gray-600 p-2 rounded shadow z-50"
    >
      <input
        ref="searchInput"
        v-model="search"
        class="block mb-2 w-full px-3 py-2 bg-gray-500 text-white rounded focus:outline-none"
      />
      <ul
        v-if="filteredOptions.length > 0"
        class="relative overflow-y-auto max-h-56 scrolling-touch"
      >
        <li
          v-for="option in filteredOptions"
          :key="option"
          class="px-3 py-2 text-white cursor-pointer rounded select-none hover:bg-gray-500"
          @click="select(option)"
        >
          {{ option }}
        </li>
      </ul>
      <div
        v-show="filteredOptions.length === 0"
        class="px-3 py-2 text-gray-400"
      >
        Tidak ada hasil untuk "{{ search }}"
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputSelectSearch',
  props: {
    modelValue: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      required: true,
    }
  },
  emits: ['update:modelValue'],
  data: () => ({
    isOpen: false,
    search: ''
  }),
  computed: {
    filteredOptions() {
      return this.options.filter(option => {
        return option.toLowerCase().startsWith(this.search.toLowerCase())
      })
    }
  },
  methods: {
    open() {
      this.isOpen = true
      this.$nextTick(() => {
        this.$refs.searchInput.focus()
      })
    },
    close() {
      this.isOpen = false
      this.$refs.button.focus()
    },
    select(option) {
      this.$emit('update:modelValue', option)
      this.close()
    }
  }
}
</script>
