<script setup>
const props = defineProps({
  name: { type: String, required: true },
})

const icons = {
  atom: {
    circles: [
      { cx: 12, cy: 12, r: 1 },
      { cx: 21, cy: 12, r: 0.9, fill: true },
      { cx: 7.5, cy: 5, r: 0.9, fill: true },
      { cx: 7.5, cy: 19, r: 0.9, fill: true },
    ],
    ellipses: [
      { cx: 12, cy: 12, rx: 10, ry: 4, rotate: 60 },
      { cx: 12, cy: 12, rx: 10, ry: 4, rotate: -60 },
      { cx: 12, cy: 12, rx: 10, ry: 4, rotate: 0 },
    ],
  },
  flask: {
    paths: ['M10 2v7.5L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9.5V2', 'M8.5 2h7', 'M7 16h10'],
    circles: [
      { cx: 9, cy: 15, r: 0.7, fill: true },
      { cx: 12, cy: 17.2, r: 0.9, fill: true },
      { cx: 14, cy: 14.3, r: 0.6, fill: true },
    ],
  },
  math: {
    paths: [
      'M6 3v6',
      'M3 6h6',
      'M15 6h6',
      'M3 15l6 6',
      'M9 15l-6 6',
      'M15 18h6',
    ],
    circles: [
      { cx: 18, cy: 15.5, r: 0.9, fill: true },
      { cx: 18, cy: 20.5, r: 0.9, fill: true },
    ],
  },
  arabic: {
    texts: [{ x: 12, y: 17.5, size: 18, weight: 800, content: 'ع' }],
  },
  english: {
    paths: ['M5 20.5h13'],
    texts: [
      { x: 5.5, y: 15, size: 12, weight: 800, content: 'A' },
      { x: 13.5, y: 17.5, size: 9.5, weight: 700, content: 'a' },
    ],
  },
  code: {
    paths: [
      'M4 4.5h16v11.5H4z',
      'M10 19.5h4',
      'M12 16v3.5',
    ],
  },
  french: {
  paths: [
      'M4 4C4 2.9 4.9 2 6 2H18C19.1 2 20 2.9 20 4V14C20 15.1 19.1 16 18 16H10L6 20V16H6C4.9 16 4 15.1 4 14Z',
    ],
    texts: [{ x: 12, y: 12.5, size: 11, weight: 800, content: 'é' }],
},
  lightbulb: {
    paths: ['M15 14c.2-1 .7-1.7 1.5-2.5A5.5 5.5 0 1 0 7.5 11c.8.8 1.3 1.5 1.5 2.5', 'M9 18h6', 'M10 22h4'],
  },
  studies: {
    paths: [
    'M4 6L9 4L15 6L20 4V18L15 20L9 18L4 20Z',
    'M9 4V18',
    'M15 6V20',
    ],  
  },
  dna: {
    strandA:
      'M18,2 C18,2.83 17.35,3.67 16.24,4.5 C15.13,5.33 13.57,6.17 12,7 C10.43,7.83 8.87,8.67 7.76,9.5 C6.65,10.33 6,11.17 6,12 C6,12.83 6.65,13.67 7.76,14.5 C8.87,15.33 10.43,16.17 12,17 C13.57,17.83 15.13,18.67 16.24,19.5 C17.35,20.33 18,21.17 18,22',
    strandB:
      'M6,2 C6,2.83 6.65,3.67 7.76,4.5 C8.87,5.33 10.43,6.17 12,7 C13.57,7.83 15.13,8.67 16.24,9.5 C17.35,10.33 18,11.17 18,12 C18,12.83 17.35,13.67 16.24,14.5 C15.13,15.33 13.57,16.17 12,17 C10.43,17.83 8.87,18.67 7.76,19.5 C6.65,20.33 6,21.17 6,22',
    rungs: [
      'M7.76,4.5 L16.24,4.5',
      'M7.76,9.5 L16.24,9.5',
      'M7.76,14.5 L16.24,14.5',
      'M7.76,19.5 L16.24,19.5',
    ],
  },
}
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="name === 'dna'">
      <path :d="icons.dna.strandA" />
      <path :d="icons.dna.strandB" />
      <path v-for="(d, i) in icons.dna.rungs" :key="'rung' + i" :d="d" stroke-width="1.2" />
    </template>
    <template v-else>
      <circle
        v-for="(c, i) in icons[name].circles || []"
        :key="'c' + i"
        :cx="c.cx"
        :cy="c.cy"
        :r="c.r"
        :fill="c.fill ? 'currentColor' : 'none'"
        :stroke="c.fill ? 'none' : 'currentColor'"
      />
      <ellipse
        v-for="(e, i) in icons[name].ellipses || []"
        :key="'e' + i"
        :cx="e.cx"
        :cy="e.cy"
        :rx="e.rx"
        :ry="e.ry"
        :transform="`rotate(${e.rotate} ${e.cx} ${e.cy})`"
      />
      <path v-for="(d, i) in icons[name].paths || []" :key="'p' + i" :d="d" />
      <text
        v-for="(t, i) in icons[name].texts || []"
        :key="'t' + i"
        :x="t.x"
        :y="t.y"
        :font-size="t.size"
        :font-weight="t.weight"
        fill="currentColor"
        stroke="none"
        text-anchor="middle"
        font-family="inherit"
      >
        {{ t.content }}
      </text>
    </template>
  </svg>
</template>