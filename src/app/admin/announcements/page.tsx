'use client';

import { useState } from 'react';
import { Megaphone, Plus, Trash2, Send } from 'lucide-react';

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<{ id: number, title: string, message: string, type: string, date: string }[]>([]);

  const [isCreating, setIsCreating] = useState(false);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ backgroundColor: '#fff7ed', padding: '12px', borderRadius: '12px', color: '#ea580c' }}>
            <Megaphone size={28} />
          </div>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>Global Announcements</h1>
            <p style={{ color: '#64748b' }}>Push notifications and banners to all active students.</p>
          </div>
        </div>
        {!isCreating && (
          <button 
            onClick={() => setIsCreating(true)}
            className="btn btn-primary" 
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem' }}
          >
            <Plus size={18} /> New Announcement
          </button>
        )}
      </div>

      {isCreating && (
        <div className="fade-in" style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '2rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0f172a' }}>Create New Announcement</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Announcement Title</label>
              <input type="text" placeholder="e.g. Scheduled Maintenance" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Message Content</label>
              <textarea rows={4} placeholder="Type the message that will be shown to students..." style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', resize: 'vertical' }}></textarea>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Announcement Type</label>
              <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', backgroundColor: '#fff' }}>
                <option value="Info">Info (Blue)</option>
                <option value="Success">Success (Green)</option>
                <option value="Warning">Warning (Orange)</option>
                <option value="Urgent">Urgent (Red)</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button 
                onClick={() => setIsCreating(false)}
                className="btn btn-primary" 
                style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
              >
                <Send size={18} /> Publish Now
              </button>
              <button 
                onClick={() => setIsCreating(false)}
                className="btn" 
                style={{ flex: 1, backgroundColor: '#f1f5f9', color: '#0f172a' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>Active & Past Announcements</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {announcements.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#94a3b8', padding: '3rem 0', backgroundColor: '#fff', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
            No announcements published yet. Click "New Announcement" to create one.
          </div>
        ) : (
          announcements.map((a) => (
            <div key={a.id} style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ 
                    backgroundColor: a.type === 'Warning' ? '#ffedd5' : '#dcfce7', 
                    color: a.type === 'Warning' ? '#ea580c' : '#16a34a', 
                    padding: '4px 10px', 
                    borderRadius: '20px', 
                    fontSize: '0.75rem', 
                    fontWeight: 700 
                  }}>
                    {a.type}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>{a.date}</span>
                </div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>{a.title}</h4>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{a.message}</p>
              </div>
              <button style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', borderRadius: '8px' }}>
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
