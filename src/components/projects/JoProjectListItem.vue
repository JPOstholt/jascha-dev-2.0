<script lang="ts" setup>
import gsap from 'gsap'

defineProps<{
  href: string
}>()

// Marquee effect on projects that are to wide for viewport
const projectTitle = ref<HTMLElement | null>(null)
const window = useWindowSize()

onMounted(() => {
  if (projectTitle.value!.scrollWidth > window.width.value) {
    const duration = gsap.utils.random(7, 11, 1)

    gsap.to(projectTitle.value, {
      keyframes: {
        x: ['100%', '-150%'],
        easeEach: 'none',
      },
      ease: 'none',
      duration,
      repeat: -1,
    })
  }
})
</script>

<template>
  <a
    ref="projectTitle"
    :href="$rt(href)"
    class="font-serif whitespace-nowrap
            hover:text-transparent hover:text-stroke-1 hover:text-stroke-jo_dark transition-colors
            text-7xl xl:text-8xl"
    target="_blank"
  >
    <span>
      <slot />
    </span>
  </a>
  <div class="jo_border" />
</template>
