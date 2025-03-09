<template>
  <span
    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
    :class="colorClasses[color]"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'gray'
}>();

const colorClasses = {
  blue: 'bg-blue-100 text-blue-800',
  green: 'bg-green-100 text-green-800',
  red: 'bg-red-100 text-red-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  gray: 'bg-gray-100 text-gray-800'
};

withDefaults(props, {
  color: 'blue'
});
</script> 