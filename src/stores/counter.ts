import { useLocalStorage } from "@vueuse/core";
import { defineStore, acceptHMRUpdate } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    // count: useLocalStorage("app:count", 0),
  }),
  actions: {
    increment() {
      this.count++;
    },
    reset() {
      // apply multiple changes at the same time
      this.$patch({
        count: 0,
      });
    },
  },
  getters: {
    doubleCount: (state) => {
      return state.count * 2;
    },
  },
  persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
