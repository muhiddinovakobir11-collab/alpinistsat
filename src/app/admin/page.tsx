import { Users, FileText, Activity, CreditCard } from 'lucide-react';

export default function AdminOverviewPage() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem' }}>Dashboard Overview</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#64748b' }}>
            <Users size={20} /> <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Total Students</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>1,248</div>
          <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600, marginTop: '0.5rem' }}>+12% this month</div>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#64748b' }}>
            <FileText size={20} /> <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Question Bank</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>3,714</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, marginTop: '0.5rem' }}>Active questions</div>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#64748b' }}>
            <Activity size={20} /> <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Active Tests</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>42</div>
          <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600, marginTop: '0.5rem' }}>Currently online</div>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#64748b' }}>
            <CreditCard size={20} /> <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Pro Users</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>156</div>
          <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600, marginTop: '0.5rem' }}>$1,560 MRR</div>
        </div>
      </div>

      <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '2rem', border: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Welcome to the Admin Dashboard</h2>
        <p style={{ color: '#64748b', lineHeight: 1.6 }}>
          Use the sidebar to navigate through the administration tools. You can generate new tests automatically from PDFs using the <strong>AI Generator</strong>, manage user feedback in <strong>Support Tickets</strong>, and configure your monetization plans under <strong>Pricing</strong>.
        </p>
      </div>
    </div>
  );
}
