<template>
  <header class="bg-gray-100 p-5 pt-16 border-t-8 border-emerald-400">
    <div
      class="bg-white shadow-lg shadow-gray-200 w-[51rem] h-[5.6rem] flex items-center rounded-full mx-20 py-4"
    >
      <section class="w-1/4">
        <AppLogo />
      </section>

      <section class="w-3/4 text-base ml-20">
        <nav>
          <ul
            class="flex space-x-7 justify-center items-center text-md-custom font-semibold text-gray-400"
          >
            <li><a href="#">Courses</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Lorem</a></li>

            <base-button :width="195" :height="55" :font-size="20"
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
