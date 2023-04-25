<template>
  <div class="flex flex-col justify-between h-screen py-8">
    <nav
      class="w-full flex justify-between"
    >
      <a
        v-for="item in $tm('nav')" :key="`nav_${$rt(item.id)}`"
        :href="`#${$rt(item.id)}`"
        class="jo_text_base font-medium lg:font-normal tracking-widest max-w-[5rem]"
      >
        {{ $rt(item.text) }}
      </a>
    </nav>
    <section class="flex flex-col flex-grow justify-center">
      <h1
        class="w-full jo_border jo_text_h1"
      >
        <span class="block text-transparent text-stroke-jo_dark">
          {{ $t('hero.h1') }}
        </span>
        <span class="block">
          Really great
        </span>
        <span class="block">
          web development.
        </span>
      </h1>
      <div class="flex justify-between gap-x-24 leading-snug mt-1">
        <p class="jo_text_sm">
          {{ $t('hero.subtitle.copyright') }}
        </p>
        <JoBerlinTimer />
      </div>
    </section>
    <p class="w-full text-center text-[8.5vw] font-display animate-">
      ↓
    </p>
  </div>
</template>
