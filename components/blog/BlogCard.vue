<template>
  <div class="bg-white rounded-lg shadow-sm overflow-hidden">
    <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover">
    <div class="p-6">
      <div class="flex flex-wrap gap-2 mb-3">
        <Tag v-for="tag in post.tags" :key="tag" :color="getTagColor(tag)">
          {{ tag }}
        </Tag>
      </div>
      <h2 class="text-xl font-semibold text-gray-900 mb-2">{{ post.title }}</h2>
      <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-500">{{ post.date }}</span>
        <NuxtLink :to="'/blog/' + post.id" class="text-blue-600 hover:text-blue-800">
          阅读更多
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Post {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  tags: string[];
}

defineProps<{
  post: Post
}>();

const tagColors: Record<string, 'blue' | 'green' | 'red' | 'yellow' | 'gray'> = {
  'Nuxt': 'green',
  'Vue': 'green',
  'CSS': 'blue',
  'Tailwind': 'blue',
  'JavaScript': 'yellow',
  '教程': 'red',
  '设计': 'blue',
  '前端': 'gray'
};

function getTagColor(tag: string) {
  return tagColors[tag] || 'gray';
}
</script> 