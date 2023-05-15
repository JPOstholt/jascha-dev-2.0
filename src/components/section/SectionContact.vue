<script lang="ts" setup>
import gsap from 'gsap'

const socials = [
  'email', 'linkedIn',
]

const container2 = ref(null)
const arrows = ref<HTMLElement[]>([])
let arrowAnimations: gsap.core.Tween[] = []

onMounted(() => {
  arrowAnimations = arrows.value.map(element => gsap.to(element, {
    translateY: -50,
    paused: true,
    color: '#403D39',
  }))

  const reverse = useDebounceFn(() => {
    arrowAnimations.forEach(tween => tween.reverse())
  }, 1000)

  const window = useWindowSize()
  const { x, isOutside } = useMouseInElement(container2.value)

  watch([x, isOutside], ([x, isOutside]) => {
    if (isOutside)
      return

    const activeIndex = Math.floor(gsap.utils.mapRange(0, window.width.value, 0, 5, x))
    arrowAnimations.forEach((tween, index) => {
      if (activeIndex === index)
        tween.play()
      else
        tween.reverse()

      reverse()
    })
  })
})
</script>

<template>
  <div
    :id="$t('nav[2].id')"
    class="h-screen flex flex-col"
  >
    <section
      ref="container2"
      class="flex-grow flex flex-col justify-center text-center gap-y-2"
    >
      <h2
        class="w-full font-medium text-xl"
      >
        {{ $t('contact.title') }}
      </h2>
      <a
        v-for="detail in $tm('contact.details')" :key="`contact_${$rt(detail.title)}`"
        :href="$rt(detail.link)" class="w-full block text-lg"
      >
        <span class="underline">
          {{ $rt(detail.title) }}
        </span>
        <span class="inline-block underline transfrom rotate-270 font-display ml-1">↓</span>
      </a>
    </section>
    <div class="w-full text-center">
      <a
        v-for="_, index in Array(5)"
        :key="`arrow_${index}`" ref="arrows"
        href="#hero"
        class="inline-block text-stroke-1 text-stroke-jo_dark text-transparent text-[34vw] font-display leading-none"
      >
        ↑
      </a>
    </div>
    <footer class="text-[2.9vw] font-extralight text-center mb-4">
      {{ $t('footer') }}
      <JoImprint />
    </footer>
  </div>
</template>
