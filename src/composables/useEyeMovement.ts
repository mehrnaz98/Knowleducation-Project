import { ref, onBeforeUnmount } from "vue";

export function useEyeMovement(size: number, pupilSize: number) {
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

  };
}
