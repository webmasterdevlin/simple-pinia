<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const storeCounter = useCounterStore();
</script>

<template>
  <nav class="navbar-default">
    <div class="bg-slate-50">
      <div class="container mx-auto px-4">
        <ul class="flex items-center justify-start py-4 gap-2">
          <li class="mx-3">
            <router-link to="/" exact class="">Home</router-link>
          </li>
          <li class="flex mx-3">
            <router-link to="/features" exact> Features</router-link>
            <span
              class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-red-800 bg-red-100 rounded-full"
            >
              {{ storeCounter.doubleCount }}
            </span>
          </li>
          <li class="mx-3">
            <router-link to="/posts" exact class="">Posts</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
