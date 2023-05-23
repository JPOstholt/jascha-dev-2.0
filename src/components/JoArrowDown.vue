<script lang="ts" setup>
import { gsap } from 'gsap'

let tween: gsap.core.Tween
const hoverAnimation = () => {
  if (tween) {
    tween.play()
    return
  }

  tween = gsap.to('#start', {
    morphSVG: '#end',
    duration: 0.5,
    fillOpacity: 0,
    ease: 'power3.out',
  })
}
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="overflow-visible origin-center"
    fill="none" viewBox="0 0 65 93" @mouseenter="hoverAnimation" @mouseleave="tween.reverse()"
  >
    <path id="start" fill="currentColor" stroke="currentColor" d="m31 93-7.26-9.24L.64 58.152v-.66h9.636L22.024 70.56l5.412 8.052h.66V.6h8.58v77.88h.66l5.28-7.92 11.88-13.068h9.636v.66l-23.1 25.608-7.26 9.24H31Z" />
    <path id="end" stroke="currentColor" d="M31.0006 138L23.7406 128.76L0.640625 103.152V102.492H10.2766L22.0246 115.56L27.4366 123.612H28.0966V0H36.6766V123.48H37.3366L42.6166 115.56L54.4966 102.492H64.1326V103.152L41.0326 128.76L33.7726 138H31.0006Z" />
  </svg>
</template>

<style>
#end {
  visibility: hidden;
}
</style>
