<template>
  <div
    :style="{
      width: size + 'px',
      height: size + 'px',
      borderWidth: borderThickness + 'px',
    }"
    class="relative border-green-500 rounded-full flex items-center justify-center cursor-pointer"
    @mousemove="movePupil"
    @mouseleave="resetPupil"
  >
    <div
      class="absolute bg-black rounded-full transition-transform"
      :style="{
        width: pupilSize + 'px',
        height: pupilSize + 'px',
        transform: `translate(${pupilX}px, ${pupilY}px)`,
      }"
    >
      <div
        class="absolute w-4 h-4 bg-white rounded-full top-4 left-9"
        :style="{ width: reflectionSize + 'px', height: reflectionSize + 'px' }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";

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

const animatePupil = () => {
  const distanceX = targetX - pupilX.value;
  const distanceY = targetY - pupilY.value;

  // Move the pupil towards the target position
  pupilX.value += distanceX * 0.1;
  pupilY.value += distanceY * 0.1;

  // Continue animation until the pupil is close to the target
  if (Math.abs(distanceX) > 0.1 || Math.abs(distanceY) > 0.1) {
    animationFrameId = requestAnimationFrame(animatePupil);
  } else {
    pupilX.value = targetX; // Snap to target if close enough
    pupilY.value = targetY;
    cancelAnimationFrame(animationFrameId!);
    animationFrameId = null;
  }
};

const resetPupil = () => {
  // Start animating towards the last target position when the mouse leaves
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  animatePupil();
};
</script>
