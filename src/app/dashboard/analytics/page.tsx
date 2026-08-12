import { BarChart2, TrendingUp, Clock, CheckCircle, Target, Info } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="fade-in" style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <BarChart2 size={28} color="var(--foreground)" />
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--foreground)' }}>
            <span>Ishlash tahlili</span>
          </h1>
        </div>
        <p style={{ color: 'var(--muted-foreground)', fontSize: '0.95rem' }}>
          <span>SAT imtihonlariga tayyorgarlik jarayonini kuzatib boring va takomillashtirish kerak bo'lgan sohalarni aniqlang.</span>
        </p>
      </div>

      {/* Top Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        
        <div className="animated-border" style={{ padding: '2px' }}>
          <div className="card hover-scale" style={{ backgroundColor: 'var(--card)', padding: '1.5rem', height: '100%', border: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted-foreground)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              <Target size={18} /> <span>Taxminiy ball</span>
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--foreground)', marginBottom: '0.25rem' }}>
              <span>0</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <TrendingUp size={14} /> <span>Ma'lumot yo'q</span>
            </div>
          </div>
        </div>

        <div className="animated-border" style={{ padding: '2px' }}>
          <div className="card hover-scale" style={{ backgroundColor: 'var(--card)', padding: '1.5rem', height: '100%', border: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted-foreground)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              <CheckCircle size={18} /> <span>Savollarga javoblar</span>
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--foreground)', marginBottom: '0.25rem' }}>
              <span>0</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', fontWeight: 600 }}>
              <span>0% aniqlik</span>
            </div>
          </div>
        </div>

        <div className="animated-border" style={{ padding: '2px' }}>
          <div className="card hover-scale" style={{ backgroundColor: 'var(--card)', padding: '1.5rem', height: '100%', border: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted-foreground)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              <Clock size={18} /> <span>Umumiy o'qish vaqti</span>
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--foreground)', marginBottom: '0.25rem' }}>
              <span>0s 0d</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', fontWeight: 600 }}>
              <span>0 ta sessiya davomida</span>
            </div>
          </div>
        </div>
      </div>

      {/* Empty State for Charts */}
      <div className="card float-anim" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', padding: '3rem 2rem', textAlign: 'center', borderRadius: '16px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
          <Info size={32} color="var(--muted-foreground)" />
        </div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '0.5rem' }}>
          <span>Hali yetarli ma'lumot yo'q</span>
        </h2>
        <p style={{ color: 'var(--muted-foreground)', maxWidth: '400px', margin: '0 auto' }}>
          <span>Tahlillar va grafiklar siz ko'proq savollar yechganingizdan va tizimda faol bo'lganingizdan so'ng paydo bo'ladi. Mashq qilishni boshlang!</span>
        </p>
      </div>

    </div>
  );
}
