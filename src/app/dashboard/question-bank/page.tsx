import { Play, RotateCcw, Building2, FileText, Calculator as CalcIcon, BookType } from 'lucide-react';
import Link from 'next/link';

export default function QuestionBankPage() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', color: '#0f172a' }}>Create Your Session</h1>
            <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: '600px', lineHeight: 1.5 }}>
              Select filters to build a personalized practice test. Use checkboxes to select multiple domains or skills from one subject, or click play buttons for quick single-item sessions.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: '#f8fafc', padding: '4px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '8px 16px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
              <Building2 size={16} /> College Board
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '8px 16px', backgroundColor: 'transparent', border: 'none', color: '#64748b', fontWeight: 600, fontSize: '0.875rem' }}>
              <FileText size={16} /> Practice Tests
            </button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
          <div style={{ padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em', marginBottom: '1rem' }}>PROGRESS</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a' }}>0</span>
              <span style={{ fontSize: '1rem', fontWeight: 600, color: '#64748b' }}>%</span>
            </div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>0 of 3 714 answered</div>
          </div>
          
          <div style={{ padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em', marginBottom: '1rem' }}>TOTAL TIME SPENT</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.5rem' }}>00:00</div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Across questions matching the current filters</div>
          </div>
        </div>

        {/* Filters Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>General Filters</h2>
            <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Adjust these filters, then drill down by subject, domain, and skill.</p>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '8px 16px', border: '1px solid #e2e8f0', borderRadius: '20px', backgroundColor: '#fff', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', cursor: 'pointer' }}>
            <RotateCcw size={16} /> Reset Filters
          </button>
        </div>

        {/* Filters Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr 1fr', gap: '1rem', marginBottom: '3rem' }}>
          {/* Difficulty */}
          <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '16px', height: '16px', display: 'inline-block', borderLeft: '2px solid', borderBottom: '2px solid', borderRight: '2px solid' }}></span> DIFFICULTY
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button style={{ padding: '6px 16px', border: '1px solid #e2e8f0', borderRadius: '20px', backgroundColor: '#fff', fontSize: '0.875rem', cursor: 'pointer' }}>Easy</button>
              <button style={{ padding: '6px 16px', border: '1px solid #e2e8f0', borderRadius: '20px', backgroundColor: '#fff', fontSize: '0.875rem', cursor: 'pointer' }}>Medium</button>
              <button style={{ padding: '6px 16px', border: '1px solid #e2e8f0', borderRadius: '20px', backgroundColor: '#fff', fontSize: '0.875rem', cursor: 'pointer' }}>Hard</button>
            </div>
          </div>

          {/* Answered Status */}
          <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <span style={{ fontSize: '1rem' }}>✓</span> ANSWERED STATUS
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button style={{ padding: '6px 16px', border: '1px solid #e2e8f0', borderRadius: '20px', backgroundColor: '#fff', fontSize: '0.875rem', cursor: 'pointer' }}>Correct</button>
              <button style={{ padding: '6px 16px', border: '1px solid #e2e8f0', borderRadius: '20px', backgroundColor: '#fff', fontSize: '0.875rem', cursor: 'pointer' }}>Incorrect</button>
              <button style={{ padding: '6px 16px', border: '1px solid #e2e8f0', borderRadius: '20px', backgroundColor: '#fff', fontSize: '0.875rem', cursor: 'pointer', marginTop: '0.5rem' }}>Not Answered</button>
            </div>
          </div>

          {/* Marked for Review */}
          <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1rem' }}>📌</span> MARKED FOR REVIEW
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{ padding: '6px 16px', border: '1px solid #e2e8f0', borderRadius: '20px', backgroundColor: '#fff', fontSize: '0.875rem', cursor: 'pointer' }}>Yes</button>
              <button style={{ padding: '6px 16px', border: '1px solid #e2e8f0', borderRadius: '20px', backgroundColor: '#fff', fontSize: '0.875rem', cursor: 'pointer' }}>No</button>
            </div>
          </div>

          {/* Bluebook Questions */}
          <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Building2 size={14} /> BLUEBOOK QUESTIONS
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{ padding: '6px 16px', border: 'none', borderRadius: '20px', backgroundColor: '#0f172a', color: '#fff', fontSize: '0.875rem', cursor: 'pointer' }}>Included</button>
              <button style={{ padding: '6px 16px', border: '1px solid #e2e8f0', borderRadius: '20px', backgroundColor: '#fff', fontSize: '0.875rem', cursor: 'pointer' }}>Excluded</button>
            </div>
          </div>
        </div>

        {/* Browse by Subject */}
        <div style={{ marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>Browse by Subject</h2>
          <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Expand a subject to reveal domains and skills. Use checkboxes to select multiple items (within one subject only), then click "Start Session" at the bottom. Or use play buttons for instant single-item sessions.</p>
          
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', marginBottom: '1rem', backgroundColor: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                  <CalcIcon size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a' }}>Math</div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>1 876 questions</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#94a3b8' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                <Link href="/test">
                  <button style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fff', color: '#0f172a', cursor: 'pointer' }}>
                    <Play size={16} fill="currentColor" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', backgroundColor: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                  <BookType size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a' }}>Reading & Writing</div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>1 838 questions</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#94a3b8' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                <Link href="/test">
                  <button style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fff', color: '#0f172a', cursor: 'pointer' }}>
                    <Play size={16} fill="currentColor" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
