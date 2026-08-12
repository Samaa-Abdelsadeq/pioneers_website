<script setup>
import { ref } from 'vue'
import { Menu } from '@lucide/vue'
import { siteConfig, navLinks, ctaLabel, ctaLink } from '../data/siteConfig'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const mobileOpen = ref(false)

const handleNavClick = () => {
  mobileOpen.value = false
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-hairline-soft bg-white/85 backdrop-blur-xl">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      <RouterLink to="/" class="flex items-center gap-3">
        <img
          :src="siteConfig.logo"
          :alt="siteConfig.name"
          class="h-10 w-10 rounded-full object-cover ring-2 ring-brand-yellow"
        />
        <div>
          <span class="text-base font-bold text-foreground">{{ siteConfig.name }}</span>
          <span class="block text-[11px] text-muted-foreground">{{ siteConfig.tagline }}</span>
        </div>
      </RouterLink>

      <ul class="hidden items-center gap-6 lg:flex">
        <li v-for="link in navLinks" :key="link.label">
          <RouterLink
            :to="link.to"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <div class="hidden items-center gap-3 lg:flex">
        <Button as-child variant="outline" class="rounded-full px-5">
          <RouterLink to="/about">عن المركز</RouterLink>
        </Button>
        <Button as-child size="default" class="rounded-full px-6">
          <a :href="ctaLink">{{ ctaLabel }}</a>
        </Button>
      </div>

      <Sheet v-model:open="mobileOpen">
        <SheetTrigger as-child class="lg:hidden">
          <Button variant="ghost" size="icon" aria-label="فتح القائمة">
            <Menu class="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" class="w-80 bg-white">
          <SheetHeader class="border-b border-hairline-soft pb-4">
            <SheetTitle class="flex items-center gap-3">
              <img :src="siteConfig.logo" :alt="siteConfig.name" class="h-10 w-10 rounded-full object-cover" />
              <span class="text-lg font-bold">{{ siteConfig.name }}</span>
            </SheetTitle>
          </SheetHeader>

          <nav class="mt-6 flex flex-col gap-1">
            <SheetClose as-child v-for="link in navLinks" :key="link.label">
              <RouterLink
                :to="link.to"
                class="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                @click="handleNavClick"
              >
                {{ link.label }}
              </RouterLink>
            </SheetClose>
          </nav>

          <div class="mt-6 flex flex-col gap-3 border-t border-hairline-soft pt-6">
            <Button as-child variant="outline" class="w-full rounded-full">
              <RouterLink to="/about" @click="handleNavClick">عن المركز</RouterLink>
            </Button>
            <Button as-child class="w-full rounded-full">
              <a :href="ctaLink" @click="handleNavClick">{{ ctaLabel }}</a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  </header>
</template>
