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
  <JoNavigation />
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
