'use client';

import { useState, useEffect } from 'react';
import { CreditCard, Save } from 'lucide-react';
import { updatePricing } from './actions';

export default function PricingAdminPage() {
  const [plans, setPlans] = useState<any[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    import('@/data/pricing.json').then((data) => {
      setPlans(data.default || data);
    }).catch(e => {
      console.log('No pricing data yet');
    });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    const formData = new FormData(e.target as HTMLFormElement);
    await updatePricing(formData);
    setIsSaving(false);
    alert('Pricing updated successfully!');
  };

  if (plans.length === 0) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <CreditCard size={28} color="#0f172a" />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a' }}>Manage Subscription Plans</h2>
        </div>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>Configure the pricing and features for your users. Changes will immediately reflect on the Upgrade (Checkout) page.</p>
        
        <form onSubmit={handleSave}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            
            {/* Plan 1 */}
            <div style={{ border: '1px solid #e2e8f0', padding: '1.5rem', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem' }}>Plan 1</h3>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Plan Name</label>
                <input name="plan1_name" type="text" defaultValue={plans[0].name} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Price ($ USD)</label>
                <input name="plan1_price" type="number" defaultValue={plans[0].price} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Features (comma separated)</label>
                <textarea name="plan1_features" rows={3} defaultValue={plans[0].features.join(', ')} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
              </div>
            </div>

            {/* Plan 2 */}
            <div style={{ border: '1px solid #e2e8f0', padding: '1.5rem', borderRadius: '12px', backgroundColor: '#f8fafc' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem' }}>Plan 2 (Pro)</h3>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Plan Name</label>
                <input name="plan2_name" type="text" defaultValue={plans[1].name} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Price ($ USD)</label>
                <input name="plan2_price" type="number" defaultValue={plans[1].price} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Features (comma separated)</label>
                <textarea name="plan2_features" rows={3} defaultValue={plans[1].features.join(', ')} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
              </div>
            </div>

          </div>
          
          <button type="submit" disabled={isSaving} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '12px 24px', backgroundColor: '#0f172a', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: isSaving ? 'not-allowed' : 'pointer' }}>
            <Save size={18} /> {isSaving ? 'Saving...' : 'Save Pricing'}
          </button>
        </form>
      </div>
    </div>
  );
}
