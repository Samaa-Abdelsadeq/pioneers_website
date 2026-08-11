<script setup>
import Navbar from '../components/Navbar.vue'
import AboutHero from '../components/AboutHero.vue'
import TeacherStories from '../components/TeacherStories.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <Navbar />
  <main class="bg-primary">
    <AboutHero />
    <TeacherStories />
  </main>
  <Footer />
</template>
