<template>
  <div class="element-test">
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button type="info">信息按钮</el-button>
  </div>
</template>

<script setup lang="ts">
// Element Plus 组件会自动导入，无需手动引入
</script>

<style scoped>
.element-test {
  padding: 20px;
  display: flex;
  gap: 10px;
}
</style> 