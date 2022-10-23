<script setup lang="ts">
import Dashboard from "../layouts/Dashboard.vue";
import { onMounted } from "vue";
import { usePostStore } from "../stores/post";

const storePost = usePostStore();

onMounted(async () => {
  await storePost.fetchPosts();
});
</script>
<template>
  <Dashboard>
    <div class="container p-5" style="height: 100%; width: 100%">
      <section>
        <h2 v-if="storePost.loading">Loading..</h2>
        <div v-else>
          <div v-for="post in storePost.doloremContent" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
          </div>
        </div>
      </section>
    </div>
  </Dashboard>
</template>
