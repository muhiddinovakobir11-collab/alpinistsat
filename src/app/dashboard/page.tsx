'use client';

import React, { useState } from 'react';
import { BookOpen, Calendar, Target, CheckCircle2, TrendingUp, Zap, Bell, Flame, Medal, Volume2, Save, X, Moon, Sun, Quote } from 'lucide-react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import styles from './page.module.css';

export default function DashboardPage() {
  const [targetScore, setTargetScore] = useState(1500);
  const [isEditingTarget, setIsEditingTarget] = useState(false);
  const [tempScore, setTempScore] = useState(1500);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleSaveTarget = () => {
    if (tempScore >= 400 && tempScore <= 1600) {
      setTargetScore(tempScore);
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
          <div className="card hover-scale" style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden', padding: 0 }}>
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
            <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #e2e8f0' }}>
              <Bell size={20} color="#2563eb" />
              <div style={{ flex: 1 }}>
                <h4 style={{ color: '#0f172a', fontWeight: 700, fontSize: '0.95rem' }}>August SAT Registration Closes Soon</h4>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Make sure to register on CollegeBoard by July 25th.</p>
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
          <div className="card" style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Flame size={20} color="#f97316" /> Daily Missions
              </h2>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#f97316' }}>3 Days Streak!</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={20} color="#16a34a" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>Solve 10 Math Questions</span>
                    <span style={{ fontSize: '0.85rem', color: '#16a34a', fontWeight: 700 }}>Done</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#16a34a' }}></div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Volume2 size={20} color="#64748b" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>Voice Vocab Practice</span>
                    <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>0/5</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
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
        </div>
      </div>
    </div>
  );
}
