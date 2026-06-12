import { Link } from 'react-router-dom';

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#111115] text-white pt-24 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Huge Heading */}
        <div className="mb-16 max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-outfit text-white">
            Innovation-Inclined <br />
            Hi-performance Hydraulic Drives
          </h2>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Company */}
          <div>
            <h4 className="text-xl font-medium mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Our Company</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-white transition-colors">Industry</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-medium mb-6 text-white">Products</h4>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Hydraulic Motors</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Power Pack</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Control System</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <div className="mb-6">
              <h4 className="text-xl font-medium mb-3 text-white">Address</h4>
              <address className="text-gray-400 not-italic leading-relaxed">
                No.13, Brahmin Street<br />
                Korattur, Chennai - 600 080<br />
                India
              </address>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-medium mb-3 text-white">Email</h4>
              <a href="mailto:sriveemasshydraulic@gmail.com" className="text-gray-400 hover:text-white transition-colors block">sriveemasshydraulic@gmail.com</a>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-3 text-white">Phone</h4>
              <a href="tel:+918012909580" className="text-gray-400 hover:text-white transition-colors block">+91 80129 09580</a>
              <a href="tel:+917358226207" className="text-gray-400 hover:text-white transition-colors block mt-2">+91 73582 26207</a>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xl font-medium mb-6 text-white">Follow us on</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-white text-[#111115] hover:bg-brand-500 hover:text-white rounded-full flex items-center justify-center transition-all">
                <LinkedinIcon />
              </a>
              <a href="#" className="w-10 h-10 bg-white text-[#111115] hover:bg-brand-500 hover:text-white rounded-full flex items-center justify-center transition-all">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 bg-white text-[#111115] hover:bg-brand-500 hover:text-white rounded-full flex items-center justify-center transition-all">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 bg-white text-[#111115] hover:bg-brand-500 hover:text-white rounded-full flex items-center justify-center transition-all">
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>Copyright © 2026 Sri Veemass Hydraulic, all rights reserved</p>
          <p>Designed and Developed by <span className="text-gray-400">Innobliitz Technologies and Systems Pvt. Ltd.</span></p>
        </div>
      </div>
    </footer>
  );
}
