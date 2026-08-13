<script setup>
import { milestones, timelineSection } from '../data/timeline'
import Container from '@/components/layout/Container.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
</script>

<template>
  <section class="bg-white section-spacing">
    <Container size="narrow">
      <SectionHeader :title="timelineSection.title" :subtitle="timelineSection.subtitle" :badge="timelineSection.badge" />

      <ol class="relative space-y-10 border-s-2 border-hairline ps-8 sm:space-y-12 sm:ps-10">
        <li v-for="(milestone, i) in milestones" :key="milestone.id" v-reveal="i * 100" class="relative">
          <span class="absolute top-1.5 -start-[41px] h-5 w-5 rounded-full bg-brand-yellow ring-4 ring-white sm:-start-[49px]" />
          <span class="inline-block rounded-full bg-yellow-light px-3 py-1 text-xs font-bold text-yellow-dark">
            {{ milestone.year }}
          </span>
          <h3 class="heading-4 mt-3 text-ink">{{ milestone.title }}</h3>
          <p class="mt-2 max-w-xl text-sm leading-relaxed text-slate sm:text-base">{{ milestone.description }}</p>
        </li>
      </ol>
    </Container>
  </section>
</template>
