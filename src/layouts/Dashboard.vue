<script setup lang="ts">
import LeftSideBarMenu from "../components/LeftSideBarMenu.vue";
</script>

<template>
  <!-- converting style to Tailwind class -->
  <div class="bg-yellow-100 w-full h-auto flex flex-row justify-start">
    <left-side-bar-menu />
    <slot></slot>
  </div>
</template>
<style scoped></style>
