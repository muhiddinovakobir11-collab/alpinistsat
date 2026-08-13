'use client';

import { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import { PenTool, X, Check } from 'lucide-react';

export default function ClientEffects() {
  const [focusMode, setFocusMode] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });
  const [islandMsg, setIslandMsg] = useState('Welcome back, Alpinist!');
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Notepad State
  const [showNotes, setShowNotes] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [isSaved, setIsSaved] = useState(true);
  const noteRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('alpinist_notes');
    if (saved) setNoteText(saved);
  }, []);

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(e.target.value);
    setIsSaved(false);
  };

  const saveNotes = () => {
    localStorage.setItem('alpinist_notes', noteText);
    setIsSaved(true);
    setIslandMsg('Notes Saved! 💾');
    setTimeout(() => setIslandMsg('Alpinist SAT Ready'), 3000);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'm') {
        e.preventDefault();
        setShowNotes(prev => !prev);
        setIslandMsg('Notepad Toggled 📝');
        setTimeout(() => setIslandMsg('Alpinist SAT Ready'), 2000);
      }
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleFocusMode = () => {
    setFocusMode(!focusMode);
    document.body.classList.toggle('focus-mode', !focusMode);
    setIslandMsg(!focusMode ? 'Focus Mode ON 🌙' : 'Focus Mode OFF ☀️');
    setTimeout(() => setIslandMsg('Alpinist SAT Ready'), 3000);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, height: '4px', backgroundColor: '#3b82f6', width: `${scrollProgress}%`, zIndex: 10001, transition: 'width 0.2s ease-out' }}></div>

      {/* Magic Cursor Glow */}
      <div id="cursor-glow" style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}></div>

      {/* Dynamic Island */}
      <div className="dynamic-island" onClick={toggleFocusMode} onDoubleClick={() => setShowNotes(true)} title="Click to Focus, Double Click for Notes">
        <div className="dynamic-island-content">
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: focusMode ? '#10b981' : '#3b82f6', boxShadow: `0 0 10px ${focusMode ? '#10b981' : '#3b82f6'}` }}></span>
          {islandMsg}
        </div>
      </div>

      {/* Floating Notepad */}
      {showNotes && (
        <Draggable nodeRef={noteRef} bounds="parent" handle=".note-handle">
          <div ref={noteRef} style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '320px',
            height: '400px',
            backgroundColor: 'var(--card)',
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 9999,
            overflow: 'hidden'
          }}>
            <div className="note-handle" style={{ padding: '12px 16px', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'grab', fontWeight: 600, fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><PenTool size={16} /> Qoralama (Ctrl+M)</div>
              <X size={18} style={{ cursor: 'pointer' }} onClick={() => setShowNotes(false)} />
            </div>
            <textarea 
              value={noteText}
              onChange={handleNoteChange}
              onBlur={saveNotes}
              placeholder="Foydali formulalar yoki eslatmalar yozing... (Avtomatik saqlanadi)"
              style={{ flex: 1, padding: '1rem', border: 'none', resize: 'none', backgroundColor: 'transparent', color: 'var(--foreground)', fontSize: '0.95rem', outline: 'none' }}
            />
            <div style={{ padding: '8px 16px', backgroundColor: 'var(--muted)', display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border)' }}>
              <span style={{ fontSize: '0.75rem', color: isSaved ? '#10b981' : '#f59e0b', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                {isSaved ? <><Check size={14} /> Saqlandi</> : 'Saqlanmoqda...'}
              </span>
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
}
