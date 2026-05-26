import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
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

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success state after a few seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Contact Form Submit Error:', err);
      setError('Could not connect to the API server. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="contact-container container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          {/* Contact Details Card */}
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

          {/* Contact Form Card */}
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

                <button type="submit" className="btn-primary form-submit-btn" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'} <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
