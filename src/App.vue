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
  <div class="mx-auto">
    <main
      class="m-4 p-4 bg-jo_grey/60 rounded-xl gap-y-32 grid
        md:px-16 md:pt-8
        lg:gap-y-32 lg:m-8
        xl:gap-y-64
        2xl:px-32 2xl:pt-16 2xl:mx-[5vw]"
    >
      <SectionHero />
      <SectionAbout />
      <SectionProjects />
      <SectionContact />
    </main>
    <SectionFooter />
  </div>
</template>

<style>
body {
  @apply bg-jo_beige;
  @apply text-jo_dark;
}
</style>
