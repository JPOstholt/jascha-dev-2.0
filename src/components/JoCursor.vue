<script lang="ts" setup>
import { gsap } from 'gsap/all'

onMounted(() => {
  const followAnimation = {
    duration: 0.5,
    ease: 'power1.out',
  }

  const xTo = gsap.quickTo('#custom-cursor', 'x', followAnimation)

  const yTo = gsap.quickTo('#custom-cursor', 'y', followAnimation)

  const pulsate = gsap.to('#custom-cursor', {
    rotate: 360,
    duration: 1,
    repeat: -1,
    ease: 'none',
    paused: true,
  })

  document.addEventListener('mousemove', (e: MouseEvent) => {
    xTo(e.clientX)
    yTo(e.clientY)

    const pointedElement = document.elementFromPoint(e.clientX, e.clientY)

    if (pointedElement?.closest('.cursor-hover-target')) {
      pulsate.play()
      gsap.to('#custom-cursor', {
        scale: 2,
        duration: 0.2,
      })
    }
    else {
      pulsate.pause()
      gsap.to('#custom-cursor', {
        scale: 1,
        duration: 0.2,
      })
    }
  })
})
</script>

<template>
  <div id="custom-cursor" class="fixed pointer-events-none">
    <div class="cursor border-jo_beige border-4 border-outset bg-jo_dark" style="" />
  </div>
</template>

<style>
* {
  cursor: none;
}
</style>

<style lang="css" scoped>
#custom-cursor {
  z-index: 1000;
  --circle-size: 20px;
  top: calc(var(--circle-size) / 2 * -1);
  left: calc(var(--circle-size) / 2 * -1);
}

#custom-cursor > div {
  height: var(--circle-size);
  width: var(--circle-size);
  border-radius: 100%;
  pointer-events: none;
}
</style>
