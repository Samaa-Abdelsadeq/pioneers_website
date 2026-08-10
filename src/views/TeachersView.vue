<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import SectionTitle from '../components/SectionTitle.vue'
import LineIcon from '../components/LineIcon.vue'
import { teachers, teachersSection } from '../data/teachers'
</script>

<template>
  <Navbar />
  <main class="min-h-screen bg-primary pt-28 pb-20 lg:pt-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle :title="teachersSection.title" :subtitle="teachersSection.subtitle" />

      <div class="grid gap-6 md:grid-cols-2 lg:gap-8">
        <article
          v-for="(teacher, i) in teachers"
          :key="teacher.id"
          v-reveal="(i % 2) * 100"
          class="flex flex-col gap-5 rounded-2xl border border-white/10 bg-dark p-6 shadow-xl shadow-black/20 transition-all duration-200 hover:border-cta/50 sm:flex-row"
        >
          <div class="h-32 w-32 shrink-0 overflow-hidden rounded-2xl bg-primary/60 sm:h-40 sm:w-40">
            <img
              v-if="teacher.photo"
              :src="teacher.photo"
              :alt="teacher.name"
              class="h-full w-full object-cover"
            />
            <div v-else class="flex h-full w-full items-center justify-center text-cta/40">
              <LineIcon name="users" class="h-12 w-12" />
            </div>
          </div>

          <div class="flex-1">
            <h2 class="text-xl font-bold text-text">{{ teacher.name }}</h2>
            <p class="mt-1 text-sm font-bold text-accent">{{ teacher.subject }}</p>
            <p class="mt-0.5 text-xs font-semibold text-cta">{{ teacher.stage }}</p>
            <p class="mt-3 text-sm leading-relaxed text-text/70">{{ teacher.bio }}</p>
            <p class="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">
              <LineIcon name="clock" class="h-3.5 w-3.5" />
              خبرة {{ teacher.experienceYears }} سنوات
            </p>
          </div>
        </article>
      </div>

      <div class="mt-12 text-center">
        <RouterLink
          to="/"
          class="inline-flex items-center gap-2 rounded-full border-2 border-cta px-8 py-3 font-bold text-cta transition-all duration-200 hover:bg-cta hover:text-dark"
        >
          <LineIcon name="arrow" class="h-5 w-5 rotate-180" />
          الرجوع للرئيسية
        </RouterLink>
      </div>
    </div>
  </main>
  <Footer />
</template>
