'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import { Trophy, Clock, ChevronUp } from 'lucide-react';
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

  const performanceData = [
    { date: 'Aug 1', score: 1150 },
    { date: 'Aug 5', score: 1210 },
    { date: 'Aug 10', score: 1280 },
    { date: 'Aug 15', score: 1350 },
    { date: 'Aug 20', score: 1420 },
    { date: 'Aug 25', score: 1490 },
  ];

  const dailyProgress = 75; // 75% complete

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

          {/* Performance Analytics Line Chart */}
          <div className="card tilt-card" style={{ backgroundColor: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <TrendingUp size={24} color="#3b82f6" />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--foreground)' }}>Performance Analytics</h2>
            </div>
            <div style={{ width: '100%', height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={4} dot={{ r: 6, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 8 }} />
                  <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis domain={[1000, 1600]} tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <RechartsTooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                    itemStyle={{ color: '#0f172a', fontWeight: 800 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Leaderboard (Reyting) */}
          <div className="card" style={{ backgroundColor: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Trophy size={24} color="#f59e0b" />
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--foreground)' }}>Global Leaderboard</h2>
              </div>
              <span style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', fontWeight: 600 }}>Top 5</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { rank: 1, name: 'Alex Johnson', score: 1590, change: 'up' },
                { rank: 2, name: 'Sarah Chen', score: 1580, change: 'up' },
                { rank: 3, name: 'You (Student)', score: 1500, change: 'same', isYou: true },
                { rank: 4, name: 'Michael T.', score: 1490, change: 'down' },
                { rank: 5, name: 'David Kim', score: 1470, change: 'up' },
              ].map((user, idx) => (
                <div key={idx} className="hover-scale" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', backgroundColor: user.isYou ? '#f0f9ff' : '#f8fafc', borderRadius: '12px', border: user.isYou ? '2px solid #3b82f6' : '1px solid transparent' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: idx === 0 ? '#fef3c7' : idx === 1 ? '#f1f5f9' : idx === 2 ? '#ffedd5' : '#e2e8f0', color: idx === 0 ? '#d97706' : idx === 1 ? '#64748b' : idx === 2 ? '#c2410c' : '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.875rem' }}>
                      {user.rank}
                    </div>
                    <span style={{ fontWeight: user.isYou ? 800 : 600, color: 'var(--foreground)' }}>{user.name}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontWeight: 800, color: 'var(--foreground)' }}>{user.score}</span>
                    {user.change === 'up' && <ChevronUp size={16} color="#10b981" />}
                    {user.change === 'down' && <ChevronUp size={16} color="#ef4444" style={{ transform: 'rotate(180deg)' }} />}
                    {user.change === 'same' && <div style={{ width: '16px', height: '4px', backgroundColor: '#94a3b8', borderRadius: '2px' }}></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Daily Goal Progress Ring */}
          <div className="card tilt-card" style={{ backgroundColor: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <Target size={20} color="#10b981" /> Daily Goal
            </h2>
            
            <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto' }}>
              <svg width="160" height="160" viewBox="0 0 160 160" style={{ transform: 'rotate(-90deg)' }}>
                {/* Background Track */}
                <circle cx="80" cy="80" r="70" fill="none" stroke="var(--muted)" strokeWidth="12" />
                {/* Progress Ring */}
                <circle 
                  cx="80" cy="80" r="70" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="12" 
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 70}`}
                  strokeDashoffset={`${2 * Math.PI * 70 * (1 - dailyProgress / 100)}`}
                  style={{ transition: 'stroke-dashoffset 1.5s ease-in-out' }}
                />
              </svg>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--foreground)', lineHeight: 1 }}>{dailyProgress}%</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', fontWeight: 600 }}>Completed</span>
              </div>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#64748b', fontWeight: 500 }}>
              You're almost there! Complete 1 more task to hit your daily goal.
            </p>
          </div>

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

          {/* Custom Study Reminders */}
          <div className="card tilt-card" style={{ backgroundColor: 'var(--card)', borderRadius: '16px', border: '1px solid var(--border)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--foreground)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={20} color="#8b5cf6" /> Study Reminders
              </h2>
              <button style={{ background: 'none', border: 'none', color: '#3b82f6', fontWeight: 700, cursor: 'pointer', fontSize: '0.875rem' }}>+ Add</button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <div>
                  <div style={{ fontWeight: 700, color: '#0f172a' }}>10 Mins Vocab</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500 }}>Everyday at 8:00 AM</div>
                </div>
                {/* Custom Toggle Switch */}
                <div style={{ width: '40px', height: '22px', backgroundColor: '#10b981', borderRadius: '11px', position: 'relative', cursor: 'pointer' }}>
                  <div style={{ width: '18px', height: '18px', backgroundColor: '#fff', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}></div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', opacity: 0.6 }}>
                <div>
                  <div style={{ fontWeight: 700, color: '#0f172a' }}>Full Mock Test</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500 }}>Saturdays at 10:00 AM</div>
                </div>
                {/* Custom Toggle Switch */}
                <div style={{ width: '40px', height: '22px', backgroundColor: '#cbd5e1', borderRadius: '11px', position: 'relative', cursor: 'pointer' }}>
                  <div style={{ width: '18px', height: '18px', backgroundColor: '#fff', borderRadius: '50%', position: 'absolute', left: '2px', top: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
