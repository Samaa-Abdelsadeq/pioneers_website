<script setup>
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import LineIcon from '@/components/LineIcon.vue'

defineProps({
  teacher: { type: Object, required: true },
})
</script>

<template>
  <Card class="group overflow-hidden rounded-2xl border border-hairline-soft bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div class="aspect-square w-full overflow-hidden bg-muted">
      <img
        v-if="teacher.photo"
        :src="teacher.photo"
        :alt="teacher.name"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div v-else class="flex h-full w-full items-center justify-center text-muted-foreground">
        <LineIcon name="users" class="h-16 w-16" />
      </div>
    </div>

    <CardContent class="p-5 text-center">
      <h4 class="text-lg font-bold text-card-foreground">{{ teacher.name }}</h4>
      <p class="mt-1.5 text-sm font-semibold text-brand-blue">{{ teacher.subject }}</p>
      <p class="mt-1 text-xs text-muted-foreground">{{ teacher.stage }}</p>

      <div class="mt-5 flex flex-wrap items-center justify-center gap-2">
        <Badge variant="secondary" class="rounded-full text-xs">
          <LineIcon name="clock" class="me-1 h-3.5 w-3.5" />
          {{ teacher.experienceYears }} سنوات خبرة
        </Badge>
      </div>

      <a
        v-if="teacher.phone"
        :href="`tel:${teacher.phone}`"
        class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-brand-blue"
      >
        <LineIcon name="phone" class="h-4 w-4" />
        <span dir="ltr">{{ teacher.phone }}</span>
      </a>
    </CardContent>
  </Card>
</template>
