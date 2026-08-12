'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProContextType {
  isPro: boolean;
  upgradeToPro: () => void;
}

const ProContext = createContext<ProContextType | undefined>(undefined);

export function ProProvider({ children }: { children: React.ReactNode }) {
  const [isPro, setIsPro] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedStatus = localStorage.getItem('alpinist_pro_status');
    if (storedStatus === 'true') {
      setIsPro(true);
    }
  }, []);

  const upgradeToPro = () => {
    setIsPro(true);
    localStorage.setItem('alpinist_pro_status', 'true');
  };

  // Removed early return to ensure Provider always wraps children

  return (
    <ProContext.Provider value={{ isPro, upgradeToPro }}>
      {children}
    </ProContext.Provider>
  );
}

export function usePro() {
  const context = useContext(ProContext);
  if (context === undefined) {
    throw new Error('usePro must be used within a ProProvider');
  }
  return context;
}
