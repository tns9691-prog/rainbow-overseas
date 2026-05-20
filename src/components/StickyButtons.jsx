import React from 'react';
import './StickyButtons.css';

function StickyButtons() {
  const phoneNumber = '+918555989544';
  const whatsappNumber = '+918555989544';

  return (
    <div className="sticky-buttons">
      <a 
        href={`https://wa.me/${whatsappNumber}?text=Hi%20Rainbow%20Overseas`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="sticky-btn whatsapp-btn"
        title="Chat on WhatsApp"
      >
        💬
      </a>
      <a 
        href={`tel:${phoneNumber}`} 
        className="sticky-btn call-btn"
        title="Call us"
      >
        ☎️
      </a>
    </div>
  );
}

export default StickyButtons;
