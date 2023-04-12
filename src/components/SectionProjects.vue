<template>
  <section>
    <h2 class="w-full text-7xl font-display pb-2">
      <span class="block jo_border">
        {{ $t('projects.title[0]') }}
      </span>
      <span class="block jo_border text-right">
        {{ $t('projects.title[1]') }}
      </span>
    </h2>
    <div class="text-center mt-16 grid gap-y-16">
      <a
        v-for="project in $tm('projects.projects')"
        :key="`projects_${$rt(project.title)}`"
        :href="$rt(project.link)"
        class="block text-2xl underline hover:no-underline"
      >
        {{ $rt(project.title) }}
      </a>
    </div>
  </section>
</template>
