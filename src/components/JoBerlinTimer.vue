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
    class="jo_text_sm font-sans tracking-wide -mr-1
      min-w-[8em]"
  >
    {{ $t('timer') }} <span>{{ time }}</span>
  </p>
</template>
