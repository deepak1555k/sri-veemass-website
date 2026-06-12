import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Zap, Gauge, Settings } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    title: 'Hydraulic Power Packs',
    subtitle: 'Energy Source',
    description: 'Custom designed power packs for various industrial applications. Compact, efficient & reliable.',
    image: '/images/power_pack.png',
    specs: ['High-Efficiency Design', 'Continuous Duty Cycle', 'Heavy-Duty Applications'],
    icon: Zap,
    accent: 'from-accent-500 to-accent-600',
  },
  {
    title: 'Hydraulic Cylinders',
    subtitle: 'The Power Core',
    description: 'We manufacture all types of Hydraulic Cylinders as per customer requirements.',
    image: '/images/hydraulic_cylinder.png',
    specs: ['Wear-Resistant Seals', 'High Load Capacity', 'Extreme Environment Ready'],
    icon: Layers,
    accent: 'from-brand-500 to-brand-700',
  },
  {
    title: 'Special Purpose Machines (SPM)',
    subtitle: 'Custom Solutions',
    description: 'Designing and manufacturing SPM for various industrial requirements.',
    image: '/images/spm.png',
    specs: ['Turnkey Solutions', 'Automated Workflows', 'Precision Engineering'],
    icon: Gauge,
    accent: 'from-emerald-500 to-emerald-700',
  },
  {
    title: 'Hoses & Fittings',
    subtitle: 'Reliable Connections',
    description: 'High-pressure hoses, adapters, quick couplers, and fittings for reliable fluid transfer. Custom assemblies available on demand.',
    image: 'https://images.pexels.com/photos/6876845/pexels-photo-6876845.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    specs: ['High-Pressure Rated', 'Leak-Free Connections', 'Chemical & Heat Resistant'],
    icon: Settings,
    accent: 'from-purple-500 to-purple-700',
  },
  {
    title: 'Hydraulic Manifolds',
    subtitle: 'Fluid Control System',
    description: 'Custom designed and precision-machined hydraulic manifolds for optimal fluid routing and system efficiency.',
    image: 'https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    specs: ['Custom Machining', 'Space Saving', 'Leak-Free Integration'],
    icon: Layers,
    accent: 'from-indigo-500 to-indigo-700',
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current, { y: 60, opacity: 0 }, {
        y: 0, opacity: 1,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Horizontal scroll
      if (panelsRef.current && horizontalRef.current) {
        const panels = gsap.utils.toArray<HTMLDivElement>(panelsRef.current.children);
        const totalWidth = (panels.length - 1) * panels[0].offsetWidth;

        gsap.to(panels, {
          x: () => -totalWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: horizontalRef.current,
            start: 'center center',
            pin: true,
            pinSpacing: true,
            scrub: 0.5,
            end: () => `+=${totalWidth}`,
            invalidateOnRefresh: true,
          },
        });

        // Panel content animation
        panels.forEach((panel) => {
          const content = panel.querySelector('.panel-content');
          if (content) {
            gsap.fromTo(content, { y: 50, opacity: 0 }, {
              y: 0, opacity: 1,
              duration: 0.6,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: gsap.getById?.('horizontalScroll') || undefined,
                start: 'left center',
                toggleActions: 'play none none reverse',
              },
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="relative bg-navy-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div ref={headerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-brand-500/10 text-brand-400 text-sm font-semibold rounded-full mb-4 border border-brand-500/20">
            Our Products
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Premium Hydraulic
            <span className="block gradient-text">Products & Components</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg">
            Engineered for durability, precision, and performance — scroll to explore our range.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-gray-500">
            <ArrowRight className="w-5 h-5 animate-pulse" />
            <span className="text-sm">Scroll to explore products</span>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={horizontalRef} className="horizontal-scroll-section">
        <div ref={panelsRef} className="horizontal-scroll-content">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="w-screen flex-shrink-0 flex items-center justify-center px-4 sm:px-6 lg:px-8"
              >
                <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <div className={`panel-content relative rounded-3xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.accent} opacity-20`} />
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-[400px] lg:h-[500px] object-cover relative z-10 hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent z-10" />
                    <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.accent} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold">{product.title}</div>
                        <div className="text-gray-300 text-sm">{product.subtitle}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`panel-content space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="text-brand-400 font-outfit text-6xl font-bold opacity-20">
                      0{index + 1}
                    </div>
                    <h3 className="font-outfit text-3xl lg:text-4xl font-bold text-white">
                      {product.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {product.specs.map((spec) => (
                        <span
                          key={spec}
                          className="px-4 py-2 bg-white/5 text-gray-300 text-sm font-medium rounded-xl border border-white/10"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/20 transition-all duration-300 hover:scale-105"
                    >
                      Request Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
