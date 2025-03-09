<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-900 mb-8">所有文章</h1>
    <SearchBar @search="handleSearch" />
    <div v-if="filteredPosts.length > 0" class="grid grid-cols-1 gap-8">
      <BlogCard v-for="post in filteredPosts" :key="post.id" :post="post" class="w-full" />
    </div>
    <div v-else class="text-center py-12">
      <p class="text-gray-600">没有找到相关文章</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { posts } from '~/utils/posts';

const searchTerm = ref('');
const filteredPosts = computed(() => {
  if (!searchTerm.value) return posts;
  const term = searchTerm.value.toLowerCase();
  return posts.filter(post => 
    post.title.toLowerCase().includes(term) || 
    post.excerpt.toLowerCase().includes(term)
  );
});

function handleSearch(query: string) {
  searchTerm.value = query;
}
</script> 