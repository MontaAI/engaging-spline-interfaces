import React, { createContext, useContext, useState, useEffect } from 'react';

interface CursorContextType {
  cursorPosition: { x: number; y: number };
}

const CursorContext = createContext<CursorContextType>({
  cursorPosition: { x: 0, y: 0 },
});

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <CursorContext.Provider value={{ cursorPosition }}>
      {children}
    </CursorContext.Provider>
  );
}

export const useCursor = () => useContext(CursorContext);
