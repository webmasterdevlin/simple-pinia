<script setup lang="ts">
import HeaderNav from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template #default>
  <div style="height: 100%; width: 100%">
    <header-nav></header-nav>
    <router-view></router-view>
    <footer></footer>
  </div>
</template>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
