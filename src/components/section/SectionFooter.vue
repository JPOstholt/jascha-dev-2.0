<template>
  <footer class="mx-4 pb-4 jo_text_sm">
    <p
      v-for="info, index in $tm('footer')"
      :key="`footer_${String(index)}`"
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
