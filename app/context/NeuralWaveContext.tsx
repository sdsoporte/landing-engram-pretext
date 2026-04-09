'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface NeuralWaveContextValue {
  waveX: number;
  viewportWidth: number;
  setWavePosition: (x: number, viewport: number) => void;
}

const NeuralWaveContext = createContext<NeuralWaveContextValue>({
  waveX: -9999,
  viewportWidth: 0,
  setWavePosition: () => {},
});

export function NeuralWaveProvider({ children }: { children: ReactNode }) {
  const [waveX, setWaveX] = useState(-9999);
  const [viewportWidth, setViewportWidth] = useState(0);

  const setWavePosition = (x: number, viewport: number) => {
    setWaveX(x);
    setViewportWidth(viewport);
  };

  return (
    <NeuralWaveContext.Provider value={{ waveX, viewportWidth, setWavePosition }}>
      {children}
    </NeuralWaveContext.Provider>
  );
}

export function useNeuralWave() {
  return useContext(NeuralWaveContext);
}
