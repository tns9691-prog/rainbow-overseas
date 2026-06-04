import { useState } from 'react';
import {
  FcLibrary,
  FcGraduationCap,
  FcTodoList,
  FcMoneyTransfer,
  FcReadingEbook,
  FcDiploma1,
  FcBriefcase,
} from 'react-icons/fc';
import './ServicePage.css';
import { saveEnquiry } from '../utils/firebaseUtils';

const domesticServices = [
  {
    icon: <FcTodoList />,
    title: 'University Admissions',
    sub: 'Top Indian Universities',
    desc: 'Expert-backed shortlisting and end-to-end admission support for leading Indian universities and online degree programmes.',
  },
  {
    icon: <FcMoneyTransfer />,
    title: 'Scholarship Guidance',
    sub: 'Merit & Need-Based',
    desc: 'Identify and apply for government, institutional, and private scholarships to reduce your education costs.',
  },
  {
    icon: <FcBriefcase />,
    title: 'Education Loan',
    sub: 'EMI & No-Cost Options',
    desc: 'Guidance on education loans with EMI support, low interest rates, and partnerships with banks and NBFCs.',
  },
  {
    icon: <FcReadingEbook />,
    title: 'Course Counseling',
    sub: 'Right Course, Right Future',
    desc: 'Personalised counselling to choose the best course and specialisation based on your profile, interests, and market demand.',
  },
  {
    icon: <FcGraduationCap />,
    title: 'Career Guidance',
    sub: 'Plan Your Career Path',
    desc: 'Strategic career planning — understand industry trends, job prospects, and the right academic path to reach your goals.',
  },
  {
    icon: <FcDiploma1 />,
    title: 'Skill Development',
    sub: 'Industry-Ready Skills',
    desc: 'Upskill with industry-relevant certifications in IT, digital marketing, data science, and more to boost employability.',
  },
  {
    icon: <FcLibrary />,
    title: 'Coaching & Training',
    sub: 'Entrance & Competitive Exams',
    desc: 'Guidance and preparation support for national and state-level entrance exams, competitive tests, and professional certifications.',
  },
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

    try {
      const result = await saveEnquiry('Domestic Education', form);
      if (result.success) {
        setStatus('✅ Enquiry sent! We will contact you shortly.');
        setTimeout(() => setStatus(''), 4000);
        setForm({
          fullName: '', mobileNumber: '', state: '', highestQualification: '',
          courseLevel: '', preferredCourse: '', preferredUniversity: '',
          preferredIntake: '', startTime: '', emiSupport: '', counselingCall: '',
          agreeToContact: false
        });
      } else {
        throw new Error('Failed to save');
      }
    } catch {
      setStatus('❌ Failed. Please try again or call us.');
      setTimeout(() => setStatus(''), 4000);
    }
  };

  return (
    <div className="service-page">
      <div className="page-hero" style={{backgroundImage: "linear-gradient(rgba(10,15,35,0.82),rgba(10,15,35,0.88)), url('/images/education1.jpeg')", backgroundPosition: "center 20%"}}>
        <div className="container">
          <p className="section-tag" style={{color:'rgba(255,255,255,0.6)'}}>DOMESTIC EDUCATION</p>
          <h1>Domestic Education with <span className="text-gradient">Rainbow Overseas</span></h1>
          <p>Complete guidance for university and college admissions across India, ensuring you find the best fit for your career aspirations.</p>
          <div className="hero-badges">
            <span>🎓 Admissions</span>
            <span>📚 Coaching</span>
            <span>💡 Career Guidance</span>
            <span>🏅 Scholarships</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section bg-gray reveal-fade-right">
        <div className="container">
          <p className="section-tag center">WHAT WE OFFER</p>
          <h2 className="section-title">Our Domestic Education Services</h2>
          <div className="finance-services-grid">
            {domesticServices.map(s => (
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

      {/* Campus Life Gallery */}
      <section className="section bg-white reveal-zoom-in">
        <div className="container">
          <p className="section-tag center">CAMPUS LIFE</p>
          <h2 className="section-title">Explore Indian Universities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80" alt="Students in library" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" alt="Classroom lecture" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80" alt="School building" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" alt="College students" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="section enquiry-section reveal-fade-left">
        <div className="container">
          <div className="enquiry-inner">
            <div className="enquiry-text">
              <p className="section-tag">TALK TO AN EXPERT</p>
              <h2>Quick Application Form</h2>
              <p>Fill the form and our expert counsellors will reach out to you within 24 hours. No charges, no commitments.</p>
              <div className="contact-callout">
                <a href="tel:+919059715992">📞 9059715992</a>
                <a href="mailto:tns9691@gmail.com">✉️ tns9691@gmail.com</a>
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
