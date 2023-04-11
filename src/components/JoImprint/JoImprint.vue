<script lang="ts" setup>
import JoImprintPrivacy from './JoImprintPrivacy.vue'

const imprintOpen = ref(false)
const imprintModal = ref(null)

onClickOutside(imprintModal, () => imprintOpen.value = false)
</script>

<template>
  <aside class="w-full flex justify-end relative">
    <button class="text-sm inline-block underline hover:no-underline" @click="imprintOpen = !imprintOpen">
      {{ $t('imprint') }}
    </button>
    <div
      v-show="imprintOpen"
      class="absolute top-8 right-4 pb-4 px-4 border border-jo_dark bg-jo_beige z-50 max-h-[60vh] max-w-[80vw] overflow-y-scroll"
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
