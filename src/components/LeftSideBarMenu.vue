<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const storeCounter = useCounterStore();
</script>

<template>
  <div style="width: 20vw; height: auto; background-color: lightcyan">
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 1rem;
      "
    >
      <h2>DASHBOARD</h2>
      <div style="display: flex">
        <h2>Messages</h2>
        <span class="mx-2" style="color: maroon; font-size: larger">{{
          storeCounter.doubleCount
        }}</span>
      </div>
      <h2>Analytics</h2>
      <h2>Connections</h2>
    </div>
  </div>
</template>
