<script setup>
import { siteConfig } from '../data/siteConfig'
import SectionTitle from './SectionTitle.vue'
import LineIcon from './LineIcon.vue'

const section = {
  title: 'تواصل معنا',
  subtitle: 'حابب تعرف أكتر؟ إحنا هنا عشان نساعدك.',
}
</script>

<template>
  <section id="contact" class="bg-dark py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle :title="section.title" :subtitle="section.subtitle" />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-reveal
          class="group rounded-2xl border border-white/10 bg-primary/50 p-6 text-center transition-all duration-200 hover:-translate-y-1.5 hover:border-cta/60"
        >
          <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cta/10 text-cta transition-colors duration-200 group-hover:bg-accent/15 group-hover:text-accent">
            <LineIcon name="phone" class="h-7 w-7" />
          </div>
          <h3 class="mt-4 text-lg font-bold text-text">اتصل بنا</h3>
          <ul class="mt-1 space-y-1">
            <li v-for="phone in siteConfig.phones" :key="phone">
              <a :href="`tel:${phone}`" class="text-sm text-text/70 transition-colors duration-200 hover:text-cta" dir="ltr">
                {{ phone }}
              </a>
            </li>
          </ul>
        </div>

        <div
          v-reveal="100"
          class="group rounded-2xl border border-white/10 bg-primary/50 p-6 text-center transition-all duration-200 hover:-translate-y-1.5 hover:border-cta/60"
        >
          <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cta/10 text-cta transition-colors duration-200 group-hover:bg-accent/15 group-hover:text-accent">
            <LineIcon name="whatsapp" class="h-7 w-7" />
          </div>
          <h3 class="mt-4 text-lg font-bold text-text">واتساب</h3>
          <ul class="mt-1 space-y-1">
            <li v-for="(link, i) in siteConfig.whatsapp" :key="link">
              <a
                :href="link"
                target="_blank"
                rel="noopener"
                class="text-sm text-text/70 transition-colors duration-200 hover:text-cta"
                dir="ltr"
              >
                {{ siteConfig.phones[i] }}
              </a>
            </li>
          </ul>
        </div>

        <div
          v-reveal="200"
          class="group rounded-2xl border border-white/10 bg-primary/50 p-6 text-center transition-all duration-200 hover:-translate-y-1.5 hover:border-cta/60"
        >
          <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cta/10 text-cta transition-colors duration-200 group-hover:bg-accent/15 group-hover:text-accent">
            <LineIcon name="pin" class="h-7 w-7" />
          </div>
          <h3 class="mt-4 text-lg font-bold text-text">زورنا</h3>
          <p class="mt-1 text-sm text-text/70">{{ siteConfig.address }}</p>
        </div>

        <div
          v-reveal="300"
          class="group rounded-2xl border border-white/10 bg-primary/50 p-6 text-center transition-all duration-200 hover:-translate-y-1.5 hover:border-cta/60"
        >
          <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cta/10 text-cta transition-colors duration-200 group-hover:bg-accent/15 group-hover:text-accent">
            <LineIcon name="share" class="h-7 w-7" />
          </div>
          <h3 class="mt-4 text-lg font-bold text-text">تابعنا</h3>
          <div class="mt-2 flex items-center justify-center gap-3">
            <a
              :href="siteConfig.social.facebook"
              target="_blank"
              rel="noopener"
              aria-label="فيسبوك"
              class="rounded-full bg-white/5 p-2.5 text-text/80 transition-colors duration-200 hover:bg-cta hover:text-dark"
            >
              <LineIcon name="facebook" class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div v-reveal class="mt-8 overflow-hidden rounded-2xl border border-white/10">
        <iframe
          v-if="siteConfig.mapEmbedUrl"
          :src="siteConfig.mapEmbedUrl"
          class="h-72 w-full"
          loading="lazy"
          title="موقع المركز على الخريطة"
        ></iframe>
        <div v-else class="flex h-72 w-full flex-col items-center justify-center gap-3 bg-primary/40 text-text/50">
          <LineIcon name="pin" class="h-10 w-10 text-cta/50" />
          <p class="text-sm font-semibold">خريطة الموقع هتتضاف هنا</p>
        </div>
      </div>
    </div>
  </section>
</template>
