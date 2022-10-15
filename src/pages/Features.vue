<script lang="ts">
import Dashboard from "../layouts/Dashboard.vue";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useCounterStore } from "../stores/counter";

export default defineComponent({
  name: "Home",
  components: { Dashboard },
  setup() {
    // store getters
    const { doubleCount } = storeToRefs(useCounterStore());

    // store actions
    const { increment, decrement } = useCounterStore();

    return { doubleCount, increment, decrement };
  },
});
</script>
<template>
  <Dashboard>
    <div>
      <div class="container" style="heigth: 100vh; width: 100%">
        <h1>FEATURES WORKS!</h1>
      </div>
      <section>
        <h1>
          Count: <span style="color: purple">{{ doubleCount }}</span>
        </h1>
        <button @click="increment">Increment +</button>
        <button @click="decrement">Decrement -</button>
      </section>
    </div>
  </Dashboard>
</template>
