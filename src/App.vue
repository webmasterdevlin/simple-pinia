<script setup lang="ts">
import HeaderNav from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template #default>
  <div style="height: 100%; width: 100%">
    <HeaderNav></HeaderNav>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
