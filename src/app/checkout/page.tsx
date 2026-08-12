'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CreditCard, Check, ArrowLeft, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const [plans, setPlans] = useState<any[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    import('@/data/pricing.json').then((data) => {
      const p = data.default || data;
      setPlans(p);
      setSelectedPlan(p[1]); // Default to Pro
    }).catch(e => {
      console.log('No pricing data yet');
    });
  }, []);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment Successful! (Test Mode)');
      router.push('/dashboard');
    }, 2500);
  };

  if (!selectedPlan) return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Stripe Checkout...</div>;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex' }}>
      
      {/* Left side - Product Details */}
      <div style={{ flex: 1, backgroundColor: '#fff', padding: '4rem', display: 'flex', flexDirection: 'column', borderRight: '1px solid #e2e8f0' }}>
        <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', textDecoration: 'none', fontWeight: 600, marginBottom: '4rem' }}>
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em', marginBottom: '1rem' }}>ALPINIST SAT PREP</div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Subscribe to {selectedPlan.name}</h1>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#0f172a', marginBottom: '2rem' }}>
            ${selectedPlan.price}<span style={{ fontSize: '1.25rem', color: '#64748b', fontWeight: 600 }}>/month</span>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>What's included</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {selectedPlan.features.map((f: string, i: number) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: '#334155', fontWeight: 500 }}>
                  <Check size={18} color="#10b981" /> {f}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '1rem', color: '#64748b' }}>CHANGE PLAN</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {plans.map((p) => (
                <button 
                  key={p.id}
                  onClick={() => setSelectedPlan(p)}
                  style={{ 
                    padding: '10px 16px', 
                    border: selectedPlan.id === p.id ? '2px solid #2563eb' : '1px solid #cbd5e1',
                    backgroundColor: selectedPlan.id === p.id ? '#eff6ff' : '#fff',
                    borderRadius: '8px',
                    fontWeight: 600,
                    color: selectedPlan.id === p.id ? '#1d4ed8' : '#64748b',
                    cursor: 'pointer'
                  }}
                >
                  {p.name} - ${p.price}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Payment Form (Mock Stripe) */}
      <div style={{ flex: 1, padding: '4rem', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '450px', width: '100%', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', marginBottom: '2rem', color: '#64748b', fontWeight: 600 }}>
            <Lock size={16} /> Secure Checkout (Test Mode)
          </div>

          <form onSubmit={handlePay} style={{ backgroundColor: '#fff', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Email</label>
              <input type="email" required placeholder="you@example.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }} />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Card Information</label>
              <div style={{ border: '1px solid #cbd5e1', borderRadius: '8px', overflow: 'hidden' }}>
                <div style={{ padding: '12px', borderBottom: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CreditCard size={18} color="#94a3b8" />
                  <input type="text" required placeholder="Card number" defaultValue="4242 4242 4242 4242" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem' }} />
                </div>
                <div style={{ display: 'flex' }}>
                  <input type="text" required placeholder="MM / YY" defaultValue="12/26" style={{ flex: 1, padding: '12px', border: 'none', outline: 'none', fontSize: '1rem', borderRight: '1px solid #cbd5e1' }} />
                  <input type="text" required placeholder="CVC" defaultValue="123" style={{ width: '80px', padding: '12px', border: 'none', outline: 'none', fontSize: '1rem' }} />
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Name on card</label>
              <input type="text" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }} />
            </div>

            <button type="submit" disabled={isProcessing} style={{ width: '100%', padding: '16px', backgroundColor: '#0f172a', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1.125rem', fontWeight: 700, cursor: isProcessing ? 'not-allowed' : 'pointer' }}>
              {isProcessing ? 'Processing...' : `Pay $${selectedPlan.price}`}
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#94a3b8', marginTop: '1rem' }}>
              By confirming your subscription, you allow Alpinist to charge your card for this payment.
            </p>
          </form>

        </div>
      </div>

    </div>
  );
}
