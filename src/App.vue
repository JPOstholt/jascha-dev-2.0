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
  <div>
    <JoNavigation />
    <main
      class="px-4
        md:px-12
        lg:px-20
        3xl:px-32
        4xl:px-64
        w-screen overflow-hidden"
    >
      <JoHero />
      <JoAbout />
      <JoProjects />
      <JoContact />
    </main>
  </div>
</template>

<style>
body {
  @apply bg-jo_beige text-jo_dark w-screen overflow-x-hidden;
}
</style>
