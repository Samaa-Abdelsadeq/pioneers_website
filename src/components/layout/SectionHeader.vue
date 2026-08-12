<script setup>
import { Badge } from '@/components/ui/badge'

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  badge: { type: String, default: '' },
  align: { type: String, default: 'center' }, // center | left (rtl: right)
  compact: { type: Boolean, default: false },
})
</script>

<template>
  <div
    v-reveal
    :class="[
      'max-w-2xl',
      align === 'center' ? 'mx-auto text-center' : 'text-start',
      compact ? 'mb-8' : 'mb-12 lg:mb-16',
    ]"
  >
    <Badge v-if="badge" variant="secondary" class="mb-4 rounded-full px-3 py-1 text-xs font-semibold">
      {{ badge }}
    </Badge>
    <h2
      :class="[
        'heading-2 text-ink-deep',
        compact ? 'text-2xl sm:text-3xl' : '',
      ]"
    >
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
      {{ subtitle }}
    </p>
    <div
      v-else
      :class="[
        'mt-4 h-1.5 rounded-full bg-brand-yellow',
        align === 'center' ? 'mx-auto w-16' : 'w-16',
      ]"
    />
  </div>
</template>
