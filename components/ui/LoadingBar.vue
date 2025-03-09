<template>
  <div
    v-show="loading"
    class="fixed top-0 left-0 right-0 h-[3px] bg-emerald-500 transition-all duration-300"
    :style="{ width: `${progress}%` }"
  />
</template>

<script setup lang="ts">
const loading = ref(false);
const progress = ref(0);
let timer: NodeJS.Timeout;

// 开始加载
function start() {
  loading.value = true;
  progress.value = 0;
  timer = setInterval(() => {
    if (progress.value < 90) {
      progress.value += Math.random() * 10;
    }
  }, 200);
}

// 完成加载
function finish() {
  progress.value = 100;
  clearInterval(timer);
  setTimeout(() => {
    loading.value = false;
    progress.value = 0;
  }, 300);
}

// 监听路由变化
const router = useRouter();
router.beforeEach(() => {
  start();
  return true;
});
router.afterEach(() => {
  finish();
});
</script> 