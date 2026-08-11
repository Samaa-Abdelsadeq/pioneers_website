<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import TrustBar from '../components/TrustBar.vue'
import WhyChooseUs from '../components/WhyChooseUs.vue'
import PromoVideo from '../components/PromoVideo.vue'
import Subjects from '../components/Subjects.vue'
import Teachers from '../components/Teachers.vue'
import Gallery from '../components/Gallery.vue'
import Contact from '../components/Contact.vue'
import CtaBanner from '../components/CtaBanner.vue'
import Footer from '../components/Footer.vue'
import FloatingCta from '../components/ui/FloatingCta.vue'
</script>

<template>
  <Navbar />
  <main class="pb-16 sm:pb-0">
    <Hero />
    <TrustBar />
    <WhyChooseUs />
    <Subjects />
    <Teachers />
    <PromoVideo />
    <Gallery />
    <Contact />
    <CtaBanner />
  </main>
  <Footer />
  <FloatingCta />
</template>
