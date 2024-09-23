import { ref } from "vue";

export function useEyeSize(initialSize: number) {
  const size = ref(initialSize);

  const setSize = (newSize: number) => {
    size.value = newSize;
  };

  return { size, setSize };
}
