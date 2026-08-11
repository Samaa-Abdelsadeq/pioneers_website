<script setup>
import { computed } from 'vue'
import { ArrowLeft } from '@lucide/vue'
import { heroContent } from '../data/hero'
import { ctaLabel, ctaLink } from '../data/siteConfig'
import { Button } from '@/components/ui/button'
import Container from '@/components/layout/Container.vue'

const parts = computed(() => {
  const [before, after] = heroContent.supporting.split(heroContent.highlightedPhrase)
  return { before, after }
})
</script>

<template>
  <section id="home" class="relative overflow-hidden bg-white pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
    <!-- soft decorative blobs -->
    <div class="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-yellow/20 blur-3xl" />
    <div class="pointer-events-none absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-brand-blue/10 blur-3xl" />
    <div class="pointer-events-none absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-teal-light/40 blur-3xl" />

    <Container>
      <div class="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div v-reveal class="text-center lg:text-start">
          <p class="mb-4 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-sm font-semibold text-muted-foreground">
            <span class="h-2 w-2 rounded-full bg-success-accent" />
            سنتر بيونيرز للتجريبي واللغات
          </p>

          <h1 class="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-deep sm:text-5xl lg:text-6xl xl:text-7xl">
            {{ heroContent.headline }}
          </h1>

          <p class="mt-4 text-xl font-bold text-brand-blue sm:text-2xl">{{ heroContent.subheadline }}</p>

          <p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate lg:mx-0">
            {{ parts.before }}<span class="font-bold text-brand-yellow-dark">{{ heroContent.highlightedPhrase }}</span>{{ parts.after }}
          </p>

          <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Button as-child size="lg" class="rounded-full px-8 text-base">
              <a :href="ctaLink">{{ ctaLabel }}</a>
            </Button>
            <Button as-child variant="outline" size="lg" class="rounded-full px-8 text-base">
              <RouterLink to="/about">
                تعرف علينا
                <ArrowLeft class="ms-2 h-4 w-4" />
              </RouterLink>
            </Button>
          </div>
        </div>

        <div v-reveal="150" class="relative mx-auto w-full max-w-md lg:max-w-none">
          <div class="pointer-events-none absolute inset-0 -z-10 mx-auto h-3/4 w-3/4 translate-y-8 rounded-full bg-brand-yellow/20 blur-3xl" />
          <div class="relative overflow-hidden rounded-[32px] border border-hairline-soft bg-white p-2 shadow-2xl shadow-ink-deep/5">
            <img
              :src="heroContent.image"
              :alt="heroContent.imageAlt"
              class="w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
