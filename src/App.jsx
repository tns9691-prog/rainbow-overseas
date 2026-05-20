import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AbroadEducation from './pages/AbroadEducation';
import Finance from './pages/Finance';
import TravelHolidays from './pages/TravelHolidays';
import Insurance from './pages/Insurance';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  document.title = "Rainbow Overseas";
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="abroad-education" element={<AbroadEducation />} />
          <Route path="finance" element={<Finance />} />
          <Route path="travel-holidays" element={<TravelHolidays />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
