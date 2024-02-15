<script lang="ts" setup>
import { SplitText, gsap } from 'gsap/all'

// refs
const arrow = ref(null)
const content = ref(null)
const linkText = ref(null)

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
  gsap.timeline({ defaults: { duration: 0.4 } })
    .to(content.value, {
      maxHeight: value ? `${contentHeight.value}px` : 0,
      opacity: 1,
    })
    .to(arrow.value, {
      rotateZ: value ? 180 : 0,
    }, 0)
})

// hover
let chars: Element[]
let isTouchDevice: boolean

onMounted(() => {
  isTouchDevice = !matchMedia('(pointer:fine)').matches

  if (isTouchDevice)
    return

  const split = new SplitText(linkText.value, { type: 'chars' })
  chars = split.chars
})

let hoverAnimation: gsap.core.Tween

const mouseEnter = () => {
  if (isTouchDevice)
    return

  gsap.to(arrow.value, {
    rotateZ: 90,
  })

  if (hoverAnimation) {
    hoverAnimation.play()
    return
  }

  hoverAnimation = gsap.to(chars, {
    marginRight: '1px',
    fontStyle: 'italic',
    duration: 0.2,
    stagger: 0.04,
  })
}

const mouseLeave = () => {
  if (isTouchDevice)
    return

  if (isOpen.value) {
    gsap.to(arrow.value, {
      rotateZ: 180,
    })
    return
  }

  hoverAnimation!.reverse()

  gsap.to(arrow.value, {
    rotateZ: 0,
  })
}
</script>

<template>
  <li>
    <div
      class="jo_border pb-1 w-full
        lg:mb-1
        xl:mb-2"
    >
      <div
        class="w-full flex justify-between px-4 hover:opacity-80 cursor-hover-target"
        @click="toggleOpen()"
        @mouseenter="mouseEnter()" @mouseleave="mouseLeave()"
      >
        <h3
          ref="linkText"
          class="lowercase jo_text_base tracking-widest"
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
      class="px-4 overflow-hidden jo_text_base font-extralight"
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
