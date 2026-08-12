<script setup>
import { siteConfig, navLinks } from '../data/siteConfig'
import { Phone } from '@lucide/vue'
import Container from '@/components/layout/Container.vue'
import LineIcon from './LineIcon.vue'

const year = new Date().getFullYear()

const footerLinks = [
  {
    title: 'الصفحات',
    links: navLinks,
  },
  {
    title: 'المواد',
    links: [
      { label: 'الرياضيات', to: '/#subjects' },
      { label: 'العلوم', to: '/#subjects' },
      { label: 'الفيزياء', to: '/#subjects' },
      { label: 'الأحياء', to: '/#subjects' },
      { label: 'اللغة الإنجليزية', to: '/#subjects' },
      { label: 'اللغة الفرنسية', to: '/#subjects' },
    ],
  },
  {
    title: 'تواصل معنا',
    links: siteConfig.phones.map((phone) => ({
      label: phone,
      href: `tel:${phone}`,
      external: false,
    })).concat([
      { label: 'واتساب', href: siteConfig.whatsapp[0], external: true },
      { label: 'فيسبوك', href: siteConfig.social.facebook, external: true },
    ]),
  },
]
</script>

<template>
  <footer class="bg-footer-bg text-on-dark">
    <Container>
      <div class="grid gap-10 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div class="lg:col-span-1">
          <RouterLink to="/" class="flex items-center gap-3">
            <img :src="siteConfig.logo" :alt="siteConfig.name" class="h-12 w-12 rounded-full object-cover ring-2 ring-brand-yellow" />
            <div>
              <p class="text-lg font-bold text-white">{{ siteConfig.name }}</p>
              <p class="text-xs text-on-dark-muted">{{ siteConfig.tagline }}</p>
            </div>
          </RouterLink>
          <p class="mt-5 max-w-md text-sm leading-relaxed text-on-dark-muted">
            سنتر تعليمي للإعدادي والثانوي للمدارس التجريبية واللغات منذ 2009. نخبة من المدرسين المتخصصين معاك خطوة بخطوة.
          </p>
          <div class="mt-6 flex items-center gap-3">
            <a
              :href="siteConfig.social.facebook"
              target="_blank"
              rel="noopener"
              aria-label="فيسبوك"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-on-dark transition-colors hover:bg-brand-yellow hover:text-ink"
            >
              <LineIcon name="facebook" class="h-5 w-5" />
            </a>
            <a
              :href="siteConfig.whatsapp[0]"
              target="_blank"
              rel="noopener"
              aria-label="واتساب"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-on-dark transition-colors hover:bg-brand-yellow hover:text-ink"
            >
              <LineIcon name="whatsapp" class="h-5 w-5" />
            </a>
            <a
              :href="`tel:${siteConfig.phones[0]}`"
              aria-label="اتصل بنا"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-on-dark transition-colors hover:bg-brand-yellow hover:text-ink"
            >
              <Phone class="h-5 w-5" />
            </a>
          </div>
        </div>

        <div v-for="group in footerLinks" :key="group.title">
          <h4 class="text-sm font-bold text-white">{{ group.title }}</h4>
          <ul class="mt-5 space-y-3">
            <li v-for="link in group.links" :key="link.label">
              <RouterLink
                v-if="!link.external"
                :to="link.href || link.to"
                class="text-sm text-on-dark-muted transition-colors hover:text-white"
              >
                {{ link.label }}
              </RouterLink>
              <a
                v-else
                :href="link.href"
                target="_blank"
                rel="noopener"
                class="text-sm text-on-dark-muted transition-colors hover:text-white"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p class="text-sm text-on-dark-muted">© {{ year }} {{ siteConfig.name }} — جميع الحقوق محفوظة</p>
        <p class="text-sm text-on-dark-muted">كفر الدوار، البحيرة، مصر</p>
      </div>
    </Container>
  </footer>
</template>
