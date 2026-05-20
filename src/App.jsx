import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AbroadEducation from './pages/AbroadEducation';
import VisaServices from './pages/VisaServices';
import TravelHolidays from './pages/TravelHolidays';
import CarRentals from './pages/CarRentals';
import ForexServices from './pages/ForexServices';
import Insurance from './pages/Insurance';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="abroad-education" element={<AbroadEducation />} />
          <Route path="visa-services" element={<VisaServices />} />
          <Route path="travel-holidays" element={<TravelHolidays />} />
          <Route path="car-rentals" element={<CarRentals />} />
          <Route path="forex-services" element={<ForexServices />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
