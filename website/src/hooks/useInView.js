'use client';

import { useState, useEffect, useRef } from 'react';

export function useInView(options = {}) {
  const { triggerOnce = false, threshold = 0 } = options;
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        if (triggerOnce) observer.disconnect();
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [triggerOnce, threshold]);

  return { ref, inView };
}
