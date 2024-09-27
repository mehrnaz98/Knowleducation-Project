<template>
  <div
    :style="{
      width: size + 'px',
      height: size + 'px',
      borderWidth: borderThickness + 'px',
    }"
    class="relative border-emerald-400 rounded-full flex items-center justify-center cursor-pointer"
    @mousemove="movePupil"
    @mouseleave="resetPupil"
  >
    <div
      class="absolute bg-slate-600 rounded-full transition-transform"
      :style="{
        width: pupilSize + 'px',
        height: pupilSize + 'px',
        transform: `translate(${pupilX}px, ${pupilY}px)`,
      }"
    >
      <div
        class="absolute w-4 h-4 bg-slate-500 rounded-full"
        :style="{
          width: reflectionSize + 'px',
          height: reflectionSize + 'px',
          top: '20%',
          left: '50%',
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineExpose } from "vue";
import { useEyeMovement } from "@/composables/useEyeMovement";

const props = defineProps<{
  size: number;
  borderThickness: number;
}>();

const pupilSize = props.size / 4;
const reflectionSize = pupilSize / 4;

const { pupilX, pupilY, movePupil, resetPupil } = useEyeMovement(
  props.size,
  pupilSize
);

</script>
