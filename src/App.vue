<script setup lang="ts">
import HeaderNav from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template #default>
  <div>
    <HeaderNav></HeaderNav>
    <div class="container">
      <div class="vertical-center">
        <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
