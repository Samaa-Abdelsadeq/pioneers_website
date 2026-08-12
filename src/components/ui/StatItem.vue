<script setup>
import { useCounter } from '@/composables/useCounter'

const props = defineProps({
  value: { type: Number, required: true },
  suffix: { type: String, default: '' },
  label: { type: String, required: true },
})

const { el, value: display } = useCounter(props.value)
</script>

<template>
  <div ref="el" class="text-center">
    <p class="text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl" style="line-height: 1.1; letter-spacing: -1.5px;">
      <span dir="ltr">{{ display }}{{ suffix }}</span>
    </p>
    <p class="mt-2 text-sm font-medium text-muted-foreground sm:text-base">{{ label }}</p>
  </div>
</template>
