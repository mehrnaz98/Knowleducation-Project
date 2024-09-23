<template>
  <section class="flex">
    <section
      v-for="reason in reasons"
      :key="reason.title"
      class="w-2/5 flex mt-24"
    >
      <ReasonsCard
        :title="reason.title"
        :description="reason.description"
        :image="reason.image"
      />
    </section>

    <section class="w-3/5">Explanation</section>
  </section>
</template>

<script setup lang="ts">
import ReasonsCard from "./ReasonsCard.vue";

const reasons = [
  {
    title: "First reason",
    description: "Lorem Ipsum 1st",
    image: "src/assets/img/hand-0.png",
  },
  {
    title: "Second reason",
    description: "Lorem Ipsum 2nd",
    image: "src/assets/img/hand-1.png",
  },
  {
    title: "Third reason",
    description: "Lorem Ipsum 3rd",
    image: "src/assets/img/hand-2.png",
  },
];
</script>
