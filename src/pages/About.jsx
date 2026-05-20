import React from 'react';
import './ServicePage.css';
import './About.css';

const team = [
  { name: 'T. Narsimha Swamy', role: 'Founder & CEO', desc: 'With 15+ years in international education and travel consulting, Mr. Swamy has guided over 5,000 students to their dream universities worldwide.' },
  { name: 'Senior Counsellors', role: 'Study Abroad Team', desc: 'Experienced counsellors specialising in country-specific admissions for USA, UK, Canada, Australia, Germany, and Ireland.' },
  { name: 'Visa Experts', role: 'Visa & Immigration', desc: 'Dedicated visa specialists with a 98% visa success rate across student, tourist, business, and dependent visa categories.' },
  { name: 'Travel Planners', role: 'Travel & Holidays', desc: 'Expert travel planners crafting personalised domestic and international holiday packages for every budget and preference.' },
];

const values = [
  { icon: '🎯', title: 'Student First', desc: 'Every decision we make is centred around the student\'s best interests — not commissions or quotas.' },
  { icon: '✅', title: 'Transparency', desc: 'No hidden charges, no false promises. We give you honest, realistic guidance at every step.' },
  { icon: '🤝', title: 'Trust & Integrity', desc: 'Built on 15 years of trust. Our reputation is our biggest achievement and we protect it with every interaction.' },
  { icon: '🌍', title: 'End-to-End Support', desc: 'From the first counselling session to post-arrival support — we are with you through the entire journey.' },
  { icon: '📈', title: 'Proven Results', desc: '5,000+ students placed, 98% visa success, partnerships with 100+ universities worldwide.' },
  { icon: '💡', title: 'Expert Guidance', desc: 'Our counsellors have first-hand knowledge of universities, courses, and visa processes across 6 countries.' },
];

const milestones = [
  { year: '2009', event: 'Rainbow Overseas Founded in Hyderabad by T. Narsimha Swamy' },
  { year: '2012', event: 'Expanded to full Visa Services — Tourist, Business & Student' },
  { year: '2015', event: 'Launched Travel & Holidays division with customised packages' },
  { year: '2018', event: 'Added Forex Services & Insurance as premium offerings' },
  { year: '2021', event: 'Crossed 3,000 successful student placements abroad' },
  { year: '2024', event: '5,000+ students placed — Named among Top 10 Consultants in Hyderabad' },
];

function About() {
  return (
    <div className="service-page">
      <div className="page-hero" style={{backgroundImage:"linear-gradient(rgba(10,15,35,0.85),rgba(10,15,35,0.92)), url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1920&q=80')"}}>
        <div className="container">
          <p className="section-tag" style={{color:'rgba(255,255,255,0.6)'}}>ABOUT US</p>
          <h1>Your Trusted Partner Since <span className="text-gradient">2009</span></h1>
          <p>Rainbow Overseas is Hyderabad's leading multi-service consultancy for Study Abroad, Visa, Travel, Forex, Car Rentals and Insurance — all under one roof.</p>
          <div className="hero-badges">
            <span>15+ Years Experience</span><span>5000+ Students Placed</span><span>98% Visa Success</span>
          </div>
        </div>
      </div>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="about-mission">
            <div className="mission-text">
              <p className="section-tag">OUR MISSION</p>
              <h2>Empowering Dreams, Enabling Global Journeys</h2>
              <p>At Rainbow Overseas, we believe that every student deserves access to world-class education, and every family deserves a seamless travel experience. Our mission is simple: provide honest, expert, and personalised guidance that makes international ambitions achievable.</p>
              <p style={{marginTop:'1rem'}}>We don't push popular destinations or one-size-fits-all packages. We take the time to understand your unique goals, academic background, and financial situation — then craft the perfect roadmap for you.</p>
              <p style={{marginTop:'1rem'}}>Founded by <strong>T. Narsimha Swamy</strong> in 2009, Rainbow Overseas has grown from a small study abroad consultancy to a comprehensive international services platform trusted by thousands of families across Hyderabad and Telangana.</p>
            </div>
            <div className="mission-stats">
              <div className="mstat"><span>5000+</span><p>Students Placed</p></div>
              <div className="mstat"><span>98%</span><p>Visa Success Rate</p></div>
              <div className="mstat"><span>100+</span><p>University Partners</p></div>
              <div className="mstat"><span>15+</span><p>Years of Excellence</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray">
        <div className="container">
          <p className="section-tag center">WHAT WE STAND FOR</p>
          <h2 className="section-title">Our Core Values</h2>
          <div className="service-cards-grid">
            {values.map(v => (
              <div key={v.title} className="svc-card">
                <div className="svc-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <p className="section-tag center">OUR JOURNEY</p>
          <h2 className="section-title">15 Years of Excellence</h2>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-card">
                  <div className="timeline-year">{m.year}</div>
                  <p>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-gray">
        <div className="container">
          <p className="section-tag center">OUR TEAM</p>
          <h2 className="section-title">The People Behind Rainbow Overseas</h2>
          <div className="team-grid">
            {team.map(t => (
              <div key={t.name} className="team-card">
                <div className="team-avatar">{t.name[0]}</div>
                <h4>{t.name}</h4>
                <span className="team-role">{t.role}</span>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Work With Us?</h2>
            <p>Join 5,000+ students and families who have trusted Rainbow Overseas with their international dreams.</p>
          </div>
          <div className="cta-actions">
            <a href="tel:+918555989544" className="btn btn-white">📞 8555989544</a>
            <a href="/contact" className="btn btn-outline-white">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
