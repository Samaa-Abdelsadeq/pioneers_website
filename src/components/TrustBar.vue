<script setup>
import { stats } from '../data/stats'
import StatCard from './StatCard.vue'
</script>

<template>
  <section class="border-y border-white/10 bg-dark/60">
    <div class="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:py-14 lg:px-8">
      <StatCard
        v-for="(stat, i) in stats"
        :key="stat.id"
        v-reveal="i * 100"
        :value="stat.value"
        :suffix="stat.suffix"
        :label="stat.label"
      />
    </div>
  </section>
</template>
