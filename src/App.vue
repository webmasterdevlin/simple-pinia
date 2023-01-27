<script setup lang="ts">
import HeaderNav from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template #default>
  <div class="w-full h-full">
    <HeaderNav></HeaderNav>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<style lang="postcss"></style>
