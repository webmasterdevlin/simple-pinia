<script lang="ts">
import Dashboard from "../layouts/Dashboard.vue";
import { storeToRefs } from "pinia";
import { defineComponent, onMounted } from "vue";
import { usePostStore } from "../stores/post";

export default defineComponent({
  name: "Home",
  components: { Dashboard },
  setup() {
    // store getters
    const { posts, loading, doloremContent } = storeToRefs(usePostStore());

    // store actions
    const { fetchPosts } = usePostStore();

    onMounted(async () => {
      await fetchPosts();
    });

    return { posts, loading, doloremContent };
  },
});
</script>
<template>
  <Dashboard>
    <div class="container p-5" style="heigth: 100%; width: 100%">
      <section>
        <h2 v-if="loading">Loading..</h2>
        <div v-else>
          <div v-for="post in doloremContent" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
          </div>
        </div>
      </section>
    </div>
  </Dashboard>
</template>
