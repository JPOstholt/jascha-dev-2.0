<script lang="ts" setup>

</script>

<template>
  <nav
    class="w-screen flex justify-between fixed top-0 left-0
      z-10
      py-8
      px-4
      md:px-8
      lg:px-16
      3xl:px-24
      4xl:px-64"
  >
    <JoNavigationItem
      v-for="item in $tm('nav')"
      :id="$rt(item.id)"
      :key="`nav_${$rt(item.id)}`"
      :text="$rt(item.text)"
    />
  </nav>
</template>
