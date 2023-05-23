<template>
  <div
    id="hero"
    class="flex flex-col justify-between pb-8
      h-screen md:h-auto
      min-h-[40rem] md:min-h-screen"
  >
    <section class="flex flex-col flex-grow justify-center">
      <header
        class="w-full jo_border jo_text_h1 text-stroke-1 pb-8 mt-48"
      >
        <JoHeroHeading />
        <h2 class="z-10 relative">
          <span class="block font-display">
            Really great
          </span>
          <span class="block font-serif">
            web development.
          </span>
        </h2>
      </header>
      <div class="flex justify-between gap-x-24 leading-snug mt-1 z-10">
        <p class="jo_text_sm font-display">
          {{ $t('hero.subtitle.copyright') }}
        </p>
        <JoHeroTimer />
      </div>
    </section>
    <a :href="`#${$t('nav[0].id')}`" class="block self-center z-30">
      <JoArrowDown class="inline-block z-30 w-[4.4vw] 2xl:w-18" />
    </a>
  </div>
</template>
