<script lang="ts" setup>
import gsap from 'gsap'

const EASING = 'power1.inOut'
const DURATION = 0.4

const arrow = ref(null)

const content = ref(null)
const { height } = useElementSize(content)
const contentHeight = ref(0)

const open = () => {
  gsap.to(content.value, {
    maxHeight: `${contentHeight.value}px`,
    duration: DURATION,
    opacity: 1,
    ease: EASING,
  })
  gsap.to(arrow.value, {
    rotateZ: 180,
    duration: DURATION,
    ease: EASING,
  })
}

const close = () => {
  contentHeight.value = height.value

  gsap.to(content.value, {
    maxHeight: 0,
    duration: DURATION,
    opacity: 1,
    ease: EASING,
  })
  gsap.to(arrow.value, {
    rotateZ: 0,
    duration: DURATION,
    ease: EASING,
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
    <div
      class="jo_border jo_text_h2 w-full
        lg:mb-1
        xl:mb-2"
    >
      <div class="w-full flex justify-between px-4 cursor-pointer" @click="toggleOpen()">
        <h3
          class=""
        >
          <slot name="title" />
        </h3>
        <button ref="arrow">
          ↓
        </button>
      </div>
    </div>
    <div
      ref="content"
      class="px-4 overflow-hidden jo_text_base"
    >
      <div
        class="mt-2
          pb-2 lg:pb-8 xl:pb-12"
      >
        <slot />
      </div>
    </div>
  </li>
</template>
