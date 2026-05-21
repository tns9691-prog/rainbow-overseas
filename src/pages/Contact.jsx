import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './ServicePage.css';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';
    emailjs.send(serviceID, templateID, {
      ...form,
      to_email: 'bijjasrikar25@gmail.com',
      reply_to: 'midn531@gmail.com',
      service_requested: form.service
    }, publicKey)
      .then(() => { setStatus('✅ Message sent! We will get back to you within 24 hours.'); setTimeout(() => setStatus(''), 5000); })
      .catch(() => { setStatus('❌ Failed to send. Please call us directly.'); setTimeout(() => setStatus(''), 5000); });
  };

  return (
    <div className="service-page">
      <div className="page-hero" style={{backgroundImage:"linear-gradient(rgba(10,15,35,0.85),rgba(10,15,35,0.92)), url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80')"}}>
        <div className="container">
          <p className="section-tag" style={{color:'rgba(255,255,255,0.6)'}}>CONTACT US</p>
          <h1>We're Here to <span className="text-gradient">Help You</span></h1>
          <p>Reach out to our expert team for free counselling on Study Abroad, Visa, Travel, Forex, Car Rentals, or Insurance.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-layout">

            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Our counsellors are available Monday–Saturday, 9 AM to 7 PM. We respond to all enquiries within 24 hours.</p>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">📞</div>
                  <div>
                    <strong>Call / WhatsApp</strong>
                    <a href="tel:+918555989544">8555989544</a>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">✉️</div>
                  <div>
                    <strong>Email Us</strong>
                    <a href="mailto:bijjasrikar25@gmail.com">bijjasrikar25@gmail.com</a>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">🏢</div>
                  <div>
                    <strong>Visit Our Office</strong>
                    <span>Rainbow Overseas, Hyderabad, Telangana, India</span>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">⏰</div>
                  <div>
                    <strong>Office Hours</strong>
                    <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="social-contact">
                <p>Follow us on social media:</p>
                <div className="social-row">
                  <a href="https://www.facebook.com/profile.php?id=100093534237102" target="_blank" rel="noopener noreferrer" className="social-btn"><FaFacebook /> Facebook</a>
                  <a href="#" className="social-btn"><FaInstagram /> Instagram</a>
                  <a href="https://www.linkedin.com/in/tnswamy/" target="_blank" rel="noopener noreferrer" className="social-btn"><FaLinkedin /> LinkedIn</a>
                  <a href="https://wa.me/918555989544" target="_blank" rel="noreferrer" className="social-btn wa"><FaWhatsapp /> WhatsApp</a>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="map-embed">
                <iframe
                  title="Rainbow Overseas Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31604707674!2d78.24323091201418!3d17.412608784887082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1716111234567!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{border: 0, borderRadius: '0.75rem'}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <form className="enquiry-form contact-form" onSubmit={handleSubmit}>
              <h3>Send Us a Message</h3>
              <p style={{color:'var(--gray-600)', marginBottom:'0.5rem', fontSize:'0.9rem'}}>Fill the form and we'll reach out within 24 hours.</p>
              <input type="text" placeholder="Full Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              <input type="tel" placeholder="Mobile Number" required value={form.mobile} onChange={e => setForm({...form, mobile: e.target.value})} />
              <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
              <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                <option value="">Interested Service</option>
                <option value="Study Abroad">Study Abroad</option>
                <option value="Visa Services">Visa Services</option>
                <option value="Travel Package">Travel & Holidays</option>
                <option value="Car Rentals">Car Rentals</option>
                <option value="Forex Services">Forex Services</option>
                <option value="Insurance">Insurance</option>
                <option value="General Enquiry">General Enquiry</option>
              </select>
              <textarea
                placeholder="Your Message / Enquiry Details"
                rows="5"
                value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
                style={{padding:'0.85rem', border:'1.5px solid #e2e8f0', borderRadius:'0.5rem', fontFamily:'inherit', resize:'vertical', fontSize:'0.95rem'}}
              ></textarea>
              <button type="submit" className="btn btn-dark" style={{width:'100%', padding:'1rem'}}>Send Message →</button>
              {status && <p className="form-status">{status}</p>}
            </form>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
