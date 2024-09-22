<template>
  <header class="bg-gray-100 p-5">
    <div
      class="bg-white flex items-center border-4 border-gray-600 rounded-full w-"
    >
      <section class="w-1/4">
        <AppLogo />
      </section>

      <section class="w-3/4">
        <nav>
          <ul class="flex space-x-7 justify-end items-center px-10">
            <li><a href="#">Courses</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Lorem</a></li>
            <button class="bg-green-500 text-white rounded-full px-9 py-2">
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
