'use client';

import { useState } from 'react';
import { LifeBuoy, MessageSquarePlus, MessageSquareDashed, X, Send } from 'lucide-react';
import { submitTicket } from './actions';

export default function SupportPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    await submitTicket(formData);
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitted(false);
    }, 2000);
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <LifeBuoy size={48} color="#0f172a" style={{ margin: '0 auto 1rem' }} />
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>My Support Tickets</h1>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>Track your conversations with our support team.</p>
      </div>

      <div style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>Your Tickets</h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '10px 20px', backgroundColor: '#0f172a', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}
          >
            <MessageSquarePlus size={16} /> New Ticket
          </button>
        </div>
        
        <div style={{ padding: '2rem' }}>
          <div style={{ border: '1px dashed #cbd5e1', borderRadius: '12px', padding: '4rem 2rem', textAlign: 'center' }}>
            <MessageSquareDashed size={32} color="#94a3b8" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.25rem' }}>No tickets yet</h3>
            <p style={{ color: '#64748b', fontSize: '0.875rem' }}>When you submit an issue, it will appear here.</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', width: '100%', maxWidth: '600px', padding: '2rem', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
            
            {!submitted ? (
              <>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>!</span>
                  </div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Report an Issue</h2>
                  <p style={{ color: '#64748b', fontSize: '0.875rem' }}>We're here to help! Tell us what's wrong and we'll get it sorted.</p>
                </div>

                <form action={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Your Name</label>
                    <input name="name" type="text" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', fontSize: '0.95rem', outline: 'none' }} required defaultValue="Akobir Muhiddinov" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Your Email</label>
                    <input name="email" type="email" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', fontSize: '0.95rem', outline: 'none' }} required defaultValue="muhiddinovakobir11@gmail.com" />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Type of Issue</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer' }}>
                        <input type="radio" name="type" value="Bug" required /> 🐛 Bug or Technical Glitch
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer' }}>
                        <input type="radio" name="type" value="Billing" /> 💳 Billing Issue
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer' }}>
                        <input type="radio" name="type" value="Feature" /> 💡 Feature Request
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer' }}>
                        <input type="radio" name="type" value="Other" /> ❓ Other
                      </label>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Description</label>
                    <textarea name="description" rows={4} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', fontSize: '0.95rem', outline: 'none' }} placeholder="Please describe the issue in detail..." required></textarea>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <button type="button" onClick={() => setIsModalOpen(false)} style={{ flex: 1, padding: '12px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', fontWeight: 600, color: '#0f172a', cursor: 'pointer' }}>
                      Cancel
                    </button>
                    <button type="submit" disabled={isSubmitting} style={{ flex: 1, padding: '12px', backgroundColor: '#0f172a', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: isSubmitting ? 'not-allowed' : 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                      <Send size={16} /> {isSubmitting ? 'Submitting...' : 'Submit Report'}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: '#dcfce7', color: '#166534', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  ✓
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Report Submitted!</h2>
                <p style={{ color: '#64748b' }}>Thank you for your feedback. Our team will review it shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
