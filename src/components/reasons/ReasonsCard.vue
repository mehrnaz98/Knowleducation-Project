<template>
  <div class="w-96 border rounded-lg p-4 shadow-md">
    <img
      :src="image"
      alt="Card Image"
      class="w-full h-32 object-cover rounded-t-lg"
    />
    <h3 class="text-xl font-bold mt-2">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
});
</script>
