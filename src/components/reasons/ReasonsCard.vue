<template>
  <div class="flex w-96 border rounded-lg p-4 shadow-md">
    <img :src="image" alt="Card Image" class="h-32 object-cover rounded-t-lg" />
    <div>
      <h3 class="text-xl font-bold mt-2">{{ title }}</h3>
      <p class="text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  title: string;
  description: string;
  image: string;
}>();
</script>
