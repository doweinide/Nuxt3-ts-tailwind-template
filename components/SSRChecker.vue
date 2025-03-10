<template>
  <div class="p-4 bg-gray-100 rounded-lg">
    <p>当前渲染模式: {{ renderMode }}</p>
    <p>运行环境: {{ environment }}</p>
  </div>
</template>

<script setup>
const renderMode = import.meta.env.SSR ? 'SSR (服务端渲染)' : 'SPA (客户端渲染)'
const environment = import.meta.env.SSR ? '服务端' : '客户端'
</script> 