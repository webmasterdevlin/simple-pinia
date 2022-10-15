<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Main",
  setup() {
    return {};
  },
  components: {},
});
</script>

<template>
  <div style="background-color: lightyellow; width: 100%; height: 100vh">
    <slot></slot>
  </div>
</template>
