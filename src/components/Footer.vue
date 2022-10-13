<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
  setup() {
    return {};
  },
});
</script>

<template>
  <div>
    <footer
      class="shadow rounded justify-content-between flex-nowrap flex-row"
      style="background-color: blueviolet; height: 3rem; width: 100%"
    >
      <div
        class="container"
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        "
      >
        <div style="color: white">copy right 2022</div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
