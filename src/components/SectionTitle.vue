<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <div v-reveal class="mb-12 text-center">
    <h2 class="text-3xl font-extrabold text-text sm:text-4xl">{{ title }}</h2>
    <span class="mx-auto mt-4 block h-1 w-20 rounded-full bg-accent"></span>
    <p v-if="subtitle" class="mt-4 text-lg text-text/70">{{ subtitle }}</p>
  </div>
</template>
