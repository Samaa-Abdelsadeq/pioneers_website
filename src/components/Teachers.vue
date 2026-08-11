<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { teachers, teachersSection } from '../data/teachers'
import Container from '@/components/layout/Container.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import TeacherCard from '@/components/ui/TeacherCard.vue'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from '@lucide/vue'

const LOOP_SECONDS = 35
const COPIES = 4

const scroller = ref(null)
const homepageTeachers = teachers.filter((t) => t.showOnHomepage)
const loopedTeachers = computed(() => Array.from({ length: COPIES }, () => homepageTeachers).flat())

let rafId = null
let last = 0
let paused = false
let resumeTimer = null

const setWidth = () => scroller.value.scrollWidth / COPIES

const normalizeLoop = () => {
  const el = scroller.value
  if (!el) return
  const set = setWidth()
  if (set <= 0) return
  if (el.scrollLeft > set * 2) el.scrollLeft -= set
  else if (el.scrollLeft <= set) el.scrollLeft += set
}

const autoScroll = (now) => {
  const el = scroller.value
  if (el && !paused) {
    const set = setWidth()
    if (set > 0) {
      const dt = Math.min(now - last, 100)
      el.scrollLeft -= (set / (LOOP_SECONDS * 1000)) * dt
      if (el.scrollLeft <= set) el.scrollLeft += set
    }
  }
  last = now
  rafId = requestAnimationFrame(autoScroll)
}

const onMouseEnter = () => { paused = true; clearTimeout(resumeTimer) }
const onMouseLeave = () => { paused = false }
const onTouchStart = () => { paused = true; clearTimeout(resumeTimer) }
const onTouchEnd = () => {
  clearTimeout(resumeTimer)
  resumeTimer = setTimeout(() => { paused = false }, 1200)
}

onMounted(() => {
  const el = scroller.value
  if (!el) return
  el.scrollLeft = setWidth() * 2
  el.addEventListener('scroll', normalizeLoop, { passive: true })

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reducedMotion) {
    last = performance.now()
    rafId = requestAnimationFrame(autoScroll)
  }
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
  clearTimeout(resumeTimer)
  scroller.value?.removeEventListener('scroll', normalizeLoop)
})
</script>

<template>
  <section id="teachers" class="bg-white py-20 lg:py-28">
    <Container>
      <SectionHeader :title="teachersSection.title" :subtitle="teachersSection.subtitle" badge="المدرسون" />
    </Container>

    <div v-reveal class="mx-auto max-w-7xl">
      <div
        ref="scroller"
        dir="ltr"
        class="no-scrollbar overflow-x-auto"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @touchstart.passive="onTouchStart"
        @touchend.passive="onTouchEnd"
        @touchcancel.passive="onTouchEnd"
      >
        <div class="flex w-max gap-5 px-4 py-5 sm:px-6 lg:gap-6 lg:px-8">
          <div
            v-for="(teacher, i) in loopedTeachers"
            :key="`${teacher.id}-${i}`"
            :aria-hidden="i >= homepageTeachers.length"
            dir="rtl"
            class="w-64 shrink-0 sm:w-72"
          >
            <TeacherCard :teacher="teacher" />
          </div>
        </div>
      </div>
    </div>

    <Container>
      <div v-reveal class="mt-12 text-center">
        <Button as-child variant="outline" size="lg" class="rounded-full px-8">
          <RouterLink to="/teachers">
            {{ teachersSection.ctaLabel }}
            <ArrowLeft class="ms-2 h-4 w-4" />
          </RouterLink>
        </Button>
      </div>
    </Container>
  </section>
</template>
