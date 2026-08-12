<script setup>
import Navbar from '../components/Navbar.vue'
import AboutHero from '../components/AboutHero.vue'
import TeacherStories from '../components/TeacherStories.vue'
import CtaBanner from '../components/CtaBanner.vue'
import Footer from '../components/Footer.vue'
import FloatingCta from '../components/ui/FloatingCta.vue'
</script>

<template>
  <Navbar />
  <main class="pb-16 sm:pb-0">
    <AboutHero />
    <TeacherStories />
    <CtaBanner />
  </main>
  <Footer />
  <FloatingCta />
</template>
