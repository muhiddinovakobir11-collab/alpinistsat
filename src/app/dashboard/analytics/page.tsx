import { BarChart2, TrendingUp, Clock, CheckCircle, Target } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <BarChart2 size={28} color="#0f172a" />
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>Performance Analytics</h1>
        </div>
        <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Track your SAT preparation progress and identify areas for improvement.</p>
      </div>

      {/* Top Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="card hover-scale">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            <Target size={18} /> Estimated Score
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.25rem' }}>1450</div>
          <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <TrendingUp size={14} /> +40 pts from last week
          </div>
        </div>

        <div className="card hover-scale">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            <CheckCircle size={18} /> Questions Answered
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.25rem' }}>428</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>76% Accuracy</div>
        </div>

        <div className="card hover-scale">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            <Clock size={18} /> Total Study Time
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.25rem' }}>12h 45m</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Across 8 sessions</div>
        </div>
      </div>

      {/* Subject Breakdown & Chart */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        
        {/* Subject Breakdown */}
        <div className="card" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem' }}>Subject Breakdown</h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 600, color: '#0f172a' }}>Math</span>
              <span style={{ fontWeight: 700, color: '#2563eb' }}>720 / 800</span>
            </div>
            <div style={{ height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '90%', height: '100%', backgroundColor: '#2563eb', borderRadius: '4px' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.75rem', color: '#64748b' }}>
              <span>Algebra: Strong</span>
              <span>Advanced Math: Needs Review</span>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 600, color: '#0f172a' }}>Reading & Writing</span>
              <span style={{ fontWeight: 700, color: '#10b981' }}>730 / 800</span>
            </div>
            <div style={{ height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '91%', height: '100%', backgroundColor: '#10b981', borderRadius: '4px' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.75rem', color: '#64748b' }}>
              <span>Craft & Structure: Strong</span>
              <span>Expression of Ideas: Good</span>
            </div>
          </div>
        </div>

        {/* Mock Chart */}
        <div className="card" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem' }}>Activity History</h2>
          
          {/* Simple CSS Bar Chart */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '150px', marginTop: '2rem' }}>
            {/* Monday */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '100%', height: '40%', backgroundColor: '#cbd5e1', borderRadius: '4px 4px 0 0', position: 'relative' }} className="hover-scale"></div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Mon</span>
            </div>
            {/* Tuesday */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '100%', height: '70%', backgroundColor: '#94a3b8', borderRadius: '4px 4px 0 0', position: 'relative' }} className="hover-scale"></div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Tue</span>
            </div>
            {/* Wednesday */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '100%', height: '30%', backgroundColor: '#cbd5e1', borderRadius: '4px 4px 0 0', position: 'relative' }} className="hover-scale"></div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Wed</span>
            </div>
            {/* Thursday */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '100%', height: '90%', backgroundColor: '#2563eb', borderRadius: '4px 4px 0 0', position: 'relative' }} className="hover-scale"></div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Thu</span>
            </div>
            {/* Friday */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '100%', height: '60%', backgroundColor: '#94a3b8', borderRadius: '4px 4px 0 0', position: 'relative' }} className="hover-scale"></div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Fri</span>
            </div>
            {/* Saturday */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '100%', height: '20%', backgroundColor: '#e2e8f0', borderRadius: '4px 4px 0 0', position: 'relative' }} className="hover-scale"></div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Sat</span>
            </div>
            {/* Sunday */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '100%', height: '10%', backgroundColor: '#e2e8f0', borderRadius: '4px 4px 0 0', position: 'relative' }} className="hover-scale"></div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Sun</span>
 уз    </div>
          </div>
        </div>

      </div>

    </div>
  );
}
