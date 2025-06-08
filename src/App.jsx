import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import "./App.css";

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import TechStack from './pages/TechStack';
import Certifications from './pages/Certifications';
import Social from './pages/Social';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Wrapper from './components/Wrapper';

// Main App with route transitions
export default function App() {
  return (  
    <Router>
      <LayoutGroup>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<Wrapper />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tech-stack" element={<TechStack />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/social" element={<Social />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            {/* Redirect old routes or unknown */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </LayoutGroup>
    </Router>
  );
}
