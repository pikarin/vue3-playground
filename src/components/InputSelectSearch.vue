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
        @keydown.esc="close"
        @keydown.up="highlightPrev"
        @keydown.down="highlightNext"
        @keydown.enter.prevent="selectHighlighted"
        @keydown.tab.prevent
      />
      <ul
        v-if="filteredOptions.length > 0"
        ref="options"
        class="relative overflow-y-auto max-h-56 scrolling-touch"
      >
        <li
          v-for="(option, i) in filteredOptions"
          :key="option"
          class="px-3 py-2 text-white cursor-pointer rounded select-none hover:bg-gray-500"
          :class="{ 'bg-blue-500': i === highlightedIndex }"
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
    },
    filterFunction: {
      type: Function,
      default: (search, options) => {
        return options.filter(option => {
          return option.toLowerCase().startsWith(search.toLowerCase())
        })
      }
    }
  },
  emits: ['update:modelValue'],
  data: () => ({
    isOpen: false,
    search: '',
    highlightedIndex: 0,
  }),
  computed: {
    filteredOptions() {
      return this.filterFunction(this.search, this.options)
    }
  },
  methods: {
    open() {
      if (this.isOpen) {
        this.$refs.searchInput.focus()
        return
      }
      this.isOpen = true
      this.$nextTick(() => {
        this.$refs.searchInput.focus()
        this.scrollToHighlighted()
      })
    },
    close() {
      this.isOpen = false
      this.search = ''
      this.$refs.button.focus()
    },
    select(option) {
      this.$emit('update:modelValue', option)
      this.highlightedIndex = 0
      this.close()
    },
    selectHighlighted() {
      this.select(this.filteredOptions[this.highlightedIndex])
    },
    scrollToHighlighted() {
      this.$refs.options.children[this.highlightedIndex].scrollIntoView({ block: 'nearest' })
    },
    highlight(index) {
      this.highlightedIndex = index

      if (this.highlightedIndex < 0) {
        this.highlightedIndex = this.filteredOptions.length - 1
      }

      if (this.highlightedIndex > this.filteredOptions.length - 1) {
        this.highlightedIndex = 0
      }

      this.scrollToHighlighted()
    },
    highlightNext() {
      this.highlight(this.highlightedIndex + 1)
    },
    highlightPrev() {
      this.highlight(this.highlightedIndex - 1)
    }
  }
}
</script>
