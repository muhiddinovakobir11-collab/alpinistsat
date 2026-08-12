import Link from 'next/link';
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { Sparkles, ArrowRight, ShieldCheck, Zap, BrainCircuit } from 'lucide-react';

export default async function LandingPage() {
  const { userId } = await auth();

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      backgroundColor: '#0f172a', // Dark base for premium feel
      backgroundImage: 'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)',
      color: '#fff',
      overflow: 'hidden'
    }}>
      
      {/* Background Animated Blobs */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', background: '#3b82f6', filter: 'blur(150px)', opacity: 0.4, animation: 'spin 20s linear infinite' }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: '#8b5cf6', filter: 'blur(150px)', opacity: 0.4, animation: 'spin 25s linear infinite reverse' }} />

      <header className="mobile-col mobile-p-4 mobile-gap-4" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '1.5rem 4rem',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(15, 23, 42, 0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.025em' }}>
          <Link href="/admin" style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}>
            <Sparkles color="#60a5fa" size={24} style={{ cursor: 'pointer' }} />
          </Link>
          ALPINIST <span style={{ color: '#60a5fa' }}>SAT</span>
        </div>
        
        <nav className="mobile-hide" style={{ display: 'flex', gap: '2.5rem', fontWeight: 600, color: '#cbd5e1' }}>
          <Link href="#features" className="hover-scale" style={{ cursor: 'pointer' }}>Features</Link>
          <Link href="#how-it-works" className="hover-scale" style={{ cursor: 'pointer' }}>How it Works</Link>
          <Link href="#pricing" className="hover-scale" style={{ cursor: 'pointer' }}>Pricing</Link>
        </nav>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {!userId ? (
            <>
              <SignInButton mode="modal">
                <button style={{ background: 'none', border: 'none', color: '#fff', fontWeight: 600, padding: '0.5rem 1rem', cursor: 'pointer' }} className="hover-scale">Log In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '30px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)' }} className="hover-scale">
                  Get Started Free
                </button>
              </SignUpButton>
            </>
          ) : (
            <Link href="/dashboard" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '30px', fontWeight: 700, cursor: 'pointer', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)' }} className="hover-scale">
              Go to Dashboard <ArrowRight size={18} />
            </Link>
          )}
        </div>
      </header>

      <main style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '6rem 2rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        
        <div className="fade-in" style={{ 
          background: 'rgba(255,255,255,0.05)', 
          border: '1px solid rgba(255,255,255,0.1)', 
          padding: '0.5rem 1rem', 
          borderRadius: '30px', 
          color: '#93c5fd', 
          fontWeight: 600, 
          fontSize: '0.875rem', 
          marginBottom: '2rem',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#60a5fa', display: 'inline-block' }} className="pulse-anim"></span>
          Digital SAT Ready for 2026
        </div>

        <h1 className="fade-in mobile-text-4xl" style={{ 
          fontSize: '5.5rem', 
          fontWeight: 900, 
          lineHeight: 1.1, 
          letterSpacing: '-0.03em',
          maxWidth: '900px',
          marginBottom: '1.5rem',
          background: 'linear-gradient(to right, #ffffff, #93c5fd)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animationDelay: '0.1s'
        }}>
          Dominate the <span style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Digital SAT</span>
        </h1>
        
        <p className="fade-in" style={{ 
          fontSize: '1.25rem', 
          color: '#cbd5e1', 
          maxWidth: '700px',
          marginBottom: '3.5rem',
          lineHeight: 1.6,
          fontWeight: 500,
          animationDelay: '0.2s'
        }}>
          Experience the most advanced AI-powered SAT prep platform. Featuring exact Bluebook™ replication, adaptive scoring, and dynamic weakness targeting.
        </p>

        <div className="fade-in" style={{ display: 'flex', gap: '1.5rem', animationDelay: '0.3s' }}>
          {!userId ? (
            <SignUpButton mode="modal">
              <button className="hover-scale" style={{ background: '#fff', color: '#0f172a', border: 'none', padding: '1.25rem 3rem', fontSize: '1.25rem', borderRadius: '30px', fontWeight: 800, cursor: 'pointer', boxShadow: '0 10px 30px -10px rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Start Practicing Free <ArrowRight size={24} />
              </button>
            </SignUpButton>
          ) : (
            <Link href="/dashboard" className="hover-scale" style={{ background: '#fff', color: '#0f172a', textDecoration: 'none', padding: '1.25rem 3rem', fontSize: '1.25rem', borderRadius: '30px', fontWeight: 800, cursor: 'pointer', boxShadow: '0 10px 30px -10px rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Launch Dashboard <ArrowRight size={24} />
            </Link>
          )}
        </div>

        {/* Feature Cards in Glassmorphism */}
        <div id="features" className="fade-in mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '6rem', maxWidth: '1200px', width: '100%', animationDelay: '0.5s' }}>
          
          <div className="hover-scale" style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '24px', textAlign: 'left' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#60a5fa' }}>
              <ShieldCheck size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Official Format</h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>100% accurate Bluebook UI replication including modules, breaks, and Desmos integration.</p>
          </div>

          <div className="hover-scale" style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '24px', textAlign: 'left' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(139, 92, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#a78bfa' }}>
              <BrainCircuit size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>AI Analytics</h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>Radar charts, targeted weakness analysis, and intelligent voice-to-text vocabulary practice.</p>
          </div>

          <div className="hover-scale" style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '24px', textAlign: 'left' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(245, 158, 11, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#fbbf24' }}>
              <Zap size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Scaled Scoring</h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>Get accurate 400-1600 scaled scores based on advanced IRT (Item Response Theory) curves.</p>
          </div>
        </div>

        {/* How It Works Section */}
        <section id="how-it-works" className="mobile-p-4" style={{ marginTop: '8rem', maxWidth: '1200px', width: '100%', textAlign: 'center' }}>
          <h2 className="mobile-text-4xl" style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '4rem' }}>How It Works</h2>
          <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '4rem', fontWeight: 900, color: '#3b82f6', opacity: 0.5, marginBottom: '1rem' }}>1</div>
              <h4 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 700 }}>Sign Up Free</h4>
              <p style={{ color: '#94a3b8' }}>Create your account instantly and get access to your dashboard.</p>
            </div>
            <div>
              <div style={{ fontSize: '4rem', fontWeight: 900, color: '#a78bfa', opacity: 0.5, marginBottom: '1rem' }}>2</div>
              <h4 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 700 }}>Take a Mock Test</h4>
              <p style={{ color: '#94a3b8' }}>Experience the digital SAT in a realistic environment.</p>
            </div>
            <div>
              <div style={{ fontSize: '4rem', fontWeight: 900, color: '#fbbf24', opacity: 0.5, marginBottom: '1rem' }}>3</div>
              <h4 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 700 }}>Get AI Feedback</h4>
              <p style={{ color: '#94a3b8' }}>Review your mistakes with our integrated AI Tutor.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="mobile-p-4" style={{ marginTop: '8rem', marginBottom: '4rem', maxWidth: '1200px', width: '100%', textAlign: 'center' }}>
          <h2 className="mobile-text-4xl" style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '4rem' }}>Simple Pricing</h2>
          <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            
            <div className="hover-scale" style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', padding: '3rem', borderRadius: '24px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Free Plan</h3>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '2rem' }}>$0<span style={{ fontSize: '1rem', color: '#94a3b8' }}>/mo</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', textAlign: 'left', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li>✓ 1 Full Mock Test</li>
                <li>✓ Basic Analytics</li>
                <li>✓ Limited Vocabulary</li>
              </ul>
              {!userId ? (
                <SignUpButton mode="modal">
                  <button style={{ width: '100%', background: 'transparent', color: '#fff', border: '1px solid #fff', padding: '1rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>Start Free</button>
                </SignUpButton>
              ) : (
                <Link href="/dashboard" style={{ display: 'block', width: '100%', background: 'transparent', color: '#fff', border: '1px solid #fff', padding: '1rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', textDecoration: 'none' }}>Go to Dashboard</Link>
              )}
            </div>

            <div className="hover-scale" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))', backdropFilter: 'blur(20px)', border: '1px solid #60a5fa', padding: '3rem', borderRadius: '24px', textAlign: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: '#3b82f6', color: '#fff', padding: '4px 16px', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 700 }}>Most Popular</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Pro Plan</h3>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '2rem' }}>$29<span style={{ fontSize: '1rem', color: '#94a3b8' }}>/mo</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', textAlign: 'left', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li>✓ Unlimited Mock Tests</li>
                <li>✓ Advanced AI Tutor Chatbot</li>
                <li>✓ Voice-to-Text Vocabulary</li>
                <li>✓ Multiplayer Duels</li>
              </ul>
              {!userId ? (
                <SignUpButton mode="modal">
                  <button style={{ width: '100%', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: '#fff', border: 'none', padding: '1rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>Upgrade to Pro</button>
                </SignUpButton>
              ) : (
                <Link href="/dashboard/checkout" style={{ display: 'block', width: '100%', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: '#fff', border: 'none', padding: '1rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', textDecoration: 'none' }}>Upgrade to Pro</Link>
              )}
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
