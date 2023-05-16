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
  <i18n-t
    keypath="timer"
    tag="p"
    class="jo_text_sm font-sans tracking-wide -mr-1
      min-w-[7.7em]"
    lg="-mr-2.5"
  >
    <template #time>
      <span class="font-display">{{ time }}</span>
    </template>
  </i18n-t>
</template>
