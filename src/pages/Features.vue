<script setup>
import Dashboard from "../layouts/Dashboard.vue";
import { useCounterStore } from "../stores/counter";

const storeCounter = useCounterStore();
</script>
<template>
  <Dashboard>
    <div class="p-5">
      <div class="container h-screen w-full">
        <section>
          <h1>
            Count :
            <span class="text-purple-900">{{ storeCounter.doubleCount }}</span>
          </h1>
          <button class="btn btn--primary" @click="storeCounter.increment">
            Increment by 2
          </button>
          <button class="btn btn--secondary" @click="storeCounter.reset">
            reset
          </button>
        </section>
      </div>
    </div>
  </Dashboard>
</template>
