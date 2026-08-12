import AdminSidebar from '@/components/AdminSidebar';
import AdminAuthGuard from '@/components/AdminAuthGuard';
import MobileMenuToggle from '@/components/MobileMenuToggle';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthGuard>
      <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--background)', overflow: 'hidden' }}>
        <AdminSidebar />
        <main className="mobile-w-full" style={{ flex: 1, overflowY: 'auto', padding: '2rem', position: 'relative' }}>
          <div className="mobile-hide" style={{ display: 'none' }} id="mobile-menu-placeholder"></div>
          <MobileMenuToggle sidebarId="admin-sidebar" />
          <div style={{ paddingTop: '2rem' }}>
            {children}
          </div>
        </main>
      </div>
    </AdminAuthGuard>
  );
}
