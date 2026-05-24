import React, { useState } from 'react';
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
    fullName: '',
    mobileNumber: '',
    state: '',
    highestQualification: '',
    courseLevel: '',
    preferredCourse: '',
    preferredUniversity: '',
    preferredIntake: '',
    startTime: '',
    emiSupport: '',
    counselingCall: '',
    agreeToContact: false
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.agreeToContact) {
      alert("Please agree to be contacted for admission guidance.");
      return;
    }
    setStatus('Sending...');

    const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSeLhjSSKdHsCrN6jl8Uelbu3aytswLSsfZAPaXqitBnW0EA-A/formResponse';
    
    const formData = new URLSearchParams();
    formData.append('entry.1582330556', form.fullName);
    formData.append('entry.1558877606', form.mobileNumber);
    formData.append('entry.1225310896', form.state);
    formData.append('entry.56543812', form.highestQualification);
    formData.append('entry.971678475', form.courseLevel);
    formData.append('entry.793595898', form.preferredCourse); // Mapping to Preferred Course
    formData.append('entry.311491193', form.preferredUniversity);
    formData.append('entry.1016125168', form.preferredIntake);
    formData.append('entry.327126680', form.startTime);
    formData.append('entry.2069343904', form.emiSupport);
    formData.append('entry.930536495', form.counselingCall);
    formData.append('entry.1604730003', 'I Agree'); // Checkbox

    try {
      await fetch(googleFormURL, {
        method: 'POST',
        mode: 'no-cors', // Crucial for submitting to Google Forms from client side
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
      });
      setStatus('✅ Enquiry sent! We will contact you shortly.');
      setTimeout(() => setStatus(''), 4000);
      setForm({
        fullName: '', mobileNumber: '', state: '', highestQualification: '',
        courseLevel: '', preferredCourse: '', preferredUniversity: '',
        preferredIntake: '', startTime: '', emiSupport: '', counselingCall: '',
        agreeToContact: false
      });
    } catch (error) {
      setStatus('❌ Failed. Please try again or call us.');
      setTimeout(() => setStatus(''), 4000);
    }
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
              <h2>Quick Application Form</h2>
              <p>Fill the form and our expert counsellors will reach out to you within 24 hours. No charges, no commitments.</p>
              <div className="contact-callout">
                <a href="tel:+918555989544">📞 8555989544</a>
                <a href="mailto:bijjasrikar25@gmail.com">✉️ bijjasrikar25@gmail.com</a>
              </div>
            </div>
            <form className="enquiry-form detailed" onSubmit={handleSubmit}>
              <h3 className="full-width" style={{marginBottom: '1rem'}}>Online Degree Admission</h3>
              <div className="detailed-form-grid">
                <input type="text" placeholder="Full Name *" required value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})} />
                <input type="tel" placeholder="Mobile Number *" required value={form.mobileNumber} onChange={e => setForm({...form, mobileNumber: e.target.value})} />
                
                <select value={form.state} onChange={e => setForm({...form, state: e.target.value})}>
                  <option value="">Select State</option>
                  {['Andhra Pradesh', 'Telangana', 'Karnataka', 'Tamil Nadu', 'Maharashtra', 'Delhi', 'Other'].map(q => <option key={q} value={q}>{q}</option>)}
                </select>

                <select value={form.highestQualification} onChange={e => setForm({...form, highestQualification: e.target.value})}>
                  <option value="">Highest Qualification</option>
                  {['12th (Intermediate)', 'Diploma', 'Graduation', 'Post Graduation'].map(q => <option key={q} value={q}>{q}</option>)}
                </select>

                <select value={form.courseLevel} onChange={e => setForm({...form, courseLevel: e.target.value})}>
                  <option value="">Interested Course Level</option>
                  {['UG (Bachelor Degree)', 'PG (Master Degree)', 'Not Sure (Need Guidance)'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <select value={form.preferredCourse} onChange={e => setForm({...form, preferredCourse: e.target.value})}>
                  <option value="">Preferred Course</option>
                  {['BBA', 'BCA', 'B.Com', 'BA', 'MBA', 'MCA', 'M.Com', 'MA', 'Data Science', 'AI & ML', 'Digital Marketing', 'Not Sure'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <select className="full-width" value={form.preferredUniversity} onChange={e => setForm({...form, preferredUniversity: e.target.value})}>
                  <option value="">Preferred University</option>
                  {[
                    'Amity University Online', 'Manipal University Jaipur Online (MUJ)', 'Jain University Online', 'Lovely Professional University (LPU Online)', 
                    'Chandigarh University Online', 'Sikkim Manipal University (SMU Online)', 'DY Patil University Online', 'NMIMS Global Access (NMIMS Online)', 
                    'Sharda University Online', 'SRM University Online', 'UPES Online', 'Vignan University Online', 'Andhra University Online', 'Christ University Online', 
                    'Alliance University Online', 'Amrita University Online', 'Galgotias University Online', 'Parul University Online', 'Shoolini University Online', 
                    'Not Sure – Suggest Me Best'
                  ].map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <select value={form.preferredIntake} onChange={e => setForm({...form, preferredIntake: e.target.value})}>
                  <option value="">Preferred Intake</option>
                  {['January', 'April', 'July', 'October'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <select value={form.startTime} onChange={e => setForm({...form, startTime: e.target.value})}>
                  <option value="">When do you want to start?</option>
                  {['Immediately', 'Within 1 Month', 'Just Exploring'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <select value={form.emiSupport} onChange={e => setForm({...form, emiSupport: e.target.value})}>
                  <option value="">Need EMI / Loan Support?</option>
                  {['Yes', 'No'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                
                <select value={form.counselingCall} onChange={e => setForm({...form, counselingCall: e.target.value})}>
                  <option value="">Do you want a free counseling call?</option>
                  {['Yes', 'No'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <div className="full-width" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem'}}>
                  <input type="checkbox" id="agree" required checked={form.agreeToContact} onChange={e => setForm({...form, agreeToContact: e.target.checked})} style={{width: 'auto'}} />
                  <label htmlFor="agree" style={{fontSize: '0.9rem', color: '#333'}}>I agree to be contacted for admission guidance</label>
                </div>

                <button type="submit" className="btn btn-dark full-width">Submit Application →</button>
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
