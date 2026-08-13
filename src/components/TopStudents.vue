<script setup>
import { GraduationCap } from '@lucide/vue'
import { topStudents, topStudentsSection } from '../data/topStudents'
import Container from '@/components/layout/Container.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
</script>

<template>
  <section class="bg-white section-spacing">
    <Container>
      <SectionHeader
        :title="topStudentsSection.title"
        :subtitle="topStudentsSection.subtitle"
        :badge="topStudentsSection.badge"
      />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div
          v-for="(student, i) in topStudents"
          :key="student.id"
          v-reveal="i * 100"
          class="rounded-[28px] border border-hairline-soft bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="mx-auto h-24 w-24 overflow-hidden rounded-full ring-4 ring-brand-yellow/30">
            <img
              v-if="student.photo"
              :src="student.photo"
              :alt="student.name"
              class="h-full w-full object-cover"
            />
            <div v-else class="flex h-full w-full items-center justify-center bg-surface text-slate">
              <GraduationCap class="h-10 w-10" />
            </div>
          </div>

          <h3 class="heading-5 mt-5 text-ink">{{ student.name }}</h3>
          <p class="mt-2 text-sm text-slate">دفعة {{ student.year }}</p>
          <span class="mt-4 inline-block rounded-full bg-yellow-light px-3 py-1 text-xs font-bold text-yellow-dark">
            {{ student.note }}
          </span>
        </div>
      </div>
    </Container>
  </section>
</template>
