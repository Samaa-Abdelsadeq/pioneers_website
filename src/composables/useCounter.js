import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useCounter(target, duration = 1800) {
  const value = ref(0)
  const el = ref(null)
  let observer = null
  let started = false

  const animate = () => {
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      value.value = Math.round(eased * target)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true
            animate()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.4 },
    )
    if (el.value) observer.observe(el.value)
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })

  return { el, value }
}
