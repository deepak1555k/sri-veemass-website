import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import gsap from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Magnetic effect for CTA button
  const handleMagnetic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' });
  };

  const handleMagneticOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
  };

  return (
    <nav
      ref={ref}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled || !isHomePage
          ? 'bg-navy-950/80 backdrop-blur-2xl shadow-2xl shadow-black/20 py-2'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with parallax */}
          <div className="flex-1">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="relative overflow-hidden flex items-center justify-center bg-white rounded-full p-0.5 shadow-lg shadow-brand-500/30 group-hover:shadow-brand-500/50 transition-all duration-300 group-hover:scale-105 transform will-change-transform">
                <img src="/logo.jpg" alt="Sri Veemass Hydraulic Logo" className="w-12 h-12 object-contain rounded-full" />
              </div>
              <div className="relative overflow-hidden">
                <span className="font-outfit text-xl font-bold text-white tracking-tight block">
                  SRI VEEMASS
                </span>
                <span className="block text-[10px] font-medium text-brand-400 tracking-[0.25em] uppercase -mt-0.5">
                  Hydraulics
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center justify-center gap-1 shrink-0">
            {navLinks.map((link) => {
              const isHashLink = link.href.includes('#');
              const LinkComponent = isHashLink ? NavHashLink : Link;
              return (
                <LinkComponent
                  key={link.label}
                  to={link.href}
                  smooth={isHashLink ? true : undefined}
                  scroll={isHashLink ? (el: HTMLElement) => setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 600) : undefined}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg transition-all duration-300 overflow-hidden group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                </LinkComponent>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex-1 flex items-center justify-end gap-3">
            <a
              href="tel:+918012909580"
              className="magnetic-btn hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 transition-all duration-300"
              onMouseMove={handleMagnetic}
              onMouseLeave={handleMagneticOut}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="glass rounded-2xl p-4 space-y-1">
            {navLinks.map((link) => {
              const isHashLink = link.href.includes('#');
              const LinkComponent = isHashLink ? NavHashLink : Link;
              return (
                <LinkComponent
                  key={link.label}
                  to={link.href}
                  smooth={isHashLink ? true : undefined}
                  scroll={isHashLink ? (el: HTMLElement) => setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 600) : undefined}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all font-medium"
                >
                  {link.label}
                </LinkComponent>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
    </nav>
  );
}
