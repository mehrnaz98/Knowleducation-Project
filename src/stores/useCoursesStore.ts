import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCoursesStore = defineStore("courses", () => {
  const images = ref<string[]>([]);
});
