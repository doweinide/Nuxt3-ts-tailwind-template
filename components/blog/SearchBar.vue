<template>
  <div class="mb-8">
    <div class="relative">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="搜索文章..."
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        @input="search"
      >
      <span v-if="searchQuery" @click="clearSearch" class="absolute right-3 top-2.5 text-gray-400 cursor-pointer hover:text-gray-600">
        ✕
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const searchQuery = ref('');
const emit = defineEmits(['search']);

function search() {
  emit('search', searchQuery.value);
}

function clearSearch() {
  searchQuery.value = '';
  search();
}
</script> 