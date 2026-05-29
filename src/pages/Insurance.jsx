import { useState } from 'react';
import './ServicePage.css';

const plans = [
  { icon: '✈️', name: 'Travel Insurance', desc: 'Comprehensive travel insurance for domestic and international trips. Covers trip cancellation, medical emergencies, and lost baggage.' },
  { icon: '🏥', name: 'Health Insurance', desc: 'Individual and family floater health plans from top insurers. Cashless hospitalisation at 10,000+ network hospitals.' },
  { icon: '📋', name: 'Term Insurance', desc: 'Pure life protection plans at low premiums. Secure your family\'s financial future in case of any unforeseen events.' },
  { icon: '🎓', name: 'Student Insurance', desc: 'Mandatory travel and health insurance for students going abroad. Meets university and visa requirements across all major destinations.' },
  { icon: '👨‍👩‍👧‍👦', name: 'Family Plans', desc: 'One policy to cover the entire family. Enjoy floater sum insured, maternity benefits, and critical illness cover.' },
  { icon: '🏢', name: 'Corporate Insurance', desc: 'Group health and life insurance solutions for businesses. Attract and retain talent with comprehensive employee benefits.' },
];

function Insurance() {
  const [form, setForm] = useState({ name: '', mobile: '', plan: '', members: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // Simulated network request (Google Apps Script fetch removed)
      await new Promise(resolve => setTimeout(resolve, 800));
      {
        setStatus('✅ Enquiry sent! We will contact you shortly.');
        setTimeout(() => setStatus(''), 4000);
        setForm({
          fullName: '', mobile: '', email: '', insuranceType: '', 
          coverageAmount: '', notes: ''
        });
      } else {
        throw new Error('Failed');
      }
    } catch {
      setStatus('❌ Failed to send. Please call us directly.');
      setTimeout(() => setStatus(''), 4000);
    }
  };

  return (
    <div className="service-page">
      <div className="page-hero" style={{backgroundImage:"linear-gradient(rgba(10,15,35,0.82),rgba(10,15,35,0.88)), url('/images/insurence.jpeg')"}}>
        <div className="container">
          <p className="section-tag" style={{color:'rgba(255,255,255,0.6)'}}>INSURANCE SERVICES</p>
          <h1>Protect What Matters Most with <span className="text-gradient">Right Coverage</span></h1>
          <p>Travel, health, student, and family insurance plans from top-rated insurers. Expert guidance, quick claims, best premiums.</p>
          <div className="hero-badges"><span>🏆 AMFI Registered Mutual Fund Distributor</span><span>IRDA Authorised Advisor</span><span>Top Insurers</span><span>Quick Claims</span></div>
        </div>
      </div>

      <section className="section reveal-fade-left">
        <div className="container">
          <p className="section-tag center">OUR PLANS</p>
          <h2 className="section-title">Insurance Plans We Offer</h2>
          <div className="service-cards-grid">
            {plans.map(p => (
              <div key={p.name} className="svc-card">
                <div className="svc-icon">{p.icon}</div>
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Gallery */}
      <section className="section bg-white reveal-zoom-in">
        <div className="container">
          <p className="section-tag center">PROTECTION FIRST</p>
          <h2 className="section-title">Peace of Mind</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&w=800&q=80" alt="Family protection" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80" alt="Health and wellness" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=800&q=80" alt="Medical care" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80" alt="Corporate insurance" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section enquiry-section reveal-fade-right">
        <div className="container">
          <div className="enquiry-inner">
            <div className="enquiry-text">
              <p className="section-tag">GET A QUOTE</p>
              <h2>Get the Best Insurance Quote Today</h2>
              <p>Our insurance experts will compare plans from top insurers and recommend the best coverage at the lowest premium for you.</p>
              <div className="contact-callout">
                <a href="tel:+919059715992">📞 9059715992</a>
                <a href="mailto:bijjasrikar25@gmail.com">✉️ bijjasrikar25@gmail.com</a>
              </div>
            </div>
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <h3>Insurance Enquiry</h3>
              <input type="text" placeholder="Full Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              <input type="tel" placeholder="Mobile Number" required value={form.mobile} onChange={e => setForm({...form, mobile: e.target.value})} />
              <select value={form.plan} onChange={e => setForm({...form, plan: e.target.value})}>
                <option value="">Type of Insurance</option>
                {['Travel Insurance','Health Insurance','Term Insurance','Student Insurance','Family Plan','Corporate Insurance'].map(p => <option key={p} value={p}>{p}</option>)}
              </select>
              <input type="number" placeholder="Number of Members to Cover" value={form.members} onChange={e => setForm({...form, members: e.target.value})} />
              <button type="submit" className="btn btn-dark" style={{width:'100%'}}>Get Free Quote →</button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Insurance;
