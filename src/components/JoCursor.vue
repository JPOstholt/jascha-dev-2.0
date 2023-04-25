<script lang="ts" setup>
import gsap from 'gsap'

const cursor = ref(null)

onMounted(() => {
  const { x, y } = useMouse({ touch: false })

  const xTo = gsap.quickTo(cursor.value, 'x', { duration: 0.4, ease: 'power3' })
  const yTo = gsap.quickTo(cursor.value, 'y', { duration: 0.4, ease: 'power3' })

  watch([x, y], ([x, y]) => {
    xTo(x)
    yTo(y)
  })
})
</script>

<template>
  <div ref="cursor" class="font-display text-jo_brown h-20 w-20 bg-jo_beige rounded-full flex flex-col justify-center">
    <p class="text-center">
      scroll!
    </p>
  </div>
</template>

<style>
html {
  cursor: none;
}
</style>
