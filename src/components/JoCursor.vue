<script lang="ts" setup>
const cursor = ref<HTMLElement | null>(null)

const CIRCLE_SIZE = 40

const circle = reactive({
  x: 0,
  y: 0,
  height: CIRCLE_SIZE,
  width: CIRCLE_SIZE,
  onTarget: false,
})

const mouse = reactive({
  x: 0,
  y: 0,
})

const updateCursor = () => {
  const pointedElement = document.elementFromPoint(mouse.x, mouse.y)
  const targetElement = pointedElement?.closest('.adaptive-cursor-target')
  const targetElementRect = targetElement?.getBoundingClientRect()

  circle.onTarget = !!targetElementRect

  circle.x = targetElementRect?.x || mouse.x
  circle.y = targetElementRect?.y || mouse.y
  circle.width = targetElementRect?.width || CIRCLE_SIZE
  circle.height = targetElementRect?.height || CIRCLE_SIZE
}

onMounted(() => {
  document.addEventListener('mousemove', (e: MouseEvent) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
    updateCursor()
  })
})

// to do: also update Cursor if target element updates

const cursorStyle = computed(() => `
width: ${circle.width}px;
height: ${circle.height}px;
top: ${circle.onTarget ? 0 : -CIRCLE_SIZE / 2}px;
left: ${circle.onTarget ? 0 : -CIRCLE_SIZE / 2}px;
border-radius: ${circle.onTarget ? '4px' : '100%'};
transform: translate(${circle.x}px, ${circle.y}px);`)
</script>

<template>
  <div ref="cursor" class="cursor" :style="cursorStyle" />
</template>

<style>
body {
  cursor: none !important;
}
</style>

<style scoped>
.cursor {
  position: fixed;
  border: 2px solid currentColor;
  pointer-events: none;
}
</style>
