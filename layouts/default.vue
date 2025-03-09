<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <NuxtLink to="/" class="flex items-center text-gray-900 hover:text-gray-600">
              <span class="text-xl font-bold">我的博客</span>
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-4">
            <NuxtLink to="/" class="text-gray-600 hover:text-gray-900">首页</NuxtLink>
            <NuxtLink to="/blog" class="text-gray-600 hover:text-gray-900">博客</NuxtLink>
            <NuxtLink to="/about" class="text-gray-600 hover:text-gray-900">关于</NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <slot />
    </main>

    <footer class="bg-white mt-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p class="text-center text-gray-500">© 2024 我的博客. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template> 
<script setup>

test();
</script>

