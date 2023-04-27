<script lang="ts" setup>
import { SplitText, gsap } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const heading = ref(null)
const container = ref(null)
const { top } = useElementBounding(heading)
const window = useWindowSize()

const sizeFactor = computed(() => (window.height.value + window.width.value) / 5.0)

onMounted(() => {
  const split = new SplitText(heading.value, { type: 'chars' })
  const chars = split.chars

  const tl = gsap.timeline({
    scrollTrigger: {
      toggleActions: 'play reverse play reverse',
    },
  })

  tl.to(heading.value, {
    height: '150vh',
    width: '120vw',
    translateY: -top.value,
    translateX: '-3vw',
  })
  tl.to(chars, {
    fontSize: sizeFactor.value,
    y: gsap.utils.distribute({
      base: 0,
      amount: window.height.value / 2.2,
    }),
    marginRight: sizeFactor.value * 0.18,
  }, 0)

  // Try setting marginTop: -100% on chars to make positioning easier
  //
})
</script>

<template>
  <div
    ref="container"
    class="relative"
  >
    <h1
      ref="heading"
      class="absolute top-0 left-0 block text-transparent text-stroke-jo_dark font-serif w-screen
      md:text-stroke-2"
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
