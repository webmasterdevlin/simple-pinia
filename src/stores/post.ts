import { defineStore, acceptHMRUpdate } from "pinia";
import { ENDPOINTS } from "../api/config";
import { get } from "../api/service";
import { Post } from "../models/post";

export const usePostStore = defineStore({
  id: "post",
  state: () => ({
    loading: false,
    posts: [] as Post[],
  }),
  actions: {
    async fetchPosts() {
      this.loading = true;
      try {
        const { data } = await get<Post[]>(`/${ENDPOINTS.posts}?_limit=100`);
        this.posts = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    doloremContent: (state) => {
      return state.posts.filter((post) => post.body.includes("dolorem"));
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePostStore, import.meta.hot));
}
