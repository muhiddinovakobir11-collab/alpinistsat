'use client';

import { useState, useEffect, useRef } from 'react';
import { BookOpen, Trophy, Settings, Eye, Search, BookDashed, Volume2, Mic, MicOff } from 'lucide-react';

export default function VocabularyPage() {
  const [words, setWords] = useState<any[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [activeWordId, setActiveWordId] = useState<number | null>(null);
  const [recognizedText, setRecognizedText] = useState('');
  
  // Use explicit typing for the mock speech recognition
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    import('@/data/vocabulary.json').then((data) => {
      setWords(data.default || data);
    }).catch(e => {
      console.log('No words yet');
    });
  }, []);

  useEffect(() => {
    // Only initialize SpeechRecognition if it exists in the browser
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        const text = event.results[0][0].transcript.toLowerCase();
        setRecognizedText(text);
        setIsListening(false);
        
        if (activeWordId !== null) {
          const activeWord = words.find(w => w.id === activeWordId);
          if (activeWord && text.includes(activeWord.word.toLowerCase())) {
            alert(`Great pronunciation! You correctly said: "${activeWord.word}"`);
          } else {
            alert(`You said: "${text}". Try again to say "${activeWord?.word}" clearly.`);
          }
        }
        setActiveWordId(null);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
        setActiveWordId(null);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, [activeWordId, words]);

  const toggleListening = (wordId: number) => {
    if (isListening && activeWordId === wordId) {
      recognitionRef.current?.stop();
      setIsListening(false);
      setActiveWordId(null);
    } else {
      if (isListening) recognitionRef.current?.stop();
      setActiveWordId(wordId);
      setRecognizedText('');
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const playTTS = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <BookOpen size={28} color="#0f172a" />
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>Vocabulary</h1>
        </div>
        <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Build your vocabulary with personal words and teacher assignments</p>
      </div>

      {/* Offered by Admins */}
      <div className="fade-in card" style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '1.5rem', overflow: 'hidden' }}>
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Trophy size={18} color="#64748b" />
          <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>Offered by Admins</h2>
          <span style={{ fontSize: '0.75rem', backgroundColor: '#f1f5f9', color: '#64748b', padding: '2px 8px', borderRadius: '12px', fontWeight: 600 }}>{words.length} words</span>
        </div>
        
        {words.length > 0 ? (
          <div style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {words.slice().reverse().map((w, i) => (
              <div key={i} className="hover-scale" style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', backgroundColor: activeWordId === w.id ? '#f0fdf4' : '#fff', transition: 'all 0.3s' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 800, fontSize: '1.125rem', color: '#2563eb' }}>{w.word}</span>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button 
                      onClick={() => toggleListening(w.id)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', borderRadius: '50%', backgroundColor: isListening && activeWordId === w.id ? '#fecaca' : '#f1f5f9' }}
                      title="Practice Pronunciation"
                    >
                      {isListening && activeWordId === w.id ? <MicOff size={16} color="#ef4444" className="pulse-anim" /> : <Mic size={16} color="#64748b" />}
                    </button>
                    <button 
                      onClick={() => playTTS(w.word)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', borderRadius: '50%', backgroundColor: '#f1f5f9' }}
                      title="Listen"
                    >
                      <Volume2 size={16} color="#3b82f6" />
                    </button>
                  </div>
                </div>
                <div style={{ fontSize: '0.9rem', color: '#0f172a', fontWeight: 500 }}>{w.definition}</div>
                <div style={{ fontSize: '0.85rem', color: '#64748b', fontStyle: 'italic' }}>"{w.example}"</div>
                {activeWordId === w.id && isListening && (
                  <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600, marginTop: '0.5rem' }}>Listening for "{w.word}"...</div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ padding: '1.5rem' }}>
            <div style={{ border: '1px dashed #cbd5e1', borderRadius: '8px', padding: '2rem', textAlign: 'center', color: '#94a3b8' }}>
              No words offered yet.
            </div>
          </div>
        )}
      </div>

      <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.875rem', fontWeight: 600, margin: '2rem 0' }}>
        <span style={{ borderBottom: '2px solid #e2e8f0', display: 'inline-block', width: '40%' }}></span>
        <span style={{ margin: '0 1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}><BookOpen size={16}/> My Vocabulary (0)</span>
        <span style={{ borderBottom: '2px solid #e2e8f0', display: 'inline-block', width: '40%' }}></span>
      </div>

      {/* Settings */}
      <div className="card" style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Settings size={18} color="#64748b" />
          <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>Settings</h2>
        </div>
        <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>
              <Eye size={18} /> Quick Add Widget
            </div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Show a floating button to quickly add words from any page.</div>
          </div>
          <div style={{ width: '44px', height: '24px', backgroundColor: '#0f172a', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: '#fff', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px' }}></div>
          </div>
        </div>
      </div>

      {/* Search & Empty State */}
      <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
        <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
        <input 
          type="text" 
          placeholder="Search your vocabulary..." 
          style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.95rem', outline: 'none' }} 
        />
      </div>

      <div className="card" style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '4rem 2rem', textAlign: 'center' }}>
        <BookDashed size={48} color="#cbd5e1" style={{ margin: '0 auto 1rem' }} />
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Your Vocabulary is Empty</h3>
        <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.5rem' }}>Start by adding words using the Quick Add widget.</p>
        <button className="hover-scale" style={{ padding: '10px 24px', backgroundColor: '#64748b', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer' }}>
          Enable Quick Add Widget
        </button>
      </div>

    </div>
  );
}
