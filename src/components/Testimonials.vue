<script setup>
import { ref, computed } from 'vue'
import { ChevronLeft, ChevronRight, Quote, Star } from '@lucide/vue'
import { testimonials, testimonialsSection } from '../data/testimonials'
import Container from '@/components/layout/Container.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const current = ref(0)
const perPage = 3
const total = computed(() => Math.ceil(testimonials.length / perPage))

const visibleTestimonials = computed(() => {
  const start = current.value * perPage
  return testimonials.slice(start, start + perPage)
})

const next = () => { current.value = (current.value + 1) % total.value }
const prev = () => { current.value = (current.value - 1 + total.value) % total.value }
</script>

<template>
  <section id="testimonials" class="bg-white section-spacing overflow-hidden">
    <Container>
      <div class="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <div class="max-w-2xl">
          <SectionHeader :title="testimonialsSection.title" :subtitle="testimonialsSection.subtitle" badge="آراء العملاء" align="start" />
        </div>
        <div class="hidden items-center gap-2 lg:flex">
          <Button variant="outline" size="icon" class="rounded-full border-hairline-strong" @click="prev" aria-label="السابق">
            <ChevronRight class="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" class="rounded-full border-hairline-strong" @click="next" aria-label="التالي">
            <ChevronLeft class="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card
          v-for="(item, i) in visibleTestimonials"
          :key="item.id"
          v-reveal="i * 100"
          class="rounded-[28px] border-hairline-soft bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
        >
          <CardContent class="p-0">
            <Quote class="h-8 w-8 text-brand-yellow" />
            <p class="mt-4 text-base leading-relaxed text-ink">{{ item.quote }}</p>

            <div class="mt-5 flex items-center gap-1">
              <Star v-for="n in 5" :key="n" class="h-4 w-4 fill-brand-yellow text-brand-yellow" />
            </div>

            <div class="mt-6 flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-full bg-brand-yellow/20 text-sm font-bold text-ink">
                {{ item.name.charAt(0) }}
              </div>
              <div>
                <h4 class="text-sm font-bold text-ink">{{ item.name }}</h4>
                <p class="text-xs text-slate">{{ item.role }}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div class="mt-8 flex items-center justify-center gap-2 lg:hidden">
        <Button variant="outline" size="icon" class="rounded-full border-hairline-strong" @click="prev" aria-label="السابق">
          <ChevronRight class="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" class="rounded-full border-hairline-strong" @click="next" aria-label="التالي">
          <ChevronLeft class="h-5 w-5" />
        </Button>
      </div>
    </Container>
  </section>
</template>
