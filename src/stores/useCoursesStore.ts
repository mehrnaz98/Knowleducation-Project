import { ref } from "vue";
import { defineStore } from "pinia";

export const useCoursesStore = defineStore("courses", () => {
  const images = ref<string[]>([]);
  const descriptions = ref<string[]>([]);
  const isLoading = ref(true);

  const fetchImages = async () => {
    try {
      const response = await fetch("https://example.com/api/courses");
      const data = await response.json();

      images.value = data.images || [];
      descriptions.value = data.descriptions || [];
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      isLoading.value = false;
    }
  };

  fetchImages();

  return {
    images,
    isLoading,
  };
});
