'use client';

import { useState, useEffect } from 'react';
import { Book, PlusCircle, CheckCircle } from 'lucide-react';
import { addWord } from './actions';

export default function AdminVocabularyPage() {
  const [words, setWords] = useState<any[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetchWords();
  }, []);

  const fetchWords = () => {
    import('@/data/vocabulary.json').then((data) => {
      setWords(data.default || data);
    }).catch(e => {
      console.log('No words yet');
    });
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAdding(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    await addWord(formData);
    
    setIsAdding(false);
    setSuccess(true);
    form.reset();
    
    // Fake refresh for UI instantly
    const newWord = {
      id: Date.now(),
      word: formData.get('word'),
      definition: formData.get('definition'),
      example: formData.get('example')
    };
    setWords(prev => [...prev, newWord]);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
      
      {/* Add Word Form */}
      <div className="card fade-in" style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', alignSelf: 'start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <Book size={28} color="#0f172a" />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a' }}>Add Vocabulary</h2>
        </div>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>Add new SAT vocabulary words. These will immediately appear in the students' Vocabulary lists.</p>

        {success && (
          <div className="bounce-anim" style={{ padding: '1rem', backgroundColor: '#dcfce7', color: '#166534', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
            <CheckCircle size={18} /> Word added successfully!
          </div>
        )}

        <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Word</label>
            <input type="text" name="word" required placeholder="e.g., Abundant" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Definition</label>
            <textarea name="definition" rows={2} required placeholder="Existing or available in large quantities..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}></textarea>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Example Sentence</label>
            <textarea name="example" rows={2} required placeholder="There was abundant evidence..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}></textarea>
          </div>

          <button type="submit" disabled={isAdding} className="hover-scale" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '14px', backgroundColor: '#0f172a', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '1rem', cursor: isAdding ? 'not-allowed' : 'pointer', marginTop: '1rem' }}>
            <PlusCircle size={18} /> {isAdding ? 'Adding...' : 'Add Word'}
          </button>
        </form>
      </div>

      {/* Words List */}
      <div className="card fade-in" style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', maxHeight: '80vh', overflowY: 'auto' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem' }}>Database ({words.length} words)</h2>
        
        {words.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {words.slice().reverse().map((w, i) => (
              <div key={i} className="hover-scale" style={{ padding: '1.25rem', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
                <h4 style={{ fontWeight: 800, color: '#2563eb', fontSize: '1.125rem', marginBottom: '0.25rem' }}>{w.word}</h4>
                <div style={{ fontSize: '0.9rem', color: '#0f172a', fontWeight: 500, marginBottom: '0.5rem' }}>{w.definition}</div>
                <div style={{ fontSize: '0.85rem', color: '#64748b', fontStyle: 'italic' }}>"{w.example}"</div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8' }}>No words added yet.</div>
        )}
      </div>

    </div>
  );
}
