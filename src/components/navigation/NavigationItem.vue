<script lang="ts" setup>
import { ScrollTrigger } from 'gsap/all'

const props = defineProps<{
  id: string
  text: string
}>()

const link = ref(null)

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
</script>

<template>
  <a
    ref="link"
    :href="`#${$rt(id)}`"
    class="jo_text_base leading-tight lg:font-normal tracking-widest max-w-[5rem] relative"
  >
    <span>
      {{ $rt(text) }}
    </span>
    <template v-if="$rt(id) === $t('nav[2].id')">
      <span
        class="absolute -top-2 -left-[20%] w-[140%] h-full border border-jo_dark rounded-1/2"
        lg="w-[150%] -top-3"
        xl="w-[165%] -top-3.5"
      />
      <span
        class="flex justify-between relative
          top-[40%] w-[140%] -left-[20%]"
        lg="w-[160%] -left-[24%]"
        xl="w-[170%] -left-[22%]"
      >
        <span
          v-for="_, index in Array(4)"
          :key="`nav_arrow_${index}`"
          class="block w-4 h-4 top-full leading-none pl-0.5 font-display"
          :style="`transform: translateY(${Math.pow(index - 1.5, 2) * -4}px) rotate(${Math.pow(index - 1.5, 3) * -10}deg)`"
        >
          ↑
        </span>
      </span>
    </template>
  </a>
</template>
