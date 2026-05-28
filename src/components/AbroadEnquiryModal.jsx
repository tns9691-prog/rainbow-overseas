import React from 'react';
import '../pages/ServicePage.css';
import './AbroadEnquiryModal.css';

const countriesList = ['USA', 'UK', 'Canada', 'Australia', 'Germany', 'Ireland'];

const AbroadEnquiryModal = ({ isOpen, onClose, defaultCountry = '' }) => {
  if (!isOpen) return null;

  return (
    <div className="enquiry-modal-overlay" onClick={onClose}>
      <div className="enquiry-modal-content" onClick={e => e.stopPropagation()}>
        <button className="enquiry-modal-close" onClick={onClose}>&times;</button>
        <h3 className="full-width" style={{marginBottom: '1.5rem', color: '#1e3a8a'}}>Detailed Education Enquiry</h3>
        
        <div style={{ width: '100%', height: '80vh', overflowY: 'auto', borderRadius: '8px' }}>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSel1KRdHenePvupUR9j6qLdETOV5ZeXiU62IltOFb8NDam-ww/viewform?embedded=true" 
            width="100%" 
            height="2800" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default AbroadEnquiryModal;
