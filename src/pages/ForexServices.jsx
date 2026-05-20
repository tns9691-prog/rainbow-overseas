import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ServicePage.css';

const services = [
  { icon: '💱', name: 'Currency Exchange', desc: 'Get the best exchange rates for 30+ foreign currencies. No hidden charges, transparent pricing, and instant service.' },
  { icon: '💳', name: 'Forex Cards', desc: 'Load multiple currencies on a single Forex card. Safer than cash, accepted globally, and with zero cross-currency charges.' },
  { icon: '🌐', name: 'International Money Transfer', desc: 'Send money abroad quickly and securely using RBI-approved channels. Competitive rates and low transfer fees.' },
  { icon: '📈', name: 'Live Currency Rates', desc: 'Get real-time exchange rates and book the best rate for your transaction. Rates updated every few minutes.' },
  { icon: '🎓', name: 'Student Forex Assistance', desc: 'Specialised forex support for students going abroad — block rates for fee payments, living expenses, and emergency funds.' },
  { icon: '🏢', name: 'Corporate Forex', desc: 'Bulk forex solutions for businesses — import/export payments, hedging, and dedicated relationship managers.' },
];

const currencies = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸' }, { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' }, { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' }, { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬' },
];

function ForexServices() {
  const [form, setForm] = useState({ name: '', mobile: '', currency: '', amount: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';
    emailjs.send(serviceID, templateID, { ...form, to_email: 'bijjasrikar25@gmail.com', reply_to: 'midn531@gmail.com', service_requested: 'Forex Services' }, publicKey)
      .then(() => { setStatus('✅ Enquiry sent!'); setTimeout(() => setStatus(''), 4000); })
      .catch(() => { setStatus('❌ Failed. Please call us.'); setTimeout(() => setStatus(''), 4000); });
  };

  return (
    <div className="service-page">
      <div className="page-hero" style={{backgroundImage:"linear-gradient(rgba(10,15,35,0.82),rgba(10,15,35,0.88)), url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80')"}}>
        <div className="container">
          <p className="section-tag" style={{color:'rgba(255,255,255,0.6)'}}>FOREX SERVICES</p>
          <h1>Best Forex Rates in <span className="text-gradient">Hyderabad</span></h1>
          <p>Currency exchange, forex cards, and international money transfers — all at the best rates with zero hidden charges.</p>
          <div className="hero-badges"><span>30+ Currencies</span><span>Best Rates Guaranteed</span><span>RBI Authorised</span></div>
        </div>
      </div>

      {/* Live Rates Teaser */}
      <section className="rates-strip">
        <div className="container">
          <p className="rates-title">Live Currency Rates (Indicative)</p>
          <div className="rates-grid">
            {currencies.map(c => (
              <div key={c.code} className="rate-card">
                <span className="rate-flag">{c.flag}</span>
                <span className="rate-code">{c.code}</span>
                <span className="rate-name">{c.name}</span>
                <span className="rate-note">Call for best rate</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <p className="section-tag center">WHAT WE OFFER</p>
          <h2 className="section-title">Our Forex Services</h2>
          <div className="service-cards-grid">
            {services.map(s => (
              <div key={s.name} className="svc-card">
                <div className="svc-icon">{s.icon}</div>
                <h4>{s.name}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section enquiry-section">
        <div className="container">
          <div className="enquiry-inner">
            <div className="enquiry-text">
              <p className="section-tag">GET BEST RATE</p>
              <h2>Book Your Forex Rate Today</h2>
              <p>Tell us your currency and amount — our team will provide you the best rate available and assist you within hours.</p>
              <div className="contact-callout">
                <a href="tel:+918555989544">📞 8555989544</a>
                <a href="mailto:bijjasrikar25@gmail.com">✉️ bijjasrikar25@gmail.com</a>
              </div>
            </div>
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <h3>Forex Enquiry</h3>
              <input type="text" placeholder="Full Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              <input type="tel" placeholder="Mobile Number" required value={form.mobile} onChange={e => setForm({...form, mobile: e.target.value})} />
              <select value={form.currency} onChange={e => setForm({...form, currency: e.target.value})}>
                <option value="">Select Currency</option>
                {currencies.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code} — {c.name}</option>)}
                <option value="Other">Other</option>
              </select>
              <input type="text" placeholder="Amount Required" value={form.amount} onChange={e => setForm({...form, amount: e.target.value})} />
              <button type="submit" className="btn btn-dark" style={{width:'100%'}}>Get Best Rate →</button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForexServices;
