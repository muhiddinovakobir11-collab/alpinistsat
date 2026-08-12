'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Bot, Ticket, CreditCard, Settings, LogOut, BarChart3, DollarSign, Megaphone, MessageSquare, GraduationCap, Trophy, Book } from 'lucide-react';
import styles from '../app/dashboard/layout.module.css'; // Reusing dashboard styles

export default function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <aside id="admin-sidebar" className={styles.sidebar} style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#fff', borderRight: '1px solid #e2e8f0' }}>
      <div className={styles.logo} style={{ padding: '1.5rem', fontSize: '1.25rem', fontWeight: 900, color: '#1d4ed8' }}>
        ADMIN PANEL
      </div>
      
      <div style={{ padding: '0 1.5rem', fontSize: '0.75rem', color: 'var(--muted-foreground)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
        MANAGEMENT
      </div>

      <nav className={styles.nav} style={{ padding: '0 1rem', flex: 1 }}>
        <Link href="/admin" className={`${styles.navItem} ${isActive('/admin') ? styles.navItemActive : ''}`}>
          <LayoutDashboard className={styles.navIcon} />
          <span>Overview (Stats)</span>
        </Link>
        <Link href="/admin/generator" className={`${styles.navItem} ${isActive('/admin/generator') ? styles.navItemActive : ''}`}>
          <Bot className={styles.navIcon} />
          <span>AI Generator</span>
        </Link>
        <Link href="/admin/support" className={`${styles.navItem} ${isActive('/admin/support') ? styles.navItemActive : ''}`}>
          <Ticket className={styles.navIcon} />
          <span>Support Tickets</span>
        </Link>
        <Link href="/admin/pricing" className={`${styles.navItem} ${isActive('/admin/pricing') ? styles.navItemActive : ''}`}>
          <CreditCard className={styles.navIcon} />
          <span>Pricing (Stripe)</span>
        </Link>
        <Link href="/admin/vocabulary" className={`${styles.navItem} ${isActive('/admin/vocabulary') ? styles.navItemActive : ''}`}>
          <Book className={styles.navIcon} />
          <span>Vocabulary DB</span>
        </Link>
        <Link href="/admin/analytics" className={`${styles.navItem} ${isActive('/admin/analytics') ? styles.navItemActive : ''}`}>
          <BarChart3 className={styles.navIcon} />
          <span>Analytics & Heatmaps</span>
        </Link>
        <Link href="/admin/finance" className={`${styles.navItem} ${isActive('/admin/finance') ? styles.navItemActive : ''}`}>
          <DollarSign className={styles.navIcon} />
          <span>Finance Dashboard</span>
        </Link>
        <Link href="/admin/announcements" className={`${styles.navItem} ${isActive('/admin/announcements') ? styles.navItemActive : ''}`}>
          <Megaphone className={styles.navIcon} />
          <span>Announcements</span>
        </Link>
        <Link href="/admin/tutor-logs" className={`${styles.navItem} ${isActive('/admin/tutor-logs') ? styles.navItemActive : ''}`}>
          <MessageSquare className={styles.navIcon} />
          <span>AI Tutor Logs</span>
        </Link>
        <Link href="/admin/colleges" className={`${styles.navItem} ${isActive('/admin/colleges') ? styles.navItemActive : ''}`}>
          <GraduationCap className={styles.navIcon} />
          <span>College Matcher DB</span>
        </Link>
        <Link href="/admin/tournaments" className={`${styles.navItem} ${isActive('/admin/tournaments') ? styles.navItemActive : ''}`}>
          <Trophy className={styles.navIcon} />
          <span>1v1 Tournaments</span>
        </Link>
      </nav>

      <div className={styles.sidebarFooter} style={{ padding: '1rem' }}>
        <Link href="/admin/settings" className={`${styles.navItem} ${isActive('/admin/settings') ? styles.navItemActive : ''}`} style={{ color: isActive('/admin/settings') ? '' : 'var(--muted-foreground)' }}>
          <Settings className={styles.navIcon} size={18} />
          <span style={{ fontSize: '0.875rem' }}>Admin Settings</span>
        </Link>
        <Link href="/dashboard" className={styles.navItem} style={{ color: '#ef4444' }}>
          <LogOut className={styles.navIcon} size={18} />
          <span style={{ fontSize: '0.875rem' }}>Exit to App</span>
        </Link>
      </div>
    </aside>
  );
}
