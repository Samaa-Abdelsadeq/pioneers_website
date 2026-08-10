<script setup>
import { ref, computed } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import SectionTitle from '../components/SectionTitle.vue'
import LineIcon from '../components/LineIcon.vue'
import { teachers, teachersSection } from '../data/teachers'

const ALL = 'الكل'
const activeSubject = ref(ALL)

// ترتيب ثابت لعرض المواد — أي مادة مش موجودة هنا بتتحط في الآخر
const subjectOrder = ['لغة عربية', 'English', 'Math', 'Science', 'دراسات', 'french', 'ICT']

const orderIndex = (subject) => {
  let i = subjectOrder.indexOf(subject)
  if (i === -1) i = subjectOrder.findIndex((s) => s.toLowerCase() === subject.toLowerCase())
  return i === -1 ? subjectOrder.length : i
}

const subjects = computed(() =>
  [...new Set(teachers.map((t) => t.subject))].sort((a, b) => orderIndex(a) - orderIndex(b)),
)

const groups = computed(() => {
  const source =
    activeSubject.value === ALL ? teachers : teachers.filter((t) => t.subject === activeSubject.value)
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
  <main class="min-h-screen bg-primary pt-28 pb-20 lg:pt-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle :title="teachersSection.title" :subtitle="teachersSection.subtitle" />

      <div class="no-scrollbar -mx-4 overflow-x-auto px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="flex w-max gap-3 pb-1">
          <button
            v-for="tab in [ALL, ...subjects]"
            :key="tab"
            @click="activeSubject = tab"
            :class="[
              'shrink-0 rounded-full px-6 py-2.5 text-sm font-bold whitespace-nowrap transition-all duration-300 ease-out',
              activeSubject === tab
                ? 'bg-cta text-dark'
                : 'border border-white/15 text-text/80 hover:border-cta/60 hover:text-cta',
            ]"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <Transition name="fade" mode="out-in">
        <div :key="activeSubject">
          <section v-for="group in groups" :key="group.subject" class="mt-12 first:mt-10">
            <h3 class="text-2xl font-extrabold text-text">
              {{ group.subject }}
              <span class="mt-2 block h-1 w-14 rounded-full bg-accent"></span>
            </h3>

            <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              <article
                v-for="teacher in group.teachers"
                :key="teacher.id"
                class="group overflow-hidden rounded-2xl border border-white/10 bg-dark shadow-xl shadow-black/20 transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-cta/50 hover:shadow-cta/10"
              >
                <div class="aspect-square w-full overflow-hidden bg-primary/60">
                  <img
                    v-if="teacher.photo"
                    :src="teacher.photo"
                    :alt="teacher.name"
                    class="h-full w-full object-cover transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div v-else class="flex h-full w-full items-center justify-center text-cta/40">
                    <LineIcon name="users" class="h-16 w-16" />
                  </div>
                </div>

                <div class="p-5">
                  <h4 class="text-lg font-bold text-text">{{ teacher.name }}</h4>
                  <p class="mt-1.5 text-sm font-bold text-accent">{{ teacher.subject }}</p>
                  <p class="mt-1 text-xs font-semibold text-cta">{{ teacher.stage }}</p>

                  <div class="mt-5 flex flex-wrap items-center justify-between gap-2">
                    <span class="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">
                      <LineIcon name="clock" class="h-3.5 w-3.5" />
                      {{ teacher.experienceYears }} سنوات خبرة
                    </span>
                    <a
                      :href="`tel:${teacher.phone}`"
                      class="inline-flex items-center gap-1.5 text-sm font-semibold text-text/70 transition-colors duration-300 ease-out hover:text-cta"
                    >
                      <LineIcon name="phone" class="h-4 w-4" />
                      <span dir="ltr">{{ teacher.phone }}</span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </Transition>

      <div class="mt-12 text-center">
        <RouterLink
          to="/#teachers"
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
