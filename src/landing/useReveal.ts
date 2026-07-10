import { onMounted, onUnmounted, ref } from 'vue'

export function useReveal() {
  const el = ref<HTMLElement | null>(null)
  const revealed = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!el.value) return
    observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        revealed.value = true
        observer?.disconnect()
      }
    }, { threshold: 0.12 })
    observer.observe(el.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { el, revealed }
}
