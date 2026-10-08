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
      <div className="contact-magazine-layout">
        
        {/* Asymmetric Magazine-Style Final Page Grid */}
        <div className="contact-grid">
          
          {/* =========================================================
              LEFT COLUMN: Magazine Headline, Big Email, Actions & Socials
              ========================================================= */}
          <div className="contact-hero-col">
            <span className="contact-kicker-tag">FINAL SECTION // GET IN TOUCH</span>

            {/* Large Magazine Statement per prompt section 17 */}
            <h3 className="contact-magazine-title">
              <span>LET’S BUILD</span>
              <span>SOMETHING</span>
              <span className="contact-highlight">USEFUL.</span>
            </h3>

            <p className="contact-lead-text">
              I’m always open to discussing web engineering projects, technical collaborations, software engineering internships, or full stack opportunities.
            </p>

            {/* Direct Email Display */}
            <div className="contact-email-station">
              <span className="contact-email-tag">DIRECT EMAIL:</span>
              <a
                href={`mailto:${site.email}`}
                className="contact-large-email"
              >
                {site.email}
              </a>
            </div>

            {/* Primary Action Buttons */}
            <div className="contact-buttons-row">
              <a
                href={`mailto:${site.email}?subject=Hello%20Ayush`}
                className="btn-editorial-primary"
              >
                <span>EMAIL ME</span>
                <span className="btn-arrow">&rarr;</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn-editorial-secondary"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'EMAIL COPIED' : 'COPY EMAIL'}</span>
              </button>
            </div>

            {/* Large Editorial Links: GitHub & LinkedIn */}
            <div className="contact-editorial-links">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-editorial-link"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GITHUB &rarr;</span>
              </a>

              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-editorial-link"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LINKEDIN &rarr;</span>
              </a>
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
                  <label htmlFor="contact-name" className="dispatch-label">NAME</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name or team"
                    className="dispatch-input"
                  />
                </div>

                <div className="dispatch-field">
                  <label htmlFor="contact-email" className="dispatch-label">EMAIL</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@domain.com"
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
                    placeholder="Project details or role overview..."
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
          gap: clamp(36px, 5vw, 64px);
          align-items: flex-start;
        }

        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1.35fr 0.95fr;
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
          font-size: clamp(14.5px, 1.1vw, 16px);
          line-height: 1.65;
          color: var(--text-secondary);
          margin: 0 0 clamp(24px, 3.2vh, 32px);
          max-width: 52ch;
        }

        .contact-email-station {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-bottom: 22px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 22px;
        }

        .contact-email-tag {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          color: var(--accent);
          font-weight: 700;
        }

        .contact-large-email {
          font-family: var(--font-display);
          font-size: clamp(1.3rem, 2.3vw, 1.9rem);
          font-weight: 700;
          color: var(--text-primary);
          text-decoration: underline;
          text-decoration-color: var(--border-strong);
          text-underline-offset: 6px;
          word-break: break-all;
          transition: text-decoration-color 0.2s ease, color 0.2s ease;
        }

        .contact-large-email:hover {
          color: var(--accent);
          text-decoration-color: var(--accent);
        }

        .contact-buttons-row {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 26px;
        }

        .contact-editorial-links {
          display: flex;
          align-items: center;
          gap: 24px;
          padding-top: 18px;
          border-top: 1px solid var(--border);
        }

        .contact-editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .contact-editorial-link:hover {
          color: var(--accent);
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
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        .dispatch-badge {
          font-family: var(--font-mono);
          font-size: 9.5px;
          color: var(--accent);
          background: var(--accent-light);
          padding: 2px 7px;
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
          gap: 4px;
        }

        .dispatch-label {
          font-family: var(--font-mono);
          font-size: 9.5px;
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
          font-size: 13.5px;
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
