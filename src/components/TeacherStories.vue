<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { teacherStories } from '../data/teacherStories'
import Container from '@/components/layout/Container.vue'
import { Card, CardContent } from '@/components/ui/card'

const N = teacherStories.length
const DURATION = 4500

const sectionEl = ref(null)
const current = ref(0)

const fallbackPhotos = [
  '/images/Mohamed_Abdo_teacher.jpg',
  '/images/Alaa_teacher.jpeg',
  '/images/Zakaria_teacher.jpg',
  '/images/Mostafa_teacher.jpeg',
  '/images/Hany_teacher.jpeg',
]

const onPhotoError = (e, i) => {
  if (!e.target.dataset.fallback) {
    e.target.dataset.fallback = '1'
    e.target.src = fallbackPhotos[i % fallbackPhotos.length]
  }
}

let timer = null
let inView = false
let observer = null

const stop = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

const start = () => {
  stop()
  if (!inView) return
  timer = setInterval(() => {
    current.value = (current.value + 1) % N
  }, DURATION)
}

const goTo = (i) => {
  current.value = i
  start()
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        inView = entry.isIntersecting
        if (inView) start()
        else stop()
      })
    },
    { threshold: 0.3 },
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})

onBeforeUnmount(() => {
  stop()
  if (observer) observer.disconnect()
})
</script>

<template>
  <section ref="sectionEl" class="relative overflow-hidden bg-surface py-16 sm:py-20" aria-label="قصة بيونيرز">
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_40%,transparent_40%,rgba(255,208,47,0.08)_100%)]" />

    <Container>
      <div class="stage relative">
        <Transition name="story">
          <div :key="current" class="story-layer flex flex-col items-center lg:flex-row lg:items-start lg:justify-center">
            <div
              class="photo-motion relative order-2 shrink-0 lg:order-1"
              @mouseenter="stop"
              @mouseleave="start"
              @touchstart.passive="stop"
              @touchend.passive="start"
            >
              <div class="glow pointer-events-none absolute" />
              <img
                :src="teacherStories[current].photo"
                :alt="teacherStories[current].name"
                loading="lazy"
                class="relative z-10 h-[30vh] w-auto max-w-full object-contain sm:h-[40vh] lg:h-[55vh]"
                @error="onPhotoError($event, current)"
              />
              <div class="contact-shadow pointer-events-none absolute" />
            </div>

            <div class="bubble-motion order-1 mb-5 lg:order-2 lg:mt-24 lg:mb-0 lg:-ms-20">
              <Card class="bubble border-none shadow-2xl shadow-ink-deep/10">
                <CardContent class="p-0">
                  <p class="text-base leading-loose font-semibold text-ink sm:text-lg lg:text-xl">
                    {{ teacherStories[current].phrase }}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Transition>
      </div>

      <div class="mt-10 flex items-center justify-center gap-2.5">
        <button
          v-for="(story, i) in teacherStories"
          :key="story.id"
          :aria-label="`المدرس ${i + 1}`"
          class="h-2.5 w-2.5 rounded-full transition-all duration-300 ease-out"
          :class="current === i ? 'scale-125 bg-brand-yellow' : 'bg-hairline hover:bg-slate'"
          @click="goTo(i)"
        />
      </div>
    </Container>
  </section>
</template>

<style scoped>
.stage {
  min-height: 420px;
}

.story-leave-active {
  position: absolute;
  inset: 0;
}

.photo-motion {
  transform-origin: 50% 50%;
  will-change: transform, opacity;
}

.bubble-motion {
  transform-origin: 100% 50%;
  will-change: opacity;
}

.story-enter-active .photo-motion {
  transition:
    transform 600ms cubic-bezier(0.45, 0, 0.15, 1),
    opacity 420ms cubic-bezier(0.4, 0, 0.2, 1);
}

.story-enter-from .photo-motion {
  opacity: 0;
  transform: translateX(-60vw) scale(0.55);
}

.story-leave-active .photo-motion {
  transition:
    transform 600ms cubic-bezier(0.45, 0, 0.15, 1),
    opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
}

.story-leave-to .photo-motion {
  opacity: 0;
  transform: translateX(60vw) scale(0.55);
}

.story-enter-active .bubble-motion {
  transition: opacity 400ms ease-out 380ms;
}

.story-enter-from .bubble-motion {
  opacity: 0;
}

.story-leave-active .bubble-motion {
  transition: opacity 220ms ease-in;
}

.story-leave-to .bubble-motion {
  opacity: 0;
}

.glow {
  inset: -25% -20%;
  background:
    radial-gradient(ellipse 40% 40% at 50% 25%, rgba(66, 98, 255, 0.14), transparent 70%),
    radial-gradient(ellipse 55% 50% at 50% 65%, rgba(255, 208, 47, 0.22), transparent 70%);
  filter: blur(45px);
}

.contact-shadow {
  bottom: -10px;
  left: 50%;
  width: 70%;
  height: 26px;
  transform: translateX(-50%);
  background: radial-gradient(ellipse 50% 50% at 50% 50%, rgba(0, 0, 0, 0.4), transparent 70%);
  filter: blur(12px);
}

.bubble {
  position: relative;
  max-width: min(400px, 52vw);
  border-radius: 1.25rem;
  background: #ffffff;
  padding: 1rem 1.5rem;
  filter: drop-shadow(0 16px 22px rgba(0, 0, 0, 0.12));
}

.bubble::after {
  content: '';
  position: absolute;
  bottom: -9px;
  right: 50%;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background: #ffffff;
  transform: translateX(50%) rotate(45deg);
}

@media (min-width: 1024px) {
  .glow {
    filter: blur(70px);
  }

  .bubble::after {
    top: 42%;
    right: -9px;
    bottom: auto;
    transform: translateY(-50%) rotate(45deg);
  }
}
</style>
