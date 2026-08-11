<script setup>
const photoSrc = '/images/classroom-hero.jpg'

const onPhotoError = (e) => {
  if (!e.target.dataset.fallback) {
    e.target.dataset.fallback = '1'
    e.target.src = '/images/center_11.jpg'
  }
}
</script>

<template>
  <section class="relative overflow-hidden bg-primary">
    <div class="vignette pointer-events-none absolute inset-0"></div>
    <div class="dots pointer-events-none absolute inset-0"></div>

    <div
      class="relative mx-auto grid max-w-7xl items-center gap-16 px-4 pt-32 pb-24 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pt-40 lg:pb-32"
    >
      <div v-reveal class="text-center lg:text-right">
        <p class="flex items-center justify-center gap-3 text-sm font-medium text-text/90 lg:justify-start">
          <span class="h-px w-8 bg-accent"></span>
          سنتر بيونيرز
          <span class="h-px w-8 bg-accent lg:hidden"></span>
        </p>
        <h1 class="mt-6 text-4xl leading-[1.3] font-black text-text sm:text-5xl lg:text-6xl">
          هنا بيبدأ مشوار النجاح
        </h1>
        <p class="mx-auto mt-6 max-w-md text-lg leading-relaxed font-light text-text/85 lg:mx-0">
          بنعلّم النهارده... وبنبني <span class="font-medium text-accent">أطباء ومهندسي المستقبل</span>.
        </p>
        <span class="mx-auto mt-5 block h-px w-10 bg-accent/70 lg:mx-0"></span>
        <p class="mx-auto mt-5 max-w-md text-sm leading-relaxed font-light text-text/70 lg:mx-0">
          سنتر تعليمي للإعدادي والثانوي للمدارس التجريبية واللغات منذ 2009
        </p>
      </div>

      <div v-reveal="150" class="relative mx-auto flex w-full max-w-md items-center justify-center sm:max-w-lg lg:max-w-none">
        <div class="glow pointer-events-none absolute -inset-10"></div>

        <figure class="photo relative w-full max-w-[460px] -rotate-[1.5deg] rounded-lg bg-white p-3 pb-14 shadow-2xl shadow-black/50 sm:max-w-[500px]">
          <img
            :src="photoSrc"
            alt="مدرس وطلاب أثناء الشرح في بيونيرز"
            loading="lazy"
            class="block aspect-[4/3] w-full rounded-md object-cover"
            @error="onPhotoError"
          />
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vignette {
  background: radial-gradient(ellipse 90% 80% at 50% 40%, transparent 40%, rgba(21, 4, 46, 0.55) 100%);
}

.dots {
  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 26px 26px;
}

.glow {
  background:
    radial-gradient(ellipse 45% 40% at 50% 75%, rgba(237, 132, 14, 0.22), transparent 70%),
    radial-gradient(ellipse 35% 30% at 50% 40%, rgba(97, 185, 249, 0.07), transparent 70%);
  filter: blur(28px);
}
</style>
