'use client';

import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function MobileMenuToggle({ sidebarId }: { sidebarId: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const sidebar = document.getElementById(sidebarId);
    if (!sidebar) return;

    if (isOpen) {
      sidebar.classList.add('open');
      sidebar.classList.add('mobile-sidebar');
    } else {
      sidebar.classList.remove('open');
      // If we are on desktop, ensure mobile classes don't hide the sidebar
      if (!isMobile) {
        sidebar.classList.remove('mobile-sidebar');
      } else {
        sidebar.classList.add('mobile-sidebar');
      }
    }
  }, [isOpen, isMobile, sidebarId]);

  if (!isMobile) return null;

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          zIndex: 60,
          background: '#fff',
          border: '1px solid #e2e8f0',
          padding: '0.5rem',
          borderRadius: '8px',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isOpen ? <X size={24} color="#0f172a" /> : <Menu size={24} color="#0f172a" />}
      </button>

      {isOpen && (
        <div 
          className="mobile-sidebar-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
