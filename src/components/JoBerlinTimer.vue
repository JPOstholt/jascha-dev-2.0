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
  <p class="min-w-[8rem] tracking-widest text-sm -mr-0.5">
    {{ $t('timer') }} {{ time }}
  </p>
</template>
