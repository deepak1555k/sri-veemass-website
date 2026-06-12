import { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import IndustryPage from './pages/IndustryPage';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const progressRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Scroll Progress Bar */}
      <div ref={progressRef} className="scroll-progress" />

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/industry/:id" element={<IndustryPage />} />
        <Route path="/service/:id" element={<ServicePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
