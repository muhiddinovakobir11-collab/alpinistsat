import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import styles from "./layout.module.css";
import ClientEffects from "@/components/ClientEffects";
import AIChatWidget from "@/components/AIChatWidget";
import MobileMenuToggle from "@/components/MobileMenuToggle";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/');
  }

  return (
    <div className={styles.dashboardContainer} style={{ position: 'relative' }}>
      <ClientEffects />

      {/* Ambient Animated Background */}
      <div className="ambient-bg"></div>

      <Sidebar />
      <div className={styles.mainContent}>
        {/* Marquee Ticker */}
        <div className="marquee-container">
          <div className="marquee-content">
            <div className="marquee-item">🏆 Rustam G. - 1520 ball</div>
            <div className="marquee-item">🚀 Malika B. - 1480 ball</div>
            <div className="marquee-item">🔥 Jasur T. - 10 kunlik streak</div>
            <div className="marquee-item">⭐ Alisher K. - Math 800</div>
            <div className="marquee-item">💡 Sevara A. - 1550 ball</div>
            {/* Duplicate for infinite loop effect */}
            <div className="marquee-item">🏆 Rustam G. - 1520 ball</div>
            <div className="marquee-item">🚀 Malika B. - 1480 ball</div>
            <div className="marquee-item">🔥 Jasur T. - 10 kunlik streak</div>
            <div className="marquee-item">⭐ Alisher K. - Math 800</div>
            <div className="marquee-item">💡 Sevara A. - 1550 ball</div>
          </div>
        </div>
        <div className="mobile-hide" style={{ display: 'none' }} id="mobile-menu-placeholder"></div>
        <MobileMenuToggle sidebarId="student-sidebar" />
        <header className={styles.header} style={{ paddingLeft: '4rem' }}>
          <div className={styles.headerTitle}>
            August Predictions Available - Start Practicing!
          </div>
          <div>
            <UserButton />
          </div>
        </header>
        <main className={styles.pageContainer}>{children}</main>
        <AIChatWidget />
      </div>
    </div>
  );
}
