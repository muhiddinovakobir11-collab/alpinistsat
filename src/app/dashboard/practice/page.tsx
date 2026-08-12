import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function PracticePage() {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>Practice Tests</h1>
        <p style={{ color: 'var(--muted-foreground)' }}>Choose a full-length practice test or targeted section to begin.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '48px', height: '48px', backgroundColor: '#eff6ff', color: '#2563eb', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BookOpen size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Full-Length Test 1</h3>
              <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>Reading & Math • 2 hrs 14 mins</p>
            </div>
          </div>
          <p style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)' }}>
            Experience the real Digital SAT format with a full-length practice test.
          </p>
          <Link href="/test" className="btn btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Start Test <ArrowRight size={18} />
          </Link>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '48px', height: '48px', backgroundColor: '#fdf4ff', color: '#c026d3', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BookOpen size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Full-Length Test 2</h3>
              <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>Reading & Math • 2 hrs 14 mins</p>
            </div>
          </div>
          <p style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)' }}>
            Challenge yourself with our second adaptive practice test.
          </p>
          <button className="btn btn-outline" style={{ width: '100%', cursor: 'not-allowed', opacity: 0.5 }}>
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
}
