<template>
  <section
    class="bg-gray-100 text-slate-600 flex justify-center pt-44 border-t-8 border-emerald-400 -mt-[10.1rem]"
  >
    <section class="w-3/5 py-7 mr-32 ml-36">
      <h1 class="font-righteous text-[5rem]">
        Learn
        <span class="relative inline-block">
          EDGE
          <div
            class="absolute -inset-x-6 -bottom-1 w-64 h-5 bg-gradient-to-r from-red-400 via-yellow-400 to-emerald-400 rounded-full"
            style="clip-path: polygon(-50% 50%, 100% 0%, 100% 100%, 0% 50%)"
          ></div>
        </span>
        Cases
      </h1>

      <p class="text-xl mt-4 text-gray-400 leading-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, officiis
        doloribus excepturi dolore officia aliquid error ipsum eos ea quam
        molestias quisquam natus, corrupti iusto suscipit tempore a. Mollitia
        recusandae doloremque ut, fugit magni pariatur ipsum? Saepe, illo eaque
        dignissimos soluta molestias sapiente nemo?
      </p>

      <div class="relative flex justify-center">
        <input
          type="search"
          placeholder="What do you want to learn?"
          class="bg-white text-lg shadow-sm w-full h-16 border rounded-full mr-52 mt-5 mb-10 py-4 pl-5 pr-24 focus:border-emerald-400 focus:outline-none focus:border-2"
        />
        <div
          class="absolute right-[29.5%] top-[41.5%] transform -translate-y-1/2"
        >
          <base-button :width="110" :height="40" :font-size="15"
            >Search</base-button
          >
        </div>
      </div>
    </section>

    <section class="w-2/5 relative">
      <div class="absolute -top-14 -left-14">
        <BaseAnimatedEye :size="430" :border-thickness="90" />
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import BaseButton from "./ui/BaseButton.vue";
import BaseAnimatedEye from "./ui/BaseAnimatedEye.vue";
</script>
