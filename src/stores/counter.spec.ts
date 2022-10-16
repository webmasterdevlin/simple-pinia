import { setActivePinia, createPinia } from "pinia";
import { beforeEach, describe, it, expect } from "vitest";
import { useCounterStore } from "./counter";

describe("Counter Store", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it("increments", () => {
    const counter = useCounterStore();
    expect(counter.count).toBe(0);
    counter.increment();
    expect(counter.doubleCount).toBe(2);
  });

  it("reset to 0", () => {
    const counter = useCounterStore();
    counter.increment();
    counter.reset();
    expect(counter.count).toBe(0);
  });
});
