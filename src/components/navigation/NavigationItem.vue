<script lang="ts" setup>
import { ScrollTrigger } from 'gsap/all'

const props = defineProps<{
  id: string
  text: string
}>()

const link = ref(null)

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
    class="jo_text_base leading-tight lg:font-normal tracking-widest max-w-[5rem]"
  >
    {{ $rt(text) }}
  </a>
</template>
