<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const storeCounter = useCounterStore();
</script>
<template>
  <div>
    <footer
      class="shadow squared justify-content-between flex-nowrap flex-row"
      style="background-color: darkblue; height: 3rem; width: 100%"
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
        <div style="color: white">©2022 Devlin Duldulao - Vite + Vue + TS</div>
        <div style="color: orange">{{ storeCounter.doubleCount }}</div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
