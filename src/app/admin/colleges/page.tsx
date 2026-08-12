import { GraduationCap, Search, Plus, MapPin, Edit2 } from 'lucide-react';

export default function CollegesPage() {
  const colleges = [
    { name: 'Massachusetts Institute of Technology (MIT)', location: 'Cambridge, MA', p25: 1510, p75: 1580, admitRate: '4.8%' },
    { name: 'Harvard University', location: 'Cambridge, MA', p25: 1490, p75: 1580, admitRate: '3.4%' },
    { name: 'Stanford University', location: 'Stanford, CA', p25: 1470, p75: 1570, admitRate: '3.9%' },
    { name: 'University of Pennsylvania (UPenn)', location: 'Philadelphia, PA', p25: 1480, p75: 1570, admitRate: '5.9%' },
    { name: 'New York University (NYU)', location: 'New York, NY', p25: 1450, p75: 1540, admitRate: '12.2%' },
    { name: 'University of California, Berkeley', location: 'Berkeley, CA', p25: 1330, p75: 1530, admitRate: '11.4%' },
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ backgroundColor: '#ffedd5', padding: '12px', borderRadius: '12px', color: '#f97316' }}>
            <GraduationCap size={28} />
          </div>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>College Matcher DB</h1>
            <p style={{ color: '#64748b' }}>Manage SAT score requirements for the university recommendation algorithm.</p>
          </div>
        </div>
        <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem' }}>
          <Plus size={18} /> Add University
        </button>
      </div>

      <div style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        
        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={20} color="#94a3b8" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input type="text" placeholder="Search universities..." style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', backgroundColor: '#f8fafc' }} />
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0', color: '#64748b', textAlign: 'left', fontSize: '0.875rem' }}>
                <th style={{ padding: '1rem 1.5rem' }}>University</th>
                <th style={{ padding: '1rem 1.5rem' }}>Location</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>25th Pctl</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>75th Pctl</th>
                <th style={{ padding: '1rem 1.5rem' }}>Admit Rate</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {colleges.map((college, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #e2e8f0', transition: 'background-color 0.2s' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: 700, color: '#0f172a' }}>{college.name}</td>
                  <td style={{ padding: '1rem 1.5rem', color: '#64748b', fontSize: '0.875rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <MapPin size={14} /> {college.location}
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>
                    <span style={{ backgroundColor: '#fef08a', color: '#854d0e', padding: '4px 10px', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 700 }}>{college.p25}</span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>
                    <span style={{ backgroundColor: '#bbf7d0', color: '#166534', padding: '4px 10px', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 700 }}>{college.p75}</span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', color: '#64748b', fontWeight: 600 }}>{college.admitRate}</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                    <button style={{ background: 'none', border: 'none', color: '#3b82f6', cursor: 'pointer', padding: '0.5rem', borderRadius: '8px' }}>
                      <Edit2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
