<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import TrustBar from '../components/TrustBar.vue'
import WhyChooseUs from '../components/WhyChooseUs.vue'
import Subjects from '../components/Subjects.vue'
import Programs from '../components/Programs.vue'
import Teachers from '../components/Teachers.vue'
import Testimonials from '../components/Testimonials.vue'
import PromoVideo from '../components/PromoVideo.vue'
import Gallery from '../components/Gallery.vue'
import Faq from '../components/Faq.vue'
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
    <Programs />
    <Teachers />
    <Testimonials />
    <PromoVideo />
    <Gallery />
    <Faq />
    <Contact />
    <CtaBanner />
  </main>
  <Footer />
  <FloatingCta />
</template>
