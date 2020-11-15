<template>
  <div class="relative is-active">
    <button
      type="button"
      class="block appearance-none w-full border px-3 py-2 bg-white rounded select-none cursor-pointer focus:outline-none focus:shadow-outline"
    >
      <!-- <span>Ada Band</span> -->
      <span class="text-gray-400">Select a band...</span>
    </button>
    <div
      class="absolute my-1 right-0 left-0 bg-gray-600 p-2 rounded shadow z-50"
    >
      <input
        class="block mb-2 w-full px-3 py-2 bg-gray-500 text-white rounded focus:outline-none"
      />
      <ul class="relative overflow-y-auto max-h-56 scrolling-touch">
        <li
          v-for="option in options"
          :key="option"
          class="px-3 py-2 text-white cursor-pointer rounded select-none hover:bg-gray-500"
          @click="select(option)"
        >
          {{ option }}
        </li>
      </ul>
      <!-- <div class="px-3 py-2 text-gray-400">No results found</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputSelectSearch',
  props: {
    options: {
      type: Array,
      required: true,
    }
  }
}
</script>
