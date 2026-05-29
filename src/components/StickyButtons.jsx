
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import './StickyButtons.css';

function StickyButtons() {
  const phoneNumber = '+919059715992';
  const whatsappNumber = '+919059715992';

  return (
    <div className="sticky-buttons">
      <a 
        href={`https://wa.me/${whatsappNumber}?text=Hi%20Rainbow%20Overseas`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="sticky-btn whatsapp-btn"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
      <a 
        href={`tel:${phoneNumber}`} 
        className="sticky-btn call-btn"
        title="Call us"
      >
        <FaPhoneAlt size={22} />
      </a>
    </div>
  );
}

export default StickyButtons;
