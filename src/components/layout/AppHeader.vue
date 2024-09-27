<template>
  <header :class="headerClass">
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

          <div class="pl-4">
            <base-button :width="195" :height="55" :font-size="20">
              Contact Us
            </base-button>
          </div>
        </ul>
      </nav>
    </section>
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
const isExpanded = ref(false);
const headerClass = ref(
  "sticky top-0 z-10 mt-[4.5rem] mx-[6.5rem] bg-white shadow-lg shadow-gray-200 w-[51rem] h-[5.6rem] flex items-center rounded-full"
);
</script>
