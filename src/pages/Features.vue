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
    const { increment, reset } = useCounterStore();

    return { doubleCount, increment, reset };
  },
});
</script>
<template>
  <Dashboard>
    <div>
      <div class="container" style="heigth: 100vh; width: 100%">
        <section>
          <h1>
            Count : <span style="color: purple">{{ doubleCount }}</span>
          </h1>
          <button @click="increment">Increment by 2</button>
          <button @click="reset">reset</button>
        </section>
      </div>
    </div>
  </Dashboard>
</template>
