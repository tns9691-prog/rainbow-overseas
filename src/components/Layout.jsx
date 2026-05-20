import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyButtons from './StickyButtons';

function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <StickyButtons />
    </div>
  );
}

export default Layout;
