import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import styles from "./layout.module.css";
import AIChatWidget from "@/components/AIChatWidget";
import MobileMenuToggle from "@/components/MobileMenuToggle";

export default async function DashboardLayout({
  children,
}) {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/');
  }

  return (
    <div className={styles.dashboardContainer} style={{ position: 'relative' }}>
      <Sidebar />
      <div className={styles.mainContent}>
        <div className="mobile-hide" style={{ display: 'none' }} id="mobile-menu-placeholder"></div>
        <MobileMenuToggle sidebarId="student-sidebar" />
        <header className={styles.header} style={{ paddingLeft: '4rem' }}>
          <div className={styles.headerTitle}>
            August Predictions Available - Start Practicing!
          </div>
          <div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </header>
        <main className={styles.pageContainer}>{children}</main>
        <AIChatWidget />
      </div>
    </div>
  );
}
