import { ref } from "vue";
import { defineStore } from "pinia";

export const useCoursesStore = defineStore("courses", () => {
  const courses = ref<{ image: string; description: string }[]>([]);
  const isLoading = ref(true);

  const fetchCourses = async () => {
    try {
      const response = await fetch("https://example.com/api/courses");
      const data = await response.json();

      courses.value = data.courses || [];
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      isLoading.value = false;
    }
  };

  fetchCourses();

  return {
    courses,
    isLoading,
  };
});
