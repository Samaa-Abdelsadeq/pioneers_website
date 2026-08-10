<script setup>
import { whyChooseUs } from '../data/whyChooseUs'
import SectionTitle from './SectionTitle.vue'
import LineIcon from './LineIcon.vue'
</script>

<template>
  <section class="bg-primary py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle :title="whyChooseUs.title" :subtitle="whyChooseUs.subtitle" />

      <div class="grid gap-6 md:grid-cols-3 lg:gap-8">
        <div
          v-for="(feature, i) in whyChooseUs.features"
          :key="feature.id"
          v-reveal="i * 120"
          class="group rounded-2xl border border-white/10 bg-dark p-8 text-center shadow-xl shadow-black/20 transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-cta/50 hover:shadow-cta/10"
        >
          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cta/10 text-cta transition-colors duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-accent/15 group-hover:text-accent"
          >
            <LineIcon :name="feature.icon" class="h-8 w-8" />
          </div>
          <h3 class="mt-6 text-xl font-bold text-text">{{ feature.title }}</h3>
          <p class="mt-3 leading-relaxed text-text/70">{{ feature.description }}</p>
        </div>
      </div>

      <div
        v-reveal
        class="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 rounded-full border border-white/10 bg-dark/70 px-6 py-4"
      >
        <template v-for="(benefit, i) in whyChooseUs.benefits" :key="benefit">
          <span class="text-sm font-semibold text-text/85">{{ benefit }}</span>
          <span v-if="i < whyChooseUs.benefits.length - 1" class="hidden h-1.5 w-1.5 rounded-full bg-accent sm:block"></span>
        </template>
      </div>
    </div>
  </section>
</template>
