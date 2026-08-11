<script setup>
defineProps({
  class: { type: null, required: false },
  size: { type: String, default: 'default' }, // default | wide | narrow
})
</script>

<template>
  <div
    :class="[
      'mx-auto px-4 sm:px-6 lg:px-8',
      size === 'wide' ? 'max-w-7xl' : size === 'narrow' ? 'max-w-4xl' : 'max-w-6xl',
      $props.class,
    ]"
  >
    <slot />
  </div>
</template>
