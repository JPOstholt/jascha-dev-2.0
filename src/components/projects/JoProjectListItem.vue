<script lang="ts" setup>
import { SplitText, gsap } from 'gsap/all'

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

// hover
const linkText = ref(null)

let chars: Element[]
onMounted(() => {
  // adding the !block class ensures the linebreak in 'recent projects'
  const split = new SplitText(linkText.value, { type: 'chars,words', wordsClass: 'mr-4' })
  chars = split.chars
})

let hoverAnimation: gsap.core.Tween

const hoverHandlers = {
  mouseenter: () => {
    if (hoverAnimation) {
      hoverAnimation.play()
      return
    }

    hoverAnimation = gsap.to(chars, {
      color: 'transparent',
      textStrokeWidth: '1px',
      marginRight: '4px',
      duration: 0.04,
      stagger: 0.04,
    })
  },
  mouseleave: () => {
    hoverAnimation!.reverse()
  },
}
</script>

<template>
  <a
    ref="projectTitle"
    :href="$rt(href)"
    class="font-serif whitespace-nowrap text-stroke-jo_dark cursor-hover-target
            text-7xl xl:text-8xl"
    target="_blank"
    v-on="hoverHandlers"
  >
    <span ref="linkText" class="inline-block h-30 flex items-center">
      <slot />
    </span>
  </a>
  <div class="jo_border" />
</template>
