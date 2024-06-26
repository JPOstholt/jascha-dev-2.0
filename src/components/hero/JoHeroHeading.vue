<script lang="ts" setup>
import { SplitText, gsap } from 'gsap/all'

const heading = ref(null)
const container = ref(null)
const { top } = useElementBounding(heading)
const window = useWindowSize()

// todo use clamp, min and max instead of sizeFactor
const sizeFactor = computed(() => (window.height.value + window.width.value) / 5.0)

onMounted(() => {
  const split = new SplitText(heading.value, { type: 'chars', charsClass: 'flex-shrink' })
  const chars = split.chars

  // follow mouse
  const MOVEMENT_RANGE = 40

  const { x, y, isOutside } = useMouseInElement(container.value)

  function reset() {
    gsap.to(chars, {
      translateX: 0,
      translateY: 0,
      duration: 0.8,
    })
  }

  watch([x, y, isOutside], ([x, y, isOutside]) => {
    if (isOutside) {
      reset()
      return
    }

    gsap.to(chars, {
      translateX: index => gsap.utils.mapRange(0, window.width.value, -MOVEMENT_RANGE * index, MOVEMENT_RANGE * index, x),
      translateY: index => gsap.utils.mapRange(0, window.height.value, -MOVEMENT_RANGE * index, MOVEMENT_RANGE * index, y),
      duration: 0.8,
    })
  })

  // unfold
  const tl = gsap.timeline({
    scrollTrigger: {
      toggleActions: 'play reverse play reverse',
      onLeave: reset,
      onLeaveBack: reset,
    },
  })

  tl.to(heading.value, {
    height: () => window.height.value - sizeFactor.value,
    width: '120vw',
    translateY: () => -top.value,
    translateX: '-3vw',
  })
  tl.to(chars, {
    userSelect: 'none',
    fontSize: () => sizeFactor.value,
    top: gsap.utils.distribute({
      base: 0,
      amount: sizeFactor.value,
    }),
    marginRight: () => window.width.value > 1200 ? sizeFactor.value * 0.3 : sizeFactor.value * 0.18,
  }, 0)
})
</script>

<template>
  <div
    ref="container"
    class="absolute top-0 left-0 w-screen h-screen z-0"
  />
  <div
    class="relative"
  >
    <h1
      ref="heading"
      class="absolute top-0 left-0 block text-transparent text-stroke-jo_dark font-serif md:text-stroke-2
      w-screen flex flex-wrap"
    >
      {{ $t('hero.h1') }}
    </h1>
    <p
      aria-hidden
      class="block text-transparent text-stroke-jo_dark font-serif opacity-0"
    >
      {{ $t('hero.h1') }}
    </p>
  </div>
</template>

<style>
html, body {
  overscroll-behavior: none
}
</style>
