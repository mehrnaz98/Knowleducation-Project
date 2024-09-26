<template>
  <section
    class="bg-white relative flex items-center ml-36 w-[23rem] h-[11rem] rounded-2xl p-4 shadow-md shadow-gray-200 group"
  >
    <div
      class="bg-yellow-200 flex justify-center relative rounded-full w-28 h-28 mx-6 my-5"
    >
      <img
        :src="image"
        alt="Card Image"
        class="w-14 absolute bottom-3 transition-transform duration-100 ease-in-out group-hover:rotate-[-12deg]"
      />
    </div>

    <div class="leading-10">
      <h3 class="font-righteous text-xl text-slate-600">{{ title }}</h3>
      <p class="text-gray-400">{{ description }}</p>
    </div>

    <div
      class="absolute transform rotate-45 z-0 opacity-20 right-0 pr-4 pt-0 -mt-10"
    >
      <p class="font-righteous text-6xl font-semibold text-gray-400 text-right">
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
