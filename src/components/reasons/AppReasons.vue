<template>
  <section class="flex">
    <section class="w-2/5 flex mt-24">
      <ReasonsCard
        title="first reason"
        description="description"
        image="src/assets/img/hand-0.png"
      />
    </section>

    <section class="w-3/5">Explanation</section>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import ReasonsCard from "./ReasonsCard.vue";

const props = defineProps<{
  title: string;
  description: string;
  image: string;
}>();
</script>
