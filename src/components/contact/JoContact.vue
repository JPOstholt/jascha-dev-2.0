<script lang="ts" setup>
import gsap from 'gsap'

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
    ref="container2"
    class="min-h-screen flex flex-col"
  >
    <section
      class="flex-grow
        flex flex-col justify-center text-center items-center
        gap-y-2 mt-32"

      md="min-h-[50vh]"
      lg="gap-y-3"
    >
      <h2
        class="font-medium text-xl"
        lg="text-2xl"
      >
        {{ $t('contact.title') }}
      </h2>
      <a
        v-for="detail in $tm('contact.details')"
        :key="`contact_${$rt(detail.title)}`"
        :href="$rt(detail.link)"
        class="text-lg tracking-wider hover:tracking-[0.15em] transition-all duration-400"
        lg="text-xl"
      >
        <span class="border-b-2 border-jo_dark pb-1">
          {{ $rt(detail.title) }}
        </span>
        <span class="inline-block font-display ml-2">
          →
        </span>
      </a>
    </section>
    <div class="w-full text-center">
      <a
        v-for="_, index in Array(5)"
        :key="`arrow_${index}`" ref="arrows"
        href="#hero"
        class="inline-block text-stroke-1 text-stroke-jo_dark text-transparent font-display leading-none
        text-[34vw] md:text-[30vw] lg:text-[31vw] 4xl:text-[28vw]"
      >
        ↑
      </a>
    </div>
    <footer
      class="font-extralight text-center mb-4
        text-[2.9vw] lg:text-3xl"
    >
      {{ $t('footer') }}
      <JoImprint />
    </footer>
  </div>
</template>
