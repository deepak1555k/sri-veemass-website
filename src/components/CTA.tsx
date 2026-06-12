import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current, { y: 60, opacity: 0 }, {
        y: 0, opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-r from-brand-700 via-brand-800 to-navy-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Need Urgent Hydraulic
          <span className="block bg-gradient-to-r from-accent-400 to-amber-300 bg-clip-text text-transparent">Repair or Service?</span>
        </h2>
        <p className="mt-6 text-brand-200 text-lg max-w-2xl mx-auto">
          Our emergency response team is available 24/7. Don't let hydraulic failure stop your operations.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a href="tel:+919876543210" className="group flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-2xl shadow-2xl shadow-accent-500/30 transition-all duration-300 hover:scale-105">
            <Phone className="w-5 h-5" />
            +91 98765 43210
          </a>
          <Link to="/contact" className="group flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 transition-all duration-300">
            Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
