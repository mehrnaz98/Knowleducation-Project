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

    const distance = Math.min(
      size / 2 - pupilSize / 2 - pupilSize,
      Math.sqrt(deltaX ** 2 + deltaY ** 2)
    );
    const angle = Math.atan2(deltaY, deltaX);

    targetX = distance * Math.cos(angle);
    targetY = distance * Math.sin(angle);

    if (!animationFrameId) {
      animatePupil();
    }
  };

  const animatePupil = () => {
    const distanceX = targetX - pupilX.value;
    const distanceY = targetY - pupilY.value;

    pupilX.value += distanceX * 0.2;
    pupilY.value += distanceY * 0.2;

    animationFrameId = requestAnimationFrame(animatePupil);
  };

  const resetPupil = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    animatePupil();
  };

  onBeforeUnmount(() => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  });

  return {
    pupilX,
    pupilY,
    movePupil,
    resetPupil,
  };
}
