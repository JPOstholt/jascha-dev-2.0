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
  <main
    class="m-4 p-4 bg-jo_grey/60 rounded-xl gap-y-32 grid
        md:p-8
        lg:gap-y-32 lg:m-8
        xl:gap-y-64
        3xl:p-16
        4xl:px-32 4xl:m-32"
  >
    <SectionHero />
    <SectionAbout />
    <SectionProjects />
    <SectionContact />
  </main>
  <SectionFooter />
</template>

<style>
body {
  @apply bg-jo_beige;
  @apply text-jo_dark;
}
</style>
