import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FcGlobe,
  FcGraduationCap,
  FcApproval,
  FcTodoList,
  FcMoneyTransfer,
  FcReadingEbook,
  FcBriefcase,
} from 'react-icons/fc';
import './ServicePage.css';

const countries = [
  { name: 'USA', flag: '/images/flags/usa.png', desc: 'Home to world-renowned universities like Harvard, MIT, and Stanford. The US offers a vibrant campus life, cutting-edge research, and unmatched career prospects. Over 4,000 accredited institutions await you.', intakes: 'Jan, Aug/Sep', avgCost: '₹25–40 Lakhs/yr', workVisa: 'OPT/H1B', top: ['Harvard University', 'MIT', 'Stanford University', 'University of California'] },
  { name: 'UK', flag: '/images/flags/uk.png', desc: 'Home to Oxford, Cambridge, and Imperial College. UK degrees are globally respected and most programmes are 1-year for postgraduates, saving time and money. A 2-year post-study work visa awaits graduates.', intakes: 'Sep, Jan', avgCost: '₹20–35 Lakhs/yr', workVisa: 'PSW 2 Years', top: ['University of Oxford', 'Imperial College London', 'University of Edinburgh'] },
  { name: 'Canada', flag: '/images/flags/canada.png', desc: 'Canada is the most preferred destination for Indian students thanks to its PGWP and PR-friendly immigration pathways. Multicultural, safe, and affordable with excellent quality of education.', intakes: 'Jan, Sep', avgCost: '₹15–25 Lakhs/yr', workVisa: 'PGWP 3 Years', top: ['University of Toronto', 'UBC', 'McGill University', 'University of Waterloo'] },
  { name: 'Australia', flag: '/images/flags/australia.png', desc: 'Top-ranked universities, post-study work visas of up to 6 years, and a high quality of life make Australia a top choice. The 8 Group of Eight universities are world-class institutions.', intakes: 'Feb, Jul', avgCost: '₹20–35 Lakhs/yr', workVisa: 'GTE up to 6 Years', top: ['University of Melbourne', 'ANU', 'University of Sydney', 'UNSW'] },
  { name: 'Germany', flag: '/images/flags/germany.png', desc: 'Germany offers tuition-free or very low-cost education at public universities. Known for engineering, technology and research excellence, Germany is the land of innovation and great careers.', intakes: 'Apr/May, Oct', avgCost: '₹3–8 Lakhs/yr', workVisa: 'Job Seeker Visa', top: ['Technical University of Munich', 'LMU Munich', 'Heidelberg University'] },
  { name: 'Ireland', flag: '/images/flags/ireland.png', desc: 'Ireland is the fastest growing study destination, home to the European HQs of Google, Apple and Facebook. Students enjoy a 2-year Stay Back option and a safe, English-speaking environment.', intakes: 'Sep, Jan', avgCost: '₹15–22 Lakhs/yr', workVisa: 'Stay Back 2 Years', top: ['Trinity College Dublin', 'UCD', 'UCC', 'NUI Galway'] },
];

const abroadServices = [
  {
    icon: <FcGlobe />,
    title: 'Overseas Education',
    sub: 'End-to-End Guidance',
    desc: 'Complete support for studying abroad — from shortlisting universities to post-arrival assistance across 6+ countries.',
  },
  {
    icon: <FcApproval />,
    title: 'Student Visa',
    sub: '98% Success Rate',
    desc: 'Full student visa documentation, form filing, SOP review, and interview preparation with our expert visa counsellors.',
  },
  {
    icon: <FcTodoList />,
    title: 'University Admissions',
    sub: 'Best-Fit Universities',
    desc: 'Expert shortlisting and end-to-end application filing at top universities matching your profile, budget, and career goals.',
  },
  {
    icon: <FcMoneyTransfer />,
    title: 'Scholarship Guidance',
    sub: 'Merit & Country-Specific',
    desc: 'Identify, apply, and win merit scholarships, government grants, and country-specific funding to reduce your study costs.',
  },
  {
    icon: <FcBriefcase />,
    title: 'Education Loan',
    sub: 'Collateral & Non-Collateral',
    desc: 'Guidance and assistance for secured and unsecured education loans through our banking partners at competitive rates.',
  },
  {
    icon: <FcReadingEbook />,
    title: 'Course Counseling',
    sub: 'Right Course, Right Career',
    desc: 'In-depth counselling sessions to help you choose the right course and specialisation based on your interests and market demand.',
  },
  {
    icon: <FcGraduationCap />,
    title: 'Career Guidance',
    sub: 'Post-Study Planning',
    desc: 'Strategic career planning including work visa pathways, PR options, job search support, and post-study opportunities abroad.',
  },
];



