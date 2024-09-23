<template>
  <section class="flex">
    <section class="w-2/5 mt-24 flex flex-col space-y-12">
      <div v-for="reason in reasons" :key="reason.title">
        <ReasonsCard
          :title="reason.title"
          :description="reason.description"
          :image="reason.image"
        />
      </div>
    </section>

    <section class="w-3/5">Explanation</section>
  </section>
</template>

<script setup lang="ts">
import ReasonsCard from "./ReasonsCard.vue";

const reasons = [
  {
    title: "Zeroth reason",
    description: "Lorem Ipsum 0th",
    image: "src/assets/img/hand-0.png",
  },
  {
    title: "First reason",
    description: "Lorem Ipsum 1st",
    image: "src/assets/img/hand-1.png",
  },
  {
    title: "Second reason",
    description: "Lorem Ipsum 2nd",
    image: "src/assets/img/hand-2.png",
  },
];
</script>
