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
    scope="global"
    tag="p"
    class="jo_text_sm tracking-wide
      -mr-1 lg:-mr-2.5
      min-w-[7.7em]"
  >
    <template #time>
      <span class="font-display">{{ time }}</span>
    </template>
  </i18n-t>
</template>
