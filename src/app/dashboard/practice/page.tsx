import Link from 'next/link';
import { BookOpen, ArrowRight, Lock, BarChart } from 'lucide-react';
import { testsList } from '@/data/testsMetadata';

export default function PracticePage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--foreground)', marginBottom: '0.5rem' }}>Practice Tests (20 Full Mocks)</h1>
        <p style={{ color: 'var(--muted-foreground)' }}>Choose a full-length practice test to begin. The difficulty increases progressively.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {['Easy', 'Medium', 'Hard'].map((difficultyLevel) => (
          <div key={difficultyLevel}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
              <BarChart size={20} color={difficultyLevel === 'Easy' ? '#10b981' : difficultyLevel === 'Medium' ? '#f59e0b' : '#ef4444'} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--foreground)' }}>{difficultyLevel} Mocks</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {testsList.filter(t => t.difficulty === difficultyLevel).map(test => (
                <div key={test.id} className="hover-scale" style={{ 
                  backgroundColor: 'var(--card)', 
                  border: '1px solid var(--border)', 
                  borderRadius: '16px', 
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  opacity: test.isAvailable ? 1 : 0.7,
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {!test.isAvailable && (
                    <div style={{ position: 'absolute', top: 0, right: 0, backgroundColor: '#f1f5f9', padding: '0.25rem 0.75rem', borderBottomLeftRadius: '8px', fontSize: '0.75rem', fontWeight: 600, color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Lock size={12} /> Upcoming
                    </div>
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <BookOpen size={24} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--foreground)' }}>{test.title}</h3>
                      <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>Reading & Math • {test.duration}</p>
                    </div>
                  </div>
                  
                  <p style={{ color: 'var(--foreground)', fontSize: '0.875rem', flex: 1 }}>
                    Experience the real Digital SAT format with an adaptive structure.
                  </p>

                  <Link href={test.isAvailable ? `/test` : '#'} style={{ pointerEvents: test.isAvailable ? 'auto' : 'none', textDecoration: 'none' }}>
                    <button style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      backgroundColor: test.isAvailable ? '#0f172a' : '#cbd5e1', 
                      color: test.isAvailable ? '#fff' : '#64748b', 
                      border: 'none', 
                      borderRadius: '8px', 
                      fontWeight: 600, 
                      cursor: test.isAvailable ? 'pointer' : 'not-allowed',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      {test.isAvailable ? 'Start Test' : 'Locked'}
                      {test.isAvailable ? <ArrowRight size={18} /> : <Lock size={18} />}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
