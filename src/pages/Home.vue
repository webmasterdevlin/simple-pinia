<script lang="ts">
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import Main from "../layouts/Main.vue";
import { useCounterStore } from "../stores/counter";

export default defineComponent({
  name: "Home",
  components: { Main },
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
  <Main
    ><div
      style="
        width: 100%;
        lenght: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <section>
        <h1>
          Count : <span style="color: purple">{{ doubleCount }}</span>
        </h1>
        <button @click="increment">Increment by 2</button>
        <button @click="reset">reset</button>
      </section>
    </div></Main
  >
</template>
