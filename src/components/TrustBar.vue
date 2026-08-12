<script setup>
import { stats } from '../data/stats'
import Container from '@/components/layout/Container.vue'
import StatItem from '@/components/ui/StatItem.vue'
</script>

<template>
  <section class="border-y border-hairline-soft bg-surface-soft">
    <Container>
      <div class="grid grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:py-16">
        <StatItem
          v-for="(stat, i) in stats"
          :key="stat.id"
          v-reveal="i * 100"
          :value="stat.value"
          :suffix="stat.suffix"
          :label="stat.label"
        />
      </div>
    </Container>
  </section>
</template>
