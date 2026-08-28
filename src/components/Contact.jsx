import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SpotlightLounge from './SpotlightLounge';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success state after a few seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.message || 'Failed to send message. Please check your Web3Forms access key.');
      }
    } catch (err) {
      console.error('Contact Form Submit Error:', err);
      setError('Could not connect to the form submission server. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="contact-container container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">// 06. GET IN TOUCH</span>
            <h2 className="section-title">Let's Connect & <span className="gradient-text">Collaborate</span></h2>
            <p className="section-subtitle">
              Have an opportunity, a project to build, or just want to connect? My inbox is always open.
            </p>
          </div>
        </ScrollReveal>

        <div className="contact-content">
          {/* Contact Details Card */}
          <ScrollReveal delay={0.1}>
            <div className="contact-info glass-panel">
              <h3>Let's Connect</h3>
              <p>
                I am open to internships, freelance roles, or just chatting about computer science and IoT projects! Drop me a line and I will get back to you as soon as possible.
              </p>

              <div className="contact-details-list">
                <div className="detail-item">
                  <div className="detail-icon-box">
                    <Mail size={18} />
                  </div>
                  <div className="detail-text">
                    <span>Email Me</span>
                    <a href="mailto:tapeshkarkel@gmail.com">tapeshkarkel@gmail.com</a>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon-box">
                    <Phone size={18} />
                  </div>
                  <div className="detail-text">
                    <span>Call Me</span>
                    <a href="tel:+917067084220">+91 70670 84220</a>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon-box">
                    <MapPin size={18} />
                  </div>
                  <div className="detail-text">
                    <span>Location</span>
                    <p>Bhilai, Chhattisgarh, India</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form Card */}
          <ScrollReveal delay={0.3}>
            <div className="contact-form-container glass-panel">
              {submitted ? (
                <div className="success-state">
                  <CheckCircle2 size={48} className="success-icon" />
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. I will get in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        placeholder="Your Email"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                      placeholder="Message Subject"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  {error && (
                    <p className="error-message" style={{ color: 'var(--accent-pink)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '500' }}>
                      ⚠️ {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="uiverse-send-btn"
                    disabled={loading}
                  >
                    <div className="outline"></div>

                    {/* Default state */}
                    <div className="state state--default">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="1.2em" width="1.2em">
                          <g style={{ filter: 'url(#shadow)' }}>
                            <path fill="currentColor" d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z" />
                            <path fill="currentColor" d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z" />
                          </g>
                          <defs>
                            <filter id="shadow">
                              <feDropShadow floodOpacity="0.6" stdDeviation="0.8" dy="1" dx="0" />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      <p>
                        {loading
                          ? ['S','e','n','d','i','n','g','.','.','.'].map((ch, i) => (
                              <span key={i} style={{ '--i': i }}>{ch}</span>
                            ))
                          : ['S','e','n','d',' ','M','e','s','s','a','g','e'].map((ch, i) => (
                              <span key={i} style={{ '--i': i }}>{ch}</span>
                            ))
                        }
                      </p>
                    </div>

                    {/* Sent state */}
                    <div className="state state--sent">
                      <div className="icon">
                        <svg stroke="black" strokeWidth="0.5px" width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g style={{ filter: 'url(#shadow)' }}>
                            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="currentColor" />
                            <path d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z" fill="currentColor" />
                          </g>
                        </svg>
                      </div>
                      <p>
                        {['S','e','n','t','!'].map((ch, i) => (
                          <span key={i} style={{ '--i': i + 5 }}>{ch}</span>
                        ))}
                      </p>
                    </div>
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* Uiverse SalladShooter Spotlight Social Lounge */}
        <SpotlightLounge />
      </div>
    </section>
  );
}
