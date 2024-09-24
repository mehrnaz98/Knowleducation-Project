<template>
  <div
    class="relative bg-gray-100 flex flex-col w-[25rem] h-[32rem] rounded-2xl"
  >
    <div
      v-if="image"
      class="absolute bg-white w-[23rem] h-[23rem] top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl flex justify-center items-center"
    >
      <img
        :src="image"
        alt="Course Image"
        class="rounded-2xl w-full h-full object-cover"
      />
    </div>
    <div
      v-else
      class="absolute bg-white w-[22rem] h-[22rem] top-[12.70rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl flex justify-center items-center"
    >
      <p class="uppercase text-6xl font-bold text-gray-400">image</p>
    </div>

    <div
      class="mt-[24.5rem] mx-6 text-xl text-gray-400 flex justify-start leading-8"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quis
        obcaecati perferendis.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: String,
  description: String,
});
</script>
