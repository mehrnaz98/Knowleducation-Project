<template>
  <section class="flex justify-start items-center px-7 space-x-2 text-xl">
    <div class="w-2/5"><BaseAnimatedEye :size="31" /></div>

    <div class="w-3/5">
      <div class="font-bold">Knowleducation</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseAnimatedEye from "./ui/BaseAnimatedEye.vue";
</script>
