<script setup>
import { computed } from 'vue'
import { ArrowLeft, Play } from '@lucide/vue'
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
          <p class="mb-5 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-sm font-semibold text-muted-foreground">
            <span class="h-2 w-2 rounded-full bg-success-accent" />
            سنتر بيونيرز للتجريبي واللغات
          </p>

          <h1 class="hero-display text-ink-deep">
            {{ heroContent.headline }}
          </h1>

          <p class="mt-5 text-2xl font-medium text-brand-blue sm:text-3xl">{{ heroContent.subheadline }}</p>

          <p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate lg:mx-0">
            {{ parts.before }}<span class="font-bold text-brand-yellow-dark">{{ heroContent.highlightedPhrase }}</span>{{ parts.after }}
          </p>

          <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Button as-child size="lg" class="rounded-full px-8 text-base h-12">
              <a :href="ctaLink">{{ ctaLabel }}</a>
            </Button>
            <Button as-child variant="outline" size="lg" class="rounded-full px-8 text-base h-12">
              <RouterLink to="/about">
                تعرف علينا
                <ArrowLeft class="ms-2 h-4 w-4" />
              </RouterLink>
            </Button>
          </div>

          <div class="mt-8 flex items-center justify-center gap-6 text-sm text-slate lg:justify-start">
            <div class="flex items-center gap-2">
              <span class="flex h-2 w-2 rounded-full bg-success-accent" />
              تسجيل مفتوح
            </div>
            <div class="flex items-center gap-2">
              <span class="flex h-2 w-2 rounded-full bg-brand-blue" />
              مجموعات وبرايفت
            </div>
            <div class="flex items-center gap-2">
              <span class="flex h-2 w-2 rounded-full bg-brand-yellow" />
              متابعة يومية
            </div>
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

          <div v-reveal="300" class="absolute -bottom-4 -right-4 hidden max-w-[200px] rounded-2xl border border-hairline-soft bg-white p-4 shadow-xl lg:block">
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow text-ink">
                <Play class="h-4 w-4 translate-x-0.5 fill-current" />
              </div>
              <div>
                <p class="text-sm font-bold text-ink">فيديو تعريفي</p>
                <p class="text-xs text-slate">شوف المركز من جوه</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
