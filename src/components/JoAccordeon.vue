<script lang="ts" setup>
import gsap from 'gsap'

// refs
const arrow = ref(null)
const content = ref(null)

// get element height
const { height } = useElementSize(content)
const contentHeight = ref(0)
onMounted(() => {
  useTimeoutFn(() => {
    contentHeight.value = height.value
    gsap.set(content.value, {
      maxHeight: 0,
    })
  }, 100)
})

// animate open/close
const isOpen = ref(false)
const toggleOpen = useToggle(isOpen)
watch(isOpen, (value) => {
  gsap.to(content.value, {
    maxHeight: value ? `${contentHeight.value}px` : 0,
    duration: 0.4,
    opacity: 1,
  })
  gsap.to(arrow.value, {
    rotateZ: value ? 180 : 0,
    duration: 0.4,
  })
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
