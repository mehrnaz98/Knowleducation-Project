<template>
  <section class="bg-gray-700 px-36 py-24 mt-20">
    <section class="flex">
      <h2 class="text-4xl">Our Courses</h2>
      <div class="ml-10 mt-6 w-[60rem] h-1 bg-gray-200"></div>
    </section>

    <section>
      <CoursesCard />
    </section>
  </section>
</template>

<script setup lang="ts">
import CoursesCard from "./CoursesCard.vue";
</script>
