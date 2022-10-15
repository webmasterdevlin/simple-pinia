<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const storeCounter = useCounterStore();
</script>
<template>
  <div>
    <footer
      class="shadow rounded justify-content-between flex-nowrap flex-row"
      style="background-color: dodgerblue; height: 3rem; width: 100%"
    >
      <div
        class="container"
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
        "
      >
        <div style="color: white">copy right 2022</div>
        <div style="color: whitesmoke">{{ storeCounter.doubleCount }}</div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
