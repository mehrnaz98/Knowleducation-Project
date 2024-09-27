<template>
  <header :class="headerClass">
    <section class="w-1/4">
      <AppLogo />
    </section>

    <section :class="rightSectionClass">
      <div class="ml-5">
        <nav>
          <ul class="flex space-x-7">
            <li><a href="#">Courses</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Lorem</a></li>
          </ul>
        </nav>
      </div>
      <div :class="buttonClass">
        <base-button :width="195" :height="55" :font-size="20">
          Contact Us
        </base-button>
      </div>
    </section>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import AppLogo from "./AppLogo.vue";
import BaseButton from "../ui/BaseButton.vue";

const isExpanded = ref(false);
const headerClass = ref(
  "sticky top-0 z-10 mt-[4.5rem] ml-[6.5rem] bg-white shadow-lg shadow-gray-200 w-[51rem] h-[5.6rem] flex items-center rounded-full"
);

const handleScroll = () => {
  if (window.scrollY > 650) {
    headerClass.value =
      "sticky top-0 z-10 mt-[4.5rem] ml-[6.5rem] bg-white shadow-lg shadow-gray-200 w-[87%] h-[5.6rem] flex items-center rounded-full";
  } else {
    headerClass.value =
      "sticky top-0 z-10 mt-[4.5rem] ml-[6.5rem] bg-white shadow-lg shadow-gray-200 w-[51rem] h-[5.6rem] flex items-center justify-center rounded-full";
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
