<template>
  <div class="flex flex-col justify-between">
    <nav
      class="flex items-start mb-48
        lg:mb-52
        xl:mb-80"
    >
      <ul class="flex-shrink-0">
        <li v-for="item in $tm('nav')" :key="`nav_${$rt(item.id)}`">
          <a
            :href="`#${$rt(item.id)}`"
            class="jo_text_base underline hover:no-underline
              font-medium lg:font-normal"
          >
            {{ $rt(item.text) }}
          </a>
        </li>
      </ul>
    </nav>
    <section>
      <h1
        class="w-full jo_border jo_text_h1 text-jo_brown text-right"
      >
        {{ $t('hero.h1') }}
      </h1>
      <div
        class="jo_border jo_text_base flex justify-between gap-x-24 leading-snug mt-1
          font-medium lg:font-normal
          h-24 lg:h-28 xl:h-36"
      >
        <p>{{ $t('hero.subtitle.profession') }}</p>
        <p class="text-right">
          <span class="italic tracking-normal">
            {{ $t('hero.subtitle.location[0]') }}
          </span>
          {{ $t('hero.subtitle.location[1]') }}
        </p>
      </div>
      <div class="flex justify-between gap-x-24 leading-snug mt-1">
        <p class="jo_text_sm">
          {{ $t('hero.subtitle.copyright') }}
        </p>
        <JoBerlinTimer />
      </div>
    </section>
  </div>
</template>
