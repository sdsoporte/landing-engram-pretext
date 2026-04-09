'use client';

import { useEffect, useRef } from 'react';
import { MotionValue } from 'framer-motion';
import { registerNeuralTarget, updateNeuralTarget, unregisterNeuralTarget } from '@/lib/neural-targets';

export function useNeuralTarget(id: string, range = 220): [React.RefObject<HTMLElement | null>, MotionValue<number>] {
  const ref = useRef<HTMLElement>(null);
  const motionRef = useRef<MotionValue<number> | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    motionRef.current = registerNeuralTarget(id, ref.current, range);

    const handle = () => {
      if (ref.current) updateNeuralTarget(id, ref.current);
    };

    window.addEventListener('resize', handle);
    window.addEventListener('scroll', handle, { passive: true } as EventListenerOptions);
    const interval = setInterval(handle, 500);

    return () => {
      window.removeEventListener('resize', handle);
      window.removeEventListener('scroll', handle);
      clearInterval(interval);
      unregisterNeuralTarget(id);
    };
  }, [id, range]);

  return [ref, motionRef.current ?? new MotionValue(1000)];
}
