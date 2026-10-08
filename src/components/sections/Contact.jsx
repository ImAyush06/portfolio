import React, { useState } from 'react';
import { Mail, Send, Copy, Check, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { site } from '@/data/site';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { SectionShell } from '@/components/layout/SectionShell';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
      }, 3500);
    }, 600);
  };

  return (
    <SectionShell id="contact" label="CONTACT">
      <div style={{ maxWidth: '100%' }}>
        
        {/* Editorial Lead Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 44px)' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '3px 12px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(245, 158, 11, 0.08)',
              border: '1px solid var(--line-amber)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--amber)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              marginBottom: '14px',
            }}
          >
            <Sparkles className="w-3 h-3" />
            <span>GET IN TOUCH</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              margin: '0 0 12px',
            }}
          >
            Let&apos;s Build{' '}
            <span
              style={{
                background: 'var(--duo-text-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Something Useful
            </span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(13px, 1.1vw, 15px)',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              maxWidth: '580px',
              margin: '0 auto',
            }}
          >
            I&apos;m always interested in building scalable software systems, solving complex algorithmic problems, and exploring engineering collaborations.
          </p>
        </div>

        {/* Two-Card Balanced Interactive Grid */}
        <div className="contact-two-card-grid">
          
          {/* LEFT CARD: Connect Directly */}
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: 'clamp(20px, 3vw, 32px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 16px 40px -16px rgba(0, 0, 0, 0.65)',
            }}
            className="contact-card"
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                  margin: '0 0 8px',
                }}
              >
                Connect Directly
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  lineHeight: 1.55,
                  color: 'var(--text-secondary)',
                  margin: '0 0 24px',
                }}
              >
                Whether you have an engineering query, a project discussion, or an opportunity, reach out through any of these platforms:
              </p>

              {/* Three Sleek Interactive Channel Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                
                {/* Email Channel */}
                <div
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease',
                  }}
                  className="channel-item-card"
                >
                  <a
                    href={`mailto:${site.email}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      textDecoration: 'none',
                      color: 'inherit',
                      overflow: 'hidden',
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-xs)',
                        background: 'rgba(245, 158, 11, 0.1)',
                        border: '1px solid var(--line-amber)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Mail className="w-4 h-4" style={{ color: 'var(--amber)' }} />
                    </div>

                    <div style={{ overflow: 'hidden' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--muted)', display: 'block' }}>
                        Email
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '12px',
                          color: 'var(--text-primary)',
                          display: 'block',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {site.email}
                      </span>
                    </div>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    style={{
                      background: copied ? 'var(--amber)' : 'var(--bg-0)',
                      border: '1px solid var(--line)',
                      color: copied ? 'var(--bg-0)' : 'var(--muted)',
                      borderRadius: 'var(--radius-xs)',
                      padding: '4px 8px',
                      fontSize: '10px',
                      fontFamily: 'var(--font-mono)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginLeft: '8px',
                      flexShrink: 0,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>

                {/* GitHub Channel */}
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.2s ease',
                  }}
                  className="channel-item-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-xs)',
                        background: 'rgba(139, 92, 246, 0.1)',
                        border: '1px solid var(--line-violet)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <GithubIcon className="w-4 h-4" style={{ color: 'var(--violet)' }} />
                    </div>

                    <div style={{ overflow: 'hidden' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--muted)', display: 'block' }}>
                        GitHub
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '12px',
                          color: 'var(--text-primary)',
                          display: 'block',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        github.com/ImAyush06
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4" style={{ color: 'var(--muted)' }} />
                </a>

                {/* LinkedIn Channel */}
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.2s ease',
                  }}
                  className="channel-item-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-xs)',
                        background: 'rgba(245, 158, 11, 0.1)',
                        border: '1px solid var(--line-amber)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <LinkedinIcon className="w-4 h-4" style={{ color: 'var(--amber)' }} />
                    </div>

                    <div style={{ overflow: 'hidden' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--muted)', display: 'block' }}>
                        LinkedIn
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '12px',
                          color: 'var(--text-primary)',
                          display: 'block',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        linkedin.com/in/ayushkumar066
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4" style={{ color: 'var(--muted)' }} />
                </a>

              </div>
            </div>
          </div>

          {/* RIGHT CARD: Send a Message Form */}
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: 'clamp(20px, 3vw, 32px)',
              boxShadow: '0 16px 40px -16px rgba(0, 0, 0, 0.65)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            className="contact-card"
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                  margin: '0 0 16px',
                }}
              >
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--muted)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--surface)',
                      border: '1px solid var(--line)',
                      borderRadius: 'var(--radius-xs)',
                      padding: '10px 14px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    className="contact-input"
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--muted)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--surface)',
                      border: '1px solid var(--line)',
                      borderRadius: 'var(--radius-xs)',
                      padding: '10px 14px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    className="contact-input"
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--muted)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, idea, or role details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--surface)',
                      border: '1px solid var(--line)',
                      borderRadius: 'var(--radius-xs)',
                      padding: '10px 14px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease',
                    }}
                    className="contact-input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    background: 'var(--duo-gradient)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: '12px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    border: 'none',
                    borderRadius: 'var(--radius-xs)',
                    padding: '12px 20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    marginTop: '6px',
                    boxShadow: '0 4px 18px rgba(139, 92, 246, 0.35)',
                  }}
                  className="contact-submit-btn"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{status === 'sending' ? 'PREPARING...' : status === 'success' ? 'MESSAGE SENT!' : 'SEND MESSAGE'}</span>
                </button>

                {status === 'success' && (
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--emerald)', textAlign: 'center', margin: '4px 0 0' }}>
                    Email client opened! You can send directly to Ayush.
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .contact-two-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(20px, 3vw, 32px);
        }

        @media (min-width: 900px) {
          .contact-two-card-grid {
            grid-template-columns: 1fr 1.15fr;
          }
        }

        .channel-item-card:hover {
          border-color: var(--line-amber) !important;
          background: var(--surface-raised) !important;
          transform: translateY(-2px);
        }

        .contact-input:focus {
          border-color: var(--amber) !important;
          box-shadow: 0 0 10px rgba(245, 158, 11, 0.25);
        }

        .contact-submit-btn:hover {
          background: var(--duo-gradient-hover) !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(245, 158, 11, 0.4) !important;
        }
      `}</style>
    </SectionShell>
  );
}
