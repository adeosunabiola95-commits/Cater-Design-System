import { useEffect, useState } from 'react';

/** Subscribes to a CSS media query; defaults false until mounted. */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    const id = requestAnimationFrame(() => onChange());
    mq.addEventListener('change', onChange);
    return () => {
      cancelAnimationFrame(id);
      mq.removeEventListener('change', onChange);
    };
  }, [query]);

  return matches;
}
