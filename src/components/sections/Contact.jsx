import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Send } from 'lucide-react';
import { site } from '@/data/site';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { SectionShell } from '@/components/layout/SectionShell';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle');

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

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
      <div className="contact-editorial-wrap">
        
        {/* 8 / 4 Asymmetric Grid */}
        <div className="contact-layout-grid">
          
          {/* =========================================================
              LEFT COLUMN (8 COLS): Primary Conversation Call
              ========================================================= */}
          <div className="contact-primary-col">
            <span className="contact-kicker">INITIATE CONVERSATION</span>
            
            <h3 className="contact-headline">
              LET’S TALK.
            </h3>

            <p className="contact-narrative">
              I’m always open to discussing web engineering projects, technical collaborations, software engineering internships, or full stack opportunities.
            </p>

            {/* Direct Email Presentation */}
            <div className="contact-email-block">
              <span className="contact-email-label">DIRECT EMAIL ADDRESS</span>
              <a
                href={`mailto:${site.email}`}
                className="contact-email-link"
              >
                {site.email}
              </a>
            </div>

            {/* Direct Actions: Email Me, Copy, GitHub, LinkedIn */}
            <div className="contact-actions-row">
              <a
                href={`mailto:${site.email}?subject=Hello%20Ayush`}
                className="contact-btn-primary"
              >
                <span>EMAIL ME</span>
                <span className="contact-btn-arrow">&rarr;</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="contact-btn-copy"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'EMAIL COPIED' : 'COPY EMAIL'}</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="contact-social-row">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GITHUB &rarr;</span>
              </a>

              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LINKEDIN &rarr;</span>
              </a>
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN (4 COLS): Clean Secondary Direct Note Form
              ========================================================= */}
          <div className="contact-form-col">
            <div className="contact-note-card">
              <div className="contact-card-header">
                <span className="contact-card-title">SEND A QUICK NOTE</span>
                <span className="contact-card-badge">DIRECT</span>
              </div>

              <form onSubmit={handleSubmit} className="contact-actual-form">
                <div className="contact-form-group">
                  <label htmlFor="contact-name" className="contact-field-label">YOUR NAME</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ayush or Recruiter"
                    className="contact-field-input"
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="contact-email" className="contact-field-label">YOUR EMAIL</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="contact-field-input"
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="contact-message" className="contact-field-label">MESSAGE</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Brief note or opportunity details..."
                    className="contact-field-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="contact-submit-btn"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{status === 'sending' ? 'PREPARING MAIL...' : status === 'success' ? 'OPENING CLIENT...' : 'DISPATCH NOTE'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .contact-editorial-wrap {
          width: 100%;
        }

        .contact-layout-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(36px, 5vw, 64px);
          align-items: flex-start;
        }

        @media (min-width: 992px) {
          .contact-layout-grid {
            grid-template-columns: 1.35fr 0.95fr;
          }
        }

        /* Left Column */
        .contact-primary-col {
          display: flex;
          flex-direction: column;
        }

        .contact-kicker {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--accent);
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .contact-headline {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          color: var(--text-primary);
          line-height: 1.05;
          margin: 0 0 clamp(16px, 2.5vh, 22px);
        }

        .contact-narrative {
          font-family: var(--font-body);
          font-size: clamp(15px, 1.15vw, 16.5px);
          line-height: 1.65;
          color: var(--text-secondary);
          margin: 0 0 clamp(24px, 3vh, 32px);
          max-width: 54ch;
        }

        .contact-email-block {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 24px;
        }

        .contact-email-label {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
        }

        .contact-email-link {
          font-family: var(--font-display);
          font-size: clamp(1.25rem, 2.2vw, 1.85rem);
          font-weight: 700;
          color: var(--text-primary);
          text-decoration: underline;
          text-decoration-color: var(--border-strong);
          text-underline-offset: 6px;
          word-break: break-all;
          transition: text-decoration-color 0.2s ease, color 0.2s ease;
        }

        .contact-email-link:hover {
          color: var(--accent);
          text-decoration-color: var(--accent);
        }

        .contact-actions-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .contact-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: var(--accent);
          color: #FFFFFF;
          border: 1px solid var(--accent);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-decoration: none;
          transition: all 0.15s ease;
          box-shadow: 0 2px 8px rgba(94, 127, 104, 0.2);
        }

        .contact-btn-primary:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
        }

        .contact-btn-arrow {
          transition: transform 0.2s ease;
        }

        .contact-btn-primary:hover .contact-btn-arrow {
          transform: translateX(3px);
        }

        .contact-btn-copy {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 12px 20px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .contact-btn-copy:hover {
          background: var(--bg-secondary);
          border-color: var(--text-secondary);
        }

        .contact-social-row {
          display: flex;
          align-items: center;
          gap: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }

        .contact-social-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          color: var(--text-primary);
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .contact-social-link:hover {
          color: var(--accent);
        }

        /* Right Column: Note Card */
        .contact-note-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(20px, 3vw, 28px);
          box-shadow: 0 2px 14px rgba(0, 0, 0, 0.02);
        }

        .contact-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 18px;
        }

        .contact-card-title {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        .contact-card-badge {
          font-family: var(--font-mono);
          font-size: 9.5px;
          color: var(--accent);
          background: var(--accent-soft);
          padding: 2px 7px;
          border-radius: var(--radius-xs);
          font-weight: 600;
        }

        .contact-actual-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contact-form-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .contact-field-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .contact-field-input,
        .contact-field-textarea {
          width: 100%;
          background: var(--bg-0);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 10px 14px;
          font-family: var(--font-body);
          font-size: 13.5px;
          color: var(--text-primary);
          outline: none;
          transition: border-color 0.15s ease;
          box-sizing: border-box;
        }

        .contact-field-input:focus,
        .contact-field-textarea:focus {
          border-color: var(--accent);
          background: #FFFFFF;
        }

        .contact-submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 18px;
          background: var(--accent);
          color: #FFFFFF;
          border: 1px solid var(--accent);
          border-radius: var(--radius-xs);
          font-family: var(--font-mono);
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: all 0.15s ease;
          margin-top: 4px;
        }

        .contact-submit-btn:hover {
          background: var(--accent-hover);
        }
      `}</style>
    </SectionShell>
  );
}
