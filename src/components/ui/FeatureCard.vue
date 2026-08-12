<script setup>
import { Card, CardContent } from '@/components/ui/card'
import LineIcon from '@/components/LineIcon.vue'

defineProps({
  icon: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, required: true },
  variant: { type: String, default: 'default' }, // default | yellow | coral | teal | rose
})

const variantClasses = {
  default: 'bg-card border-hairline-soft',
  yellow: 'bg-brand-yellow border-transparent text-ink',
  coral: 'bg-coral-light border-transparent text-ink',
  teal: 'bg-teal-light border-transparent text-ink',
  rose: 'bg-rose-light border-transparent text-ink',
}

const iconBgClasses = {
  default: 'bg-secondary text-foreground',
  yellow: 'bg-white/60 text-ink',
  coral: 'bg-white/60 text-coral-dark',
  teal: 'bg-white/60 text-moss-dark',
  rose: 'bg-white/60 text-ink',
}
</script>

<template>
  <Card
    :class="[
      'group rounded-[28px] border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
      variantClasses[variant],
    ]"
  >
    <CardContent class="p-0">
      <div
        v-if="icon"
        :class="[
          'mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105',
          iconBgClasses[variant],
        ]"
      >
        <LineIcon :name="icon" class="h-7 w-7" />
      </div>
      <h3 class="heading-3">{{ title }}</h3>
      <p class="mt-3 leading-relaxed opacity-80">{{ description }}</p>
    </CardContent>
  </Card>
</template>
