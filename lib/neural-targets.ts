import { MotionValue } from 'framer-motion';

export interface NeuralTarget {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  range: number;
}

const targetMap = new Map<string, NeuralTarget>();
const motionMap = new Map<string, MotionValue<number>>();

export function registerNeuralTarget(id: string, element: HTMLElement, range = 220): MotionValue<number> {
  updateNeuralTarget(id, element);
  const t = targetMap.get(id)!;
  t.range = range;
  if (!motionMap.has(id)) motionMap.set(id, new MotionValue(1000));
  return motionMap.get(id)!;
}

export function updateNeuralTarget(id: string, element: HTMLElement) {
  if (!targetMap.has(id)) targetMap.set(id, { id, x: 0, y: 0, width: 0, height: 0, range: 220 });
  const rect = element.getBoundingClientRect();
  const t = targetMap.get(id)!;
  t.x = rect.left + rect.width / 2;
  t.y = rect.top + rect.height / 2;
  t.width = rect.width;
  t.height = rect.height;
}

export function unregisterNeuralTarget(id: string) {
  targetMap.delete(id);
  motionMap.delete(id);
}

export function getNeuralTargets(): NeuralTarget[] {
  return Array.from(targetMap.values());
}

export function setNeuralTargetDistance(id: string, distance: number) {
  motionMap.get(id)?.set(distance);
}

export function getNeuralTargetMotion(id: string): MotionValue<number> | undefined {
  return motionMap.get(id);
}
