<script setup>
import { galleryImages, gallerySection } from '../data/gallery'
import Container from '@/components/layout/Container.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
</script>

<template>
  <section id="gallery" class="bg-surface py-20 lg:py-28">
    <Container>
      <SectionHeader :title="gallerySection.title" :subtitle="gallerySection.subtitle" badge="معرض الصور" />

      <div v-reveal class="columns-2 gap-4 space-y-4 sm:gap-6 sm:space-y-6 lg:columns-3">
        <figure
          v-for="image in galleryImages"
          :key="image.id"
          class="group relative break-inside-avoid overflow-hidden rounded-2xl border border-hairline-soft bg-white shadow-sm"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            loading="lazy"
            :class="[
              'w-full object-cover transition-transform duration-500 group-hover:scale-105',
              image.size === 'tall' ? 'aspect-[3/4]' : image.size === 'wide' ? 'aspect-[16/10]' : 'aspect-square',
            ]"
          />
          <figcaption
            class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-deep/80 to-transparent px-4 pt-10 pb-3 text-sm font-bold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          >
            {{ image.alt }}
          </figcaption>
        </figure>
      </div>
    </Container>
  </section>
</template>
