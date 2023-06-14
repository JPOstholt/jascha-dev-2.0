<template>
  <section
    :id="$t('nav[1].id')"
    class="py-8 flex flex-col justify-between min-h-screen space-y-20"
  >
    <header
      class="w-full mt-32"
      sm="mt-16"
      lg="mt-32"
    >
      <h2
        class="jo_text_h1 font-extralight"
      >
        {{ $t('projects.title') }}
      </h2>
      <p class="jo_text_h1 font-display">
        {{ $t('projects.subtitle') }}
      </p>
    </header>
    <div
      class="flex-grow w-full flex flex-col justify-between overflow-hidden"
    >
      <JoProjectListItem
        v-for="project in $tm('projects.projects')"
        :key="`projects_${$rt(project.title)}`"
        :href="$rt(project.link)"
      >
        {{ $rt(project.title) }}
      </JoProjectListItem>
    </div>
    <a :href="`#${$t('nav[2].id')}`" class="block self-center z-30">
      <JoArrowDown class="inline-block z-30 w-[4.4vw] 2xl:w-18" />
    </a>
  </section>
</template>
