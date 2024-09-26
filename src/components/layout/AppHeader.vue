<template>
  <header class="bg-gray-100 p-5 pt-16 border-t-8 border-emerald-400">
    <div
      class="bg-white shadow-lg shadow-gray-200 w-[52rem] h-[5.6rem] flex items-center rounded-full mx-20 py-4"
    >
      <section class="w-1/4">
        <AppLogo />
      </section>

      <section class="w-3/4 text-base">
        <nav>
          <ul
            class="flex space-x-9 justify-end items-center text-lg px-4 font-semibold text-gray-400"
          >
            <li><a href="#">Courses</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Lorem</a></li>

            <base-button :width="185" :height="55" :font-size="20"
              >Contact Us</base-button
            >
          </ul>
        </nav>
      </section>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppLogo from "./AppLogo.vue";
import BaseButton from "../ui/BaseButton.vue";

const props = defineProps<{
  width: number;
  height: number;
  font: number;
}>();
</script>
