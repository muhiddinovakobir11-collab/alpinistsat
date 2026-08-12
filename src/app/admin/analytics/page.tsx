import { BarChart3, TrendingDown, Target, AlertTriangle, BookOpen, PenTool } from 'lucide-react';

export default function AnalyticsHeatmapsPage() {
  const topics: { name: string, type: string, failureRate: number, totalAttempts: number }[] = [];

  const worstQuestions: { id: string, topic: string, successRate: string, avgTime: string }[] = [];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ backgroundColor: '#eff6ff', padding: '12px', borderRadius: '12px', color: '#3b82f6' }}>
          <BarChart3 size={28} />
        </div>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>Analytics & Heatmaps</h1>
          <p style={{ color: '#64748b' }}>Discover where students are struggling the most across the platform.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        
        {/* Most Failed Topics */}
        <div style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TrendingDown color="#ef4444" size={20} /> Most Failed Topics (Last 30 Days)
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {topics.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#94a3b8', padding: '2rem 0' }}>No topic data available yet.</div>
            ) : (
              topics.map((topic, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontWeight: 600, color: '#0f172a' }}>{topic.name}</span>
                      <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '12px', backgroundColor: topic.type === 'Math' ? '#e0e7ff' : '#fce7f3', color: topic.type === 'Math' ? '#4f46e5' : '#db2777', fontWeight: 600 }}>{topic.type}</span>
                    </div>
                    <span style={{ fontWeight: 700, color: '#ef4444' }}>{topic.failureRate}% Fail</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${topic.failureRate}%`, height: '100%', backgroundColor: '#ef4444', borderRadius: '4px' }}></div>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>Based on {topic.totalAttempts.toLocaleString()} attempts</div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Worst Performing Questions */}
        <div style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertTriangle color="#f59e0b" size={20} /> Hall of Shame (Questions)
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {worstQuestions.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#94a3b8', padding: '2rem 0' }}>No question data available yet.</div>
            ) : (
              worstQuestions.map((q, i) => (
                <div key={i} style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '12px', backgroundColor: '#f8fafc' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 800, color: '#0f172a' }}>{q.id}</span>
                    <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#10b981', backgroundColor: '#dcfce7', padding: '2px 8px', borderRadius: '12px' }}>{q.successRate} Success</span>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>{q.topic}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Avg Time: {q.avgTime}</span>
                    <button style={{ fontSize: '0.75rem', color: '#3b82f6', background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Review Question</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
