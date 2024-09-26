<template>
  <section class="bg-gray-200 px-36 py-24">
    <section class="flex">
      <h2 class="font-righteous text-4xl">Our Courses</h2>
      <div class="ml-10 mt-6 w-[60rem] h-1 bg-gray-200"></div>
    </section>

    <section class="grid grid-cols-3 gap-y-8 gap-x-11 mt-10">
      <template v-if="courseStore.isLoading">
        <SkeletonCard v-for="index in 12" :key="index" />
      </template>
      <template v-else>
        <CoursesCard
          v-for="(course, index) in defaultCourses"
          :key="index"
          :image="course.image"
          :description="course.description"
        />
      </template>
    </section>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCoursesStore } from "@/stores/useCoursesStore";
import CoursesCard from "./CoursesCard.vue";
import SkeletonCard from "./SkeletonCard.vue";

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
