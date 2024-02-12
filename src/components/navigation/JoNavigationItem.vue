<script lang="ts" setup>
import { ScrollTrigger, SplitText, gsap } from 'gsap/all'

const props = defineProps<{
  id: string
  text: string
}>()

const link = ref(null)
const linkText = ref(null)

// pulsate if active
onMounted(() => {
  ScrollTrigger.create({
    start: 'top center',
    end: 'bottom center',
    trigger: `#${props.id}`,
    toggleClass: {
      targets: link.value,
      className: 'animate-pulse',
    },
  })
})

// hover
let chars: Element[]
onMounted(() => {
  // adding the !block class ensures the linebreak in 'recent projects'
  const split = new SplitText(linkText.value, { type: 'words,chars', wordsClass: '!block' })
  chars = split.chars
})

let hoverAnimation: gsap.core.Tween
const mouseEnter = () => {
  if (hoverAnimation) {
    hoverAnimation.play()
    return
  }

  hoverAnimation = gsap.to(chars, {
    fontFamily: 'Italiana,serif',
    marginRight: '4px',
    duration: 0.2,
    stagger: 0.05,
  })
}

const mouseLeave = () => {
  hoverAnimation!.reverse()
}
</script>

<template>
  <a
    ref="link"
    :href="`#${$rt(id)}`"
    class="jo_text_base leading-tight lg:font-normal tracking-widest relative cursor-hover-target"
    @mouseenter="mouseEnter()" @mouseleave="mouseLeave()"
  >
    <span ref="linkText">
      {{ $rt(text) }}
    </span>
    <template v-if="$rt(id) === $t('nav[2].id')">
      <span
        class="absolute block border border-jo_dark rounded-1/2
        -left-[18%] w-[130%] -top-[16%] h-[90%]"
      >
        <span
          class="flex justify-between relative
            top-[120%] w-[110%] -ml-[5%]"
        >
          <span
            v-for="_, index in Array(4)"
            :key="`nav_arrow_${index}`"
            class="block w-4 h-4 top-full leading-none pl-0.5 font-display"
            :style="`transform: translateY(${Math.pow(index - 1.5, 2) * -30}%) rotate(${Math.pow(index - 1.5, 3) * -10}deg)`"
          >
            ↑
          </span>
        </span>
      </span>
    </template>
  </a>
</template>
