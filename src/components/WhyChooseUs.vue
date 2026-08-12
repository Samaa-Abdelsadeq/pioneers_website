<script setup>
import { whyChooseUs } from '../data/whyChooseUs'
import Container from '@/components/layout/Container.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import FeatureCard from '@/components/ui/FeatureCard.vue'
import { Badge } from '@/components/ui/badge'

const cardVariants = ['yellow', 'coral', 'teal']
</script>

<template>
  <section id="why-us" class="bg-white section-spacing">
    <Container>
      <SectionHeader :title="whyChooseUs.title" :subtitle="whyChooseUs.subtitle" badge="لماذا نحن" />

      <div class="grid gap-6 md:grid-cols-3 lg:gap-8">
        <FeatureCard
          v-for="(feature, i) in whyChooseUs.features"
          :key="feature.id"
          v-reveal="i * 120"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
          :variant="cardVariants[i % cardVariants.length]"
        />
      </div>

      <div
        v-reveal
        class="mt-12 flex flex-wrap items-center justify-center gap-3 rounded-full border border-hairline bg-surface px-6 py-4"
      >
        <template v-for="(benefit, i) in whyChooseUs.benefits" :key="benefit">
          <Badge variant="outline" class="rounded-full border-hairline-strong bg-white px-3 py-1 text-xs font-semibold">
            {{ benefit }}
          </Badge>
          <span v-if="i < whyChooseUs.benefits.length - 1" class="hidden h-1.5 w-1.5 rounded-full bg-brand-yellow sm:block" />
        </template>
      </div>
    </Container>
  </section>
</template>
