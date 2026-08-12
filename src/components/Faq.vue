<script setup>
import { faqItems, faqSection } from '../data/faq'
import Container from '@/components/layout/Container.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
</script>

<template>
  <section id="faq" class="bg-surface-soft section-spacing">
    <Container size="narrow">
      <SectionHeader :title="faqSection.title" :subtitle="faqSection.subtitle" badge="أسئلة شائعة" />

      <div v-reveal>
        <Accordion type="single" collapsible class="space-y-4">
          <AccordionItem
            v-for="item in faqItems"
            :key="item.id"
            :value="`item-${item.id}`"
            class="rounded-xl border border-hairline-soft bg-white px-6 py-1 transition-shadow duration-200 hover:shadow-sm"
          >
            <AccordionTrigger class="text-right text-base font-semibold text-ink hover:no-underline sm:text-lg">
              {{ item.question }}
            </AccordionTrigger>
            <AccordionContent class="pb-4 text-right text-sm leading-relaxed text-slate">
              {{ item.answer }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Container>
  </section>
</template>
