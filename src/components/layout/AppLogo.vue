<template>
  <section
    class="flex justify-start items-center px-7 space-x-2 text-xl"
    @mousemove="handleMouseMove"
    @mouseleave="resetPupil"
  >
    <div class="w-2/5">
      <BaseAnimatedEye :size="31" ref="eyeRef" />
    </div>

    <div class="w-3/5">
      <div class="font-righteous">Knowleducation</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseAnimatedEye from "../ui/BaseAnimatedEye.vue";
import { ref } from "vue";

const eyeRef = ref<InstanceType<typeof BaseAnimatedEye> | null>(null);

const handleMouseMove = (event: MouseEvent) => {
  if (eyeRef.value) {
    // Call the movePupil method in the BaseAnimatedEye component
    eyeRef.value.movePupil(event);
  }
};

const resetPupil = () => {
  if (eyeRef.value) {
    // Call the resetPupil method in the BaseAnimatedEye component
    eyeRef.value.resetPupil();
  }
};
</script>
