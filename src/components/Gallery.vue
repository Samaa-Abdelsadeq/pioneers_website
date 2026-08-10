<script setup>
import { galleryImages, gallerySection } from '../data/gallery'
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <section id="gallery" class="bg-primary py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle :title="gallerySection.title" :subtitle="gallerySection.subtitle" />

      <div v-reveal class="columns-2 gap-4 space-y-4 sm:gap-6 sm:space-y-6 lg:columns-3">
        <figure
          v-for="image in galleryImages"
          :key="image.id"
          class="group relative break-inside-avoid overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/20"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            loading="lazy"
            :class="[
              'w-full object-cover transition-transform duration-500 group-hover:scale-110',
              image.size === 'tall' ? 'aspect-[3/4]' : image.size === 'wide' ? 'aspect-[16/10]' : 'aspect-square',
            ]"
          />
          <figcaption
            class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/90 to-transparent px-4 pt-10 pb-3 text-sm font-bold text-text opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          >
            {{ image.alt }}
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
