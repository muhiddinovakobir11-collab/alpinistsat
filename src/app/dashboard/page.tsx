'use client';

import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, Target, CheckCircle2, TrendingUp, Zap, Bell, Flame, Medal, Volume2, Save, X, Moon, Sun, Quote, Play, Pause, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import styles from './page.module.css';

export default function DashboardPage() {
  const [targetScore, setTargetScore] = useState(1500);
  const [isEditingTarget, setIsEditingTarget] = useState(false);
  const [tempScore, setTempScore] = useState(1500);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsTimerRunning(false);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
    playTone(isTimerRunning ? 300 : 600, 'triangle', 100);
  };
  const resetTimer = () => { 
    setIsTimerRunning(false); 
    setTimeLeft(25 * 60); 
    playTone(200, 'triangle', 150);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const playTone = (freq: number, type: 'sine' | 'triangle' = 'sine', duration: number = 150) => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.type = type;
      oscillator.frequency.value = freq;
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration / 1000);
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + duration / 1000);
    } catch (e) {}
  };

  const playSuccess = () => {
    playTone(440, 'sine', 150);
    setTimeout(() => playTone(554, 'sine', 150), 100);
    setTimeout(() => playTone(659, 'sine', 300), 200);
  };

  const handleSaveTarget = () => {
    if (tempScore >= 400 && tempScore <= 1600) {
      setTargetScore(tempScore);
      playSuccess();
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#3b82f6', '#f59e0b']
      });
    }
    setIsEditingTarget(false);
  };

  return (
    <div className="fade-in">
      <div className={styles.dashboardHeader} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="stagger-1">Dashboard</h1>
          <p className="stagger-2">Welcome back, Student!</p>
        </div>
        <button onClick={toggleDarkMode} className="stagger-1 hover-scale" style={{ padding: '0.75rem', borderRadius: '50%', backgroundColor: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {isDarkMode ? <Sun size={24} color="#f59e0b" /> : <Moon size={24} color="#0f172a" />}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        {/* Main Feed */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* News & Announcements */}
          <div className="card hover-scale" style={{ backgroundColor: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden', padding: 0 }}>
            <div style={{ position: 'relative', height: '200px' }}>
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Exam Prep" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.8), transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', color: '#fff' }}>
                <span style={{ backgroundColor: '#ef4444', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', display: 'inline-block' }}>New</span>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.25rem' }}>Full Mock Tests Now Available!</h2>
                <p style={{ color: '#cbd5e1', fontSize: '1rem', fontWeight: 500 }}>Take the official Alpinist SAT Mock Test and earn your certificate.</p>
              </div>
            </div>
            <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border)' }}>
              <Bell size={20} color="#3b82f6" />
              <div style={{ flex: 1 }}>
                <h4 style={{ color: 'var(--foreground)', fontWeight: 700, fontSize: '0.95rem' }}>August SAT Registration Closes Soon</h4>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>Make sure to register on CollegeBoard by July 25th.</p>
              </div>
            </div>
          </div>

          <div className={`card ${styles.dailyPractice}`}>
            <div className={styles.practiceHeader}>
              <div className={styles.practiceIconBox}>
                <BookOpen size={24} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Daily Practice Questions</h2>
                <p style={{ color: 'var(--muted-foreground)' }}>Boost your SAT prep with daily targeted questions</p>
              </div>
            </div>

            <div className={styles.actionBanner}>
              <div>
                <h3>Ready to start a Full Mock?</h3>
                <p>Take the 2-hour digital SAT and get an official Albert.io scaled score.</p>
              </div>
              <Link href="/test" className={`btn ${styles.startBtn}`}>
                Start Mock Test &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Daily Missions & Quests */}
          <div className="card tilt-card" style={{ backgroundColor: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--foreground)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Flame size={20} color="#f97316" /> Daily Missions
              </h2>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#f97316' }}>3 Days Streak!</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(22, 163, 74, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={20} color="#16a34a" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--foreground)' }}>Solve 10 Math Questions</span>
                    <span style={{ fontSize: '0.85rem', color: '#16a34a', fontWeight: 700 }}>Done</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#16a34a' }}></div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Volume2 size={20} color="var(--muted-foreground)" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--foreground)' }}>Voice Vocab Practice</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', fontWeight: 600 }}>0/5</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '20%', height: '100%', backgroundColor: '#3b82f6' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/dashboard/vocabulary" style={{ display: 'block', textAlign: 'center', marginTop: '1.5rem', color: '#3b82f6', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
              Go to Vocab Practice &rarr;
            </Link>
          </div>

          <div className={`card ${styles.targetCard} tilt-card glow-border`}>
            <h2><Target size={24} /> Your Target Score</h2>
            <div style={{ marginTop: '2rem' }}>
              <p style={{ color: 'var(--muted-foreground)', marginBottom: '0.5rem' }}>Current Target</p>
              
              {isEditingTarget ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <input 
                    type="number" 
                    min="400" 
                    max="1600" 
                    step="10"
                    value={tempScore}
                    onChange={(e) => setTempScore(Number(e.target.value))}
                    style={{ 
                      fontSize: '2rem', 
                      fontWeight: 800, 
                      color: 'var(--foreground)', 
                      width: '120px', 
                      padding: '0.5rem', 
                      borderRadius: '8px',
                      border: '2px solid #3b82f6',
                      outline: 'none',
                      backgroundColor: 'var(--background)'
                    }} 
                  />
                  <span style={{ color: 'var(--muted-foreground)', fontWeight: 600 }}>/ 1600</span>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--success)' }}>{targetScore}</span>
                  <span style={{ color: 'var(--muted-foreground)', fontWeight: 600 }}>/ 1600</span>
                </div>
              )}

              {isEditingTarget ? (
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button 
                    onClick={handleSaveTarget}
                    className="btn btn-primary hover-scale" 
                    style={{ padding: '0.75rem', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <Save size={18} /> Save
                  </button>
                  <button 
                    onClick={() => {
                      setIsEditingTarget(false);
                      setTempScore(targetScore);
                    }}
                    className="btn hover-scale" 
                    style={{ padding: '0.75rem', flex: 1, backgroundColor: 'var(--muted)', color: 'var(--foreground)', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <X size={18} /> Cancel
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsEditingTarget(true)}
                  className="btn btn-primary hover-scale" 
                  style={{ padding: '0.75rem 2rem', width: '100%' }}
                >
                  Change Target
                </button>
              )}
            </div>
          </div>

          {/* New Feature: Quote of the Day */}
          <div className="card tilt-card float-anim" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', borderRadius: '16px', padding: '1.5rem', color: '#fff', boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <Quote size={24} color="rgba(255,255,255,0.7)" />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', backgroundColor: 'rgba(0,0,0,0.2)', padding: '4px 10px', borderRadius: '12px' }}>
                Daily Motivation
              </span>
            </div>
            <p style={{ fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.5, marginBottom: '1rem', fontStyle: 'italic' }}>
              "Success is the sum of small efforts, repeated day in and day out."
            </p>
            <p style={{ fontSize: '0.875rem', opacity: 0.8, textAlign: 'right', fontWeight: 500 }}>
              — Robert Collier
            </p>
          </div>

          {/* New Feature: Gamification Badges */}
          <div className="card tilt-card stagger-3" style={{ backgroundColor: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '1.5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <Medal size={20} color="#f59e0b" /> Yutuqlar & Nishonlar
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '1.5rem' }}>
              <div className="hover-scale pulse-anim" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} onClick={() => playTone(800, 'sine', 100)}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #f59e0b, #fbbf24)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)' }}>
                  <Flame size={32} color="#fff" />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>5 Kunlik</span>
              </div>
              
              <div className="hover-scale" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.5 }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed var(--border)' }}>
                  <Target size={32} color="var(--muted-foreground)" />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted-foreground)' }}>1500+ Ball</span>
              </div>

              <div className="hover-scale" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.5 }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed var(--border)' }}>
                  <BookOpen size={32} color="var(--muted-foreground)" />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted-foreground)' }}>Kitobxon</span>
              </div>
            </div>
          </div>

          {/* New Feature: Pomodoro Timer */}
          <div className="card tilt-card glow-border" style={{ backgroundColor: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '1.5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <Zap size={20} color="#f59e0b" /> Focus Timer
            </h2>
            <div style={{ 
              width: '150px', height: '150px', 
              borderRadius: '50%', 
              border: `8px solid ${isTimerRunning ? '#10b981' : 'var(--muted)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              fontSize: '2.5rem', fontWeight: 800, color: 'var(--foreground)',
              transition: 'border-color 0.3s ease',
              position: 'relative'
            }}>
              {formatTime(timeLeft)}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <button 
                onClick={toggleTimer} 
                className="hover-scale"
                style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: isTimerRunning ? '#ef4444' : '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}
              >
                {isTimerRunning ? <Pause size={24} /> : <Play size={24} style={{ marginLeft: '4px' }} />}
              </button>
              <button 
                onClick={resetTimer} 
                className="hover-scale"
                style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--muted)', color: 'var(--foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}
              >
                <RotateCcw size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
