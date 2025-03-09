<template>
  <div class="test-layout">
    <header class="bg-gray-100 p-4">
      <h1 class="text-xl font-bold text-primary">Element Plus 测试页面</h1>
    </header>
    
    <main class="p-6">
      <slot />
    </main>

    <footer class="bg-gray-100 p-4 text-center">
      <p>测试布局底部</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.test-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.test-layout main {
  flex: 1;
}
</style> 