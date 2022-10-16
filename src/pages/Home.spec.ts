import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
// import any store you want to interact with in tests
import { useCounterStore } from "../stores/counter";
import Home from "./Home.vue";
import { beforeEach, describe, expect, test, vitest } from "vitest";
import sinon from "sinon";
import { setActivePinia, createPinia } from "pinia";

describe("Home", () => {
  let wrapper = null;

  beforeEach(() => {
    setActivePinia(createPinia());
    wrapper = mount(Home, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vitest.fn, // use sinon's spy to wrap actions
          }),
        ],
      },
    });
  });
});

test("should first", () => {
  const store = useCounterStore(); // uses the testing pinia!

  // state can be directly manipulated
  store.count = 1;

  expect(store.doubleCount).toBe(2);

  // actions are stubbed by default, meaning they don't execute their code by default.
  // See below to customize this behavior.
  store.increment();

  expect(store.increment).toHaveBeenCalledTimes(1);
  expect(store.increment).toHaveBeenLastCalledWith();
});
