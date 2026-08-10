<script setup>
import { computed } from 'vue'
import { heroContent } from '../data/hero'
import { ctaLabel, ctaLink } from '../data/siteConfig'

const parts = computed(() => {
  const [before, after] = heroContent.supporting.split(heroContent.highlightedPhrase)
  return { before, after }
})
</script>

<template>
  <section id="home" class="relative overflow-hidden bg-primary pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
    <div class="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cta/10 blur-3xl"></div>
    <div class="pointer-events-none absolute -bottom-40 right-0 h-112 w-112 rounded-full bg-accent/10 blur-3xl"></div>
    <div class="pointer-events-none absolute top-1/3 left-1/3 h-40 w-40 rounded-full bg-cta/5 blur-2xl"></div>

    <div class="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
      <div v-reveal class="text-center lg:text-right">
        <h1 class="text-4xl font-black leading-tight text-text sm:text-5xl lg:text-6xl">
          {{ heroContent.headline }}
        </h1>
        <p class="mt-4 text-xl font-bold text-cta sm:text-2xl">{{ heroContent.subheadline }}</p>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text/80 lg:mx-0">
          {{ parts.before }}<span class="font-bold text-accent"> {{heroContent.highlightedPhrase }}</span>{{ parts.after }}
        </p>
        <div class="mt-8">
          <a
            :href="ctaLink"
            class="inline-block rounded-full bg-cta px-10 py-3.5 text-lg font-bold text-dark shadow-lg shadow-cta/25 transition-all duration-200 hover:bg-text hover:text-primary hover:shadow-text/20"
          >
            {{ ctaLabel }}
          </a>
        </div>
      </div>

      <div v-reveal="150" class="relative mx-auto w-full max-w-md lg:max-w-none">
        <div class="pointer-events-none absolute inset-0 -z-0 mx-auto h-3/4 w-3/4 translate-y-8 rounded-full bg-cta/15 blur-3xl"></div>
        <img
          :src="heroContent.image"
          :alt="heroContent.imageAlt"
          class="relative z-10 mx-auto w-full opacity-60 drop-shadow-[0_20px_50px_rgba(97,185,249,0.25)] sm:max-w-lg lg:max-w-full lg:opacity-100"
        />
      </div>
    </div>
  </section>
</template>
