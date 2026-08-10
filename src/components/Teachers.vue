<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { teachers, teachersSection } from '../data/teachers'
import SectionTitle from './SectionTitle.vue'
import LineIcon from './LineIcon.vue'

// ============================================================
// MARQUEE SETTINGS — عدّل السرعة من هنا
// LOOP_SECONDS: مدة اللفة الكاملة لكل كروت المدرسين (بالثواني)
// ============================================================
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

const onMouseEnter = () => {
  paused = true
  clearTimeout(resumeTimer)
}

const onMouseLeave = () => {
  paused = false
}

const onTouchStart = () => {
  paused = true
  clearTimeout(resumeTimer)
}

const onTouchEnd = () => {
  clearTimeout(resumeTimer)
  resumeTimer = setTimeout(() => {
    paused = false
  }, 1200)
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
  <section id="teachers" class="bg-primary py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle :title="teachersSection.title" :subtitle="teachersSection.subtitle" />
    </div>

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
        <div class="flex w-max gap-6 px-4 py-5 sm:px-6 lg:gap-8 lg:px-8">
          <div
            v-for="(teacher, i) in loopedTeachers"
            :key="`${teacher.id}-${i}`"
            :aria-hidden="i >= homepageTeachers.length"
            dir="rtl"
            class="group w-64 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-dark shadow-xl shadow-black/20 transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-cta/50 hover:shadow-cta/10 sm:w-72"
          >
            <div class="aspect-square w-full overflow-hidden bg-primary/60">
              <img
                v-if="teacher.photo"
                :src="teacher.photo"
                :alt="teacher.name"
                draggable="false"
                class="h-full w-full object-cover transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <div v-else class="flex h-full w-full items-center justify-center text-cta/40">
                <LineIcon name="users" class="h-16 w-16" />
              </div>
            </div>
            <div class="p-5 text-center">
              <h3 class="text-lg font-bold text-text">{{ teacher.name }}</h3>
              <p class="mt-1 text-sm font-semibold text-accent">{{ teacher.subject }}</p>
              <p class="mt-1 text-xs text-text/60">{{ teacher.stage }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div v-reveal class="mt-12 text-center">
        <RouterLink
          to="/teachers"
          class="inline-flex items-center gap-2 rounded-full border-2 border-cta px-8 py-3 font-bold text-cta transition-all duration-200 hover:bg-cta hover:text-dark"
        >
          {{ teachersSection.ctaLabel }}
          <LineIcon name="arrow" class="h-5 w-5" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
