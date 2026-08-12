'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, ImagePlus } from 'lucide-react';

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string, image?: string}[]>([
    { role: 'ai', text: "Hi! I'm your Alpinist AI Tutor powered by Gemini. Ask me any SAT-related questions or upload an image of a question!" }
  ]);
  const [input, setInput] = useState('');
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() && !imageFile) return;
    
    const userMessage = input.trim();
    const currentImage = imageFile;
    
    setMessages(prev => [...prev, { role: 'user', text: userMessage, image: currentImage || undefined }]);
    setInput('');
    setImageFile(null);
    setIsLoading(true);

    // Get context
    let testContext = null;
    try {
      const data = localStorage.getItem('testResults');
      if (data) {
        const parsed = JSON.parse(data);
        const calculateScaledScore = (c: number, t: number) => Math.round((200 + ((c || 0) / (t || 1)) * 600) / 10) * 10;
        const rs = calculateScaledScore(parsed.correctReading, parsed.totalReading);
        const ms = calculateScaledScore(parsed.correctMath, parsed.totalMath);
        testContext = { readingScore: rs, mathScore: ms, totalScore: rs + ms };
      }
    } catch (e) {}

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, imageBase64: currentImage, testContext })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'ai', text: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: "Error connecting to AI." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="hover-scale bounce-anim"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '30px',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          border: 'none',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
          cursor: 'pointer',
          zIndex: 9999
        }}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fade-in" style={{
          position: 'fixed',
          bottom: '6rem',
          right: '2rem',
          width: '350px',
          height: '500px',
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          zIndex: 9999,
          border: '1px solid #e2e8f0'
        }}>
          {/* Header */}
          <div style={{ padding: '1rem', background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Bot size={24} color="#60a5fa" />
            <span style={{ fontWeight: 700 }}>Alpinist AI Tutor</span>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: '#f8fafc' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ 
                alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
                display: 'flex',
                gap: '0.5rem',
                flexDirection: m.role === 'user' ? 'row-reverse' : 'row'
              }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: m.role === 'user' ? '#3b82f6' : '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {m.role === 'user' ? <User size={16} color="#fff" /> : <Bot size={16} color="#fff" />}
                </div>
                <div style={{ 
                  padding: '0.75rem', 
                  borderRadius: '12px',
                  backgroundColor: m.role === 'user' ? '#3b82f6' : '#fff',
                  color: m.role === 'user' ? '#fff' : '#0f172a',
                  border: m.role === 'user' ? 'none' : '1px solid #e2e8f0',
                  fontSize: '0.875rem',
                  lineHeight: 1.5,
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                }}>
                  {m.image && <img src={m.image} alt="Upload" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: m.text ? '0.5rem' : '0' }} />}
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{ alignSelf: 'flex-start', display: 'flex', gap: '0.5rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Bot size={16} color="#fff" /></div>
                <div style={{ padding: '0.75rem', borderRadius: '12px', backgroundColor: '#fff', border: '1px solid #e2e8f0' }}>Thinking...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Image Preview */}
          {imageFile && (
            <div style={{ padding: '0.5rem 1rem', backgroundColor: '#f1f5f9', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src={imageFile} alt="Preview" style={{ height: '40px', borderRadius: '4px' }} />
              <button onClick={() => setImageFile(null)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '0.75rem' }}><X size={16}/></button>
            </div>
          )}

          {/* Input */}
          <div style={{ padding: '1rem', borderTop: '1px solid #e2e8f0', backgroundColor: '#fff', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <input 
              type="file" 
              accept="image/*" 
              ref={fileInputRef} 
              style={{ display: 'none' }} 
              onChange={handleImageUpload}
            />
            <button 
              onClick={() => fileInputRef.current?.click()}
              style={{ padding: '0.5rem', backgroundColor: '#f1f5f9', color: '#64748b', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
            >
              <ImagePlus size={20} />
            </button>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask a question..."
              style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
            />
            <button 
              onClick={sendMessage}
              disabled={isLoading || (!input.trim() && !imageFile)}
              style={{ padding: '0 1rem', height: '100%', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
