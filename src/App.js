// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Pricing from './pages/Pricing';
// import Appointment from './pages/Appointment';
// import Login from './pages/Login';
// import Team from './pages/Team';
// import Gallery from './pages/Gallery';
// import Testimonials from './pages/Testimonials';
// import FAQ from './pages/FAQ';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/pricing" element={<Pricing />} />
//           <Route path="/appointment" element={<Appointment />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/team" element={<Team />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/testimonials" element={<Testimonials />} />
//           <Route path="/faq" element={<FAQ />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Appointment from './pages/Appointment';
import Login from './pages/Login';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;