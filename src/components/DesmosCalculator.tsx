'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function DesmosCalculator() {
  const calculatorRef = useRef<HTMLDivElement>(null);
  const calcInstance = useRef<any>(null);

  useEffect(() => {
    // Wait for the script to load
    const initCalc = () => {
      if (window.Desmos && calculatorRef.current && !calcInstance.current) {
        calcInstance.current = window.Desmos.GraphingCalculator(calculatorRef.current, {
          keypad: true,
          expressions: true,
          settingsMenu: false,
          zoomButtons: true,
        });
      }
    };

    // Check if already loaded
    if (window.Desmos) {
      initCalc();
    } else {
      // Add event listener in case it loads later
      window.addEventListener('load', initCalc);
    }

    return () => {
      window.removeEventListener('load', initCalc);
      if (calcInstance.current) {
        calcInstance.current.destroy();
        calcInstance.current = null;
      }
    };
  }, []);

  return (
    <>
      <Script src="https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6" strategy="lazyOnload" />
      <div 
        ref={calculatorRef} 
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '0 0 8px 8px' }} 
      />
    </>
  );
}
