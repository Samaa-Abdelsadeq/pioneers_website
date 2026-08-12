<script setup>
import { Check } from '@lucide/vue'
import { programs, programsSection } from '../data/programs'
import { ctaLabel, ctaLink } from '../data/siteConfig'
import Container from '@/components/layout/Container.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
</script>

<template>
  <section id="programs" class="bg-surface-soft section-spacing">
    <Container>
      <SectionHeader :title="programsSection.title" :subtitle="programsSection.subtitle" badge="أنظمة الدراسة" />

      <div class="grid gap-6 lg:grid-cols-3 lg:gap-8">
        <Card
          v-for="(program, i) in programs"
          :key="program.id"
          v-reveal="i * 120"
          :class="[
            'relative overflow-hidden rounded-[28px] p-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
            program.featured ? 'bg-brand-blue shadow-brand-blue/10' : 'bg-white border border-hairline-soft',
          ]"
        >
            <div
              :class="[
                'h-full rounded-[24px] p-6 sm:p-8',
                program.featured ? 'bg-surface-lavender' : 'bg-white',
              ]"
            >
            <div v-if="program.featured" class="absolute top-5 right-5 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-ink">
              الأكثر طلبًا
            </div>

            <CardHeader class="p-0 mb-6">
              <h3 class="heading-3 text-ink">{{ program.name }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-slate">{{ program.description }}</p>
            </CardHeader>

            <CardContent class="p-0">
              <div class="mb-6">
                <span class="text-3xl font-semibold tracking-tight text-ink">{{ program.price }}</span>
                <span class="mr-2 text-sm text-slate">/ {{ program.period }}</span>
              </div>

              <ul class="mb-8 space-y-3">
                <li v-for="feature in program.features" :key="feature" class="flex items-start gap-3 text-sm text-ink">
                  <span class="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-yellow/20 text-ink">
                    <Check class="h-3 w-3" />
                  </span>
                  {{ feature }}
                </li>
              </ul>

              <Button as-child :variant="program.featured ? 'default' : 'outline'" class="w-full rounded-full">
                <a :href="ctaLink">{{ program.cta }}</a>
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </Container>
  </section>
</template>
