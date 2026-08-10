<script setup>
import { ref } from 'vue'
import { promoVideo } from '../data/promoVideo'
import SectionTitle from './SectionTitle.vue'
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
  <section class="bg-dark py-20 lg:py-28">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <SectionTitle :title="promoVideo.title" :subtitle="promoVideo.subtitle" />

      <div
        v-reveal
        class="group relative mx-auto aspect-video w-full max-w-[950px] overflow-hidden rounded-2xl bg-black/40 shadow-2xl ring-1 ring-cta/40 shadow-cta/20"
      >
        <video
          ref="bgEl"
          class="pointer-events-none absolute inset-0 block h-full w-full scale-110 object-cover object-center blur-3xl brightness-50"
          :src="promoVideo.src || undefined"
          :poster="promoVideo.poster"
          muted
          preload="metadata"
          playsinline
          tabindex="-1"
          aria-hidden="true"
        ></video>

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
        ></video>

        <button
          v-if="!playing"
          class="absolute inset-0 z-20 flex items-center justify-center transition-colors duration-200 hover:bg-dark/20"
          :aria-label="promoVideo.src ? 'تشغيل الفيديو' : 'الفيديو هيتضاف قريبًا'"
          @click="play"
        >
          <span
            class="flex h-20 w-20 items-center justify-center rounded-full bg-cta text-text shadow-xl shadow-cta/40 transition-transform duration-200 group-hover:scale-110"
          >
            <LineIcon name="play" class="h-9 w-9 -translate-x-0.5" />
          </span>
        </button>
      </div>

      <p v-if="!promoVideo.src" class="mt-4 text-center text-sm text-text/50">
        الفيديو التعريفي هيتضاف هنا قريبًا
      </p>
    </div>
  </section>
</template>
