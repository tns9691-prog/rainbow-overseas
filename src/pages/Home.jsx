import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import logo from '../../public/logo.webp';
import AbroadEnquiryModal from '../components/AbroadEnquiryModal';
import TravelEnquiryModal from '../components/TravelEnquiryModal';
import ContactEnquiryModal from '../components/ContactEnquiryModal';

const countries = [
  { name: 'United States of America', shortName: 'USA', flag: '/images/flags/usa.svg', landmark: '/images/landmarks/usa.png', desc: 'Home to world-renowned universities. Offers a vibrant campus life and unmatched career prospects.', intakes: 'Jan, Aug/Sep', avgCost: '₹25–40 Lakhs/yr', workVisa: 'OPT/H1B' },
  { name: 'United Kingdom', shortName: 'UK', flag: '/images/flags/uk.svg', landmark: '/images/landmarks/uk.png', desc: 'UK degrees are globally respected with mostly 1-year master programmes, saving time and money.', intakes: 'Sep, Jan', avgCost: '₹20–35 Lakhs/yr', workVisa: 'PSW 2 Years' },
  { name: 'Canada', shortName: 'Canada', flag: '/images/flags/canada.svg', landmark: '/images/landmarks/canada.png', desc: 'Most preferred destination thanks to its PGWP and PR-friendly immigration pathways.', intakes: 'Jan, Sep', avgCost: '₹15–25 Lakhs/yr', workVisa: 'PGWP 3 Years' },
  { name: 'Australia', shortName: 'Australia', flag: '/images/flags/australia.svg', landmark: '/images/landmarks/australia.png', desc: 'Top-ranked universities, post-study work visas of up to 6 years, and high quality of life.', intakes: 'Feb, Jul', avgCost: '₹20–35 Lakhs/yr', workVisa: 'GTE up to 6 Years' },
  { name: 'Germany', shortName: 'Germany', flag: '/images/flags/germany.svg', landmark: '/images/landmarks/germany.png', desc: 'Offers tuition-free or very low-cost education at public universities. Land of innovation.', intakes: 'Apr/May, Oct', avgCost: '₹3–8 Lakhs/yr', workVisa: 'Job Seeker Visa' },
  { name: 'Ireland', shortName: 'Ireland', flag: '/images/flags/ireland.svg', landmark: '/images/landmarks/ireland.png', desc: 'Fastest growing study destination, home to European HQs of Google, Apple and Facebook.', intakes: 'Sep, Jan', avgCost: '₹15–22 Lakhs/yr', workVisa: 'Stay Back 2 Years' },
];

const courses = [
  { name: 'MBA', icon: '💼' }, { name: 'MS / M.Tech', icon: '🔬' },
  { name: 'B.Tech', icon: '⚙️' }, { name: 'Computer Science', icon: '💻' },
  { name: 'Data Science', icon: '📊' }, { name: 'Artificial Intelligence', icon: '🤖' },
  { name: 'Healthcare', icon: '🏥' }, { name: 'Nursing', icon: '💊' },
  { name: 'Cyber Security', icon: '🔒' },
  { name: 'Finance', icon: '💰' }, { name: 'Digital Marketing', icon: '📱' },
];

const universities = [
  { name: 'Harvard University', country: 'USA', rank: '#1 World Rank' },
  { name: 'University of Oxford', country: 'UK', rank: '#2 World Rank' },
  { name: 'University of Toronto', country: 'Canada', rank: 'Top 25 Global' },
  { name: 'University of Melbourne', country: 'Australia', rank: 'Top 35 Global' },
  { name: 'Technical University of Munich', country: 'Germany', rank: 'Top 50 Global' },
  { name: 'Trinity College Dublin', country: 'Ireland', rank: 'Top 100 Global' },
];

const testimonials = [
  { name: 'Priya Sharma', dest: 'MS in Data Science, USA', review: 'Rainbow Overseas made my dream of studying in the USA a reality. From SOP guidance to visa prep, every step was handled professionally. Truly grateful!' },
  { name: 'Ravi Teja', dest: 'MBA, UK', review: 'The counsellors at Rainbow Overseas are extremely knowledgeable and supportive. They helped me secure admission to my first-choice university in the UK.' },
  { name: 'Ananya Reddy', dest: 'B.Tech, Canada', review: 'I was confused about which country to choose. The team patiently explained options, helped me compare, and I got my Canadian student visa in record time!' },
];

