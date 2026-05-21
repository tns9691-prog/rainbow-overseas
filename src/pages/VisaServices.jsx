import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ServicePage.css';

const visaTypes = [
  { icon: '🎓', title: 'Student Visa', desc: 'Comprehensive guidance for student visas to USA, UK, Canada, Australia, Germany & Ireland. We assist with every document.' },
  { icon: '🏖️', title: 'Tourist Visa', desc: 'Planning a holiday abroad? We handle tourist visa applications for all major destinations with quick turnaround times.' },
  { icon: '💼', title: 'Business Visa', desc: 'Get business visa assistance for attending conferences, trade fairs, or exploring investment opportunities abroad.' },
  { icon: '👨‍👩‍👧', title: 'Dependent Visa', desc: 'Bring your family along. We assist spouses and dependents of students and workers with dependent visa applications.' },
  { icon: '🛂', title: 'Work Permit', desc: 'Guidance for work permit applications for skilled professionals planning to work abroad on a long-term basis.' },
  { icon: '📄', title: 'Documentation', desc: 'Complete document verification, translation, notarisation, and checklist-based preparation for any visa type.' },
];

const process = [
  { step: '01', title: 'Initial Consultation', desc: 'Free consultation to understand your travel purpose and identify the right visa category.' },
  { step: '02', title: 'Document Checklist', desc: 'We provide a precise document checklist tailored to your destination and visa type.' },
  { step: '03', title: 'Application Filing', desc: 'Our experts fill and review your visa application form for 100% accuracy.' },
  { step: '04', title: 'Interview Preparation', desc: 'Mock interviews and confidence coaching to prepare you for your visa interview.' },
  { step: '05', title: 'Submission & Tracking', desc: 'We submit your application and track the status until you receive your visa.' },
  { step: '06', title: 'Post-Visa Support', desc: 'Travel tips, forex assistance, and insurance guidance once your visa is approved.' },
];

function VisaServices() {
  const [form, setForm] = useState({ name: '', mobile: '', visaType: '', country: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';
    emailjs.send(serviceID, templateID, { ...form, to_email: 'bijjasrikar25@gmail.com', reply_to: 'midn531@gmail.com', service_requested: 'Visa Services' }, publicKey)
      .then(() => { setStatus('✅ Enquiry sent! We will contact you shortly.'); setTimeout(() => setStatus(''), 4000); })
      .catch(() => { setStatus('❌ Failed. Please call us.'); setTimeout(() => setStatus(''), 4000); });
  };

  return (
    <div className="service-page">
      <div className="page-hero" style={{backgroundImage:"linear-gradient(rgba(10,15,35,0.82),rgba(10,15,35,0.88)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80')"}}>
        <div className="container">
          <p className="section-tag" style={{color:'rgba(255,255,255,0.6)'}}>VISA SERVICES</p>
          <h1>Hassle-Free Visa Assistance <span className="text-gradient">with 98% Success Rate</span></h1>
          <p>From student to tourist visas — our expert team handles everything so you can focus on your journey.</p>
          <div className="hero-badges">
            <span>98% Visa Success</span><span>10,000+ Visas Processed</span><span>10+ Years Experience</span>
          </div>
        </div>
      </div>

      {/* Visa Types */}
      <section className="section">
        <div className="container">
          <p className="section-tag center">VISA CATEGORIES</p>
          <h2 className="section-title">Visa Services We Offer</h2>
          <div className="service-cards-grid">
            {visaTypes.map(v => (
              <div key={v.title} className="svc-card">
                <div className="svc-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-dark-process">
        <div className="container">
          <p className="section-tag center" style={{color:'rgba(255,255,255,0.5)'}}>OUR PROCESS</p>
          <h2 className="section-title" style={{color:'white'}}>Simple 6-Step Visa Process</h2>
          <div className="process-grid">
            {process.map(p => (
              <div key={p.step} className="process-card">
                <div className="process-step">{p.step}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="section enquiry-section">
        <div className="container">
          <div className="enquiry-inner">
            <div className="enquiry-text">
              <p className="section-tag">APPLY NOW</p>
              <h2>Start Your Visa Application Today</h2>
              <p>Our expert visa counsellors will review your profile and guide you through the entire process — free of charge.</p>
              <div className="contact-callout">
                <a href="tel:+918555989544">📞 8555989544</a>
                <a href="mailto:bijjasrikar25@gmail.com">✉️ bijjasrikar25@gmail.com</a>
              </div>
            </div>
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <h3>Visa Enquiry</h3>
              <input type="text" placeholder="Full Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              <input type="tel" placeholder="Mobile Number" required value={form.mobile} onChange={e => setForm({...form, mobile: e.target.value})} />
              <select value={form.visaType} onChange={e => setForm({...form, visaType: e.target.value})}>
                <option value="">Type of Visa</option>
                {['Student Visa','Tourist Visa','Business Visa','Dependent Visa','Work Permit'].map(v => <option key={v} value={v}>{v}</option>)}
              </select>
              <select value={form.country} onChange={e => setForm({...form, country: e.target.value})}>
                <option value="">Destination Country</option>
                {['USA','UK','Canada','Australia','Germany','Ireland','Schengen','Others'].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <button type="submit" className="btn btn-dark" style={{width:'100%'}}>Send Enquiry →</button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VisaServices;
