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
  <div class="max-w-[2200px] mx-auto">
    <main
      class="m-4 p-4 bg-jo_grey rounded-xl gap-y-32 grid"
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
