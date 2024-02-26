<script lang="ts" setup>
import { gsap } from 'gsap/all'

onMounted(() => {
  gsap.set('#custom-cursor', { x: window.innerWidth / 2, y: window.innerHeight / 2 })

  const followAnimation = {
    duration: 0.2,
    ease: 'power1.out',
  }
  const xTo = gsap.quickTo('#custom-cursor', 'x', followAnimation)
  const yTo = gsap.quickTo('#custom-cursor', 'y', followAnimation)

  const rotate = gsap.to('#custom-cursor', {
    rotate: 360,
    duration: 0.9,
    repeat: -1,
    ease: 'none',
  })

  const scale = gsap.to('#custom-cursor', {
    scale: 2.5,
    duration: 0.2,
  })

  document.addEventListener('mousemove', (e: MouseEvent) => {
    xTo(e.clientX)
    yTo(e.clientY)

    const pointedElement = document.elementFromPoint(e.clientX, e.clientY)

    if (pointedElement?.closest('.cursor-hover-target')) {
      rotate.timeScale(1)
      scale.play()
    }
    else {
      rotate.timeScale(0.5)
      scale.reverse()
    }
  })
})
</script>

<template>
  <div id="custom-cursor" class="fixed pointer-events-none">
    <div class="cursor border-jo_beige border-4 border-outset bg-jo_dark/90" />
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