const faqs = [
  { q: 'What is the process to apply for a student visa?', a: 'We guide you through every step: document preparation, bank statements, visa form filling, and interview preparation. Our high visa success rate speaks for itself.' },
  { q: 'How early should I start the study abroad process?', a: 'We recommend starting 12–18 months before your intended intake. Early starters have better university choices and scholarship opportunities.' },
  { q: 'Do you assist with education loans?', a: 'Yes! We partner with leading banks and NBFCs to help students secure collateral and non-collateral education loans at competitive interest rates.' },
  { q: 'Can you help with travel and other needs?', a: 'Absolutely. We offer complete travel packages, travel insurance, finance solutions, and comprehensive support for all your international needs under one roof.' },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function Home() {
  const [formData, setFormData] = useState({ name: '', mobile: '', service: '' });
  const [status, setStatus] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [visaVisible, setVisaVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCountry, setModalCountry] = useState('');
  const [travelModalOpen, setTravelModalOpen] = useState(false);
  const [travelModalService, setTravelModalService] = useState('');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const visaRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisaVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (visaRef.current) observer.observe(visaRef.current);
    return () => observer.disconnect();
  }, []);

  const countStudents = useCountUp(1000, 2000, heroLoaded);
  const countVisa    = useCountUp(98, 2000, heroLoaded);
  const countCountries = useCountUp(6, 1500, heroLoaded);
  const countYears   = useCountUp(10, 1500, heroLoaded);

  const visaSuccess  = useCountUp(98, 2000, visaVisible);
  const visaProcessed = useCountUp(10, 2000, visaVisible);
  const visaYears    = useCountUp(10, 1800, visaVisible);
  const visaCountries = useCountUp(6, 1500, visaVisible);

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
        body: JSON.stringify(formData)
      });
      if (true) {
        setStatus('✅ Enquiry sent! We will contact you shortly.');
        setFormData({ name: '', mobile: '', service: '' });
        setTimeout(() => setStatus(''), 4000);
      } else {
        throw new Error('Failed');
      }
    } catch (error) {
      setStatus('❌ Failed to send. Please call us directly.');
      setTimeout(() => setStatus(''), 4000);
    }
  };

  return (
    <div className="home-page">

      {/* Hero */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content animate-fade-in-up">
            <p className="hero-tag">🌍 Trusted by 1000+ Students</p>
            <h1>Your Trusted Partner for <span className="text-gradient">Education, Travel, Finance & More</span></h1>
            <p>From university selection to travel planning, financial solutions to insurance — Rainbow Overseas is your one-stop destination for all international services.</p>
            <div className="hero-stats">
              <div className="stat"><strong>{countStudents}<span className="hero-suffix">+</span></strong><span>Students Placed</span></div>
              <div className="stat"><strong>{countVisa}<span className="hero-suffix">%</span></strong><span>Visa Success</span></div>
              <div className="stat"><strong>{countCountries}<span className="hero-suffix">+</span></strong><span>Countries</span></div>
              <div className="stat"><strong>{countYears}<span className="hero-suffix">+</span></strong><span>Years Experience</span></div>
            </div>
          </div>
          <div className="hero-form animate-fade-in-down">
            <h3>Free Counselling</h3>
            <p className="form-sub">Talk to an expert — it's free!</p>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Full Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              <input type="tel" placeholder="Mobile Number" required value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value})} />
              <select required value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                <option value="">Select a Service</option>
                <option value="Study Abroad">Study Abroad</option>
                <option value="Travel Package">Travel Package</option>
                <option value="Finance">Finance</option>
                <option value="Insurance">Insurance</option>
              </select>
              <button type="submit" className="btn btn-dark" style={{width: '100%'}}>Get Free Counselling →</button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="services-strip">
        <div className="container">
          <div className="services-grid">
            {[
              { icon: '🎓', label: 'Abroad Education', path: '/abroad-education' },
              { icon: '🏖️', label: 'Travel & Holidays', path: '/travel-holidays' },
              { icon: '💰', label: 'Finance', path: '/finance' },
              { icon: '🛡️', label: 'Insurance', path: '/insurance' },
            ].map(s => (
              <div key={s.label} className="service-icon-card">
                <div className="icon">{s.icon}</div>
                <h4>{s.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Strip */}
      <section className="about-strip section">
        <div className="container about-strip-inner">
          <div className="about-text">
            <p className="section-tag">WHO WE ARE</p>
            <h2>Rainbow Overseas — Your Lifelong Education & Travel Partner</h2>
            <p>At Rainbow Overseas, we believe every student deserves expert, honest, and personalised guidance. We don't push popular destinations or fixed packages — we take the time to understand your goals, budget, and preferences, then recommend options that truly fit.</p>
            <p>With 10+ years of experience and a 98% visa success rate, we've helped over 1000+ students build successful international careers. Beyond education, we offer premium travel, finance, and insurance services under one roof.</p>
            <div className="about-features">
              <div className="feature-item">✅ End-to-End Support</div>
              <div className="feature-item">✅ Expert Counsellors</div>
              <div className="feature-item">✅ No Hidden Charges</div>
              <div className="feature-item">✅ Post-Visa Assistance</div>
            </div>
          </div>
          <div className="about-img-placeholder">
            <div className="about-img-box">
              <div className="about-img-content">
                <div className="big-num">1000+</div>
                <div className="big-label">Students Placed Globally</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Study Destinations */}
      <section className="section countries-section reveal-fade-left">
        <div className="container">
          <p className="section-tag center">STUDY ABROAD</p>
          <h2 className="section-title">Choose Your Dream Destination</h2>
          <div className="dest-banner-grid">
            {countries.map(c => (
              <div key={c.shortName} className="dest-banner-card">
                <div className="dest-bg-accents">
                  <div className="dest-red-accent dest-red-top"></div>
                  <div className="dest-red-accent dest-red-bottom"></div>
                </div>
                
                <div className="dest-flag-clip" style={{ backgroundImage: `url(${c.flag})` }}>
                  <div className="dest-flag-overlay"></div>
                </div>
                
                <div className="dest-landmark-clip" style={{ backgroundImage: `url(${c.landmark})` }}></div>
                
                <div className="dest-airplane">✈️</div>

                <div className="dest-content-overlay">
                  <div className="dest-titles">
                    <span className="dest-subtitle">Study in</span>
                    <h3 className="dest-title" data-text={c.name}>{c.name}</h3>
                  </div>
                  
                  <div className="dest-hover-details">
                    <p>{c.desc}</p>
                    <div className="dest-meta-grid">
                      <div><span>Intakes:</span> {c.intakes}</div>
                      <div><span>Cost:</span> {c.avgCost}</div>
                      <div><span>Visa:</span> {c.workVisa}</div>
                    </div>
                    <button 
                      className="btn btn-outline-dark btn-sm"
                      onClick={() => {
                        setModalCountry(c.name);
                        setModalOpen(true);
                      }}
                    >
                      Enquiry →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="section bg-dark-section reveal-zoom-in">
        <div className="container">
          <p className="section-tag center" style={{color:'rgba(255,255,255,0.6)'}}>COURSES WE OFFER</p>
          <h2 className="section-title" style={{color:'white'}}>Popular Courses Abroad</h2>
          <div className="courses-grid">
            {courses.map(c => (
              <div key={c.name} className="course-card">
                <span className="course-icon">{c.icon}</span>
                <span>{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="section reveal-fade-right">
        <div className="container">
          <p className="section-tag center">PARTNER INSTITUTIONS</p>
          <h2 className="section-title">Top Universities We Work With</h2>
          <div className="uni-grid">
            {universities.map(u => (
              <div key={u.name} className="uni-card">
                <div className="uni-rank-badge">{u.rank}</div>
                <h4>{u.name}</h4>
                <p>{u.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Section */}
      <section className="section visa-section reveal-fade-left" ref={visaRef}>
        <div className="container">
          <div className="visa-inner">
            <div>
              <p className="section-tag">VISA SERVICES</p>
              <h2>98% Visa Success Rate — Let Us Handle It</h2>
              <p>Our expert visa consultants guide you through the entire visa process — from document preparation to interview coaching. We handle Student, Tourist, Business, Dependent, and Work Permit visas.</p>
              <ul className="visa-list">
                <li>🎓 Student Visa Assistance</li>
                <li>✈️ Tourist & Business Visa</li>
                <li>👨‍👩‍👧 Dependent Visa</li>
                <li>💼 Work Permit</li>
                <li>📄 Documentation & Interview Prep</li>
              </ul>
              <button className="btn btn-dark" style={{marginTop:'1.5rem'}} onClick={() => setContactModalOpen(true)}>Get Visa Help →</button>
            </div>
            <div className="visa-stat-box">
              <div className="visa-stat"><span>{visaSuccess}<span className="hero-suffix">%</span></span><p>Visa Success Rate</p></div>
              <div className="visa-stat"><span>{visaProcessed}<span className="hero-suffix">K+</span></span><p>Visas Processed</p></div>
              <div className="visa-stat"><span>{visaYears}<span className="hero-suffix">+</span></span><p>Years Experience</p></div>
              <div className="visa-stat"><span>{visaCountries}<span className="hero-suffix">+</span></span><p>Countries Covered</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel & Holidays Teaser */}
      <section className="section travel-teaser reveal-zoom-in">
        <div className="container">
          <p className="section-tag center">TRAVEL & HOLIDAYS</p>
          <h2 className="section-title">Explore Our Holiday Packages</h2>
          <div className="travel-grid">
            {[
              { name: 'Domestic Tours', icon: '🧳' },
              { name: 'International Tours', icon: '✈️' },
              { name: 'Honeymoon Packages', icon: '💖' },
              { name: 'Family Trips', icon: '🏕️' },
              { name: 'Pilgrimage Tours', icon: '🛕' },
              { name: 'Group Tours', icon: '🚌' }
            ].map(pkg => (
              <div key={pkg.name} className="travel-card">
                <div className="travel-watermark">{pkg.icon}</div>
                <h4>{pkg.name}</h4>
                <p>Customised packages tailored to your budget and preferences. Book with confidence.</p>
                <button 
                  className="btn btn-outline-dark btn-sm"
                  onClick={() => {
                    setTravelModalService(pkg.name);
                    setTravelModalOpen(true);
                  }}
                >
                  Enquire →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forex & Insurance */}
      <section className="section bg-dark-section reveal-fade-left">
        <div className="container">
          <div className="forex-ins-grid">
            <div className="forex-ins-card">
              <div className="card-icon">💱</div>
              <h3>Forex Services</h3>
              <p>Get the best currency exchange rates, forex cards, international money transfers, and student forex assistance — all in one place.</p>
              <ul>
                <li>✔ Currency Exchange</li>
                <li>✔ Forex Cards</li>
                <li>✔ International Money Transfer</li>
                <li>✔ Live Currency Rates</li>
              </ul>
              <button className="btn btn-light" style={{marginTop:'1.5rem'}}>Know More</button>
            </div>
            <div className="forex-ins-card">
              <div className="card-icon">🛡️</div>
              <h3>Insurance Services</h3>
              <p>Comprehensive insurance plans for travellers, students, and families. Get covered before you fly.</p>
              <ul>
                <li>✔ Travel Insurance</li>
                <li>✔ Health Insurance</li>
                <li>✔ Student Insurance</li>
                <li>✔ Family & Term Plans</li>
              </ul>
              <button className="btn btn-light" style={{marginTop:'1.5rem'}}>Know More</button>
            </div>
            <div className="forex-ins-card">
              <div className="card-icon">🚗</div>
              <h3>Car Rentals</h3>
              <p>Reliable and affordable car rentals for airport pickups, outstation trips, and hourly bookings across all major cities.</p>
              <ul>
                <li>✔ Sedan / SUV / Luxury Cars</li>
                <li>✔ Tempo Traveller</li>
                <li>✔ Airport Pickup & Drop</li>
                <li>✔ Outstation Trips</li>
              </ul>
              <button className="btn btn-light" style={{marginTop:'1.5rem'}}>Book Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section reveal-zoom-in">
        <div className="container">
          <p className="section-tag center">STUDENT STORIES</p>
          <h2 className="section-title">What Our Students Say</h2>
          <div className="testimonial-grid">
            {testimonials.map(t => (
              <div key={t.name} className="testimonial-card">
                <p className="review-text">"{t.review}"</p>
                <div className="reviewer">
                  <div className="reviewer-avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.dest}</span>
                  </div>
                </div>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section reveal-fade-right">
        <div className="container">
          <p className="section-tag center">FAQs</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                </div>
                {openFaq === i && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Start Your International Journey?</h2>
            <p>Call us now or fill our enquiry form. Our counsellors are available 7 days a week.</p>
          </div>
          <div className="cta-actions">
            <a href="tel:+918555989544" className="btn btn-white">📞 8555989544</a>
            <a href="https://wa.me/918555989544" target="_blank" rel="noreferrer" className="btn btn-outline-white">💬 WhatsApp Us</a>
          </div>
        </div>
      </section>
    <AbroadEnquiryModal 
      isOpen={modalOpen} 
      onClose={() => setModalOpen(false)} 
      defaultCountry={modalCountry} 
    />
    <TravelEnquiryModal
      isOpen={travelModalOpen}
      onClose={() => setTravelModalOpen(false)}
      defaultService={travelModalService}
    />
    <ContactEnquiryModal
      isOpen={contactModalOpen}
      onClose={() => setContactModalOpen(false)}
      defaultService="Visa Services"
    />
    </div>
  );
}

export default Home;
