<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <div v-reveal class="mb-12 text-center">
    <h2 class="text-3xl font-extrabold text-foreground sm:text-4xl">{{ title }}</h2>
    <span class="mx-auto mt-4 block h-1 w-20 rounded-full bg-brand-yellow"></span>
    <p v-if="subtitle" class="mt-4 text-lg text-muted-foreground">{{ subtitle }}</p>
  </div>
</template>
