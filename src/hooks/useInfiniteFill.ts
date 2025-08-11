import { useEffect, useRef, useState } from 'react';

/**
 * useInfiniteFill
 * - Renders items progressively until the bottom sentinel leaves the viewport
 * - Also supports traditional infinite scroll when user scrolls down
 * - Designed to "fill the gap" below a grid/list without heavy initial loads
 */
export function useInfiniteFill(totalItems: number, initial = 6, step = 6) {
  const [visible, setVisible] = useState(Math.min(initial, totalItems));
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const hasMore = visible < totalItems;

  // Adjust visible when total changes (e.g., after data fetch)
  useEffect(() => {
    setVisible((prev) => Math.min(totalItems, Math.max(prev, initial)));
  }, [totalItems, initial]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMore) {
          // Increment by step, capped at totalItems
          setVisible((prev) => Math.min(prev + step, totalItems));
        }
      },
      {
        // Trigger a bit before entering the viewport to keep it smooth
        root: null,
        rootMargin: '200px 0px 200px 0px',
        threshold: 0,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, step, totalItems]);

  return { visible, hasMore, sentinelRef, setVisible } as const;
}
