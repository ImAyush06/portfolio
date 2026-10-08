import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { site } from '@/data/site';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { SectionShell } from '@/components/layout/SectionShell';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Ayush,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 400);
  };

  return (
    <SectionShell id="contact" label="CONTACT">
      <div className="contact-magazine-layout">
        
        {/* Asymmetric Magazine-Style Contact Grid */}
        <div className="contact-grid">
          
          {/* =========================================================
              LEFT COLUMN: Headline & ONLY Mail, GitHub, LinkedIn Icons
              ========================================================= */}
          <div className="contact-hero-col">
            <span className="contact-kicker-tag">GET IN TOUCH</span>

            <h3 className="contact-magazine-title">
              <span>LET’S BUILD</span>
              <span>SOMETHING</span>
              <span className="contact-highlight">USEFUL.</span>
            </h3>

            <p className="contact-lead-text">
              I’m open to software engineering internships, full stack opportunities, and technical discussions. Feel free to connect directly.
            </p>

            {/* ONLY Mail, GitHub, LinkedIn Icons per user request */}
            <div className="contact-social-station">
              <span className="contact-social-label">CONNECT:</span>
              <div className="contact-rounded-icons">
                <a
                  href={`mailto:${site.email}`}
                  className="contact-circle-btn"
                  title="Direct Email"
                  aria-label="Direct Email"
                >
                  <Mail className="w-5 h-5" />
                </a>

                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-circle-btn"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-circle-btn"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN: Clean Note Dispatch Panel
              ========================================================= */}
          <div className="contact-dispatch-col">
            <div className="contact-dispatch-card">
              <div className="dispatch-card-header">
                <span className="dispatch-title">DISPATCH A NOTE</span>
                <span className="dispatch-badge">DIRECT</span>
              </div>

              <form onSubmit={handleSubmit} className="dispatch-form">
                <div className="dispatch-field">
                  <label htmlFor="contact-name" className="dispatch-label">YOUR NAME</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name or organization"
                    className="dispatch-input"
                  />
                </div>

                <div className="dispatch-field">
                  <label htmlFor="contact-email" className="dispatch-label">EMAIL ADDRESS</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="dispatch-input"
                  />
                </div>

                <div className="dispatch-field">
                  <label htmlFor="contact-message" className="dispatch-label">MESSAGE</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Details about project, role, or collaboration..."
                    className="dispatch-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-editorial-primary dispatch-submit-btn"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{status === 'sending' ? 'PREPARING MAIL...' : status === 'success' ? 'OPENING CLIENT...' : 'SEND MESSAGE'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .contact-magazine-layout {
          width: 100%;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(32px, 5vw, 60px);
          align-items: flex-start;
        }

        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1.3fr 1fr;
          }
        }

        /* Left Hero Column */
        .contact-hero-col {
          display: flex;
          flex-direction: column;
        }

        .contact-kicker-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--accent);
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .contact-magazine-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5.2vw, 4.4rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          color: var(--text-primary);
          line-height: 1.02;
          margin: 0 0 clamp(16px, 2.5vh, 22px);
          display: flex;
          flex-direction: column;
        }

        .contact-highlight {
          color: var(--accent); /* Olive */
        }

        .contact-lead-text {
          font-family: var(--font-body);
          font-size: clamp(15px, 1.15vw, 16.5px);
          line-height: 1.65;
          color: var(--text-secondary);
          margin: 0 0 clamp(24px, 3.5vh, 32px);
          max-width: 52ch;
        }

        /* ONLY Icons Station */
        .contact-social-station {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }

        .contact-social-label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.1em;
        }

        .contact-rounded-icons {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-circle-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text-primary);
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .contact-circle-btn:hover {
          background: var(--accent);
          border-color: var(--accent);
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(104, 122, 69, 0.2);
        }

        /* Right Dispatch Column */
        .contact-dispatch-col {
          display: flex;
          flex-direction: column;
        }

        .contact-dispatch-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: clamp(20px, 3vw, 28px);
          box-shadow: 0 2px 14px rgba(0, 0, 0, 0.02);
        }

        .dispatch-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 16px;
        }

        .dispatch-title {
          font-family: var(--font-mono);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        .dispatch-badge {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--accent);
          background: var(--accent-light);
          padding: 2px 8px;
          border-radius: var(--radius-xs);
          font-weight: 700;
        }

        .dispatch-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .dispatch-field {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .dispatch-label {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          font-weight: 700;
        }

        .dispatch-input,
        .dispatch-textarea {
          width: 100%;
          background: var(--bg-0);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 10px 12px;
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--text-primary);
          outline: none;
          transition: border-color 0.15s ease;
          box-sizing: border-box;
        }

        .dispatch-input:focus,
        .dispatch-textarea:focus {
          border-color: var(--accent);
          background: var(--surface-raised);
        }

        .dispatch-submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 4px;
        }
      `}</style>
    </SectionShell>
  );
}
