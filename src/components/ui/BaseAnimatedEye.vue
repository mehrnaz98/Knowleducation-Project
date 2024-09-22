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
