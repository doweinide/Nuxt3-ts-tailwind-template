<template>
  <div v-if="post" class="max-w-4xl mx-auto">
    <img :src="post.image" :alt="post.title" class="w-full h-64 object-cover rounded-lg mb-8">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ post.title }}</h1>
    <div class="flex items-center text-gray-600 mb-8">
      <span>{{ post.date }}</span>
    </div>
    <div class="prose prose-lg max-w-none">
      <p>{{ post.content }}</p>
    </div>
  </div>
  <div v-else class="text-center py-12">
    <h1 class="text-2xl text-gray-900">文章未找到</h1>
  </div>
</template>

<script setup lang="ts">
import { posts } from '~/utils/posts';

const route = useRoute();
const post = computed(() => {
  return posts.find(p => p.id === Number(route.params.id));
});
</script> 