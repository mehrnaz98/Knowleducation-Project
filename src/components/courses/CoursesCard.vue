<template>
  <div
    class="relative bg-gray-50 shadow-lg shadow-gray-200 flex flex-col w-[24.5rem] h-[32rem] rounded-2xl transition-transform duration-100 ease-in-out hover:-translate-y-4 hover:cursor-pointer"
  >
    <div
      v-if="image"
      class="absolute bg-white w-[22rem] h-[22rem] top-[12rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl flex justify-center items-center"
    >
      <img
        :src="image"
        alt="Course Image"
        class="rounded-2xl w-full h-full object-cover"
      />
    </div>
    <div
      v-else
      class="absolute bg-white w-[22rem] h-[22rem] top-[12rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl flex justify-center items-center"
    >
      <p class="font-righteous uppercase text-6xl font-bold text-gray-200">
        image
      </p>
    </div>

    <div
      class="mt-[23.5rem] mx-6 text-xl text-gray-400 flex justify-start leading-8"
    >
      <p>
        {{
          description ||
          "Lorem ipsum dolor sit amet consecte adipisicing elit. Doloremque quisobcaecati perferendis."
        }}
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
