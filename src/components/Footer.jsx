import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';
import logo from '../../public/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Rainbow Overseas Logo" className="footer-logo-img" />
            <span className="text-gradient">Rainbow</span> Overseas
          </Link>
          <p className="footer-desc">
            Your Trusted Partner for Education, Travel, Finance, and Insurance Services.
          </p>
          <div className="owner-info">
            <strong>T. Narsimha Swamy</strong>
            <span>Brand Owner</span>
          </div>
        </div>

        <div className="footer-col links-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col services-col">
          <h3>All Services</h3>
          <ul>
            <li><Link to="/abroad-education">Education Services</Link></li>
            <li><Link to="/travel-holidays">Travel & Holidays</Link></li>
            <li><Link to="/finance">Finance Services</Link></li>
            <li><Link to="/insurance">Insurance Services</Link></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h3>Contact Details</h3>
          <ul>
            <li><strong>📞 Phones:</strong> 8555989544</li>
            <li><strong>✉️ Emails:</strong> bijjasrikar25@gmail.com</li>
            <li><strong>🏢 Address:</strong> Rainbow Overseas, Hyderabad, India</li>
          </ul>
          <div className="social-icons"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/tnswamy/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn"><FaLinkedin /></a>
            <a href="#" className="social-link" title="Instagram"><FaInstagram /></a>
            <a href="#" className="social-link" title="Twitter"><FaTwitter />📷</a>
            <a href="#" className="social-link" title="Twitter">𝕏</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rainbow Overseas. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
