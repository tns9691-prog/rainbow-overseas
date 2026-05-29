import React, { useState, useEffect } from 'react';
import '../pages/ServicePage.css';
import '../pages/Contact.css';
import './AbroadEnquiryModal.css';

const ContactEnquiryModal = ({ isOpen, onClose, defaultService = 'Visa Services' }) => {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', service: defaultService, message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    setForm(prev => ({ ...prev, service: defaultService || prev.service }));
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // Simulated network request (Google Apps Script fetch removed)
      await new Promise(resolve => setTimeout(resolve, 800));
      {
        setStatus('✅ Message sent! We will get back to you within 24 hours.');
        setTimeout(() => { setStatus(''); onClose(); }, 5000);
      }
    } catch {
      setStatus('❌ Failed to send. Please call us directly.');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <div className="enquiry-modal-overlay" onClick={onClose}>
      <div className="enquiry-modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px' }}>
        <button className="enquiry-modal-close" onClick={onClose}>&times;</button>
        
        <form className="enquiry-form contact-form" onSubmit={handleSubmit} style={{ boxShadow: 'none', padding: '0', background: 'transparent' }}>
          <h3>Send Us a Message</h3>
          <p style={{color:'var(--gray-600)', marginBottom:'1.5rem', fontSize:'0.9rem'}}>Fill the form and we'll reach out within 24 hours.</p>
          
          <input type="text" placeholder="Full Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ width: '100%', marginBottom: '1rem' }} />
          <input type="tel" placeholder="Mobile Number" required value={form.mobile} onChange={e => setForm({...form, mobile: e.target.value})} style={{ width: '100%', marginBottom: '1rem' }} />
          <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={{ width: '100%', marginBottom: '1rem' }} />
          <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} style={{ width: '100%', marginBottom: '1rem' }}>
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
            style={{width: '100%', padding:'0.85rem', border:'1.5px solid #e2e8f0', borderRadius:'0.5rem', fontFamily:'inherit', resize:'vertical', fontSize:'0.95rem', marginBottom: '1rem'}}
          ></textarea>
          <button type="submit" className="btn btn-dark" style={{width:'100%', padding:'1rem'}}>Send Message →</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactEnquiryModal;
