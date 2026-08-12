<script setup>
import Container from '@/components/layout/Container.vue'

const photoSrc = '/images/classroom-hero.jpg'

const onPhotoError = (e) => {
  if (!e.target.dataset.fallback) {
    e.target.dataset.fallback = '1'
    e.target.src = '/images/center_11.jpg'
  }
}
</script>

<template>
  <section class="relative overflow-hidden bg-white pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_40%,transparent_40%,rgba(255,208,47,0.08)_100%)]" />
    <div class="pointer-events-none absolute inset-0" style="background-image: radial-gradient(rgba(28,28,30,0.05) 1px, transparent 1px); background-size: 26px 26px;" />

    <Container>
      <div class="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div v-reveal class="text-center lg:text-start">
          <p class="mb-4 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-sm font-semibold text-muted-foreground">
            <span class="h-2 w-2 rounded-full bg-brand-yellow" />
            سنتر بيونيرز
          </p>
          <h1 class="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-deep sm:text-5xl lg:text-6xl">
            هنا بيبدأ مشوار النجاح
          </h1>
          <p class="mx-auto mt-6 max-w-md text-lg leading-relaxed text-slate lg:mx-0">
            بنعلّم النهارده... وبنبني <span class="font-bold text-brand-blue">أطباء ومهندسي المستقبل</span>.
          </p>
          <p class="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground lg:mx-0">
            سنتر تعليمي للإعدادي والثانوي للمدارس التجريبية واللغات منذ 2009
          </p>
        </div>

        <div v-reveal="150" class="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none">
          <div class="pointer-events-none absolute -inset-10 bg-[radial-gradient(ellipse_45%_40%_at_50%_75%,rgba(255,208,47,0.25),transparent_70%),radial-gradient(ellipse_35%_30%_at_50%_40%,rgba(66,98,255,0.1),transparent_70%)] blur-3xl" />

          <figure class="relative w-full max-w-[460px] -rotate-1.5 rounded-2xl bg-white p-3 pb-12 shadow-2xl shadow-ink-deep/10 sm:max-w-[500px]">
            <img
              :src="photoSrc"
              alt="مدرس وطلاب أثناء الشرح في بيونيرز"
              loading="lazy"
              class="block aspect-[4/3] w-full rounded-xl object-cover"
              @error="onPhotoError"
            />
          </figure>
        </div>
      </div>
    </Container>
  </section>
</template>
