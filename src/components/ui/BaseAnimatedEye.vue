<template>
  <div
    class="relative w-64 h-64 border-[50px] border-green-500 rounded-full flex items-center justify-center cursor-pointer"
    @mousemove="movePupil"
    @mouseleave="resetPupil"
  >
    <div
      class="absolute w-16 h-16 bg-black rounded-full transition-transform"
      :style="{ transform: `translate(${pupilX}px, ${pupilY}px)` }"
    >
      <div class="absolute w-4 h-4 bg-white rounded-full top-4 left-9"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const pupilX = ref<number>(0);
const pupilY = ref<number>(0);
let targetX = 0;
let targetY = 0;
let animationFrameId: number | null = null;

const movePupil = (event: MouseEvent) => {
  const { clientX, clientY } = event;
  const target = event.currentTarget as HTMLElement;
  const { left, top, width, height } = target.getBoundingClientRect();

  const centerX = left + width / 2;
  const centerY = top + height / 2;

  const deltaX = clientX - centerX;
  const deltaY = clientY - centerY;

  const distance = Math.min(33, Math.sqrt(deltaX ** 2 + deltaY ** 2));
  const angle = Math.atan2(deltaY, deltaX);

  // Set the target position for the pupil
  targetX = distance * Math.cos(angle);
  targetY = distance * Math.sin(angle);

  // Update pupil position immediately
  pupilX.value = targetX;
  pupilY.value = targetY;
};
</script>
