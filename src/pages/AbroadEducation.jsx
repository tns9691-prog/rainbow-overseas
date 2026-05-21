import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ServicePage.css';

const countries = [
  { name: 'USA', flag: '🇺🇸', desc: 'Home to world-renowned universities like Harvard, MIT, and Stanford. The US offers a vibrant campus life, cutting-edge research, and unmatched career prospects. Over 4,000 accredited institutions await you.', intakes: 'Jan, Aug/Sep', avgCost: '₹25–40 Lakhs/yr', workVisa: 'OPT/H1B', top: ['Harvard University', 'MIT', 'Stanford University', 'University of California'] },
  { name: 'UK', flag: '🇬🇧', desc: 'Home to Oxford, Cambridge, and Imperial College. UK degrees are globally respected and most programmes are 1-year for postgraduates, saving time and money. A 2-year post-study work visa awaits graduates.', intakes: 'Sep, Jan', avgCost: '₹20–35 Lakhs/yr', workVisa: 'PSW 2 Years', top: ['University of Oxford', 'Imperial College London', 'University of Edinburgh'] },
  { name: 'Canada', flag: '🇨🇦', desc: 'Canada is the most preferred destination for Indian students thanks to its PGWP and PR-friendly immigration pathways. Multicultural, safe, and affordable with excellent quality of education.', intakes: 'Jan, Sep', avgCost: '₹15–25 Lakhs/yr', workVisa: 'PGWP 3 Years', top: ['University of Toronto', 'UBC', 'McGill University', 'University of Waterloo'] },
  { name: 'Australia', flag: '🇦🇺', desc: 'Top-ranked universities, post-study work visas of up to 6 years, and a high quality of life make Australia a top choice. The 8 Group of Eight universities are world-class institutions.', intakes: 'Feb, Jul', avgCost: '₹20–35 Lakhs/yr', workVisa: 'GTE up to 6 Years', top: ['University of Melbourne', 'ANU', 'University of Sydney', 'UNSW'] },
  { name: 'Germany', flag: '🇩🇪', desc: 'Germany offers tuition-free or very low-cost education at public universities. Known for engineering, technology and research excellence, Germany is the land of innovation and great careers.', intakes: 'Apr/May, Oct', avgCost: '₹3–8 Lakhs/yr', workVisa: 'Job Seeker Visa', top: ['Technical University of Munich', 'LMU Munich', 'Heidelberg University'] },
  { name: 'Ireland', flag: '🇮🇪', desc: 'Ireland is the fastest growing study destination, home to the European HQs of Google, Apple and Facebook. Students enjoy a 2-year Stay Back option and a safe, English-speaking environment.', intakes: 'Sep, Jan', avgCost: '₹15–22 Lakhs/yr', workVisa: 'Stay Back 2 Years', top: ['Trinity College Dublin', 'UCD', 'UCC', 'NUI Galway'] },
];

const services = [
  { icon: '🎯', title: 'Free Counselling', desc: 'Personalised one-on-one counselling sessions to identify your ideal course, country, and university based on your profile.' },
  { icon: '📝', title: 'University Shortlisting', desc: 'Expert-backed shortlisting of universities matched to your academic profile, budget, and career goals.' },
  { icon: '✍️', title: 'SOP & LOR Assistance', desc: 'Professional Statement of Purpose and Letter of Recommendation drafting by experienced writers.' },
  { icon: '📄', title: 'Application Filing', desc: 'Complete assistance in filling and submitting university applications with 100% accuracy.' },
  { icon: '💰', title: 'Scholarship Guidance', desc: 'Identify and apply for merit and country-specific scholarships to reduce your financial burden.' },
  { icon: '🛂', title: 'Visa Assistance', desc: 'Complete student visa documentation, filing, and interview preparation with our 98% success rate.' },
];

function AbroadEducation() {
  const [form, setForm] = useState({ name: '', mobile: '', country: '', course: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';
    emailjs.send(serviceID, templateID, { ...form, to_email: 'bijjasrikar25@gmail.com', reply_to: 'midn531@gmail.com', service_requested: 'Study Abroad' }, publicKey)
      .then(() => { setStatus('✅ Enquiry sent! We will contact you shortly.'); setTimeout(() => setStatus(''), 4000); })
      .catch(() => { setStatus('❌ Failed. Please call us.'); setTimeout(() => setStatus(''), 4000); });
  };

  return (
    <div className="service-page">
      <div className="page-hero" style={{backgroundImage: "linear-gradient(rgba(10,15,35,0.82),rgba(10,15,35,0.88)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80')"}}>
        <div className="container">
          <p className="section-tag" style={{color:'rgba(255,255,255,0.6)'}}>ABROAD EDUCATION</p>
          <h1>Study Abroad with <span className="text-gradient">Rainbow Overseas</span></h1>
          <p>End-to-end guidance from counselling to visa — we make your dream university a reality.</p>
          <div className="hero-badges">
            <span>1000+ Students Placed</span>
            <span>98% Visa Success</span>
            <span>6+ Countries</span>
            <span>10+ Years Experience</span>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <section className="section">
        <div className="container">
          <p className="section-tag center">WHAT WE OFFER</p>
          <h2 className="section-title">Complete Study Abroad Support</h2>
          <div className="service-cards-grid">
            {services.map(s => (
              <div key={s.title} className="svc-card">
                <div className="svc-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="section bg-gray">
        <div className="container">
          <p className="section-tag center">DESTINATIONS</p>
          <h2 className="section-title">Countries We Specialise In</h2>
          <div className="country-detail-grid">
            {countries.map(c => (
              <div key={c.name} className="country-detail-card">
                <div className="cdc-header">
                  <span className="big-flag">{c.flag}</span>
                  <h3>Study in {c.name}</h3>
                </div>
                <p className="cdc-desc">{c.desc}</p>
                <div className="cdc-meta">
                  <div><strong>Intakes:</strong> {c.intakes}</div>
                  <div><strong>Avg Cost:</strong> {c.avgCost}</div>
                  <div><strong>Work Visa:</strong> {c.workVisa}</div>
                </div>
                <div className="cdc-unis">
                  <strong>Top Universities:</strong>
                  <ul>{c.top.map(u => <li key={u}>→ {u}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="section enquiry-section">
        <div className="container">
          <div className="enquiry-inner">
            <div className="enquiry-text">
              <p className="section-tag">TALK TO AN EXPERT</p>
              <h2>Get Free Counselling Today</h2>
              <p>Fill the form and our expert counsellors will reach out to you within 24 hours. No charges, no commitments.</p>
              <div className="contact-callout">
                <a href="tel:+918555989544">📞 8555989544</a>
                <a href="mailto:bijjasrikar25@gmail.com">✉️ bijjasrikar25@gmail.com</a>
              </div>
            </div>
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <h3>Education Enquiry</h3>
              <input type="text" placeholder="Full Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              <input type="tel" placeholder="Mobile Number" required value={form.mobile} onChange={e => setForm({...form, mobile: e.target.value})} />
              <select value={form.country} onChange={e => setForm({...form, country: e.target.value})}>
                <option value="">Preferred Country</option>
                {['USA','UK','Canada','Australia','Germany','Ireland'].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <select value={form.course} onChange={e => setForm({...form, course: e.target.value})}>
                <option value="">Preferred Course</option>
                {['MBA','MS','B.Tech','M.Tech','Computer Science','Data Science','AI','Healthcare','Nursing','Finance'].map(c => <option key={c} value={c}>{c}</option>)}
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

export default AbroadEducation;
