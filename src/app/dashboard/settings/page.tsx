import { Settings, User, Bell, Shield, CreditCard, Moon } from 'lucide-react';
import { UserProfile } from '@clerk/nextjs';

export default function SettingsPage() {
  return (
    <div className="fade-in" style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
      
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Settings color="#3b82f6" /> Settings
        </h1>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>Manage your account preferences and subscription.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem' }}>
        
        {/* Sidebar Nav */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', borderRadius: '8px', backgroundColor: '#eff6ff', color: '#1d4ed8', fontWeight: 600, border: 'none', cursor: 'pointer', textAlign: 'left' }}>
            <User size={18} /> Account Profile
          </button>
          <button className="hover-scale" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', borderRadius: '8px', backgroundColor: 'transparent', color: '#64748b', fontWeight: 500, border: 'none', cursor: 'pointer', textAlign: 'left' }}>
            <Bell size={18} /> Notifications
          </button>
          <button className="hover-scale" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', borderRadius: '8px', backgroundColor: 'transparent', color: '#64748b', fontWeight: 500, border: 'none', cursor: 'pointer', textAlign: 'left' }}>
            <Moon size={18} /> Appearance
          </button>
          <button className="hover-scale" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', borderRadius: '8px', backgroundColor: 'transparent', color: '#64748b', fontWeight: 500, border: 'none', cursor: 'pointer', textAlign: 'left' }}>
            <CreditCard size={18} /> Billing & Plan
          </button>
          <button className="hover-scale" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', borderRadius: '8px', backgroundColor: 'transparent', color: '#64748b', fontWeight: 500, border: 'none', cursor: 'pointer', textAlign: 'left' }}>
            <Shield size={18} /> Security
          </button>
        </div>

        {/* Content Area */}
        <div style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
            Profile Settings
          </h2>
          
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Update your personal details and target scores here.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Target SAT Score</label>
                <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}>
                  <option>1600 (Perfect Score)</option>
                  <option>1500+</option>
                  <option>1400+</option>
                  <option>1300+</option>
                  <option>Below 1300</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Target Test Date</label>
                <input type="date" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
              </div>

              <button className="hover-scale" style={{ alignSelf: 'flex-start', padding: '0.75rem 2rem', backgroundColor: '#0f172a', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
                Save Preferences
              </button>
            </div>
          </div>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '3rem 0 1.5rem 0', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
            Clerk Account Identity
          </h2>
          
          {/* Clerk component handles password, email, and 2FA */}
          <div style={{ margin: '0 -1rem' }}>
            <UserProfile routing="hash" appearance={{ elements: { rootBox: { width: '100%' }, card: { boxShadow: 'none', border: 'none', width: '100%' } } }} />
          </div>

        </div>
      </div>
    </div>
  );
}
