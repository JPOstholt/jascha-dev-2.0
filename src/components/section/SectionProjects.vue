<template>
  <section :id="$t('nav[1].id')">
    <header
      class="w-full text-7xl font-display
      lg:text-8xl
      xl:text-9xl"
    >
      <h2
        class=" jo_border pb-1
        sm:text-jo_brown sm:flex sm:justify-between"
      >
        <span
          class="block jo_border pb-1
          sm:border-none"
        >
          {{ $t('projects.title[0]') }}<span class="sm:hidden">-</span>
        </span>
        <span
          class="block text-right"
        >
          {{ $t('projects.title[1]') }}
        </span>
      </h2>
      <p class="hidden sm:block jo_border pb-1 text-center">
        {{ $t('projects.title[2]') }}
      </p>
    </header>
    <div
      class="text-center mt-16 grid gap-y-16
      lg:mt-20 lg:gap-y-20
      xl:mt-24 lg:gap-y-24"
    >
      <a
        v-for="project in $tm('projects.projects')"
        :key="`projects_${$rt(project.title)}`"
        :href="$rt(project.link)"
        class="block text-2xl underline hover:no-underline
        lg:text-3xl
        xl:text-4xl"
      >
        {{ $rt(project.title) }}
      </a>
    </div>
  </section>
</template>
