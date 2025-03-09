<template>
  <div>
    <section class="text-center mb-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">欢迎来到我的博客</h1>
      <p class="text-xl text-gray-600">分享技术知识和开发经验</p>
      <ElementTest></ElementTest>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-gray-900 mb-6">最新文章</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { posts } from '../utils/posts';
</script> 