<template>
  <header class="bg-gray-200 p-5 pt-16 border-t-8 border-green-500">
    <div
      class="bg-white shadow-sm w-[54%] flex items-center border rounded-full mx-20 py-4"
    >
      <section class="w-1/4">
        <AppLogo />
      </section>

      <section class="w-3/4 text-base">
        <nav>
          <ul
            class="flex space-x-9 justify-end items-center px-4 font-bold text-gray-400"
          >
            <li><a href="#">Courses</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Lorem</a></li>
            <button
              class="bg-green-500 text-white rounded-full text-lg font-normal px-11 py-2"
            >
              Contact Us
            </button>
          </ul>
        </nav>
      </section>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppLogo from "./AppLogo.vue";
</script>
