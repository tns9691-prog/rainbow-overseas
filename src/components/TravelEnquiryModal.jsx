import { useState, useEffect } from 'react';
import '../pages/ServicePage.css';
import './AbroadEnquiryModal.css'; // Reusing modal container styles
import { saveEnquiry } from '../utils/firebaseUtils';

const TravelEnquiryModal = ({ isOpen, onClose, defaultService = '' }) => {
  const [form, setForm] = useState({
    fullName: '', mobile: '', email: '', service: defaultService,
    destination: '', travelPurpose: '', startDate: '', endDate: '',
    adults: '', children: '', budgetPerPerson: '', specialNotes: '',
  });
  const [status, setStatus] = useState('');

  // Update default service if it changes
  useEffect(() => {
    setForm(prev => ({ ...prev, service: defaultService || prev.service }));
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const result = await saveEnquiry('Travel Enquiry', form);
      if (result.success) {
        setStatus('✅ Enquiry sent! We will contact you shortly.');
        setTimeout(() => { setStatus(''); onClose(); }, 3000);
      } else {
        throw new Error('Failed to save');
      }
    } catch {
      setStatus('❌ Failed. Please call us.');
      setTimeout(() => setStatus(''), 4000);
    }
  };

  return (
    <div className="enquiry-modal-overlay" onClick={onClose}>
      <div className="enquiry-modal-content" onClick={e => e.stopPropagation()}>
        <button className="enquiry-modal-close" onClick={onClose}>&times;</button>
        <h3 className="full-width" style={{marginBottom: '1.5rem', color: '#1e3a8a'}}>Travel Enquiry</h3>
        
        <form className="enquiry-form detailed" onSubmit={handleSubmit}>
          <div className="detailed-form-grid modal-scrollable-grid">
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
              <option>Domestic Tours</option>
              <option>International Tours</option>
              <option>Honeymoon Packages</option>
              <option>Family Trips</option>
              <option>Pilgrimage Tours</option>
              <option>Group Tours</option>
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
  );
};

export default TravelEnquiryModal;
