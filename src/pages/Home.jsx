import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Home.css';
import logo from '../../public/logo.png';

const countries = [
  { name: 'USA', flag: '🇺🇸', desc: 'A melting pot of cultures and truly international opportunities hub. Home to world-class Ivy League universities.' },
  { name: 'UK', flag: '🇬🇧', desc: 'Centuries-old universities and world-class research-based institutions. Oxford, Cambridge and more await you.' },
  { name: 'Canada', flag: '🇨🇦', desc: 'Land of immigrants and home for Indian students for decades. Excellent post-study work visa policies.' },
  { name: 'Australia', flag: '🇦🇺', desc: 'Top-ranked universities, post-study work visas, and student-friendly cities with high quality of life.' },
  { name: 'Germany', flag: '🇩🇪', desc: 'A land of innovation and home to great careers. Tuition-free or low-cost education at top universities.' },
  { name: 'Ireland', flag: '🇮🇪', desc: 'Affordable education, diverse programmes, and a unique cultural experience in the heart of Europe.' },
];

const courses = [
  { name: 'MBA', icon: '💼' }, { name: 'MS / M.Tech', icon: '🔬' },
  { name: 'B.Tech', icon: '⚙️' }, { name: 'Computer Science', icon: '💻' },
  { name: 'Data Science', icon: '📊' }, { name: 'Artificial Intelligence', icon: '🤖' },
  { name: 'Healthcare', icon: '🏥' }, { name: 'Nursing', icon: '💊' },
  { name: 'Cyber Security', icon: '🔒' }, { name: 'Hotel Management', icon: '🏨' },
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

function Home() {
  const [formData, setFormData] = useState({ name: '', mobile: '', service: '' });
  const [status, setStatus] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';
    const templateParams = {
      from_name: formData.name,
      reply_to: 'midn531@gmail.com',
      mobile_number: formData.mobile,
      service_requested: formData.service,
      to_email: 'bijjasrikar25@gmail.com'
    };
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStatus('✅ Enquiry sent! We will contact you shortly.');
        setFormData({ name: '', mobile: '', service: '' });
        setTimeout(() => setStatus(''), 4000);
      }, () => {
        setStatus('❌ Failed to send. Please call us directly.');
        setTimeout(() => setStatus(''), 4000);
      });
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
              <div className="stat"><strong>1000+</strong><span>Students Placed</span></div>
              <div className="stat"><strong>98%</strong><span>Visa Success</span></div>
              <div className="stat"><strong>6+</strong><span>Countries</span></div>
              <div className="stat"><strong>10+</strong><span>Years Experience</span></div>
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
                <div className="big-num">5000+</div>
                <div className="big-label">Students Placed Globally</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Destinations */}
      <section className="section countries-section">
        <div className="container">
          <p className="section-tag center">STUDY ABROAD</p>
          <h2 className="section-title">Choose Your Dream Destination</h2>
          <div className="country-grid">
            {countries.map(c => (
              <div key={c.name} className="country-card">
                <div className="country-flag">{c.flag}</div>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
                <button className="btn btn-outline-dark btn-sm">Explore →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="section bg-dark-section">
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
      <section className="section">
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
      <section className="section visa-section">
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
              <button className="btn btn-dark" style={{marginTop:'1.5rem'}}>Get Visa Help →</button>
            </div>
            <div className="visa-stat-box">
              <div className="visa-stat"><span>98%</span><p>Visa Success Rate</p></div>
              <div className="visa-stat"><span>10K+</span><p>Visas Processed</p></div>
              <div className="visa-stat"><span>15+</span><p>Years Experience</p></div>
              <div className="visa-stat"><span>6+</span><p>Countries Covered</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel & Holidays Teaser */}
      <section className="section travel-teaser">
        <div className="container">
          <p className="section-tag center">TRAVEL & HOLIDAYS</p>
          <h2 className="section-title">Explore Our Holiday Packages</h2>
          <div className="travel-grid">
            {['Domestic Tours', 'International Tours', 'Honeymoon Packages', 'Family Trips', 'Pilgrimage Tours', 'Group Tours'].map(pkg => (
              <div key={pkg} className="travel-card">
                <div className="travel-icon">🌐</div>
                <h4>{pkg}</h4>
                <p>Customised packages tailored to your budget and preferences. Book with confidence.</p>
                <button className="btn btn-outline-dark btn-sm">Enquire →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forex & Insurance */}
      <section className="section bg-dark-section">
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
      <section className="section">
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
      <section className="section faq-section">
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

    </div>
  );
}

export default Home;
