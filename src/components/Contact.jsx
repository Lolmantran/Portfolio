import { useState } from 'react';
import { personalInfo, contactInfo } from '../data/mockData';
import SectionHeader from './SectionHeader';

const INITIAL = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm]       = useState(INITIAL);
  const [status, setStatus]   = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // Replace this block with your actual form-submission logic
      // e.g. EmailJS, Formspree, a backend endpoint, etc.
      await new Promise(res => setTimeout(res, 900)); // simulate async
      setForm(INITIAL);
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const { links } = personalInfo;

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          label="Contact"
          title={contactInfo.heading}
          subtitle={contactInfo.subheading}
        />

        <div className="contact__inner">
          {/* Left: info */}
          <div className="contact__info">
            <span className="contact__availability">
              {contactInfo.availability}
            </span>

            <div>
              <p className="contact__detail-label">Location</p>
              <p className="contact__detail-value">{contactInfo.location}</p>
            </div>

            <div>
              <p className="contact__detail-label">Email</p>
              <p className="contact__detail-value">
                <a href={`mailto:${links.email}`} style={{ color: 'var(--accent)' }}>
                  {links.email}
                </a>
              </p>
            </div>

            <div className="contact__social-links">
              <a href={links.github}   target="_blank" rel="noreferrer" className="contact__social-link">GitHub</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="contact__social-link">LinkedIn</a>
              {links.cv && (
                <a href={links.cv} target="_blank" rel="noreferrer" className="contact__social-link">Download CV</a>
              )}
            </div>
          </div>

          {/* Right: form */}
          <form className="contact__form glow-border" onSubmit={handleSubmit} noValidate>
            <h3 className="contact__form-title">Send a message</h3>
            <p className="contact__form-sub">
              Feel free to reach out for collaborations, opportunities, or just to say hi.
            </p>

            <div className="form-field">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-input"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="What would you like to say?"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="form__submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="form__status form__status--success">
                Message sent — I will get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="form__status form__status--error">
                Something went wrong. Please try emailing directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
