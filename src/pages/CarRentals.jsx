import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ServicePage.css';

const vehicles = [
  { icon: '🚗', name: 'Sedan', desc: 'Comfortable and economical sedans for city rides, airport transfers, and outstation trips. Swift, Dzire, Honda City & more.' },
  { icon: '🚙', name: 'SUV', desc: 'Spacious SUVs perfect for families and group outings. Innova Crysta, Ertiga, XUV700 and more.' },
  { icon: '🏎️', name: 'Luxury Cars', desc: 'Arrive in style with our premium luxury fleet — Mercedes, BMW, Audi, and Toyota Camry.' },
  { icon: '🚌', name: 'Tempo Traveller', desc: 'Ideal for group travel — Tempo Travellers seating 9 to 26 passengers, perfect for pilgrimages and corporate trips.' },
  { icon: '✈️', name: 'Airport Pickup & Drop', desc: 'Punctual and reliable airport transfers 24/7. We track your flight and ensure you are never late.' },
  { icon: '🛣️', name: 'Outstation Trips', desc: 'Explore destinations beyond the city. Comfortable vehicles, experienced drivers for multi-day outstation journeys.' },
  { icon: '⏰', name: 'Hourly Rental', desc: 'Need a car for a few hours? Our hourly rental packages are flexible and budget-friendly.' },
];

function CarRentals() {
  const [form, setForm] = useState({ name: '', mobile: '', pickup: '', drop: '', travelDate: '', vehicleType: '', passengers: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';
    emailjs.send(serviceID, templateID, { ...form, to_email: 'bijjasrikar25@gmail.com', reply_to: 'midn531@gmail.com', service_requested: 'Car Rentals' }, publicKey)
      .then(() => { setStatus('✅ Booking enquiry sent!'); setTimeout(() => setStatus(''), 4000); })
      .catch(() => { setStatus('❌ Failed. Please call us.'); setTimeout(() => setStatus(''), 4000); });
  };

  return (
    <div className="service-page">
      <div className="page-hero" style={{backgroundImage:"linear-gradient(rgba(10,15,35,0.82),rgba(10,15,35,0.88)), url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80')"}}>
        <div className="container">
          <p className="section-tag" style={{color:'rgba(255,255,255,0.6)'}}>CAR RENTALS</p>
          <h1>Reliable Car Rentals <span className="text-gradient">Across All Major Cities</span></h1>
          <p>Sedan, SUV, Luxury, or Tempo Traveller — we have the right vehicle for every trip at the best price.</p>
          <div className="hero-badges"><span>24/7 Available</span><span>Expert Drivers</span><span>Best Price</span></div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p className="section-tag center">OUR FLEET</p>
          <h2 className="section-title">Vehicles We Offer</h2>
          <div className="service-cards-grid">
            {vehicles.map(v => (
              <div key={v.name} className="svc-card">
                <div className="svc-icon">{v.icon}</div>
                <h4>{v.name}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section enquiry-section">
        <div className="container">
          <div className="enquiry-inner">
            <div className="enquiry-text">
              <p className="section-tag">BOOK NOW</p>
              <h2>Book Your Vehicle Instantly</h2>
              <p>Tell us your travel plan and we will assign the best vehicle and driver at the most competitive rate.</p>
              <div className="contact-callout">
                <a href="tel:+918555989544">📞 8555989544</a>
                <a href="mailto:bijjasrikar25@gmail.com">✉️ bijjasrikar25@gmail.com</a>
              </div>
            </div>
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <h3>Car Rental Enquiry</h3>
              <input type="text" placeholder="Full Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              <input type="tel" placeholder="Mobile Number" required value={form.mobile} onChange={e => setForm({...form, mobile: e.target.value})} />
              <input type="text" placeholder="Pickup Location" value={form.pickup} onChange={e => setForm({...form, pickup: e.target.value})} />
              <input type="text" placeholder="Drop Location" value={form.drop} onChange={e => setForm({...form, drop: e.target.value})} />
              <input type="date" value={form.travelDate} onChange={e => setForm({...form, travelDate: e.target.value})} />
              <select value={form.vehicleType} onChange={e => setForm({...form, vehicleType: e.target.value})}>
                <option value="">Vehicle Type</option>
                {['Sedan','SUV','Luxury Car','Tempo Traveller','Mini Bus'].map(v => <option key={v} value={v}>{v}</option>)}
              </select>
              <input type="number" placeholder="Number of Passengers" value={form.passengers} onChange={e => setForm({...form, passengers: e.target.value})} />
              <button type="submit" className="btn btn-dark" style={{width:'100%'}}>Book Now →</button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CarRentals;
