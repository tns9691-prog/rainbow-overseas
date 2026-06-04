import { useState } from 'react';
import {
  FcBusinessman,
  FcHome,
  FcBriefcase,
  FcAutomotive,
  FcDonate,
  FcSafe,
  FcLineChart,
  FcBullish,
  FcCurrencyExchange,
  FcMoneyTransfer,
} from 'react-icons/fc';
import './ServicePage.css';
import { saveEnquiry } from '../utils/firebaseUtils';

const financeServices = [
  {
    icon: <FcLineChart />,
    title: 'Mutual Funds',
    sub: 'SIP & Lump Sum',
    desc: 'Goal-based mutual fund investments to build long-term wealth, save tax under 80C, and beat inflation.',
  },
  {
    icon: <FcBusinessman />,
    title: 'Personal Loans',
    sub: 'Fast Approval',
    desc: 'Quick-disbursal personal loans for education, travel, medical emergencies, and daily needs with flexible repayment options.',
  },
  {
    icon: <FcHome />,
    title: 'Home Loans',
    sub: 'Best Rates',
    desc: 'Home purchase, construction, and improvement loans with competitive interest rates, long tenures, and minimal documentation.',
  },
  {
    icon: <FcBriefcase />,
    title: 'Business Loans',
    sub: 'For SMEs & Startups',
    desc: 'Working capital, expansion, and equipment finance for startups and growing businesses. Fast sanction, flexible terms.',
  },
  {
    icon: <FcAutomotive />,
    title: 'Vehicle Loans',
    sub: 'New & Used Cars',
    desc: 'Affordable auto finance for new and used cars, bikes, and commercial vehicles with easy EMI options.',
  },
  {
    icon: <FcDonate />,
    title: 'Gold Loans',
    sub: 'Instant Disbursement',
    desc: 'Get instant liquidity against your gold at competitive rates. Quick processing with minimal paperwork.',
  },
  {
    icon: <FcSafe />,
    title: 'Insurance Services',
    sub: 'Life, Health & General',
    desc: 'Comprehensive insurance plans — life, health, term, travel, and vehicle insurance from leading insurers across India.',
  },
  {
    icon: <FcBullish />,
    title: 'Investments',
    sub: 'FD, Bonds & More',
    desc: 'Expert guidance on fixed deposits, bonds, NPS, ELSS, and other investment instruments to grow your savings.',
  },
  {
    icon: <FcMoneyTransfer />,
    title: 'Credit Cards',
    sub: 'Rewards & Cashback',
    desc: 'Lifetime-free, travel, shopping, and cashback credit cards from top banks matched to your spending habits.',
  },
  {
    icon: <FcCurrencyExchange />,
    title: 'Forex Services',
    sub: 'Best Exchange Rates',
    desc: 'Live forex rates, currency exchange, forex cards, and international money transfers for students and travellers.',
  },
];

function Finance() {
  const [form, setForm] = useState({ name: '', mobile: '', service: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const result = await saveEnquiry('Finance Enquiry', form);
      if (result.success) {
        setStatus('✅ Enquiry sent! We will contact you shortly.');
        setTimeout(() => setStatus(''), 4000);
        setForm({
          name: '', mobile: '', service: '', message: ''
        });
      } else {
        throw new Error('Failed to save');
      }
    } catch {
      setStatus('❌ Failed to send. Please call us directly.');
      setTimeout(() => setStatus(''), 4000);
    }
  };

  return (
    <div className="service-page">
      {/* Hero */}
      <div
        className="page-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,15,35,0.82),rgba(10,15,35,0.88)), url('https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="container">
          <p className="section-tag" style={{ color: 'rgba(255,255,255,0.6)' }}>
            FINANCE SERVICES
          </p>

          <h1>
            Smart Finance Solutions for{' '}
            <span className="text-gradient">Every Goal</span>
          </h1>
          <p>
            Loans, investments, insurance, forex and more — Rainbow Overseas
            connects you with the best financial products in India.
          </p>
          <div className="hero-badges">
            <span>💳 Loans</span>
            <span>📈 Investments</span>
            <span>🛡️ Insurance</span>
            <span>💱 Forex</span>
            <span>🏅 Mutual Funds</span>
          </div>
        </div>
      </div>

      <section className="section bg-gray reveal-fade-left">
        <div className="container">
          <p className="section-tag center">WHAT WE OFFER</p>
          <h2 className="section-title">Our Financial Services</h2>
          <div className="finance-services-grid">
            {financeServices.map(s => (
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

      {/* Finance Gallery */}
      <section className="section bg-white reveal-zoom-in">
        <div className="container">
          <p className="section-tag center">FINANCIAL FREEDOM</p>
          <h2 className="section-title">Secure Your Future</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80" alt="Financial planning" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" alt="Investment growth" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" alt="Business consultation" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" alt="Digital finance" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Strip */}
      <section className="section bg-dark-section">
        <div className="container">
          <p className="section-tag center" style={{ color: 'rgba(255,255,255,0.6)' }}>
            WHY RAINBOW OVERSEAS FINANCE
          </p>
          <h2 className="section-title" style={{ color: 'white' }}>
            Trusted by 1000+ Customers
          </h2>
          <div className="why-travel-grid">
            {[
              { emoji: '⚡', title: 'Quick Approvals', desc: 'Loan approvals within 24–48 hours with minimal documentation.' },
              { emoji: '💰', title: 'Best Interest Rates', desc: 'We compare 20+ lenders to get you the most competitive rate.' },
              { emoji: '🤝', title: 'Expert Guidance', desc: 'Dedicated financial advisors to help you choose the right product.' },
              { emoji: '🔒', title: '100% Secure', desc: 'Your data and financial information is handled with complete security.' },
            ].map((w) => (
              <div key={w.title} className="why-travel-card">
                <div className="why-emoji">{w.emoji}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
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
              <p className="section-tag">GET FREE ADVICE</p>
              <h2>Talk to a Finance Expert</h2>
              <p>
                Tell us what you need and our financial experts will guide you to
                the best loan or investment plan — completely free of charge.
              </p>
              <div className="contact-callout">
                <a href="tel:+919059715992">📞 9059715992</a>
                <a href="mailto:tns9691@gmail.com">✉️ tns9691@gmail.com</a>
              </div>
            </div>
            <form className="enquiry-form detailed" onSubmit={handleSubmit}>
              <h3>Finance Enquiry</h3>
              <div className="detailed-form-grid">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Mobile Number *"
                  required
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                />
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  style={{ gridColumn: '1 / -1' }}
                >
                  <option value="">Service Required *</option>
                  <option>Personal Loans</option>
                  <option>Home Loans</option>
                  <option>Business Loans</option>
                  <option>Vehicle Loans</option>
                  <option>Gold Loans</option>
                  <option>Insurance Services</option>
                  <option>Mutual Funds</option>
                  <option>Investments</option>
                  <option>Credit Cards</option>
                  <option>Forex Services</option>
                </select>
                <textarea
                  placeholder="Brief description of your requirement..."
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    padding: '0.85rem',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '0.5rem',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    gridColumn: '1 / -1',
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{ width: '100%', gridColumn: '1 / -1' }}
                >
                  Get Free Consultation →
                </button>
                {status && (
                  <p className="form-status" style={{ gridColumn: '1 / -1' }}>
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Finance;
