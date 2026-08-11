<script setup>
import { Button } from '@/components/ui/button'
import { ctaLabel, ctaLink } from '@/data/siteConfig'
</script>

<template>
  <div class="fixed inset-x-0 bottom-0 z-40 p-4 sm:hidden">
    <Button as-child size="lg" class="w-full rounded-full shadow-xl shadow-black/20">
      <a :href="ctaLink">{{ ctaLabel }}</a>
    </Button>
  </div>
</template>
