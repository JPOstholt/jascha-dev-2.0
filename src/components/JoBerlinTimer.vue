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
    class="jo_text_sm font-serif tracking-wide -mr-1
      min-w-[7em]"
  >
    {{ $t('timer') }} {{ time }}
  </p>
</template>
