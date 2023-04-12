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
    <div
      class="jo_border jo_text_h2 w-full
        lg:pb-1 lg:mb-1
        xl:mb-2"
    >
      <div class="jo_container w-full flex justify-between px-4 cursor-pointer" @click="toggleOpen()">
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
      class="jo_container px-4 overflow-hidden jo_text_base"
    >
      <div
        class="mt-2
          lg:pb-8"
      >
        <slot />
      </div>
    </div>
  </li>
</template>
