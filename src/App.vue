<script lang="ts" setup>
import { useHead } from '@vueuse/head'
const { t } = useI18n()

useHead({
  title: t('meta.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.description'),
    },
  ],
})
</script>

<template>
  <nav
    class="w-screen flex justify-between fixed top-0 left-0
      z-10
      py-8
      px-4
      md:px-8
      lg:px-16
      3xl:px-24
      4xl:px-64"
  >
    <a
      v-for="item in $tm('nav')" :key="`nav_${$rt(item.id)}`"
      :href="`#${$rt(item.id)}`"
      class="jo_text_base leading-tight lg:font-normal tracking-widest max-w-[5rem]"
    >
      {{ $rt(item.text) }}
    </a>
  </nav>
  <!-- <JoCursor /> -->
  <main
    class="px-4
        md:px-12
        lg:px-20
        3xl:px-32
        4xl:px-64
        overflow-hidden"
  >
    <div>
      <SectionHero />
      <SectionAbout />
      <SectionProjects />
      <SectionContact />
    </div>
  </main>
  <SectionFooter />
</template>

<style>
body {
  @apply bg-jo_beige;
  @apply text-jo_dark;
}
</style>
