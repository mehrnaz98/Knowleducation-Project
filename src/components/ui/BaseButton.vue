<template>
  <button
    class="px-6 my-6 bg-emerald-400 text-white rounded-full text-xl"
    :style="{
      width: width + 'px',
      height: height + 'px',
      fontSize: fontSize + 'px',
    }"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: Number,
    default: 180,
  },
  height: {
    type: Number,
    default: 50,
  },
  fontSize: {
    type: Number,
    default: 20,
  },
});
</script>
