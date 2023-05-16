<script lang="ts" setup>
import gsap from 'gsap'
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
        class="leading-[9vw] text-[8.5vw] tracking-wide 2xl:text-[9rem] 2xl:leading-[9.2rem] font-extralight"
      >
        {{ $t('projects.title') }}
      </h2>
      <p class="jo_text_h1 !text-stroke-none !pb-0">
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
          class="font-serif text-7xl whitespace-nowrap"
          xl="text-8xl"
        >
          <span>
            {{ $rt(project.title) }}
          </span>
        </a>
        <div class="jo_border" />
      </template>
    </div>
    <a :href="`#${$t('nav[2].id')}`" class="block w-full text-center text-[8.5vw] font-display">
      ↓
    </a>
  </section>
</template>
