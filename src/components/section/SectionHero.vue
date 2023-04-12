<template>
  <div class="flex flex-col justify-between">
    <nav class="flex items-start mb-48">
      <ul class="flex-shrink-0">
        <li v-for="item in $tm('nav')" :key="`nav_${$rt(item.id)}`" class="leading-snug">
          <a
            :href="`#${$rt(item.id)}`"
            class="underline"
          >
            {{ $rt(item.text) }}
          </a>
        </li>
      </ul>
      <JoImprint />
    </nav>
    <section>
      <h1
        class="w-full jo_border jo_heading_font text-jo_brown text-center pb-2"
      >
        {{ $t('hero.h1') }}
      </h1>
      <div class="jo_border flex justify-between gap-x-24 leading-snug text-base mt-1 h-24">
        <p>{{ $t('hero.subtitle.profession') }}</p>
        <p class="text-right">
          <span class="italic tracking-normal">
            {{ $t('hero.subtitle.location[0]') }}
          </span>
          {{ $t('hero.subtitle.location[1]') }}
        </p>
      </div>
      <div class="flex justify-between gap-x-24 leading-snug text-base mt-1">
        <p class="italic text-sm">
          {{ $t('hero.subtitle.copyright') }}
        </p>
        <JoBerlinTimer />
      </div>
    </section>
  </div>
</template>
