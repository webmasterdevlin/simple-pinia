<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const storeCounter = useCounterStore();
</script>

<template>
  <div style="width: 20vw; height: 100%; background-color: lightcyan">
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
        <span style="color: crimson">{{ storeCounter.doubleCount }}</span>
      </div>
      <h2>Analytics</h2>
      <h2>Connections</h2>
    </div>
  </div>
</template>