function AbroadEducation() {
  const [form, setForm] = useState({
    name: '', mobile: '', whatsapp: '', email: '', highestQualification: '',
    backlogs: '', country: '', course: '', intake: '', englishTest: '',
    englishScore: '', needIeltsPte: '', workExperience: '', studyGap: '',
    startStudies: '', visaRefusals: '', loanSupport: '', budgetRange: '',
    passport: '', preferredContact: '', message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const serviceID = 'YOUR_EMAILJS_SERVICE_ID'; // Replace with your actual EmailJS Service ID
    const templateID = 'YOUR_EMAILJS_TEMPLATE_ID'; // Replace with your actual EmailJS Template ID
    const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace with your actual EmailJS Public Key
    emailjs.send(serviceID, templateID, { ...form, to_email: 'bijjasrikar25@gmail.com', reply_to: 'midn531@gmail.com', service_requested: 'Education Services' }, publicKey)
      .then(() => { setStatus('✅ Enquiry sent! We will contact you shortly.'); setTimeout(() => setStatus(''), 4000); })
      .catch(() => { setStatus('❌ Failed. Please call us.'); setTimeout(() => setStatus(''), 4000); });
  };

  return (
    <div className="service-page">
      <div className="page-hero" style={{backgroundImage: "linear-gradient(rgba(10,15,35,0.82),rgba(10,15,35,0.88)), url('/images/education.jpeg')"}}>
        <div className="container">
          <p className="section-tag" style={{color:'rgba(255,255,255,0.6)'}}>ABROAD EDUCATION SERVICES</p>
          <h1>Study Abroad with <span className="text-gradient">Rainbow Overseas</span></h1>
          <p>Complete support for international university admissions, ensuring your global aspirations become a reality.</p>
          <div className="hero-badges">
            <span>1000+ Students Placed</span>
            <span>98% Visa Success</span>
            <span>6+ Countries</span>
            <span>10+ Years Experience</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section bg-gray reveal-fade-left">
        <div className="container">
          <p className="section-tag center">WHAT WE OFFER</p>
          <h2 className="section-title">Our Abroad Education Services</h2>
          <div className="finance-services-grid">
            {abroadServices.map(s => (
              <div key={s.title} className="finance-svc-card">
                <div className="finance-svc-icon">{s.icon}</div>
                <div className="finance-svc-body">
                  <h4>{s.title}</h4>
                  <span className="finance-svc-sub">{s.sub}</span>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Gallery */}
      <section className="section bg-white reveal-zoom-in">
        <div className="container">
          <p className="section-tag center">STUDENT LIFE</p>
          <h2 className="section-title">Experience Global Education</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="/images/education2.jpeg" alt="Male student studying abroad" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" alt="Female student studying abroad" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" alt="University campus" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Group of diverse students" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="section bg-gray reveal-fade-right">
        <div className="container">
          <p className="section-tag center">DESTINATIONS</p>
          <h2 className="section-title">Countries We Specialise In</h2>
          <div className="country-detail-grid">
            {countries.map(c => (
              <div key={c.name} className="country-detail-card" style={{ '--flag-url': `url(${c.flag})` }}>
                <div className="cdc-header">
                  <span className="big-flag"><img src={c.flag} alt={`${c.name} flag`} /></span>
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
                <input type="number" placeholder="Any Backlogs? (0 if none)" value={form.backlogs} onChange={e => setForm({...form, backlogs: e.target.value})} />

                <select value={form.country} onChange={e => setForm({ ...form, country: e.target.value })}>
                  <option value="">Preferred Country *</option>
                  {countries.map(c => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                </select>
                <select value={form.course} onChange={e => setForm({...form, course: e.target.value})}>
                  <option value="">Course Interested *</option>
                  {['MBA','MS','B.Tech','M.Tech','Computer Science','Data Science','AI','Healthcare','Nursing','Finance','Other'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <select value={form.intake} onChange={e => setForm({...form, intake: e.target.value})}>
                  <option value="">Preferred Intake</option>
                  {['Fall (Aug/Sep)', 'Spring (Jan/Feb)', 'Summer (May/Jun)', 'Not Sure Yet'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                
                <select value={form.englishTest} onChange={e => setForm({...form, englishTest: e.target.value})}>
                  <option value="">Completed English proficiency test?</option>
                  {['Yes, IELTS', 'Yes, PTE', 'Yes, TOEFL', 'Yes, Duolingo', 'No, planning to take', 'No'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <input type="text" placeholder="If completed, mention your score" value={form.englishScore} onChange={e => setForm({...form, englishScore: e.target.value})} />
                <select value={form.needIeltsPte} onChange={e => setForm({...form, needIeltsPte: e.target.value})}>
                  <option value="">Need guidance for IELTS/PTE prep?</option>
                  {['Yes', 'No'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <select value={form.workExperience} onChange={e => setForm({...form, workExperience: e.target.value})}>
                  <option value="">Do you have work experience?</option>
                  {['No', 'Less than 1 year', '1 - 3 years', '3 - 5 years', 'More than 5 years'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <select value={form.studyGap} onChange={e => setForm({...form, studyGap: e.target.value})}>
                  <option value="">Do you have any study gap?</option>
                  {['No gap', '1 year', '2 years', '3+ years'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <input type="text" placeholder="When are you planning to start?" value={form.startStudies} onChange={e => setForm({...form, startStudies: e.target.value})} />
                <select value={form.visaRefusals} onChange={e => setForm({...form, visaRefusals: e.target.value})}>
                  <option value="">Any visa refusals previously?</option>
                  {['No', 'Yes, once', 'Yes, multiple times'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <select value={form.loanSupport} onChange={e => setForm({...form, loanSupport: e.target.value})}>
                  <option value="">Need education loan support?</option>
                  {['Yes', 'No'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <select value={form.budgetRange} onChange={e => setForm({...form, budgetRange: e.target.value})}>
                  <option value="">Budget Range (Per Year)</option>
                  {['Less than ₹15 Lakhs', '₹15 - ₹25 Lakhs', '₹25 - ₹40 Lakhs', 'More than ₹40 Lakhs', 'Looking for Full Scholarship'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <select value={form.passport} onChange={e => setForm({...form, passport: e.target.value})}>
                  <option value="">Do you have a Passport?</option>
                  {['Yes', 'No, applied', 'No, need to apply'].map(c => <option key={c} value={c}>{c}</option>)}
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

export default AbroadEducation;
