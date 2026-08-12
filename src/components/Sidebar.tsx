'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Layers, Settings, BookCopy, Book, Brain, BarChart2, HelpCircle, Flame } from 'lucide-react';
import { usePro } from '@/context/ProContext';
import styles from '../app/dashboard/layout.module.css';

export default function Sidebar() {
  const pathname = usePathname();
  const { isPro } = usePro();

  const isActive = (path: string) => pathname === path;

  return (
    <aside id="student-sidebar" className={styles.sidebar} style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflowY: 'auto' }}>
      <div className={styles.logo} style={{ padding: '1.5rem', fontSize: '1.25rem', fontStyle: 'italic', fontWeight: 900 }}>
        ALPINIST SAT
      </div>
      
      <div style={{ padding: '0 1.5rem', fontSize: '0.75rem', color: 'var(--muted-foreground)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
        MENU
      </div>

      <nav className={styles.nav} style={{ padding: '0 1rem', flex: 1 }}>
        <Link href="/dashboard" className={`${styles.navItem} ${isActive('/dashboard') ? styles.navItemActive : ''}`}>
          <Home className={styles.navIcon} />
          <span>Home</span>
        </Link>
        <Link href="/dashboard/practice" className={`${styles.navItem} ${isActive('/dashboard/practice') ? styles.navItemActive : ''}`}>
          <BookOpen className={styles.navIcon} />
          <span>Practice</span>
        </Link>
        <Link href="/dashboard/question-bank" className={`${styles.navItem} ${isActive('/dashboard/question-bank') ? styles.navItemActive : ''}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <BookCopy className={styles.navIcon} />
            <span>Question Bank</span>
          </div>
          <span style={{ fontSize: '0.7rem', backgroundColor: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>Free</span>
        </Link>
        <Link href="/dashboard/classes" className={`${styles.navItem} ${isActive('/dashboard/classes') ? styles.navItemActive : ''}`}>
          <Layers className={styles.navIcon} />
          <span>Classes</span>
        </Link>
        <Link href="/dashboard/vocabulary" className={`${styles.navItem} ${isActive('/dashboard/vocabulary') ? styles.navItemActive : ''}`}>
          <Book className={styles.navIcon} />
          <span>Vocabulary</span>
        </Link>
        <Link href="/dashboard/study-plan" className={`${styles.navItem} ${isActive('/dashboard/study-plan') ? styles.navItemActive : ''}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Brain className={styles.navIcon} />
            <span>Study Plan</span>
          </div>
          <span style={{ fontSize: '0.7rem', backgroundColor: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>AI</span>
        </Link>

        {/* Daily Streak Widget with Animated Border */}
        <div className="animated-border" style={{ marginTop: '2rem', padding: '1rem', color: 'var(--foreground)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 700 }}>
              <Flame size={16} strokeWidth={2.5} /> Daily Streak
            </div>
            <span style={{ fontSize: '0.7rem', color: 'var(--muted-foreground)', fontWeight: 600 }}>ACTIVE</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: 600 }}>1 days</span>
            <span style={{ color: 'var(--muted-foreground)' }}>→ 3</span>
          </div>
          <div style={{ height: '8px', backgroundColor: 'var(--border)', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.75rem' }}>
            <div style={{ width: '33%', height: '100%', backgroundColor: 'var(--foreground)', borderRadius: '4px' }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--muted-foreground)', fontWeight: 500 }}>
            <span>Active today ✓</span>
            <span>2 to go</span>
          </div>
        </div>

        {/* Upgrade Button with Animated Border */}
        {!isPro && (
          <Link href="/dashboard/checkout" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
            <div className="animated-border" style={{ padding: '2px', cursor: 'pointer' }}>
              <div style={{ backgroundColor: 'var(--primary)', padding: '10px', borderRadius: '8px', textAlign: 'center', color: 'var(--primary-foreground)', fontWeight: 700, fontSize: '0.9rem' }}>
                Upgrade to Pro
              </div>
            </div>
          </Link>
        )}

      </nav>

      <div className={styles.sidebarFooter} style={{ padding: '1rem' }}>
        <Link href="/dashboard/analytics" className={styles.navItem} style={{ color: 'var(--muted-foreground)' }}>
          <BarChart2 className={styles.navIcon} size={18} />
          <span style={{ fontSize: '0.875rem' }}>Performance Analytics</span>
        </Link>
        <Link href="/dashboard/support" className={styles.navItem} style={{ color: 'var(--muted-foreground)' }}>
          <HelpCircle className={styles.navIcon} size={18} />
          <span style={{ fontSize: '0.875rem' }}>Support</span>
        </Link>
        <Link href="/dashboard/settings" className={styles.navItem} style={{ color: 'var(--muted-foreground)' }}>
          <Settings className={styles.navIcon} size={18} />
          <span style={{ fontSize: '0.875rem' }}>Settings</span>
        </Link>
      </div>
    </aside>
  );
}
