<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const storeCounter = useCounterStore();
</script>

<template>
  <div class="sticky-top">
    <nav
      class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <router-link to="/" class="navbar-brand float-left">LOGO</router-link>
        <ul class="nav navbar-nav d-flex flex-row bd-highlight">
          <li class="nav-item mx-3">
            <router-link to="/" exact class="nav-link">Home</router-link>
          </li>
          <li class="nav-item mx-3" style="display: flex">
            <router-link to="/features" exact class="nav-link">
              Features</router-link
            >
            <span style="color: crimson">
              {{ storeCounter.doubleCount }}
            </span>
          </li>
          <li class="nav-item mx-3">
            <router-link to="/posts" exact class="nav-link">Posts</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>
