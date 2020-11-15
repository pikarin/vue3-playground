<template>
  <section class="container px-4 mx-auto text-center space-y-4">
    <div class="space-x-2">
      <h2 class="text-2xl mb-4">Base Buttons</h2>
      <BaseButton color="light">Light</BaseButton>
      <BaseButton color="red">Red</BaseButton>
      <BaseButton color="green">Green</BaseButton>
      <BaseButton color="blue" class="shadow">Blue</BaseButton>
      <BaseButton color="orange">Orange</BaseButton>
      <BaseButton color="indigo">Indigo</BaseButton>
      <BaseButton color="dark">Dark</BaseButton>
    </div>
    <div class="space-x-2">
      <h2 class="text-2xl mb-4">Button Sizes</h2>
      <BaseButton size="sm" color="blue">Small</BaseButton>
      <BaseButton size="base" color="indigo">Normal</BaseButton>
      <BaseButton size="lg" color="red">Large</BaseButton>
    </div>
    <div class="space-x-2">
      <h2 class="text-2xl mb-4">Outline Buttons</h2>
      <ButtonOutline>Back</ButtonOutline>
      <ButtonOutline color="red">Delete</ButtonOutline>
      <ButtonOutline color="green">Confirm</ButtonOutline>
      <ButtonOutline color="blue">Submit</ButtonOutline>
      <ButtonOutline color="orange">Cancel</ButtonOutline>
      <ButtonOutline color="indigo">Go to Page</ButtonOutline>
    </div>
    <div class="space-x-2">
      <h2 class="text-2xl mb-4">With Icon</h2>
      <BaseButton color="blue" class="inline-flex items-center">
        <svg class="w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="ml-1">Download</span>
      </BaseButton>
    </div>
  </section>
</template>

<script>
import BaseButton from '../components/BaseButton.vue'
import ButtonOutline from '../components/ButtonOutline.vue'

export default {
  name: 'ButtonsShowcase',
  components: { BaseButton, ButtonOutline },
}
</script>
