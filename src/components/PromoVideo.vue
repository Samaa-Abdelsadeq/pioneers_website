<script setup>
import { ref } from 'vue'
import { Play } from '@lucide/vue'
import { promoVideo } from '../data/promoVideo'
import Container from '@/components/layout/Container.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import { Button } from '@/components/ui/button'
import LineIcon from './LineIcon.vue'

const fgEl = ref(null)
const bgEl = ref(null)
const playing = ref(false)

const play = () => {
  if (!promoVideo.src) return
  fgEl.value?.play()
}

const onPlay = () => {
  playing.value = true
  if (bgEl.value && fgEl.value) {
    bgEl.value.currentTime = fgEl.value.currentTime
    bgEl.value.play()
  }
}

const onPause = () => {
  playing.value = false
  bgEl.value?.pause()
}

const onSeeked = () => {
  if (bgEl.value && fgEl.value) {
    bgEl.value.currentTime = fgEl.value.currentTime
  }
}
</script>

<template>
  <section class="bg-white section-spacing">
    <Container>
      <SectionHeader :title="promoVideo.title" :subtitle="promoVideo.subtitle" badge="فيديو" />

      <div
        v-reveal
        class="group relative mx-auto aspect-video w-full max-w-[950px] overflow-hidden rounded-2xl border border-hairline-soft bg-white shadow-2xl shadow-ink-deep/5"
      >
        <video
          ref="bgEl"
          class="pointer-events-none absolute inset-0 block h-full w-full scale-110 object-cover object-center blur-3xl brightness-75"
          :src="promoVideo.src || undefined"
          :poster="promoVideo.poster"
          muted
          preload="metadata"
          playsinline
          tabindex="-1"
          aria-hidden="true"
        />

        <video
          ref="fgEl"
          class="absolute inset-0 z-10 block h-full w-full object-contain object-center"
          :src="promoVideo.src || undefined"
          :poster="promoVideo.poster"
          controls
          preload="metadata"
          playsinline
          @play="onPlay"
          @pause="onPause"
          @seeked="onSeeked"
        />

        <button
          v-if="!playing"
          class="absolute inset-0 z-20 flex items-center justify-center transition-colors duration-200 hover:bg-ink-deep/10"
          :aria-label="promoVideo.src ? 'تشغيل الفيديو' : 'الفيديو هيتضاف قريبًا'"
          @click="play"
        >
          <span class="flex h-20 w-20 items-center justify-center rounded-full bg-brand-yellow text-ink shadow-xl shadow-brand-yellow/30 transition-transform duration-200 group-hover:scale-110">
            <Play class="h-9 w-9 translate-x-0.5 fill-current" />
          </span>
        </button>
      </div>

      <p v-if="!promoVideo.src" class="mt-4 text-center text-sm text-muted-foreground">
        الفيديو التعريفي هيتضاف هنا قريبًا
      </p>
    </Container>
  </section>
</template>
