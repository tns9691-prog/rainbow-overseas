import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaUniversity, FaUserGraduate, FaClipboardList, FaFileAlt, FaMoneyBillWave } from 'react-icons/fa';
import './ServicePage.css';

const services = [
  { icon: <FaUserGraduate />, title: 'Free Counselling', desc: 'Personalised one-on-one counselling sessions to identify your ideal course and university in India based on your profile.' },
  { icon: <FaClipboardList />, title: 'University Shortlisting', desc: 'Expert-backed shortlisting of domestic universities matched to your academic profile, budget, and career goals.' },
  { icon: <FaFileAlt />, title: 'Application Assistance', desc: 'Complete assistance in filling and submitting university applications with 100% accuracy.' },
  { icon: <FaMoneyBillWave />, title: 'Scholarship & Loan Guidance', desc: 'Identify and apply for merit scholarships and education loans to reduce your financial burden.' },
  { icon: <FaUniversity />, title: 'Entrance Exam Support', desc: 'Guidance and preparation tips for various national and state-level entrance examinations.' },
];

function DomesticEducation() {
  const [form, setForm] = useState({
    name: '', mobile: '', whatsapp: '', email: '', highestQualification: '',
    course: '', statePreference: '', startStudies: '', loanSupport: '', budgetRange: '',
    preferredContact: '', message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';
    emailjs.send(serviceID, templateID, { ...form, to_email: 'bijjasrikar25@gmail.com', reply_to: 'midn531@gmail.com', service_requested: 'Domestic Education Services' }, publicKey)
      .then(() => { setStatus('✅ Enquiry sent! We will contact you shortly.'); setTimeout(() => setStatus(''), 4000); })
      .catch(() => { setStatus('❌ Failed. Please call us.'); setTimeout(() => setStatus(''), 4000); });
  };

  return (
    <div className="service-page">
      <div className="page-hero" style={{backgroundImage: "linear-gradient(rgba(10,15,35,0.82),rgba(10,15,35,0.88)), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80')"}}>
        <div className="container">
          <p className="section-tag" style={{color:'rgba(255,255,255,0.6)'}}>DOMESTIC EDUCATION</p>
          <h1>Domestic Education with <span className="text-gradient">Rainbow Overseas</span></h1>
          <p>Complete guidance for university and college admissions across India, ensuring you find the best fit for your career aspirations.</p>
          <div className="hero-badges">
            <span>Top Indian Universities</span>
            <span>Entrance Exam Guidance</span>
            <span>Scholarship Support</span>
          </div>
        </div>
      </div>

      <section className="section bg-gray">
        <div className="container">
          <p className="section-tag center">OUR EDUCATION OFFERING</p>
          <h2 className="section-title">Domestic Education Services</h2>
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
            <form className="enquiry-form detailed" onSubmit={handleSubmit}>
              <h3 className="full-width" style={{marginBottom: '1rem'}}>Detailed Education Enquiry</h3>
              <div className="detailed-form-grid">
                <input type="text" placeholder="Full Name *" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                <input type="tel" placeholder="Mobile Number *" required value={form.mobile} onChange={e => setForm({...form, mobile: e.target.value})} />
                <input type="tel" placeholder="WhatsApp Number" value={form.whatsapp} onChange={e => setForm({...form, whatsapp: e.target.value})} />
                <input type="email" placeholder="Email ID *" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                
                <select value={form.highestQualification} onChange={e => setForm({...form, highestQualification: e.target.value})}>
                  <option value="">Highest Qualification *</option>
                  {['10th / SSC', '12th / Intermediate', 'Diploma', 'Bachelors', 'Masters'].map(q => <option key={q} value={q}>{q}</option>)}
                </select>

                <select value={form.course} onChange={e => setForm({...form, course: e.target.value})}>
                  <option value="">Course Interested *</option>
                  {['B.Tech','M.Tech','MBA','BBA','BCA','MCA','Medical','Nursing','Pharmacy','Other'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                
                <input type="text" placeholder="Preferred State/City" value={form.statePreference} onChange={e => setForm({...form, statePreference: e.target.value})} />
                <input type="text" placeholder="When are you planning to start?" value={form.startStudies} onChange={e => setForm({...form, startStudies: e.target.value})} />

                <select value={form.loanSupport} onChange={e => setForm({...form, loanSupport: e.target.value})}>
                  <option value="">Need education loan support?</option>
                  {['Yes', 'No'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <select value={form.budgetRange} onChange={e => setForm({...form, budgetRange: e.target.value})}>
                  <option value="">Budget Range (Per Year)</option>
                  {['Less than ₹5 Lakhs', '₹5 - ₹10 Lakhs', '₹10 - ₹15 Lakhs', 'More than ₹15 Lakhs'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <select value={form.preferredContact} onChange={e => setForm({...form, preferredContact: e.target.value})}>
                  <option value="">Preferred mode of contact</option>
                  {['Phone Call', 'WhatsApp', 'Email'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <textarea className="full-width" rows="3" placeholder="Any Queries / Message" value={form.message} onChange={e => setForm({...form, message: e.target.value})} />

                <button type="submit" className="btn btn-dark full-width">Send Detailed Enquiry →</button>
                {status && <p className="form-status full-width">{status}</p>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DomesticEducation;
