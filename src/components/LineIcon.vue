<script setup>
const props = defineProps({
  name: { type: String, required: true },
})

const icons = {
  users: {
    viewBox: '0 0 24 24',
    paths: [
      'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2',
      'M22 21v-2a4 4 0 0 0-3-3.87',
      'M16 3.13a4 4 0 0 1 0 7.75',
    ],
    circles: [{ cx: 9, cy: 7, r: 4 }],
  },
  presentation: {
    viewBox: '0 0 24 24',
    paths: ['M2 3h20', 'M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3', 'M12 16v3', 'm8 22 4-3 4 3', 'M7 10h4', 'M7 13h7'],
  },
  target: {
    viewBox: '0 0 24 24',
    circles: [
      { cx: 12, cy: 12, r: 10 },
      { cx: 12, cy: 12, r: 6 },
      { cx: 12, cy: 12, r: 2 },
    ],
  },
  phone: {
    viewBox: '0 0 24 24',
    paths: [
      'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
    ],
  },
  whatsapp: {
    viewBox: '0 0 24 24',
    paths: [
      'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
    ],
  },
  pin: {
    viewBox: '0 0 24 24',
    paths: ['M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z'],
    circles: [{ cx: 12, cy: 10, r: 3 }],
  },
  share: {
    viewBox: '0 0 24 24',
    paths: ['M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8', 'm16 6-4-4-4 4', 'M12 2v13'],
  },
  facebook: {
    viewBox: '0 0 24 24',
    paths: ['M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'],
  },
  instagram: {
    viewBox: '0 0 24 24',
    rects: [{ x: 2, y: 2, width: 20, height: 20, rx: 5 }],
    paths: ['M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z', 'M17.5 6.5h.01'],
  },
  play: {
    viewBox: '0 0 24 24',
    paths: ['m6 4 14 8-14 8V4z'],
    fill: true,
  },
  menu: {
    viewBox: '0 0 24 24',
    paths: ['M4 6h16', 'M4 12h16', 'M4 18h16'],
  },
  close: {
    viewBox: '0 0 24 24',
    paths: ['M18 6 6 18', 'M6 6l12 12'],
  },
  arrow: {
    viewBox: '0 0 24 24',
    paths: ['M19 12H5', 'm12 19-7-7 7-7'],
  },
  clock: {
    viewBox: '0 0 24 24',
    circles: [{ cx: 12, cy: 12, r: 10 }],
    paths: ['M12 6v6l4 2'],
  },
}
</script>

<template>
  <svg
    :viewBox="icons[name].viewBox"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <circle v-for="(c, i) in icons[name].circles || []" :key="'c' + i" :cx="c.cx" :cy="c.cy" :r="c.r" />
    <rect
      v-for="(r, i) in icons[name].rects || []"
      :key="'r' + i"
      :x="r.x"
      :y="r.y"
      :width="r.width"
      :height="r.height"
      :rx="r.rx"
    />
    <path
      v-for="(d, i) in icons[name].paths || []"
      :key="'p' + i"
      :d="d"
      :fill="icons[name].fill ? 'currentColor' : 'none'"
      :stroke="icons[name].fill ? 'none' : 'currentColor'"
    />
  </svg>
</template>
