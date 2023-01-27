<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const storeCounter = useCounterStore();
</script>
<template>
  <footer class="p-4 bg-white lg shadow md:p-6 dark:bg-gray-800">
    <div class="container mx-auto md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-100 sm:text-center"
        >©2023 Devlin Duldulao - Vite + Vue + TS + Tailwind
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
        <li>
          <span class="text-xl text-gray-100">{{
            storeCounter.doubleCount
          }}</span>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped></style>
