import { defineStore } from 'pinia';
import { blogApi } from '../api/blog';
import type { Post } from '../utils/posts';

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [] as Post[],
    currentPost: null as Post | null,
    loading: false,
    error: null as string | null
  }),

  getters: {
    getPostById: (state) => (id: number) => {
      return state.posts.find(post => post.id === id);
    },
    getPostsByTag: (state) => (tag: string) => {
      return state.posts.filter(post => post.tags.includes(tag));
    }
  },

  actions: {
    async fetchPosts() {
      this.loading = true;
      this.error = null;
      try {
        this.posts = await blogApi.getPosts();
      } catch (err) {
        this.error = err instanceof Error ? err.message : '获取文章列表失败';
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async fetchPost(id: number) {
      this.loading = true;
      this.error = null;
      try {
        this.currentPost = await blogApi.getPost(id);
      } catch (err) {
        this.error = err instanceof Error ? err.message : '获取文章详情失败';
        throw err;
      } finally {
        this.loading = false;
      }
    }
  }
}); 