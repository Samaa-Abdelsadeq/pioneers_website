<script setup>
import { ref, computed } from 'vue'
import { ArrowRight } from '@lucide/vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { teachers, teachersSection } from '../data/teachers'
import Container from '@/components/layout/Container.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import TeacherCard from '@/components/ui/TeacherCard.vue'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

const ALL = 'الكل'
const activeSubject = ref(ALL)

const subjectOrder = ['لغة عربية', 'English', 'Math', 'Science', 'دراسات', 'French', 'ICT']

const orderIndex = (subject) => {
  let i = subjectOrder.indexOf(subject)
  if (i === -1) i = subjectOrder.findIndex((s) => s.toLowerCase() === subject.toLowerCase())
  return i === -1 ? subjectOrder.length : i
}

const subjects = computed(() =>
  [ALL, ...[...new Set(teachers.map((t) => t.subject))].sort((a, b) => orderIndex(a) - orderIndex(b))],
)

const groups = computed(() => {
  const source = activeSubject.value === ALL ? teachers : teachers.filter((t) => t.subject === activeSubject.value)
  const map = new Map()
  source.forEach((t) => {
    if (!map.has(t.subject)) map.set(t.subject, [])
    map.get(t.subject).push(t)
  })
  return [...map.entries()]
    .map(([subject, list]) => ({ subject, teachers: list }))
    .sort((a, b) => orderIndex(a.subject) - orderIndex(b.subject))
})
</script>

<template>
  <Navbar />
  <main class="min-h-screen bg-white pt-28 pb-20 lg:pt-32">
    <Container>
      <SectionHeader :title="teachersSection.title" :subtitle="teachersSection.subtitle" badge="المدرسون" />

      <Tabs v-model="activeSubject" class="w-full">
        <TabsList class="no-scrollbar h-auto w-full justify-start gap-1 overflow-x-auto rounded-full bg-surface p-1.5">
          <TabsTrigger
            v-for="tab in subjects"
            :key="tab"
            :value="tab"
            class="rounded-full px-5 py-2 text-sm font-semibold data-[state=active]:bg-ink data-[state=active]:text-white"
          >
            {{ tab }}
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Transition name="fade" mode="out-in">
        <div :key="activeSubject">
          <section v-for="group in groups" :key="group.subject" class="mt-12 first:mt-10">
            <h3 class="text-2xl font-extrabold text-ink">
              {{ group.subject }}
              <span class="mt-2 block h-1 w-14 rounded-full bg-brand-yellow" />
            </h3>

            <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              <TeacherCard
                v-for="teacher in group.teachers"
                :key="teacher.id"
                :teacher="teacher"
              />
            </div>
          </section>
        </div>
      </Transition>

      <div class="mt-12 text-center">
        <Button as-child variant="outline" size="lg" class="rounded-full px-8">
          <RouterLink to="/#teachers">
            <ArrowRight class="me-2 h-4 w-4 rotate-180" />
            الرجوع للرئيسية
          </RouterLink>
        </Button>
      </div>
    </Container>
  </main>
  <Footer />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 300ms ease-out,
    transform 300ms ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
