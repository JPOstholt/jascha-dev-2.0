<template>
  <section :id="$t('nav[0].id')" class="grid gap-y-12">
    <h2
      class="w-full jo_border jo_text_h1 pb-1"
    >
      {{ $t('about.title') }}
    </h2>
    <section
      class="jo_text_lg w-full grid gap-y-12
        lg:grid-cols-2 lg:gap-x-24 lg:my-16
        xl:gap-x-48 xl:my-32"
    >
      <p
        class="max-w-sm
          lg:max-w-none"
      >
        {{ $t('about.summary1[0]') }}
        <span class="font-display text-jo_brown">
          {{ $t('about.summary1[1]') }}
        </span>
        {{ $t('about.summary1[2]') }}
        <span class="italic">
          {{ $t('about.summary1[3]') }}
        </span>
      </p>
      <p
        class="max-w-sm text-right justify-self-end
          lg:max-w-none"
      >
        {{ $t('about.summary2[0]') }}
        <span class="font-display text-jo_brown">
          {{ $t('about.summary2[1]') }}
        </span>
        {{ $t('about.summary2[2]') }}
        <span class="font-display text-jo_brown">
          {{ $t('about.summary2[3]') }}
        </span>
        {{ $t('about.summary2[4]') }}
        <span class="italic">
          {{ $t('about.summary2[5]') }}
        </span>
      </p>
    </section>
    <ul
      class="grid gap-y-2
        lg:gap-y-4
        xl:gap-y-8"
    >
      <JoAccordeon
        v-for="detail in $tm('about.details')"
        :key="`about_${$rt(detail.title)}`"
      >
        <template #title>
          {{ $rt(detail.title) }}
        </template>
        <template #default>
          <template v-if="$rt(detail.title) === 'Education'">
            <tr
              v-for="education in detail.description"
              :key="`about_education_${$rt(education.year)}`"
            >
              <td
                class="min-w-16
                  lg:min-w-32
                  xl:min-w-64"
              >
                {{ $rt(education.year) }}
              </td>
              <td>
                {{ $rt(education.degree) }}
              </td>
            </tr>
          </template>
          <a
            v-else-if="$rt(detail.title) === 'Downloads'"
            href="/downloads/CV_JaschaOstholt.pdf"
            target="_blank"
            class="underline hover:no-underline"
          >
            {{ $rt(detail.description) }}
          </a>
          <p v-else>
            {{ $rt(detail.description) }}
          </p>
        </template>
      </JoAccordeon>
    </ul>
  </section>
</template>
