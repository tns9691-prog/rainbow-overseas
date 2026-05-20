import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/918555989544" target="_blank" rel="noopener noreferrer" className="floating-whatsapp">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" width="50" height="50" />
      </a>
    </div>
  );
}

export default Layout;
