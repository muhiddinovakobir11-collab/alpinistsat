'use client';

import { useState, useEffect } from 'react';
import { Ticket, FileText } from 'lucide-react';

export default function AdminSupportPage() {
  const [tickets, setTickets] = useState<any[]>([]);

  useEffect(() => {
    import('@/data/tickets.json').then((data) => {
      setTickets(data.default || data);
    }).catch(e => {
      console.log('No tickets yet');
    });
  }, []);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <Ticket size={28} color="#eab308" />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a' }}>Support Tickets</h2>
        </div>
        
        {tickets.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {tickets.map((t, i) => (
              <div key={i} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem', backgroundColor: '#f8fafc' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, color: '#0f172a', fontSize: '1.125rem' }}>{t.name}</h4>
                    <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{t.email}</span>
                  </div>
                  <span style={{ padding: '4px 12px', backgroundColor: '#e0e7ff', color: '#3730a3', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600 }}>
                    {t.type}
                  </span>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', color: '#334155', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  "{t.description}"
                </div>
                <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#94a3b8', textAlign: 'right' }}>
                  {new Date(t.date).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem', border: '1px dashed #cbd5e1', borderRadius: '12px' }}>
            <FileText size={32} color="#94a3b8" style={{ margin: '0 auto 1rem' }} />
            <p style={{ color: '#64748b' }}>No support tickets submitted yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
