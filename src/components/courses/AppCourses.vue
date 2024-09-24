<template>
  <section class="bg-gray-200 px-36 py-24 mt-20">
    <section class="flex">
      <h2 class="text-4xl">Our Courses</h2>
      <div class="ml-10 mt-6 w-[60rem] h-1 bg-gray-200"></div>
    </section>

    <section class="grid grid-cols-3 gap-y-8 gap-x-16 mt-10">
      <CoursesCard
        v-for="(course, index) in defaultCourses"
        :key="index"
        :image="course.image"
        :description="course.description"
      />
    </section>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCoursesStore } from "@/stores/useCoursesStore";
import CoursesCard from "./CoursesCard.vue";

const courseStore = useCoursesStore();

const defaultCourses = computed(() => {
  const defaultCards = Array(12).fill({
    image: "",
    description: "",
  });

  // Map fetched courses to replace the default ones, but keep 12 cards in total
  return defaultCards.map((card, index) => ({
    image: courseStore.courses[index]?.image || card.image,
    description: courseStore.courses[index]?.description || card.description,
  }));
});
</script>
