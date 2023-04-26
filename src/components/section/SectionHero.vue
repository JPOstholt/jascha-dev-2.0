<template>
  <div class="flex flex-col justify-between h-screen pb-8 min-h-[40rem]">
    <section class="flex flex-col flex-grow justify-center">
      <header
        class="w-full jo_border jo_text_h1 mt-48"
      >
        <JoHeroHeading />
        <h2>
          <span class="block">
            Really great
          </span>
          <span class="block font-serif">
            web development.
          </span>
        </h2>
      </header>
      <div class="flex justify-between gap-x-24 leading-snug mt-1">
        <p class="jo_text_sm font-serif">
          {{ $t('hero.subtitle.copyright') }}
        </p>
        <JoBerlinTimer />
      </div>
    </section>
    <p class="w-full text-center text-[8.5vw] font-display">
      ↓
    </p>
  </div>
</template>
