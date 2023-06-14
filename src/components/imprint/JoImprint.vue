<script lang="ts" setup>
const imprintOpen = ref(false)
const imprintModal = ref(null)

onClickOutside(imprintModal, () => imprintOpen.value = false)
</script>

<template>
  <aside class="relative inline-block">
    <button class="inline-block underline hover:no-underline" @click="imprintOpen = !imprintOpen">
      {{ $t('imprint') }}
    </button>
    <div
      v-if="imprintOpen"
      class="fixed left-8 right-8 bottom-16 pb-4 px-4
        max-h-[60vh]
        border border-jo_dark bg-jo_beige z-50 overflow-y-scroll"
    >
      <button class="sticky text-left pt-4 pb-1 top-0 w-full bg-jo_beige" @click="imprintOpen = false">
        X
      </button>
      <section ref="imprintModal" class="text-sm">
        <JoImprintContent />
        <JoImprintPrivacy class="w-full" />
      </section>
    </div>
  </aside>
</template>
