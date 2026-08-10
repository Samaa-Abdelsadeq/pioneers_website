<script setup>
import { ref } from 'vue'
import { siteConfig, navLinks, ctaLabel, ctaLink } from '../data/siteConfig'
import LineIcon from './LineIcon.vue'

const mobileOpen = ref(false)
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(33,0,81,0.55)] backdrop-blur-lg">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      <RouterLink to="/" class="flex items-center gap-3">
        <img :src="siteConfig.logo" :alt="siteConfig.name" class="h-11 w-11 rounded-full object-cover ring-2 ring-cta/60" />
        <span class="text-lg font-extrabold text-text">{{ siteConfig.name }}</span>
      </RouterLink>

      <ul class="hidden items-center gap-8 lg:flex">
        <li v-for="link in navLinks" :key="link.label">
          <RouterLink
            :to="link.to"
            class="text-sm font-semibold text-text transition-colors duration-200 hover:text-cta"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <div class="flex items-center gap-3">
        <a
          :href="ctaLink"
          class="hidden rounded-full bg-cta px-6 py-2.5 text-sm font-bold text-dark transition-colors duration-200 hover:bg-text hover:text-primary sm:inline-block"
        >
          {{ ctaLabel }}
        </a>
        <button
          class="rounded-lg p-2 text-text transition-colors duration-200 hover:text-cta lg:hidden"
          :aria-label="mobileOpen ? 'إغلاق القائمة' : 'فتح القائمة'"
          @click="mobileOpen = !mobileOpen"
        >
          <LineIcon :name="mobileOpen ? 'close' : 'menu'" class="h-6 w-6" />
        </button>
      </div>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="border-t border-white/10 bg-[rgba(21,4,46,0.92)] backdrop-blur-lg lg:hidden">
        <ul class="space-y-1 px-4 py-4">
          <li v-for="link in navLinks" :key="link.label">
            <RouterLink
              :to="link.to"
              class="block rounded-lg px-3 py-2.5 font-semibold text-text transition-colors duration-200 hover:bg-white/5 hover:text-cta"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </RouterLink>
          </li>
          <li class="pt-2">
            <a
              :href="ctaLink"
              class="block rounded-full bg-cta px-6 py-2.5 text-center text-sm font-bold text-dark transition-colors duration-200 hover:bg-text hover:text-primary"
              @click="mobileOpen = false"
            >
              {{ ctaLabel }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
