<template>
  <section :id="$t('nav[2].id')">
    <h2
      class="w-full jo_border jo_text_h1"
    >
      {{ $t('contact.title') }}
    </h2>
    <div class="w-full flex justify-end mt-2">
      <JoBerlinTimer />
    </div>
    <p
      class="jo_text_lg
        my-16 lg:my-16 xl:my-32"
    >
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
    <div
      class="grid gap-y-8
        lg:gap-y-16 lg:mb-16
        xl:gap-y-32 xl:mb-32"
    >
      <section
        v-for="detail in $tm('contact.details')"
        :key="`contact_${$rt(detail.title)}`"
      >
        <h3
          class="jo_border jo_text_h2
            lg:mb-1
            xl:mb-2"
        >
          <span
            class="block px-4"
          >
            {{ $rt(detail.title) }}
          </span>
        </h3>
        <a
          :href="$rt(detail.link)"
          target="_blank"
          class="block px-4 jo_text_base mt-2"
        >
          <span class="underline hover:no-underline">
            {{ $rt(detail.linkTitle) }}
          </span>
          <span>
            →
          </span>
        </a>
      </section>
    </div>
  </section>
</template>
