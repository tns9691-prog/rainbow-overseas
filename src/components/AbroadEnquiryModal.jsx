import React, { useState, useEffect } from 'react';
import '../pages/ServicePage.css';
import './AbroadEnquiryModal.css';

const countriesList = ['USA', 'UK', 'Canada', 'Australia', 'Germany', 'Ireland'];

const AbroadEnquiryModal = ({ isOpen, onClose, defaultCountry = '' }) => {
  const [form, setForm] = useState({
    name: '', mobile: '', whatsapp: '', email: '', highestQualification: '',
    backlogs: '', country: defaultCountry, course: '', intake: '', englishTest: '',
    englishScore: '', needIeltsPte: '', workExperience: '', studyGap: '',
    startStudies: '', visaRefusals: '', loanSupport: '', budgetRange: '',
    passport: '', preferredContact: '', message: ''
  });
  const [status, setStatus] = useState('');

  // Update default country if it changes
  useEffect(() => {
    setForm(prev => ({ ...prev, country: defaultCountry || prev.country }));
  }, [defaultCountry]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await fetch('https://script.google.com/macros/s/AKfycbyA8Nc5QAOBu8NTYAjAuRL8bA24HfhIG3_PKKTX2EKnahuplfW-VDLKmvbxrSo4pPxl5Q/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: JSON.stringify(form)
      });
      if (true) {
        setStatus('✅ Enquiry sent! We will contact you shortly.');
        setTimeout(() => {
          setStatus('');
          onClose();
        }, 4000);
      } else {
        throw new Error('Failed');
      }
    } catch (error) {
      setStatus('❌ Failed to send. Please call us directly.');
      setTimeout(() => setStatus(''), 4000);
    }
  };

  return (
    <div className="enquiry-modal-overlay" onClick={onClose}>
      <div className="enquiry-modal-content" onClick={e => e.stopPropagation()}>
        <button className="enquiry-modal-close" onClick={onClose}>&times;</button>
        <h3 className="full-width" style={{marginBottom: '1.5rem', color: '#1e3a8a'}}>Detailed Education Enquiry</h3>
        
        <form className="enquiry-form detailed" onSubmit={handleSubmit}>
          <div className="detailed-form-grid modal-scrollable-grid">
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
              {countriesList.map(c => <option key={c} value={c}>{c}</option>)}
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
  );
};

export default AbroadEnquiryModal;
