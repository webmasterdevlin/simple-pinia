<script setup lang="ts">
import Dashboard from "../layouts/Dashboard.vue";
import { useCounterStore } from "../stores/counter";

const storeCounter = useCounterStore();
</script>
<template>
  <Dashboard>
    <div class="p-5">
      <div class="container" style="height: 100vh; width: 100%">
        <section>
          <h1>
            Count :
            <span style="color: purple">{{ storeCounter.doubleCount }}</span>
          </h1>
          <button class="btn btn-primary" @click="storeCounter.increment">
            Increment by 2
          </button>
          <button class="btn btn-danger" @click="storeCounter.reset">
            reset
          </button>
        </section>
      </div>
    </div>
  </Dashboard>
</template>
