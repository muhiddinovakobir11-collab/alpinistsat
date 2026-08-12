'use client';

import { useState } from 'react';
import { ShieldCheck, CreditCard, CheckCircle2, ArrowRight } from 'lucide-react';
import { usePro } from '@/context/ProContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CheckoutPage() {
  const { isPro, upgradeToPro } = usePro();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCheckout = () => {
    setLoading(true);
    // Simulate Stripe API call
    setTimeout(() => {
      upgradeToPro();
      setLoading(false);
      router.push('/dashboard');
    }, 2000);
  };

  if (isPro) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <CheckCircle2 size={64} color="#10b981" style={{ marginBottom: '1rem' }} />
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a' }}>You are already PRO!</h1>
        <p style={{ color: '#64748b', fontSize: '1.25rem', marginBottom: '2rem' }}>You have full access to all premium features.</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/dashboard" className="btn btn-primary" style={{ padding: '1rem 3rem', borderRadius: '30px', fontSize: '1.125rem' }}>
            Go to Dashboard
          </Link>
          <button onClick={() => window.print()} style={{ padding: '1rem 2rem', borderRadius: '30px', fontSize: '1.125rem', backgroundColor: '#f1f5f9', color: '#0f172a', border: '1px solid #cbd5e1', cursor: 'pointer', fontWeight: 600 }}>
            Download Receipt (PDF)
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.025em' }}>Upgrade to PRO</h1>
        <p style={{ color: '#64748b', fontSize: '1.125rem' }}>Unlock the ultimate SAT preparation experience.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', backgroundColor: '#fff', padding: '2rem', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)' }}>
        
        {/* Order Summary */}
        <div style={{ borderRight: '1px solid #e2e8f0', paddingRight: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0f172a' }}>Order Summary</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9' }}>
            <span style={{ fontWeight: 600 }}>Pro Plan (Monthly)</span>
            <span style={{ fontWeight: 800 }}>$29.00</span>
          </div>
          
          <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#10b981" /> Unlimited Full Mock Tests</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#10b981" /> Multimodal AI Tutor (Image Uploads)</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#10b981" /> Personalized AI Analysis</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#10b981" /> Voice-to-Text Vocabulary</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#10b981" /> Multiplayer Duels (Coming Soon)</li>
          </ul>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '1rem', borderTop: '2px dashed #e2e8f0', fontSize: '1.25rem' }}>
            <span style={{ fontWeight: 700 }}>Total</span>
            <span style={{ fontWeight: 900, color: '#2563eb' }}>$29.00</span>
          </div>
        </div>

        {/* Payment Mock */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CreditCard size={20} /> Payment Details
            </h3>
            
            <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>Card Number</div>
              <div style={{ fontFamily: 'monospace', fontSize: '1.125rem', letterSpacing: '2px', color: '#0f172a', marginBottom: '1rem' }}>**** **** **** 4242</div>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Expiry</div>
                  <div style={{ fontWeight: 600, color: '#0f172a' }}>12/28</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>CVC</div>
                  <div style={{ fontWeight: 600, color: '#0f172a' }}>***</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#64748b', justifyContent: 'center' }}>
              <ShieldCheck size={14} color="#10b981" /> Secure encrypted payment (Mock Mode)
            </div>
          </div>

          <button 
            onClick={handleCheckout}
            disabled={loading}
            className="hover-scale"
            style={{ 
              width: '100%', 
              padding: '1.25rem', 
              borderRadius: '12px', 
              backgroundColor: loading ? '#94a3b8' : '#0f172a', 
              color: '#fff', 
              border: 'none', 
              fontSize: '1.125rem', 
              fontWeight: 800, 
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '2rem'
            }}
          >
            {loading ? <span>Processing...</span> : (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>Pay $29.00</span> <ArrowRight size={20} /></span>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
