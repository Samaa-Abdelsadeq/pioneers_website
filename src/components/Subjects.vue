<script setup>
import { subjects, subjectsSection } from '../data/subjects'
import Container from '@/components/layout/Container.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import { Card, CardContent } from '@/components/ui/card'
import SubjectIcon from './SubjectIcon.vue'

const tints = [
  'bg-brand-yellow text-ink',
  'bg-coral-light text-coral-dark',
  'bg-teal-light text-moss-dark',
  'bg-rose-light text-ink',
  'bg-surface-yellow text-yellow-dark',
]

const stageLabels = ['إعدادي', 'ثانوي', 'إعدادي وثانوي', 'ثانوي', 'إعدادي']
</script>

<template>
  <section id="subjects" class="bg-white section-spacing">
    <Container>
      <SectionHeader :title="subjectsSection.title" :subtitle="subjectsSection.subtitle" badge="المواد" />

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-6">
        <Card
          v-for="(subject, i) in subjects"
          :key="subject.id"
          v-reveal="(i % 5) * 80"
          class="group relative overflow-hidden rounded-[28px] border-hairline-soft bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div
            class="absolute inset-x-0 top-0 h-1.5 transition-colors duration-300"
            :class="tints[i % tints.length].split(' ')[0]"
          />
          <CardContent class="p-0 pt-2">
            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-surface transition-transform duration-300 group-hover:scale-110">
              <SubjectIcon :name="subject.icon" class="h-7 w-7 text-foreground" />
            </div>
            <p class="mt-4 text-2xl font-semibold tracking-tight text-foreground" dir="ltr">{{ subject.number }}</p>
            <h3 class="mt-1 text-base font-bold text-foreground sm:text-lg">{{ subject.name }}</h3>
            <p class="mt-2 text-xs font-medium text-muted-foreground">{{ stageLabels[i % stageLabels.length] }}</p>
          </CardContent>
        </Card>
      </div>
    </Container>
  </section>
</template>
