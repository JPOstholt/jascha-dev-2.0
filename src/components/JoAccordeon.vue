<script lang="ts" setup>
import anime from 'animejs'
const EASING = 'easeInOutQuad'
const DURATION = 400

const arrow = ref(null)

const content = ref(null)
const { height } = useElementSize(content)
const contentHeight = ref(0)

const open = () => {
  anime({
    targets: content.value,
    maxHeight: ['0px', `${contentHeight.value}px`],
    duration: DURATION,
    opacity: 1,
    easing: EASING,
  })

  anime({
    targets: arrow.value,
    rotate: 180,
    duration: DURATION,
    easing: EASING,
  })
}

const close = () => {
  contentHeight.value = height.value

  anime({
    targets: content.value,
    maxHeight: [`${contentHeight.value}px`, 0],
    duration: DURATION,
    opacity: 0,
    easing: EASING,
  })

  anime({
    targets: arrow.value,
    rotate: 0,
    duration: DURATION,
    easing: EASING,
  })
}

const isOpen = ref(true)
const toggleOpen = useToggle(isOpen)
watch(isOpen, (value) => {
  if (value)
    open()
  else close()
})

onMounted(() => {
  useTimeoutFn(toggleOpen, 100)
})
</script>

<template>
  <li>
    <div class="jo_border w-full flex justify-between font-display px-4" @click="toggleOpen()">
      <h3 class="text-lg">
        <slot name="title" />
      </h3>
      <button ref="arrow">
        ↓
      </button>
    </div>
    <div ref="content" class="px-4 overflow-hidden">
      <div class="mt-2">
        <slot />
      </div>
    </div>
  </li>
</template>
