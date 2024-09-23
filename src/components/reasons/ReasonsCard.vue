<template>
  <section
    class="bg-white flex items-center ml-36 w-[23rem] border rounded-lg p-4 shadow-md group"
  >
    <div
      class="bg-yellow-300 flex justify-center relative border rounded-full w-28 h-28 mx-6 my-5"
    >
      <img
        :src="image"
        alt="Card Image"
        class="h-32 object-cover rounded-t-lg absolute bottom-3 transition-transform duration-100 ease-in-out group-hover:rotate-[-12deg]"
      />
    </div>

    <div class="leading-10">
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <p class="text-gray-600">{{ description }}</p>
    </div>

    <div
      class="absolute transform translate-x-60 -translate-y-8 rotate-45 z-0 opacity-20"
    >
      <p class="text-6xl font-bold text-black">
        {{ ordinalNumber }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  title: string;
  description: string;
  image: string;
  ordinalNumber: string;
}>();
</script>
