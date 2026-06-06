import { useState } from 'react';
import {
  FcFlashOn,
  FcHome,
  FcGlobe,
  FcApproval,
  FcSafe,
  FcDocument,
  FcShipped,
  FcSynchronize,
  FcPanorama,
} from 'react-icons/fc';
import './ServicePage.css';
import './TravelHolidays.css';
import { saveEnquiry } from '../utils/firebaseUtils';

const services = [
  {
    icon: <FcFlashOn />,
    name: 'Flight Tickets',
    sub: 'Domestic & International',
    desc: 'Get the best fares on domestic and international flights. We compare prices across all major airlines to save you money.',
  },
  {
    icon: <FcHome />,
    name: 'Hotel Bookings',
    sub: '3★ to 5★ Properties',
    desc: 'From budget stays to luxury resorts — we book the perfect accommodation matching your preferences and budget.',
  },
  {
    icon: <FcGlobe />,
    name: 'Tour Packages',
    sub: 'Customised & Group',
    desc: 'Fully customised domestic and international tour packages covering flights, hotels, sightseeing, and transfers.',
  },
  {
    icon: <FcApproval />,
    name: 'Visa Assistance',
    sub: 'Tourist & Business',
    desc: 'End-to-end visa application support — document preparation, form filling, appointment booking, and tracking.',
  },
  {
    icon: <FcSafe />,
    name: 'Travel Insurance',
    sub: 'Comprehensive Coverage',
    desc: 'Protect your journey with travel insurance covering medical emergencies, trip cancellations, baggage loss, and more.',
  },
  {
    icon: <FcDocument />,
    name: 'Passport Assistance',
    sub: 'Fresh & Renewal',
    desc: 'Hassle-free passport application and renewal assistance. We guide you through documents, appointments, and submissions.',
  },
  {
    icon: <FcShipped />,
    name: 'Airport Transfers',
    sub: 'Pick-up & Drop',
    desc: 'Comfortable and reliable airport pick-up and drop-off services across all major cities. On-time, every time.',
  },
  {
    icon: <FcSynchronize />,
    name: 'Cruise Bookings',
    sub: 'Luxury Cruise Holidays',
    desc: 'Book luxury cruise packages across the world — Mediterranean, Caribbean, Southeast Asia, and Indian Ocean routes.',
  },
  {
    icon: <FcPanorama />,
    name: 'Holiday Packages',
    sub: 'Honeymoon, Family & More',
    desc: 'Honeymoon, family, group, pilgrimage — our tailor-made holiday packages ensure every trip becomes a lifetime memory.',
  },
];

