<template>
  <section class="grid gap-y-12">
    <h2 class="w-full jo_border text-7xl font-display text-center pb-2">
      About.
    </h2>
    <p class="max-w-sm">
      I am a
      <span class="font-display text-jo_brown">
        passionate web dev
      </span>
      with
      <span class="italic">
        6+ years of experience.
      </span>
    </p>
    <p class="max-w-sm 2xl:max-w-md text-right">
      I balance
      <span class="font-display text-jo_brown">
        pragmatism
      </span>
      with
      <span class="font-display text-jo_brown">
        attention to detail
      </span>
      and writing
      <span class="italic">
        clean and future proof code.
      </span>
    </p>
    <ul class="grid gap-y-2">
      <JoAccordeon v-for="i in [0, 1, 2, 3]" :key="i">
        <p>  contentHeight.value = height.value</p>
      </JoAccordeon>
    </ul>
  </section>
</template>
