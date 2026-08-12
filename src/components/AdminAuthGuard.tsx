'use client';

import { useState, useEffect } from 'react';
import { Lock, ShieldAlert, KeyRound, ArrowRight } from 'lucide-react';

export default function AdminAuthGuard({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    // Check if they already logged in recently
    const storedAuth = localStorage.getItem('alpinist_admin_auth');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // The super secret admin password
    if (password === 'alpinist2026') {
      localStorage.setItem('alpinist_admin_auth', 'true');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  // While checking local storage, prevent flicker
  if (isAuthenticated === null) return null;

  // If authenticated, render the admin dashboard
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // If not authenticated, render the lock screen
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', backgroundColor: '#0f172a', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, zIndex: 9999 }}>
      
      <div className="fade-in" style={{ width: '100%', maxWidth: '400px', backgroundColor: '#fff', borderRadius: '24px', padding: '3rem 2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', textAlign: 'center' }}>
        
        <div style={{ width: '64px', height: '64px', backgroundColor: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#3b82f6' }}>
          <Lock size={32} />
        </div>
        
        <h1 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.5rem', letterSpacing: '-0.5px' }}>Restricted Area</h1>
        <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '2rem' }}>Please enter the administrator password to access the dashboard.</p>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ position: 'relative' }}>
            <KeyRound size={20} color="#94a3b8" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="password" 
              placeholder="Enter password..."
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              style={{ 
                width: '100%', 
                padding: '1rem 1rem 1rem 3rem', 
                borderRadius: '12px', 
                border: error ? '2px solid #ef4444' : '2px solid #e2e8f0', 
                outline: 'none', 
                backgroundColor: '#f8fafc',
                fontSize: '1rem',
                fontWeight: 600,
                transition: 'border-color 0.2s'
              }} 
            />
          </div>

          {error && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', fontSize: '0.875rem', fontWeight: 600, justifyContent: 'center' }}>
              <ShieldAlert size={16} /> Incorrect password
            </div>
          )}

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ 
              width: '100%', 
              padding: '1rem', 
              borderRadius: '12px', 
              fontSize: '1rem', 
              fontWeight: 700, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '0.5rem',
              backgroundColor: '#0f172a' 
            }}
          >
            Authenticate <ArrowRight size={18} />
          </button>
        </form>

        <div style={{ marginTop: '2rem', fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>
          Alpinist SAT Security System v2.0
        </div>
      </div>
      
    </div>
  );
}
