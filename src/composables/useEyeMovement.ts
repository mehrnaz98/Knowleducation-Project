import { ref, onBeforeUnmount } from "vue";

export function useEyeMovement(size: number, pupilSize: number) {
  const pupilX = ref<number>(0);
  const pupilY = ref<number>(0);
  let targetX = 0;
  let targetY = 0;
  let animationFrameId: number | null = null;

  const movePupil = (event: MouseEvent) => {
  };
}
