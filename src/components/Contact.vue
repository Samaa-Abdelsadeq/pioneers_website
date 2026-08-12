<script setup>
import { Phone } from '@lucide/vue'
import { siteConfig } from '../data/siteConfig'
import Container from '@/components/layout/Container.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import LineIcon from './LineIcon.vue'

const contacts = [
  {
    title: 'اتصل بنا',
    icon: 'phone',
    items: siteConfig.phones.map((p) => ({ label: p, href: `tel:${p}` })),
  },
  {
    title: 'واتساب',
    icon: 'whatsapp',
    items: siteConfig.whatsapp.map((link, i) => ({ label: siteConfig.phones[i], href: link, external: true })),
  },
  {
    title: 'زورنا',
    icon: 'pin',
    items: [{ label: siteConfig.address, href: siteConfig.mapShareUrl, external: true }],
  },
]
</script>

<template>
  <section id="contact" class="bg-white section-spacing">
    <Container>
      <SectionHeader title="تواصل معنا" subtitle="حابب تعرف أكتر؟ إحنا هنا عشان نساعدك." badge="تواصل" />

      <div class="grid gap-6 lg:grid-cols-3">
        <Card
          v-for="(contact, i) in contacts"
          :key="contact.title"
          v-reveal="i * 100"
          class="rounded-[28px] border-hairline-soft bg-white text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <CardContent class="p-6">
            <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow/20 text-foreground">
              <LineIcon :name="contact.icon" class="h-7 w-7" />
            </div>
            <h3 class="mt-4 text-lg font-bold text-foreground">{{ contact.title }}</h3>
            <ul class="mt-3 space-y-2">
              <li v-for="(item, idx) in contact.items" :key="idx">
                <a
                  :href="item.href"
                  :target="item.external ? '_blank' : undefined"
                  :rel="item.external ? 'noopener' : undefined"
                  class="text-sm text-muted-foreground transition-colors hover:text-brand-blue"
                  dir="ltr"
                >
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card
          v-reveal="300"
          class="rounded-[28px] border-hairline-soft bg-ink text-center text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <CardContent class="p-6">
            <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow text-ink">
              <LineIcon name="facebook" class="h-7 w-7" />
            </div>
            <h3 class="mt-4 text-lg font-bold">تابعنا</h3>
            <p class="mt-3 text-sm text-white/70">خليك على تواصل مع آخر أخبارنا</p>
            <Button as-child variant="outline" class="mt-4 w-full rounded-full border-white/30 text-white hover:bg-white hover:text-ink">
              <a :href="siteConfig.social.facebook" target="_blank" rel="noopener">
                صفحة الفيسبوك
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card v-reveal class="mt-8 overflow-hidden rounded-[28px] border-hairline-soft">
        <iframe
          v-if="siteConfig.mapEmbedUrl"
          :src="siteConfig.mapEmbedUrl"
          class="h-80 w-full"
          loading="lazy"
          title="موقع المركز على الخريطة"
        />
        <div v-else class="flex h-80 w-full flex-col items-center justify-center gap-3 bg-muted text-muted-foreground">
          <LineIcon name="pin" class="h-10 w-10 text-muted-foreground" />
          <p class="text-sm font-semibold">خريطة الموقع هتتضاف هنا</p>
        </div>
      </Card>
    </Container>
  </section>
</template>
