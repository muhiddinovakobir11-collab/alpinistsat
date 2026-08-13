'use client';

import { useState, useEffect } from 'react';
import { BookOpen, Trophy, RotateCcw, Check, X, RefreshCw, Volume2 } from 'lucide-react';
import styles from './vocab.module.css'; // We will create this CSS file next

export default function VocabularyPage() {
  const [words, setWords] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownWords, setKnownWords] = useState<number[]>([]);
  const [unknownWords, setUnknownWords] = useState<number[]>([]);

  useEffect(() => {
    import('@/data/vocabulary.json').then((data) => {
      setWords(data.default || data);
    }).catch(e => {
      console.log('No words yet');
    });
  }, []);

  const playTTS = (text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const handleNext = (status: 'known' | 'unknown') => {
    const wordId = words[currentIndex].id;
    if (status === 'known') {
      setKnownWords(prev => [...prev, wordId]);
    } else {
      setUnknownWords(prev => [...prev, wordId]);
    }
    
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
    }, 150);
  };

  const resetDeck = () => {
    setCurrentIndex(0);
    setKnownWords([]);
    setUnknownWords([]);
    setIsFlipped(false);
  };

  if (words.length === 0) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading words...</div>;
  }

  const isComplete = currentIndex >= words.length;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <BookOpen size={28} color="#3b82f6" />
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>Smart Flashcards</h1>
        </div>
        <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Master SAT Vocabulary with Spaced Repetition</p>
      </div>

      {isComplete ? (
        <div className="fade-in card" style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <Trophy size={64} color="#f59e0b" style={{ margin: '0 auto 1.5rem' }} />
          <h2 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Deck Completed!</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#10b981' }}>{knownWords.length}</div>
              <div style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: 600 }}>Mastered</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ef4444' }}>{unknownWords.length}</div>
              <div style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: 600 }}>Needs Review</div>
            </div>
          </div>
          <button 
            onClick={resetDeck}
            className="hover-scale"
            style={{ padding: '12px 32px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <RefreshCw size={18} /> Review Again
          </button>
        </div>
      ) : (
        <>
          {/* Progress Bar */}
          <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#64748b' }}>{currentIndex + 1} / {words.length}</div>
            <div style={{ flex: 1, height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${((currentIndex) / words.length) * 100}%`, height: '100%', backgroundColor: '#3b82f6', transition: 'width 0.3s ease' }}></div>
            </div>
          </div>

          {/* Flashcard Container */}
          <div className={styles.flashcardContainer} onClick={() => setIsFlipped(!isFlipped)}>
            <div className={`${styles.flashcard} ${isFlipped ? styles.flipped : ''}`}>
              
              {/* Front (Word) */}
              <div className={styles.front}>
                <button 
                  onClick={(e) => playTTS(words[currentIndex].word, e)}
                  style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', borderRadius: '50%', backgroundColor: '#f1f5f9' }}
                >
                  <Volume2 size={24} color="#3b82f6" />
                </button>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a' }}>
                  {words[currentIndex].word}
                </div>
                <div style={{ position: 'absolute', bottom: '1.5rem', color: '#94a3b8', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <RotateCcw size={16} /> Click to flip
                </div>
              </div>

              {/* Back (Definition) */}
              <div className={styles.back}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem', textAlign: 'center' }}>
                  {words[currentIndex].definition}
                </div>
                <div style={{ fontSize: '1.125rem', color: '#475569', fontStyle: 'italic', textAlign: 'center', padding: '0 1rem', borderLeft: '4px solid #3b82f6', backgroundColor: '#f8fafc', paddingBlock: '1rem', borderRadius: '4px' }}>
                  "{words[currentIndex].example}"
                </div>
              </div>

            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem', opacity: isFlipped ? 1 : 0.5, pointerEvents: isFlipped ? 'auto' : 'none', transition: 'opacity 0.3s' }}>
            <button 
              onClick={() => handleNext('unknown')}
              style={{ flex: 1, maxWidth: '200px', padding: '16px', backgroundColor: '#fef2f2', color: '#ef4444', border: '2px solid #fecaca', borderRadius: '12px', fontWeight: 700, fontSize: '1.125rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'all 0.2s' }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#fee2e2'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#fef2f2'}
            >
              <X size={24} /> Needs Review
            </button>
            
            <button 
              onClick={() => handleNext('known')}
              style={{ flex: 1, maxWidth: '200px', padding: '16px', backgroundColor: '#ecfdf5', color: '#10b981', border: '2px solid #a7f3d0', borderRadius: '12px', fontWeight: 700, fontSize: '1.125rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'all 0.2s' }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#d1fae5'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#ecfdf5'}
            >
              <Check size={24} /> Got It!
            </button>
          </div>
        </>
      )}

    </div>
  );
}
