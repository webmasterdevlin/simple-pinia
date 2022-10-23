import { defineStore, acceptHMRUpdate } from "pinia";
import { ENDPOINTS } from "../api/config";
import { get } from "../api/service";
import { Post } from "../models/post";

const namespace = "post";

type StateType = {
  loading: boolean;
  posts: Post[];
};

type ActionsType = {
  fetchPosts: () => Promise<void>;
};

type GettersType = {
  doloremContent: (state: StateType) => Post[];
};

export const usePostStore = defineStore<
  typeof namespace,
  StateType,
  GettersType,
  ActionsType
>({
  id: namespace,
  state: () => ({
    loading: false,
    posts: [],
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
