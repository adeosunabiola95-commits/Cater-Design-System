import { useCallback, useEffect, useRef, useState } from 'react';

export const AI_PANEL_MIN = 320;
export const AI_PANEL_MAX = 900;
export const AI_PANEL_DEFAULT = 567;

type UseCaterAIPanelResizeOptions = {
  shellRef: React.RefObject<HTMLElement | null>;
  sidebarReservedPx?: number;
};

export function useCaterAIPanelResize({
  shellRef,
  /** Sidebar 206px + center horizontal padding 32px */
  sidebarReservedPx = 238,
}: UseCaterAIPanelResizeOptions) {
  const [width, setWidth] = useState(AI_PANEL_DEFAULT);
  const dragStateRef = useRef<{ startX: number; startWidth: number } | null>(null);

  const handleResizeStart = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      dragStateRef.current = { startX: e.clientX, startWidth: width };
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    },
    [width],
  );

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const state = dragStateRef.current;
      const shell = shellRef.current;
      if (!state || !shell) return;
      const delta = state.startX - e.clientX;
      const shellWidth = shell.clientWidth;
      const maxAllowed = Math.max(AI_PANEL_MIN, shellWidth - sidebarReservedPx);
      const next = Math.min(
        Math.max(state.startWidth + delta, AI_PANEL_MIN),
        Math.min(AI_PANEL_MAX, maxAllowed),
      );
      setWidth(next);
    };

    const handleUp = () => {
      if (!dragStateRef.current) return;
      dragStateRef.current = null;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [shellRef, sidebarReservedPx]);

  return { width, handleResizeStart };
}
