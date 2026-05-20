import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AbroadEducation from './pages/AbroadEducation';
import Finance from './pages/Finance';
import TravelHolidays from './pages/TravelHolidays';
import Insurance from './pages/Insurance';
import About from './pages/About';
import SuccessStories from './pages/SuccessStories';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
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
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="careers" element={<Careers />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
