'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { Clock, Calculator, PenTool, MoreVertical, Bookmark, Play, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Draggable from 'react-draggable';
import styles from './test.module.css';
import DesmosCalculator from '@/components/DesmosCalculator';
import { mockQuestions, Question } from '@/data/mockTest';
import { useUser } from '@clerk/nextjs';

type Phase = 'RW1' | 'RW2' | 'BREAK' | 'M1' | 'M2' | 'SUBMITTING';

const PHASE_TIMES = {
  RW1: 32 * 60,
  RW2: 32 * 60,
  BREAK: 10 * 60,
  M1: 35 * 60,
  M2: 35 * 60,
  SUBMITTING: 0
};

export default function TestPage() {
  const router = useRouter();
  const { user } = useUser();
  const studentName = user ? `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Student' : 'Student';
  
  // Phase State
  const [currentPhase, setCurrentPhase] = useState<Phase>('RW1');
  const [timeLeft, setTimeLeft] = useState(PHASE_TIMES.RW1);
  const [isPaused, setIsPaused] = useState(false);

  // Data Splitting (Mocking Bluebook Structure)
  const { rw1, rw2, m1, m2 } = useMemo(() => {
    const reading = mockQuestions.filter(q => q.section.includes('Reading'));
    const math = mockQuestions.filter(q => q.section.includes('Math'));
    
    // Split evenly based on available questions (Standard is 27/27 and 22/22)
    const rHalf = Math.floor(reading.length / 2) || 1;
    const mHalf = Math.floor(math.length / 2) || 1;

    return {
      rw1: reading.slice(0, rHalf),
      rw2: reading.slice(rHalf, rHalf * 2),
      m1: math.slice(0, mHalf),
      m2: math.slice(mHalf, mHalf * 2)
    };
  }, []);

  // Current Questions based on Phase
  const currentQuestions = useMemo(() => {
    switch(currentPhase) {
      case 'RW1': return rw1;
      case 'RW2': return rw2;
      case 'M1': return m1;
      case 'M2': return m2;
      default: return [];
    }
  }, [currentPhase, rw1, rw2, m1, m2]);

  // Question State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [markedForReview, setMarkedForReview] = useState<string[]>([]);
  const [eliminatedOptions, setEliminatedOptions] = useState<Record<string, string[]>>({});
  
  // UI State
  const [showCalc, setShowCalc] = useState(false);
  const [isAnnotationMode, setIsAnnotationMode] = useState(false);

  const calcRef = useRef(null);
  const passageRef = useRef<HTMLDivElement>(null);

  // Timer
  useEffect(() => {
    if (isPaused || currentPhase === 'SUBMITTING') return;
    
    if (timeLeft <= 0) {
      handlePhaseEnd();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isPaused, currentPhase]);

  // Handle Moving to Next Phase
  const handlePhaseEnd = () => {
    setCurrentIndex(0); // Reset index for new module
    setShowCalc(false);
    
    if (currentPhase === 'RW1') {
      setCurrentPhase('RW2');
      setTimeLeft(PHASE_TIMES.RW2);
    } else if (currentPhase === 'RW2') {
      setCurrentPhase('BREAK');
      setTimeLeft(PHASE_TIMES.BREAK);
    } else if (currentPhase === 'BREAK') {
      setCurrentPhase('M1');
      setTimeLeft(PHASE_TIMES.M1);
    } else if (currentPhase === 'M1') {
      setCurrentPhase('M2');
      setTimeLeft(PHASE_TIMES.M2);
    } else if (currentPhase === 'M2') {
      setCurrentPhase('SUBMITTING');
      submitTest();
    }
  };

  const skipBreak = () => {
    setCurrentIndex(0);
    setCurrentPhase('M1');
    setTimeLeft(PHASE_TIMES.M1);
  };

  const submitTest = () => {
    // Collect all answers
    let correctReading = 0;
    let correctMath = 0;

    [...rw1, ...rw2].forEach(q => {
      const correctIndex = q.options.indexOf(q.correctAnswer);
      const correctLetter = String.fromCharCode(65 + correctIndex);
      if (answers[q.id] === correctLetter) correctReading++;
    });

    [...m1, ...m2].forEach(q => {
      const correctIndex = q.options.indexOf(q.correctAnswer);
      const correctLetter = String.fromCharCode(65 + correctIndex);
      if (answers[q.id] === correctLetter) correctMath++;
    });

    localStorage.setItem('testResults', JSON.stringify({
      totalReading: rw1.length + rw2.length,
      correctReading,
      totalMath: m1.length + m2.length,
      correctMath,
      answers
    }));

    router.push('/test/results');
  };

  // Annotation Logic
  useEffect(() => {
    const handleMouseUp = () => {
      if (!isAnnotationMode || !passageRef.current) return;
      const selection = window.getSelection();
      if (selection && selection.toString().trim().length > 0 && passageRef.current.contains(selection.anchorNode)) {
        try {
          const range = selection.getRangeAt(0);
          const span = document.createElement('span');
          span.style.backgroundColor = '#fef08a';
          span.style.borderRadius = '3px';
          span.className = 'annotated-text';
          range.surroundContents(span);
          selection.removeAllRanges();
        } catch (e) {}
      }
    };
    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, [isAnnotationMode]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // BREAK SCREEN
  if (currentPhase === 'BREAK') {
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f172a', color: '#fff' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Take a Break</h1>
        <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '3rem' }}>You have completed the Reading and Writing section.</p>
        
        <div style={{ fontSize: '5rem', fontWeight: 900, fontFamily: 'monospace', marginBottom: '3rem', color: '#eab308' }}>
          {formatTime(timeLeft)}
        </div>

        <button 
          onClick={skipBreak}
          style={{ padding: '16px 32px', backgroundColor: '#3b82f6', color: '#fff', fontSize: '1.25rem', fontWeight: 700, borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <Play size={24} /> Skip Break and Start Math
        </button>
      </div>
    );
  }

  if (currentPhase === 'SUBMITTING') {
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc' }}>
        <CheckCircle size={64} color="#10b981" className="bounce-anim" style={{ marginBottom: '1rem' }} />
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>Calculating Your Score...</h1>
      </div>
    );
  }

  const currentQuestion = currentQuestions[currentIndex];
  if (!currentQuestion) return <div>Loading questions...</div>;

  const isMath = currentPhase === 'M1' || currentPhase === 'M2';
  const sectionName = isMath ? 'Math' : 'Reading and Writing';
  const moduleName = currentPhase.includes('1') ? 'Module 1' : 'Module 2';

  const handleSelectOption = (letter: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: letter }));
  };

  const toggleEliminate = (e: React.MouseEvent, letter: string) => {
    e.stopPropagation();
    setEliminatedOptions(prev => {
      const currentEliminated = prev[currentQuestion.id] || [];
      if (currentEliminated.includes(letter)) {
        return { ...prev, [currentQuestion.id]: currentEliminated.filter(l => l !== letter) };
      }
      return { ...prev, [currentQuestion.id]: [...currentEliminated, letter] };
    });
  };

  const isMarked = markedForReview.includes(currentQuestion.id);
  const currentEliminated = eliminatedOptions[currentQuestion.id] || [];
  const selectedOption = answers[currentQuestion.id];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          {sectionName}, {moduleName}
          <span>Directions</span>
        </div>
        
        <div className={styles.timer}>
          <Clock size={20} />
          <span>{formatTime(timeLeft)}</span>
        </div>

        <div className={styles.headerTools}>
          {isMath && (
            <button 
              className={styles.toolBtn} 
              onClick={() => setShowCalc(!showCalc)}
              style={{ color: showCalc ? '#2563eb' : 'inherit' }}
            >
              <Calculator size={18} /> Calculator
            </button>
          )}
          <button 
            className={styles.toolBtn} 
            onClick={() => setIsAnnotationMode(!isAnnotationMode)}
            style={{ color: isAnnotationMode ? '#eab308' : 'inherit', backgroundColor: isAnnotationMode ? '#fef08a' : 'transparent', padding: '4px 8px', borderRadius: '4px' }}
          >
            <PenTool size={18} /> Annotation {isAnnotationMode && '(On)'}
          </button>
          <button className={styles.toolBtn}>
            <MoreVertical size={18} /> More
          </button>
        </div>
      </header>

      <main className={styles.mainArea}>
        {currentQuestion.passage && (
          <div className={styles.leftColumn} ref={passageRef} style={{ cursor: isAnnotationMode ? 'text' : 'default' }}>
            {isAnnotationMode && <div style={{ fontSize: '0.8rem', color: '#854d0e', marginBottom: '1rem', backgroundColor: '#fef08a', padding: '0.5rem', borderRadius: '4px' }}>Highlight text to annotate.</div>}
            <p style={{ whiteSpace: 'pre-wrap' }}>{currentQuestion.passage}</p>
          </div>
        )}
        
        <div className={styles.rightColumn} style={{ flex: currentQuestion.passage ? 1 : 2, position: 'relative' }}>
          
          {/* Bigger Desmos Calculator */}
          {showCalc && isMath && (
            <Draggable nodeRef={calcRef} bounds="parent" handle=".calc-handle">
              <div ref={calcRef} style={{ 
                position: 'absolute', 
                top: '20px', 
                right: '40px', 
                zIndex: 9999, 
                backgroundColor: 'white', 
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)', 
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                width: '800px', // INCREASED WIDTH
                height: '650px', // INCREASED HEIGHT
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div className="calc-handle" style={{ 
                  backgroundColor: '#f1f5f9', 
                  padding: '12px 16px', 
                  cursor: 'grab', 
                  borderTopLeftRadius: '8px', 
                  borderTopRightRadius: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontWeight: 700,
                  borderBottom: '1px solid #e2e8f0',
                  color: '#0f172a'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Calculator size={18}/> Desmos Calculator (Drag to move)</div>
                  <button onClick={() => setShowCalc(false)} style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '1rem' }}>✕ Close</button>
                </div>
                <div style={{ flex: 1, padding: '4px' }}>
                  <DesmosCalculator />
                </div>
              </div>
            </Draggable>
          )}
          
          <div className={styles.questionTopBar}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className={styles.questionNumber}>{currentIndex + 1}</div>
              <div 
                className={styles.markReview} 
                onClick={() => setMarkedForReview(prev => prev.includes(currentQuestion.id) ? prev.filter(id => id !== currentQuestion.id) : [...prev, currentQuestion.id])}
                style={{ color: isMarked ? '#eab308' : 'var(--muted-foreground)' }}
              >
                <Bookmark size={16} fill={isMarked ? '#eab308' : 'none'} /> 
                {isMarked ? 'Marked' : 'Mark for Review'}
              </div>
            </div>
            <div className={styles.strikeIcon}>ABC</div>
          </div>

          <div className={styles.questionText}>
            {currentQuestion.questionText}
          </div>

          <div className={styles.optionsList}>
            {currentQuestion.options.map((opt, i) => {
              const letter = String.fromCharCode(65 + i);
              const isEliminated = currentEliminated.includes(letter);
              
              return (
                <div 
                  key={letter}
                  className={`${styles.optionItem} ${selectedOption === letter ? styles.optionItemActive : ''}`}
                  onClick={() => !isEliminated && handleSelectOption(letter)}
                  style={{ opacity: isEliminated ? 0.5 : 1, textDecoration: isEliminated ? 'line-through' : 'none' }}
                >
                  <div className={styles.optionLetter} onClick={(e) => toggleEliminate(e, letter)}>
                    {letter}
                  </div>
                  <span>{opt}</span>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.studentName}>{studentName}</div>
        
        <div className={styles.navigation}>
          <select 
            className={styles.questionSelect}
            value={currentIndex}
            onChange={(e) => setCurrentIndex(Number(e.target.value))}
            style={{ appearance: 'none', paddingRight: '2.5rem', backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
          >
            {currentQuestions.map((q, i) => (
              <option key={q.id} value={i}>
                Question {i + 1} of {currentQuestions.length} {answers[q.id] ? '✓' : ''} {markedForReview.includes(q.id) ? '📌' : ''}
              </option>
            ))}
          </select>
          
          <button className={styles.navBtn} onClick={() => setCurrentIndex(p => p - 1)} disabled={currentIndex === 0}>
            Back
          </button>
          
          {currentIndex === currentQuestions.length - 1 ? (
            <button className={styles.navBtn} onClick={handlePhaseEnd} style={{ backgroundColor: currentPhase === 'M2' ? '#10b981' : '#f59e0b', color: '#fff' }}>
              {currentPhase === 'M2' ? 'Submit Test' : `Submit ${moduleName}`}
            </button>
          ) : (
            <button className={styles.navBtn} onClick={() => setCurrentIndex(p => p + 1)}>
              Next
            </button>
          )}
        </div>
      </footer>
    </>
  );
}
