import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = Object.values(servicesData).map((srv) => ({
  id: srv.id,
  title: srv.title,
  description: srv.shortDescription,
  image: srv.image,
  link: `/service/${srv.id}`,
}));

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(headerRef.current, { y: 60, opacity: 0 }, {
          y: 0, opacity: 1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // Cards stagger animation
      const cards = cardsRef.current.filter(Boolean);
      if (cards.length > 0) {
        gsap.fromTo(cards, { y: 80, opacity: 0, scale: 0.95 }, {
          y: 0, opacity: 1, scale: 1,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          force3D: true,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 55%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 text-sm font-semibold rounded-full mb-6">
            Our Services
          </span>
          <h2 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Comprehensive Hydraulic
            <span className="block text-brand-600 mt-2">Solutions & Services</span>
          </h2>
          <p className="mt-8 text-gray-600 text-lg sm:text-xl">
            From design and manufacturing to installation and maintenance, we provide
            end-to-end hydraulic services for peak performance.
          </p>
        </div>

        {/* Photo Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={service.title}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative h-[420px] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 cursor-pointer border border-white/10 block"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform scale-100 transition-transform duration-[1.5s] group-hover:scale-110 ease-out will-change-transform"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

              {/* Content Box */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full">
                <div className="transform transition-transform duration-500 ease-out translate-y-16 group-hover:translate-y-0">
                  <h3 className="font-outfit text-2xl font-bold text-white mb-4 leading-snug">
                    {service.title}
                  </h3>
                  
                  <div className="overflow-hidden">
                    <p className="text-gray-300 leading-relaxed text-base opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {service.description}
                    </p>
                    
                    <span
                      className="inline-flex items-center gap-2 mt-6 text-brand-400 font-semibold text-sm group-hover:text-brand-300 transition-colors opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-500 delay-150 group/link"
                    >
                      Learn More 
                      <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
