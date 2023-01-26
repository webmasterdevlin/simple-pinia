<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const storeCounter = useCounterStore();
</script>

<template>
  <nav data-testid="navigation" class="navbar-default">
      <div class="bg-slate-50">
        <div class="container mx-auto px-4">
          <ul class="flex items-center justify-start py-4 gap-2">
            <li class="mx-3">
            <router-link to="/" exact class="">Home</router-link>
          </li>
          <li class="mx-3" style="display: flex">
            <router-link to="/features" exact class="">
              Features</router-link
            >
            <span style="color: crimson">
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
