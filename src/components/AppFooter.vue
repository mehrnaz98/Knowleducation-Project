<template>
  <footer class="relative text-center">
    <div class="relative">
      <div
        class="absolute inset-x-0 -mt-40 h-36 bg-emerald-400 rounded-t-[100%_140px] w-full z-0"
      ></div>
      <div
        class="absolute inset-x-0 -mt-[9.4rem] h-40 bg-slate-900 rounded-t-[100%_140px] w-full z-10"
      ></div>
      <div
        class="absolute flex justify-center items-center inset-x-0 -mt-20 z-10"
      >
        <p class="font-righteous text-2xl text-gray-400">Give me FIVE</p>
        <img
          src="../assets/hand-raised-svgrepo-com.svg"
          alt="Hi Five svg"
          class="beating-hand w-9 hover:cursor-grab"
        />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.beating-hand {
  transition: transform 0.3s ease-in-out;
  animation: beat 0.5s infinite;
  animation-play-state: paused;
}

.beating-hand:hover {
  animation-play-state: running;
}

@keyframes beat {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>
