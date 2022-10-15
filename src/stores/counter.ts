import { useLocalStorage } from "@vueuse/core";
import { defineStore, acceptHMRUpdate } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: useLocalStorage("app:count", 0),
  }),
  actions: {
    increment() {
      this.count++;
    },
    reset() {
      while (this.count > 0) {
        this.count--;
      }
    },
  },
  getters: {
    doubleCount: (state) => {
      return state.count * 2;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
