<script setup lang="ts">
import HeaderNav from "./components/NavBar.vue";
</script>

<template #default>
  <div>
    <HeaderNav></HeaderNav>
    <div class="container">
      <div class="vertical-center">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
