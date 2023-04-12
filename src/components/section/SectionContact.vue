<template>
  <section :id="$t('nav[2].id')">
    <h2 class="w-full jo_border text-7xl font-display text-center pb-1">
      {{ $t('contact.title') }}
    </h2>
    <div class="w-full flex justify-end mt-2">
      <JoBerlinTimer />
    </div>
    <p class="my-16">
      {{ $t('contact.summary1[0]') }}
      <span class="font-display text-jo_brown">
        {{ $t('contact.summary1[1]') }}
      </span>
      {{ $t('contact.summary1[2]') }}
      <span class="italic">
        {{ $t('contact.summary1[3]') }}
      </span>
      <span class="block font-extralight">
        {{ $t('contact.summary2') }}
      </span>
    </p>
    <div class="grid gap-y-8">
      <section
        v-for="detail in $tm('contact.details')"
        :key="`contact_${$rt(detail.title)}`"
      >
        <h3 class="jo_border px-4 font-display text-lg">
          {{ $rt(detail.title) }}
        </h3>
        <a
          :href="$rt(detail.link)"
          target="_blank"
          class="px-4 underline hover:no-underline"
        >
          {{ $rt(detail.linkTitle) }}
        </a>
      </section>
    </div>
  </section>
</template>
