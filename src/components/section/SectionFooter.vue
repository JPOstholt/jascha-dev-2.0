<template>
  <footer class="mx-4 pb-4 text-sm">
    <p
      v-for="info, index in $tm('footer')"
      :key="`footer_${index}`"
    >
      <span class="font-semibold">
        {{ $rt(info[0]) }}
      </span>
      <span>
        {{ $rt(info[1]) }}
      </span>
    </p>
  </footer>
</template>
