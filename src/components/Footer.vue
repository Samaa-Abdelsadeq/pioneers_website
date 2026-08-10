<script setup>
import { siteConfig, navLinks } from '../data/siteConfig'
import LineIcon from './LineIcon.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/10 bg-dark">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center gap-8 md:flex-row md:justify-between">
        <RouterLink to="/" class="flex items-center gap-3">
          <img :src="siteConfig.logo" :alt="siteConfig.name" class="h-12 w-12 rounded-full object-cover ring-2 ring-cta/60" />
          <div>
            <p class="text-lg font-extrabold text-text">{{ siteConfig.name }}</p>
            <p class="text-xs text-text/60">{{ siteConfig.tagline }}</p>
          </div>
        </RouterLink>

        <ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <li v-for="link in navLinks" :key="link.label">
            <RouterLink :to="link.to" class="text-sm font-semibold text-text/80 transition-colors duration-200 hover:text-cta">
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>

        <div class="flex items-center gap-3">
          <a
            :href="siteConfig.social.facebook"
            target="_blank"
            rel="noopener"
            aria-label="فيسبوك"
            class="rounded-full bg-white/5 p-2.5 text-text/80 transition-colors duration-200 hover:bg-cta hover:text-dark"
          >
            <LineIcon name="facebook" class="h-5 w-5" />
          </a>
          <a
            :href="siteConfig.whatsapp[0]"
            target="_blank"
            rel="noopener"
            aria-label="واتساب"
            class="rounded-full bg-white/5 p-2.5 text-text/80 transition-colors duration-200 hover:bg-cta hover:text-dark"
          >
            <LineIcon name="whatsapp" class="h-5 w-5" />
          </a>
        </div>
      </div>

      <div class="mt-10 border-t border-white/10 pt-6 text-center">
        <p class="text-sm text-text/50">© {{ year }} {{ siteConfig.name }} — جميع الحقوق محفوظة</p>
      </div>
    </div>
  </footer>
</template>
