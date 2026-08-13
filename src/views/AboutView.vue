<script setup>
import Navbar from '../components/Navbar.vue'
import AboutHero from '../components/AboutHero.vue'
import OurValues from '../components/OurValues.vue'
import StoryTimeline from '../components/StoryTimeline.vue'
import TeacherStories from '../components/TeacherStories.vue'
import TopStudents from '../components/TopStudents.vue'
import CtaBanner from '../components/CtaBanner.vue'
import Footer from '../components/Footer.vue'
import FloatingCta from '../components/ui/FloatingCta.vue'
</script>

<template>
  <Navbar />
  <main class="pb-16 sm:pb-0">
    <AboutHero />
    <OurValues />
    <StoryTimeline />
    <TeacherStories />
    <TopStudents />
    <CtaBanner />
  </main>
  <Footer />
  <FloatingCta />
</template>
