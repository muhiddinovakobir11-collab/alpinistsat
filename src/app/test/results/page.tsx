'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Target, ArrowRight, BookOpen, Calculator } from 'lucide-react';

interface TestResults {
  totalReading: number;
  correctReading: number;
  totalMath: number;
  correctMath: number;
  answers: Record<string, string>;
}

export default function ResultsPage() {
  const [results, setResults] = useState<TestResults | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('testResults');
    if (data) {
      setResults(JSON.parse(data));
    }
  }, []);

  if (!results) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', gap: '1rem', backgroundColor: '#f8fafc' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#0f172a' }}>Loading your SAT results...</h2>
        <Link href="/dashboard" className="hover-scale" style={{ padding: '12px 24px', backgroundColor: '#3b82f6', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Go to Dashboard</Link>
      </div>
    );
  }

  // Albert.io style linear scaling (Simplified curve: 200 min, 800 max per section)
  const calculateScaledScore = (correct: number, total: number) => {
    if (total === 0) return 200; // Fallback
    const percentage = correct / total;
    // Base 200 + (percentage * 600), rounded to nearest 10
    const rawScaled = 200 + (percentage * 600);
    return Math.round(rawScaled / 10) * 10;
  };

  const readingScore = calculateScaledScore(results.correctReading, results.totalReading);
  const mathScore = calculateScaledScore(results.correctMath, results.totalMath);
  const totalScore = readingScore + mathScore;

  return (
    <div className="fade-in" style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Target size={56} color="#2563eb" style={{ margin: '0 auto 1.5rem' }} className="pulse-anim" />
          <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.5rem', color: '#0f172a', letterSpacing: '-0.025em' }}>Full Mock Test Completed!</h1>
          <p style={{ color: '#64748b', fontSize: '1.25rem' }}>Here is your estimated Digital SAT score report based on Albert.io curve logic.</p>
        </div>

        {/* Total Score Card */}
        <div className="hover-scale" style={{ textAlign: 'center', padding: '4rem', backgroundColor: '#fff', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Score</h3>
          <div style={{ fontSize: '6rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.05em', lineHeight: 1 }}>{totalScore}</div>
          <p style={{ color: '#94a3b8', marginTop: '0.5rem', fontWeight: 600 }}>out of 1600</p>
        </div>

        {/* Section Scores */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
          
          {/* Reading & Writing */}
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '20px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#3b82f6' }}>
              <BookOpen size={24} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>Reading & Writing</h4>
            </div>
            <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#0f172a' }}>{readingScore} <span style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: 600 }}>/ 800</span></div>
            <div style={{ padding: '1rem', backgroundColor: '#f1f5f9', borderRadius: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#64748b', fontWeight: 600 }}>Correct</span>
                <span style={{ color: '#166534', fontWeight: 700 }}>{results.correctReading} / {results.totalReading}</span>
              </div>
              <div style={{ width: '100%', backgroundColor: '#e2e8f0', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${(results.correctReading / results.totalReading) * 100}%`, backgroundColor: '#10b981', height: '100%' }}></div>
              </div>
            </div>
          </div>

          {/* Math */}
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '20px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#eab308' }}>
              <Calculator size={24} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>Math</h4>
            </div>
            <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#0f172a' }}>{mathScore} <span style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: 600 }}>/ 800</span></div>
            <div style={{ padding: '1rem', backgroundColor: '#f1f5f9', borderRadius: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#64748b', fontWeight: 600 }}>Correct</span>
                <span style={{ color: '#166534', fontWeight: 700 }}>{results.correctMath} / {results.totalMath}</span>
              </div>
              <div style={{ width: '100%', backgroundColor: '#e2e8f0', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${(results.correctMath / results.totalMath) * 100}%`, backgroundColor: '#10b981', height: '100%' }}></div>
              </div>
            </div>
          </div>

        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button onClick={() => setShowCertificate(true)} className="hover-scale" style={{ padding: '16px 40px', fontSize: '1.25rem', backgroundColor: '#eab308', color: '#0f172a', borderRadius: '12px', border: 'none', cursor: 'pointer', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            Get SAT Certificate 🏆
          </button>
          <Link href="/dashboard" className="hover-scale" style={{ padding: '16px 40px', fontSize: '1.25rem', backgroundColor: '#0f172a', color: '#fff', borderRadius: '12px', textDecoration: 'none', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            Return to Dashboard <ArrowRight size={20} />
          </Link>
        </div>

      </div>

      {/* Fake Certificate Modal */}
      {showCertificate && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ backgroundColor: '#fff', width: '100%', maxWidth: '800px', borderRadius: '8px', padding: '3rem', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', overflow: 'hidden' }}>
            
            {/* Watermark */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-45deg)', fontSize: '6rem', color: 'rgba(0,0,0,0.03)', whiteSpace: 'nowrap', fontWeight: 900, pointerEvents: 'none' }}>
              ALPINIST SAT MOCK
            </div>
            <div style={{ position: 'absolute', top: 0, right: 0, backgroundColor: '#ef4444', color: '#fff', padding: '4px 30px', transform: 'rotate(45deg) translate(30px, -20px)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              UNOFFICIAL
            </div>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '3px solid #0f172a', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', margin: 0, letterSpacing: '-1px' }}>SAT® Score Report</h2>
                <p style={{ color: '#64748b', fontSize: '1.125rem', margin: 0 }}>Alpinist Practice Edition</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 600, margin: '0 0 0.5rem 0' }}>Test Date: <span style={{ color: '#0f172a' }}>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span></p>
                <p style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 600, margin: 0 }}>Registration: <span style={{ color: '#0f172a' }}>000000000</span></p>
              </div>
            </div>

            {/* Student Info */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem 0' }}>Jane Doe</h3>
              <p style={{ color: '#64748b', margin: 0 }}>High School: Unknown High School</p>
            </div>

            {/* Scores */}
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
              <div style={{ flex: 1, backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Total Score</h4>
                <div style={{ fontSize: '4.5rem', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>{totalScore}</div>
                <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginTop: '0.5rem' }}>400 to 1600</p>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontWeight: 700, color: '#0f172a' }}>Reading & Writing</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#3b82f6' }}>{readingScore}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontWeight: 700, color: '#0f172a' }}>Math</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#eab308' }}>{mathScore}</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div style={{ textAlign: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                SAT® is a trademark registered by the College Board, which is not affiliated with, and does not endorse, this product.<br/>
                This is a mock certificate generated by Alpinist SAT for practice purposes only.
              </p>
              <button onClick={() => setShowCertificate(false)} style={{ marginTop: '1rem', padding: '8px 24px', backgroundColor: '#0f172a', color: '#fff', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
                Close
              </button>
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
}
