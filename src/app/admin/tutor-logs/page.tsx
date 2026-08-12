import { MessageSquare, Bot, User, Clock, AlertCircle } from 'lucide-react';

export default function AITutorLogsPage() {
  const logs: { id: string, user: string, date: string, issue: string, messages: { role: string, content: string }[] }[] = [];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ backgroundColor: '#f3e8ff', padding: '12px', borderRadius: '12px', color: '#a855f7' }}>
          <MessageSquare size={28} />
        </div>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>AI Tutor Logs</h1>
          <p style={{ color: '#64748b' }}>Monitor student conversations with the AI to improve prompts and identify struggles.</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {logs.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#94a3b8', padding: '3rem 0', backgroundColor: '#fff', borderRadius: '16px', border: '1px dashed #e2e8f0' }}>
            No recent AI Tutor chat logs.
          </div>
        ) : (
          logs.map((log) => (
            <div key={log.id} style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              
              <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8fafc' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontWeight: 800, color: '#0f172a' }}>{log.id}</span>
                  <span style={{ color: '#64748b', fontSize: '0.875rem' }}>{log.user}</span>
                  <span style={{ backgroundColor: '#e0e7ff', color: '#4f46e5', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>{log.issue}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                  <Clock size={16} /> {log.date}
                </div>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {log.messages.map((msg, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: msg.role === 'user' ? '#eff6ff' : '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {msg.role === 'user' ? <User size={20} color="#3b82f6" /> : <Bot size={20} color="#fff" />}
                    </div>
                    <div style={{ 
                      backgroundColor: msg.role === 'user' ? '#3b82f6' : '#f1f5f9', 
                      color: msg.role === 'user' ? '#fff' : '#0f172a', 
                      padding: '1rem 1.25rem', 
                      borderRadius: '16px', 
                      borderTopRightRadius: msg.role === 'user' ? 0 : '16px',
                      borderTopLeftRadius: msg.role === 'assistant' ? 0 : '16px',
                      maxWidth: '80%',
                      fontSize: '0.95rem',
                      lineHeight: 1.5
                    }}>
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '1rem' }}>
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', color: '#f59e0b', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}>
                  <AlertCircle size={16} /> Flag Conversation
                </button>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
}
