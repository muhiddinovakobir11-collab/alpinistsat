import { Layers } from 'lucide-react';

export default function ClassesPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh', textAlign: 'center' }}>
      <div style={{ width: '64px', height: '64px', backgroundColor: '#f1f5f9', color: '#64748b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <Layers size={32} />
      </div>
      <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '1rem' }}>My Classes</h1>
      <p style={{ color: 'var(--muted-foreground)', maxWidth: '400px' }}>
        You are not currently enrolled in any live classes. Visit the store to enroll in upcoming sessions.
      </p>
    </div>
  );
}
