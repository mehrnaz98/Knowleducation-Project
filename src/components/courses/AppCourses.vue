<template>
  <section class="bg-gray-700 px-36 py-24 mt-20">
    <section class="flex">
      <h2 class="text-4xl">Our Courses</h2>
      <div class="ml-10 mt-6 w-[60rem] h-1 bg-gray-200"></div>
    </section>

    <section class="grid grid-cols-3 gap-y-8 gap-x-16 mt-10">
      <CoursesCard
        v-for="(image, index) in defaultAndFetchedImages"
        :key="index"
        :image="image"
      />
    </section>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCoursesStore } from "@/stores/useCoursesStore";
import CoursesCard from "./CoursesCard.vue";

const courseStore = useCoursesStore();

const defaultAndFetchedImages = computed(() => {
  const defaultCards = Array(12).fill("");
  return defaultCards.map((_, index) => courseStore.images[index] || "");
});
</script>
