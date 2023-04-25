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
  <!-- <JoCursor /> -->
  <main
    class="mx-4
        md:px-8
        lg:mx-8
        3xl:px-16
        4xl:px-32 4xl:mx-32"
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
