'use client';

import React, { useEffect, useState } from 'react';
import { Lock } from 'lucide-react';

export default function StudyLock() {
  const [isLocked, setIsLocked] = useState(true);

  // In a real app, you would check if they finished their daily goal here
  // For demo purposes, we will keep it locked. You can unlock it by answering questions.
  
  useEffect(() => {
    if (!isLocked) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "Bugungi 20 ta savolni ishlashni tugatmadingiz! Ishonchingiz komilmi?";
      return e.returnValue;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isLocked]);

  if (!isLocked) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
      backgroundColor: '#ef4444',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '999px',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontWeight: 700,
      boxShadow: '0 10px 25px -5px rgba(239, 68, 68, 0.5)',
      zIndex: 9999,
      animation: 'pulse-red 2s infinite'
    }}>
      <Lock size={18} />
      <span>Bugungi dars bajarilmadi!</span>
      <style jsx>{`
        @keyframes pulse-red {
          0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
          100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
      `}</style>
    </div>
  );
}
