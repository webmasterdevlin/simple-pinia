<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Navbar",
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="sticky-top">
    <nav
      class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row"
      style="margin-bottom: 2rem"
    >
      <div class="container">
        <router-link to="/" class="navbar-brand float-left">LOGO</router-link>
        <ul class="nav navbar-nav d-flex flex-row bd-highlight">
          <li class="nav-item me-5">
            <router-link to="/" exact class="nav-link">Home </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/features" exact class="nav-link">
              Features</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>
