<script setup>
import { subjects, subjectsSection } from '../data/subjects'
import SectionTitle from './SectionTitle.vue'
import SubjectIcon from './SubjectIcon.vue'
</script>

<template>
  <section class="bg-primary py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle :title="subjectsSection.title" :subtitle="subjectsSection.subtitle" />

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
        <div
          v-for="(subject, i) in subjects"
          :key="subject.id"
          v-reveal="(i % 5) * 80"
          class="group rounded-2xl border border-white/10 bg-dark p-6 text-center transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-cta/60 hover:shadow-lg hover:shadow-cta/15"
        >
          <SubjectIcon :name="subject.icon" class="mx-auto h-9 w-9 text-cta transition-colors duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-accent" />
          <p class="mt-4 text-2xl font-black text-accent" dir="ltr">{{ subject.number }}</p>
          <h3 class="mt-1.5 text-base font-bold text-text sm:text-lg">{{ subject.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>
