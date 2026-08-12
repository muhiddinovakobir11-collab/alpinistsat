'use client';

import { useState } from 'react';
import { UploadCloud, Bot, CheckCircle, FileText, ArrowRight } from 'lucide-react';
import { uploadPdfMock } from '../actions';
import Link from 'next/link';

export default function GeneratorPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [extractedTests, setExtractedTests] = useState<any[]>([]);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    
    // Server action qaytargan yangi savollarni olamiz
    const results = await uploadPdfMock(formData);
    
    setExtractedTests(results);
    setIsUploading(false);
    setSuccess(true);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="card fade-in" style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <Bot size={28} color="#2563eb" className="bounce-anim" />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a' }}>AI Question Generator</h2>
        </div>
        <p style={{ color: '#64748b', marginBottom: '2rem', lineHeight: 1.6 }}>
          Upload a PDF document containing SAT questions and answers. The AI will automatically parse the document, extract the logic, and add the tests to your Question Bank.
        </p>

        {!success ? (
          <form onSubmit={handleUpload}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Extraction Mode</label>
              <select name="mode" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '1rem', backgroundColor: '#f8fafc', fontWeight: 600 }}>
                <option value="bank">Add to Question Bank (Individual Questions)</option>
                <option value="full_mock">Add as Full Mock Test (Practice Test)</option>
              </select>
            </div>

            <div className="hover-scale" style={{ border: '2px dashed #cbd5e1', borderRadius: '12px', padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#f8fafc', marginBottom: '1.5rem', cursor: 'pointer', transition: 'all 0.3s' }}>
              <UploadCloud size={48} color="#94a3b8" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Drag & drop your PDF here</h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1rem' }}>or click to browse from your computer</p>
              <input type="file" name="pdf" accept=".pdf" required style={{ display: 'block', margin: '0 auto', cursor: 'pointer' }} />
            </div>

            <button type="submit" disabled={isUploading} className="hover-scale" style={{ width: '100%', padding: '1rem', background: 'linear-gradient(90deg, #1d4ed8 0%, #3b82f6 100%)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '1rem', cursor: isUploading ? 'not-allowed' : 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', transition: 'all 0.3s' }}>
              {isUploading ? (
                <><Bot size={20} className="pulse-anim" /> AI is parsing the PDF and extracting tests...</>
              ) : (
                <>Generate Tests with AI</>
              )}
            </button>
          </form>
        ) : (
          <div className="fade-in">
            <div style={{ textAlign: 'center', padding: '2rem', border: '1px solid #bbf7d0', backgroundColor: '#f0fdf4', borderRadius: '12px', marginBottom: '2rem' }}>
              <CheckCircle size={48} color="#166534" className="bounce-anim" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#166534', marginBottom: '0.5rem' }}>Tests Successfully Extracted!</h3>
              <p style={{ color: '#15803d', fontSize: '0.95rem' }}>The AI found {extractedTests.length} questions and successfully added them to your Question Bank.</p>
            </div>

            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '2rem' }}>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileText size={18} /> Recently Added AI Questions
              </h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {extractedTests.map((q, idx) => (
                  <div key={idx} className="hover-scale" style={{ padding: '1.25rem', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f8fafc', transition: 'all 0.2s' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2563eb', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{q.section}</div>
                    <div style={{ fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>{q.questionText}</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.875rem' }}>
                      {q.options.map((opt: string, i: number) => (
                        <div key={i} style={{ padding: '6px 12px', border: '1px solid #cbd5e1', borderRadius: '4px', backgroundColor: opt === q.correctAnswer ? '#dcfce7' : '#fff', borderColor: opt === q.correctAnswer ? '#22c55e' : '#cbd5e1' }}>
                          {opt} {opt === q.correctAnswer && '✓'}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => setSuccess(false)} style={{ flex: 1, padding: '12px', backgroundColor: '#f1f5f9', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
                  Upload Another PDF
                </button>
                <Link href="/dashboard/question-bank" style={{ flex: 1, textDecoration: 'none' }}>
                  <button className="hover-scale" style={{ width: '100%', padding: '12px', backgroundColor: '#0f172a', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                    View in Question Bank <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
