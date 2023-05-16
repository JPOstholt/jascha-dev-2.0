<template>
  <section :id="$t('nav[0].id')" class="flex flex-col justify-between h-screen py-8 min-h-[45rem]">
    <div
      class="flex-grow flex flex-col justify-center"
    >
      <h2
        class="w-full jo_border jo_text_h1 text-stroke-1 pb-8 font-serif"
      >
        {{ $t('about.title') }}
      </h2>
      <section class="jo_text_base font-extralight grid gap-y-4 my-8">
        <p>
          {{ $t('about.summary1') }}
        </p>
        <p>
          {{ $t('about.summary2') }}
        </p>
      </section>
      <ul
        class="grid gap-y-1
        lg:gap-y-4"
      >
        <JoAboutAccordeon
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
                  class="font-display
                  min-w-16
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
        </JoAboutAccordeon>
      </ul>
    </div>
    <a :href="`#${$t('nav[1].id')}`" class="block self-center text-center text-[8.5vw] font-display">
      ↓
    </a>
  </section>
</template>
