<script setup>
import { computed, ref, watch, onBeforeUnmount } from 'vue'
import { ArrowLeft, Play, X } from '@lucide/vue'
import { heroContent } from '../data/hero'
import { promoVideo } from '../data/promoVideo'
import { ctaLabel, ctaLink } from '../data/siteConfig'
import { Button } from '@/components/ui/button'
import Container from '@/components/layout/Container.vue'

const parts = computed(() => {
  const [before, after] = heroContent.supporting.split(heroContent.highlightedPhrase)
  return { before, after }
})

const videoOpen = ref(false)

const onKeydown = (e) => {
  if (e.key === 'Escape') videoOpen.value = false
}

watch(videoOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) window.addEventListener('keydown', onKeydown)
  else window.removeEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <section id="home" class="relative overflow-hidden bg-white pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
    <!-- soft decorative blobs -->
    <div class="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-yellow/20 blur-3xl" />
    <div class="pointer-events-none absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-brand-blue/10 blur-3xl" />
    <div class="pointer-events-none absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-teal-light/40 blur-3xl" />

    <Container>
      <div class="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div v-reveal class="text-center lg:text-start">
          <p class="mb-5 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-sm font-semibold text-muted-foreground">
            <span class="h-2 w-2 rounded-full bg-success-accent" />
            سنتر بيونيرز للتجريبي واللغات
          </p>

          <h1 class="hero-display text-ink-deep">
            {{ heroContent.headline }}
          </h1>

          <p class="mt-5 text-2xl font-medium text-brand-blue sm:text-3xl">{{ heroContent.subheadline }}</p>

          <p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate lg:mx-0">
            {{ parts.before }}<span class="font-bold text-brand-yellow-dark">{{ heroContent.highlightedPhrase }}</span>{{ parts.after }}
          </p>

          <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Button as-child size="lg" class="rounded-full px-8 text-base h-12">
              <a :href="ctaLink">{{ ctaLabel }}</a>
            </Button>
            <Button as-child variant="outline" size="lg" class="rounded-full px-8 text-base h-12">
              <RouterLink to="/about">
                تعرف علينا
                <ArrowLeft class="ms-2 h-4 w-4" />
              </RouterLink>
            </Button>
          </div>

          <div class="mt-8 flex items-center justify-center gap-6 text-sm text-slate lg:justify-start">
            <div class="flex items-center gap-2">
              <span class="flex h-2 w-2 rounded-full bg-success-accent" />
              تسجيل مفتوح
            </div>
            <div class="flex items-center gap-2">
              <span class="flex h-2 w-2 rounded-full bg-brand-blue" />
              مجموعات وبرايفت
            </div>
            <div class="flex items-center gap-2">
              <span class="flex h-2 w-2 rounded-full bg-brand-yellow" />
              متابعة يومية
            </div>
          </div>
        </div>

        <div v-reveal="150" class="relative mx-auto w-full max-w-md lg:max-w-none">
          <div class="pointer-events-none absolute inset-0 -z-10 mx-auto h-3/4 w-3/4 translate-y-8 rounded-full bg-brand-yellow/20 blur-3xl" />
          <div class="relative overflow-hidden rounded-[32px] border border-hairline-soft bg-white p-2 shadow-2xl shadow-ink-deep/5">
            <img
              :src="heroContent.image"
              :alt="heroContent.imageAlt"
              class="w-full rounded-[24px] object-cover"
            />
          </div>

          <button
            v-reveal="300"
            type="button"
            class="absolute -bottom-4 -right-4 hidden max-w-[200px] rounded-2xl border border-hairline-soft bg-white p-4 text-start shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl lg:block"
            aria-label="تشغيل الفيديو التعريفي"
            @click="videoOpen = true"
          >
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow text-ink">
                <Play class="h-4 w-4 translate-x-0.5 fill-current" />
              </div>
              <div>
                <p class="text-sm font-bold text-ink">فيديو تعريفي</p>
                <p class="text-xs text-slate">شوف المركز من جوه</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </Container>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="videoOpen"
          class="fixed inset-0 z-[100] flex items-center justify-center bg-ink-deep/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="الفيديو التعريفي"
          @click.self="videoOpen = false"
        >
          <div class="relative w-full max-w-sm overflow-hidden rounded-[28px] bg-black shadow-2xl">
            <button
              type="button"
              class="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink transition-colors hover:bg-white"
              aria-label="إغلاق الفيديو"
              @click="videoOpen = false"
            >
              <X class="h-5 w-5" />
            </button>
            <video
              :src="promoVideo.src"
              :poster="promoVideo.poster"
              class="max-h-[80vh] w-full object-contain"
              controls
              autoplay
              playsinline
            ></video>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>
