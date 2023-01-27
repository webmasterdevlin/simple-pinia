<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const storeCounter = useCounterStore();
</script>

<template>
  <aside class="left-0 w-64 transition-transform h-auto" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50">
      <ul class="space-y-2">
        <li>
          <router-link
            to=""
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <span class="ml-3">Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link
            to=""
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Kanban</span>
            <span
              class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full"
              >Pro</span
            >
          </router-link>
        </li>
        <li>
          <router-link
            to=""
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
            <span
              class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full"
              >{{ storeCounter.doubleCount }}</span
            >
          </router-link>
        </li>
        <li>
          <router-link
            to=""
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
          </router-link>
        </li>
        <li>
          <router-link
            to=""
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
          </router-link>
        </li>
        <li>
          <router-link
            to=""
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
          </router-link>
        </li>
        <li>
          <router-link
            to=""
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>
