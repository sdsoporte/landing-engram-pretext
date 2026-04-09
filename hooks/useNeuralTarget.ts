'use client';

import { useEffect, useRef, useMemo } from 'react';
import { MotionValue } from 'framer-motion';
import { registerNeuralTarget, updateNeuralTarget, unregisterNeuralTarget, getNeuralTargetMotion } from '@/lib/neural-targets';

export function useNeuralTarget<T extends HTMLElement = HTMLElement>(
  id: string,
  range = 220
): [React.RefObject<T | null>, MotionValue<number>] {
  const ref = useRef<T>(null);
  const fallbackMotion = useMemo(() => new MotionValue(1000), []);

  useEffect(() => {
    if (!ref.current) return;
    registerNeuralTarget(id, ref.current, range);

    const handle = () => {
      if (ref.current) updateNeuralTarget(id, ref.current);
    };

    window.addEventListener('resize', handle);
    window.addEventListener('scroll', handle, { passive: true });

    return () => {
      window.removeEventListener('resize', handle);
      window.removeEventListener('scroll', handle);
      unregisterNeuralTarget(id);
    };
  }, [id, range]);

  const motionValue = useMemo(() => {
    if (typeof window === 'undefined') return fallbackMotion;
    return getNeuralTargetMotion(id) ?? fallbackMotion;
  }, [id, fallbackMotion]);

  return [ref, motionValue];
}
