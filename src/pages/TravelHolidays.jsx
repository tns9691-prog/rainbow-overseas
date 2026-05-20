import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ServicePage.css';

const packages = [
  { icon: '🏔️', name: 'Domestic Tours', desc: 'Explore the beauty of India — from the Himalayas to Kerala backwaters, Rajasthan palaces to Goa beaches. Fully customised packages.' },
  { icon: '🌍', name: 'International Tours', desc: 'Europe, South-East Asia, Middle East, Americas — handcrafted international tours at unbeatable prices with visa assistance included.' },
  { icon: '💑', name: 'Honeymoon Packages', desc: 'Romantic getaways to Bali, Maldives, Paris, Switzerland and more. Exclusive deals, curated experiences, and seamless planning.' },
  { icon: '👨‍👩‍👧‍👦', name: 'Family Trips', desc: 'Fun-filled family holidays designed for all ages. Kid-friendly activities, comfortable stays, and reliable transportation.' },
  { icon: '🛕', name: 'Pilgrimage Tours', desc: 'Sacred journeys to Char Dham, Vaishno Devi, Tirupati, Shirdi, and international destinations like Mecca, Jerusalem, and Vatican.' },
  { icon: '🧳', name: 'Group Tours', desc: 'Cost-effective group travel packages for friends, corporates, and institutions. Special pricing for groups of 10+.' },
  { icon: '✈️', name: 'Flight Booking', desc: 'Best fares on domestic and international flights. We compare rates across airlines to get you the best deal.' },
  { icon: '🎯', name: 'Custom Holidays', desc: 'Tell us your dream destination and budget — we will design the perfect itinerary just for you.' },
];

function TravelHolidays() {
  const [form, setForm] = useState({ name: '', mobile: '', destination: '', travelDate: '', travellers: '', budget: '', requirements: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';
    emailjs.send(serviceID, templateID, { ...form, to_email: 'bijjasrikar25@gmail.com', reply_to: 'midn531@gmail.com', service_requested: 'Travel Package' }, publicKey)
      .then(() => { setStatus('✅ Enquiry sent! We will contact you shortly.'); setTimeout(() => setStatus(''), 4000); })
      .catch(() => { setStatus('❌ Failed. Please call us.'); setTimeout(() => setStatus(''), 4000); });
  };

  return (
    <div className="service-page">
      <div className="page-hero" style={{backgroundImage:"linear-gradient(rgba(10,15,35,0.78),rgba(10,15,35,0.88)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80')"}}>
        <div className="container">
          <p className="section-tag" style={{color:'rgba(255,255,255,0.6)'}}>TRAVEL & HOLIDAYS</p>
          <h1>Explore the World with <span className="text-gradient">Rainbow Overseas</span></h1>
          <p>Domestic, international, honeymoon, pilgrimage — every journey begins with us. Premium packages at best prices.</p>
          <div className="hero-badges">
            <span>1000+ Tours Organised</span><span>Custom Itineraries</span><span>Best Price Guarantee</span>
          </div>
        </div>
      </div>

      {/* Packages */}
      <section className="section">
        <div className="container">
          <p className="section-tag center">OUR PACKAGES</p>
          <h2 className="section-title">Holiday Packages for Every Traveller</h2>
          <div className="service-cards-grid">
            {packages.map(p => (
              <div key={p.name} className="svc-card">
                <div className="svc-icon">{p.icon}</div>
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="section enquiry-section">
        <div className="container">
          <div className="enquiry-inner">
            <div className="enquiry-text">
              <p className="section-tag">PLAN YOUR TRIP</p>
              <h2>Book Your Dream Holiday</h2>
              <p>Fill in your travel details and our travel experts will craft the perfect itinerary for you — with the best prices and seamless experience.</p>
              <div className="contact-callout">
                <a href="tel:+918555989544">📞 8555989544</a>
                <a href="mailto:bijjasrikar25@gmail.com">✉️ bijjasrikar25@gmail.com</a>
              </div>
            </div>
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <h3>Holiday Enquiry</h3>
              <input type="text" placeholder="Full Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              <input type="tel" placeholder="Mobile Number" required value={form.mobile} onChange={e => setForm({...form, mobile: e.target.value})} />
              <input type="text" placeholder="Destination" value={form.destination} onChange={e => setForm({...form, destination: e.target.value})} />
              <input type="date" placeholder="Travel Date" value={form.travelDate} onChange={e => setForm({...form, travelDate: e.target.value})} />
              <input type="number" placeholder="Number of Travellers" value={form.travellers} onChange={e => setForm({...form, travellers: e.target.value})} />
              <input type="text" placeholder="Budget (e.g. ₹50,000)" value={form.budget} onChange={e => setForm({...form, budget: e.target.value})} />
              <textarea placeholder="Special Requirements" rows="3" value={form.requirements} onChange={e => setForm({...form, requirements: e.target.value})} style={{padding:'0.85rem',border:'1.5px solid #e2e8f0',borderRadius:'0.5rem',fontFamily:'inherit',resize:'vertical'}}></textarea>
              <button type="submit" className="btn btn-dark" style={{width:'100%'}}>Send Enquiry →</button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TravelHolidays;
