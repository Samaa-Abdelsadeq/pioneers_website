<script setup>
import { ArrowLeft } from '@lucide/vue'
import { ctaLabel, ctaLink } from '../data/siteConfig'
import Container from '@/components/layout/Container.vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <section class="bg-ink py-20 lg:py-28">
    <Container>
      <div class="relative overflow-hidden rounded-[32px] bg-ink px-6 py-16 text-center text-white shadow-2xl shadow-ink-deep/20 sm:px-12 lg:py-20">
        <div class="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-yellow/20 blur-3xl" />
        <div class="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl" />

        <div class="relative">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            ابدأ مشوار النجاح مع بيونيرز
          </h2>
          <p class="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            احجز مكانك دلوقتي وانضم لأكبر مجتمع طلابي في كفر الدوار. خصومات على التسجيل المبكر.
          </p>
          <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button as-child size="lg" class="rounded-full bg-white px-8 text-ink hover:bg-white/90">
              <a :href="ctaLink">{{ ctaLabel }}</a>
            </Button>
            <Button as-child variant="outline" size="lg" class="rounded-full border-white/30 px-8 text-white hover:bg-white/10 hover:text-white">
              <RouterLink to="/about">
                تعرف علينا
                <ArrowLeft class="ms-2 h-4 w-4" />
              </RouterLink>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