function TravelHolidays() {
  const [form, setForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    service: '',
    destination: '',
    travelPurpose: '',
    startDate: '',
    endDate: '',
    adults: '',
    children: '',
    budgetPerPerson: '',
    specialNotes: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const result = await saveEnquiry('Travel & Holidays Enquiry', form);
      if (result.success) {
        setStatus('✅ Enquiry sent! We will contact you shortly.');
        setTimeout(() => setStatus(''), 4000);
        setForm({
          fullName: '', mobile: '', email: '', service: '',
          destination: '', travelPurpose: '', startDate: '', endDate: '',
          adults: '', children: '', budgetPerPerson: '', specialNotes: ''
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
            "linear-gradient(rgba(10,15,35,0.78),rgba(10,15,35,0.88)), url('/images/travel.jpeg')",
        }}
      >
        <div className="container">
          <p className="section-tag" style={{ color: 'rgba(255,255,255,0.6)' }}>
            TRAVEL &amp; HOLIDAYS
          </p>
          <h1>
            Explore the World with{' '}
            <span className="text-gradient">Rainbow Overseas</span>
          </h1>
          <p>
            Flights, hotels, tours, visas, cruises and more — your complete
            travel partner for every journey, every dream.
          </p>
          <div className="hero-badges">
            <span>✈️ Flights</span>
            <span>🏨 Hotels</span>
            <span>🌍 Tours</span>
            <span>🛳️ Cruises</span>
            <span>📄 Visas</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section travel-services-section">
        <div className="container">
          <p className="section-tag center reveal-up">WHAT WE OFFER</p>
          <h2 className="section-title reveal-up">Our Travel Services</h2>
          <div className="travel-services-grid stagger-children">
            {services.map((s) => (
              <div key={s.name} className="travel-svc-card">
                <div className="travel-svc-icon">{s.icon}</div>
                <div className="travel-svc-body">
                  <h4>{s.name}</h4>
                  <span className="travel-svc-sub">{s.sub}</span>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Gallery */}
      <section className="section bg-white">
        <div className="container">
          <p className="section-tag center reveal-up">WANDERLUST</p>
          <h2 className="section-title reveal-up">Explore Beautiful Destinations</h2>
          <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="/images/travel1.png" alt="Airplane flight" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80" alt="Beautiful landscape" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Tropical beach" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" alt="Cityscape at night" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-dark-section">
        <div className="container">
          <p className="section-tag center reveal-up" style={{ color: 'rgba(255,255,255,0.6)' }}>
            WHY RAINBOW OVERSEAS
          </p>
          <h2 className="section-title reveal-up" style={{ color: 'white' }}>
            Your Trusted Travel Partner
          </h2>
          <div className="why-travel-grid stagger-children">
            {[
              { emoji: '💰', title: 'Best Price Guarantee', desc: 'We match or beat any comparable quote. No hidden charges, ever.' },
              { emoji: '🛡️', title: 'Safe &amp; Insured', desc: 'All packages include travel insurance options for complete peace of mind.' },
              { emoji: '🤝', title: '24/7 Support', desc: 'Our travel desk is available round-the-clock during your trip.' },
              { emoji: '🎯', title: 'Personalised Itineraries', desc: 'Custom-built trips based on your budget, interests, and travel style.' },
            ].map((w) => (
              <div key={w.title} className="why-travel-card">
                <div className="why-emoji">{w.emoji}</div>
                <h4 dangerouslySetInnerHTML={{ __html: w.title }} />
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="section enquiry-section reveal-fade-right">
        <div className="container">
          <div className="enquiry-inner">
            <div className="enquiry-text">
              <p className="section-tag">PLAN YOUR TRIP</p>
              <h2>Book Your Dream Holiday</h2>
              <p>
                Share your travel details and our experts will craft the perfect
                itinerary — best prices, seamless experience, zero hassle.
              </p>
              <div className="contact-callout">
                <a href="tel:+919059715992">📞 9059715992</a>
                <a href="mailto:tns9691@gmail.com">✉️ tns9691@gmail.com</a>
              </div>
            </div>

            <form className="enquiry-form detailed" onSubmit={handleSubmit}>
              <h3>Travel Enquiry</h3>
              <div className="detailed-form-grid">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Mobile Number *"
                  required
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="">Service Required *</option>
                  <option>Flight Tickets</option>
                  <option>Hotel Bookings</option>
                  <option>Tour Packages</option>
                  <option>Visa Assistance</option>
                  <option>Travel Insurance</option>
                  <option>Passport Assistance</option>
                  <option>Airport Transfers</option>
                  <option>Cruise Bookings</option>
                  <option>Holiday Packages</option>
                </select>
                <select
                  value={form.travelPurpose}
                  onChange={(e) => setForm({ ...form, travelPurpose: e.target.value })}
                >
                  <option value="">Travel Purpose</option>
                  <option>Leisure / Holiday</option>
                  <option>Honeymoon</option>
                  <option>Family Trip</option>
                  <option>Group Tour</option>
                  <option>Pilgrimage</option>
                  <option>Business Trip</option>
                </select>
                <input
                  type="text"
                  placeholder="Destination"
                  value={form.destination}
                  onChange={(e) => setForm({ ...form, destination: e.target.value })}
                />
                <input
                  type="date"
                  placeholder="Travel Start Date"
                  value={form.startDate}
                  onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                />
                <input
                  type="date"
                  placeholder="Travel End Date"
                  value={form.endDate}
                  onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="No. of Adults"
                  value={form.adults}
                  onChange={(e) => setForm({ ...form, adults: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="No. of Children"
                  value={form.children}
                  onChange={(e) => setForm({ ...form, children: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Budget Per Person (₹)"
                  value={form.budgetPerPerson}
                  onChange={(e) => setForm({ ...form, budgetPerPerson: e.target.value })}
                />
                <textarea
                  placeholder="Special Requests / Notes"
                  rows="3"
                  value={form.specialNotes}
                  onChange={(e) => setForm({ ...form, specialNotes: e.target.value })}
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
                  Send Enquiry →
                </button>
                {status && <p className="form-status" style={{ gridColumn: '1 / -1' }}>{status}</p>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TravelHolidays;
