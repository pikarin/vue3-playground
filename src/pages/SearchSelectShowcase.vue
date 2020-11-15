<template>
  <div class="max-w-lg mx-auto bg-white rounded shadow-lg p-8">
    <div class="mb-4">
      <label class="font-semibold text-gray-500 mb-2">Band Favorit</label>
      <InputSelectSearch v-model="selected" :options="options" />
    </div>
    <div class="text-right">
      <BaseButton type="button" color="blue" class="font-bold">
        Simpan
      </BaseButton>
    </div>
  </div>
</template>

<script>
import InputSelectSearch from '../components/InputSelectSearch.vue'
import BaseButton from '../components/BaseButton.vue'

export default {
  name: 'SearchSelectShowcase',
  components: { InputSelectSearch, BaseButton },
  data: () => ({
    selected: null,
    options: [
      'Slank',
      '/rif',
      'Ada Band',
      'Blink',
      'Ten 2 Five',
      'BIP',
      'Log Guns',
      'Jagotsu',
      'Element',
      'Garasi',
      'Coklat',
    ]
  })
}
</script>
