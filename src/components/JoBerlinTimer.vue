<script lang="ts" setup>
const date = ref(new Date())
const counter = useInterval(1000)
watch(counter, () => {
  date.value = new Date()
})
const time = computed(() => date.value.toLocaleString('de-DE', {
  timeZone: 'Europe/Berlin',
  timeStyle: 'medium',
}))
</script>

<template>
  <p
    class="jo_text_sm tracking-wide -mr-0.5
      min-w-[7rem] lg:min-w-[7.9rem] xl:min-w-[8.7rem]"
  >
    {{ $t('timer') }} {{ time }}
  </p>
</template>
