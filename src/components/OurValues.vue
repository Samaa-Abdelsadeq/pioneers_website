<script setup>
import { Target, Eye, HeartHandshake } from '@lucide/vue'
import { values, valuesSection } from '../data/values'
import Container from '@/components/layout/Container.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'

const icons = { Target, Eye, HeartHandshake }

const tones = {
  yellow: 'bg-brand-yellow text-ink',
  coral: 'bg-coral-light text-ink',
  teal: 'bg-teal-light text-ink',
}
</script>

<template>
  <section class="bg-surface-soft section-spacing">
    <Container>
      <SectionHeader :title="valuesSection.title" :subtitle="valuesSection.subtitle" :badge="valuesSection.badge" />

      <div class="grid gap-6 md:grid-cols-3 lg:gap-8">
        <div
          v-for="(value, i) in values"
          :key="value.id"
          v-reveal="i * 120"
          :class="[
            'rounded-[28px] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
            tones[value.tone],
          ]"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-white/60 text-ink">
            <component :is="icons[value.icon]" class="h-6 w-6" />
          </div>
          <h3 class="heading-3 mt-6">{{ value.title }}</h3>
          <p class="mt-3 text-base leading-relaxed opacity-80">{{ value.description }}</p>
        </div>
      </div>
    </Container>
  </section>
</template>
