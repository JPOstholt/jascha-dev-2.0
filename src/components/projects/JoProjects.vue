<script lang="ts" setup>
import gsap from 'gsap'

// Marquee effect on projects that are to wide for viewport
const projectTitles = ref<HTMLElement[]>([])
const window = useWindowSize()

onMounted(() => {
  projectTitles.value.forEach((titleElement) => {
    if (titleElement.scrollWidth > window.width.value) {
      gsap.to(titleElement, {
        keyframes: {
          x: ['100%', '-150%'],
          easeEach: 'none',
        },
        ease: 'none',
        duration: 15,
        repeat: -1,
      })
    }
  })
})
</script>

<template>
  <section
    :id="$t('nav[1].id')"
    class="py-8 flex flex-col justify-between min-h-screen space-y-20"
  >
    <header
      class="w-full mt-32"
      sm="mt-16"
      lg="mt-32"
    >
      <h2
        class="jo_text_h1 font-extralight"
      >
        {{ $t('projects.title') }}
      </h2>
      <p class="jo_text_h1 font-display">
        {{ $t('projects.subtitle') }}
      </p>
    </header>
    <div
      class="flex-grow w-full flex flex-col justify-between overflow-hidden"
    >
      <template v-for="project in $tm('projects.projects')" :key="`projects_${$rt(project.title)}`">
        <a
          ref="projectTitles"
          :href="$rt(project.link)"
          class="font-serif whitespace-nowrap
            text-7xl xl:text-8xl"
          target="_blank"
        >
          <span>
            {{ $rt(project.title) }}
          </span>
        </a>
        <div class="jo_border" />
      </template>
    </div>
    <a :href="`#${$t('nav[2].id')}`" class="block self-center text-center text-[8.5vw] font-display">
      ↓
    </a>
  </section>
</template>
