<template>
  <div
    id="hero"
    class="flex flex-col justify-between h-screen pb-8 min-h-[40rem] md:min-h-screen md:h-auto"
  >
    <section class="flex flex-col flex-grow justify-center">
      <header
        class="w-full jo_border jo_text_h1 mt-48"
      >
        <JoHeroHeading />
        <h2 class="z-10 relative">
          <span class="block ">
            Really great
          </span>
          <span class="block font-serif">
            web development.
          </span>
        </h2>
      </header>
      <div class="flex justify-between gap-x-24 leading-snug mt-1 z-10">
        <p class="jo_text_sm font-serif">
          {{ $t('hero.subtitle.copyright') }}
        </p>
        <JoBerlinTimer />
      </div>
    </section>
    <a :href="`#${$t('nav[0].id')}`" class="block w-full text-center font-display text-stroke-1 text-[8.5vw] 2xl:text-[9rem] leading-none z-10">
      ↓
    </a>
  </div>
</template>
