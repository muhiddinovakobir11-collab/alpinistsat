import { Trophy, Swords, Clock, Users, PlayCircle, Settings, Crown } from 'lucide-react';

export default function TournamentsPage() {
  const activeMatches: { id: string, p1: string, p2: string, score1: number, score2: number, timeLeft: string, status: string }[] = [];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ backgroundColor: '#fef08a', padding: '12px', borderRadius: '12px', color: '#a16207' }}>
            <Trophy size={28} />
          </div>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>1v1 Tournaments (Duels)</h1>
            <p style={{ color: '#64748b' }}>Manage real-time math and reading challenges between students.</p>
          </div>
        </div>
        <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', backgroundColor: '#0f172a' }}>
          <Settings size={18} /> Tournament Settings
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#eff6ff', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Swords size={24} />
          </div>
          <div>
            <div style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: 600 }}>Active Matches</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>0</div>
          </div>
        </div>
        
        <div style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#f3e8ff', color: '#a855f7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Users size={24} />
          </div>
          <div>
            <div style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: 600 }}>Players Online</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>0</div>
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#fef08a', color: '#a16207', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Crown size={24} />
          </div>
          <div>
            <div style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: 600 }}>Total Matches Played</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>0</div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <PlayCircle size={20} color="#ef4444" /> Live Matches
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {activeMatches.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#94a3b8', padding: '3rem 0', gridColumn: '1 / -1' }}>
              No matches are currently active.
            </div>
          ) : (
            activeMatches.map((match) => (
              <div key={match.id} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', backgroundColor: match.status === 'Live' ? '#f8fafc' : '#fff' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 600 }}>{match.id}</span>
                  <span style={{ 
                    backgroundColor: match.status === 'Live' ? '#fee2e2' : '#f1f5f9', 
                    color: match.status === 'Live' ? '#ef4444' : '#64748b', 
                    padding: '4px 10px', 
                    borderRadius: '20px', 
                    fontSize: '0.75rem', 
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    {match.status === 'Live' && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block', animation: 'pulse 2s infinite' }}></span>}
                    {match.status}
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>{match.p1}</div>
                    <div style={{ fontSize: '2rem', fontWeight: 900, color: match.score1 > match.score2 ? '#10b981' : '#0f172a' }}>{match.score1}</div>
                  </div>
                  
                  <div style={{ padding: '0 1rem', color: '#cbd5e1', fontWeight: 800 }}>VS</div>
                  
                  <div style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>{match.p2}</div>
                    <div style={{ fontSize: '2rem', fontWeight: 900, color: match.score2 > match.score1 ? '#10b981' : '#0f172a' }}>{match.score2}</div>
                  </div>
                </div>

                <div style={{ textAlign: 'center', paddingTop: '1rem', borderTop: '1px dashed #e2e8f0', color: '#64748b', fontSize: '0.875rem', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.25rem' }}>
                  <Clock size={14} /> {match.timeLeft} {match.status === 'Live' ? 'remaining' : ''}
                </div>

              </div>
            ))
          )}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(239, 68, 68, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
      `}} />
    </div>
  );
}
