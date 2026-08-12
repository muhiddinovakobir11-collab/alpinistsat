'use client';

import { Lock, Brain, Target, Calendar, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { usePro } from '@/context/ProContext';

export default function StudyPlanPage() {
  const { isPro } = usePro();

  if (!isPro) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
        <div className="fade-in" style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '3rem', width: '100%', maxWidth: '450px', textAlign: 'center', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ width: '64px', height: '64px', backgroundColor: '#0f172a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <Lock size={28} color="#fff" />
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>AI Study Plan is a Pro Feature</h1>
          <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.5 }}>
            Upgrade to Pro to unlock personalized AI study plans and get access to all premium features.
          </p>
          <Link href="/dashboard/checkout" style={{ display: 'block', textDecoration: 'none', marginBottom: '1rem' }}>
            <div style={{ padding: '14px', borderRadius: '8px', background: 'linear-gradient(90deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)', color: 'white', fontWeight: 700, fontSize: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ backgroundColor: '#0f172a', width: '100%', padding: '10px', borderRadius: '6px' }}>Upgrade to Pro</div>
            </div>
          </Link>
          <Link href="/dashboard" style={{ color: '#0f172a', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Brain color="#3b82f6" /> AI Study Plan
          </h1>
          <p style={{ color: '#64748b' }}>Your personalized, adaptive roadmap to 1500+.</p>
        </div>
        <div style={{ padding: '0.5rem 1rem', backgroundColor: '#eff6ff', color: '#1d4ed8', borderRadius: '8px', fontWeight: 700, fontSize: '0.875rem' }}>
          August Target
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        
        {/* Today's Plan */}
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={20} /> Today's Focus
          </h2>
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
            
            <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', display: 'flex', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#fee2e2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>1</div>
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>Heart of Algebra (Math)</h4>
                <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1rem' }}>Based on your last mock test, you need to improve on linear equations.</p>
                <button style={{ backgroundColor: '#0f172a', color: '#fff', border: 'none', padding: '0.5rem 1.5rem', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>Start 20 Questions</button>
              </div>
            </div>

            <div style={{ padding: '1.5rem', display: 'flex', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>2</div>
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>Words in Context (Reading)</h4>
                <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1rem' }}>Review high-frequency vocabulary for 15 minutes.</p>
                <button style={{ backgroundColor: '#0f172a', color: '#fff', border: 'none', padding: '0.5rem 1.5rem', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>Open Vocab Trainer</button>
              </div>
            </div>

          </div>
        </div>

        {/* AI Recommendations */}
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Target size={20} /> AI Insights
          </h2>
          <div style={{ backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <CheckCircle2 size={24} color="#10b981" />
              <div>
                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9rem' }}>Strength Identified</div>
                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>Advanced Math is your strongest area.</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <div style={{ color: '#f59e0b' }}><Target size={24} /></div>
              <div>
                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9rem' }}>Target Area</div>
                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>Focus on Information & Ideas in Reading to boost your score by ~40 points.</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
