import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, ShieldCheck, Headphones, TrendingUp, Users, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  { icon: ShieldCheck, title: 'Quality Products', description: 'We deliver high-quality hydraulic products engineered for durability, precision, and top performance.' },
  { icon: Users, title: 'Experienced Service Team', description: 'Our skilled engineers and technicians have deep domain expertise to handle complex hydraulic challenges.' },
  { icon: Award, title: 'Custom Hydraulic Solutions', description: 'Tailor-made hydraulic systems and components designed specifically to meet your unique industrial requirements.' },
  { icon: Headphones, title: 'Fast Service Support', description: 'Rapid response times and dedicated support to minimize your downtime and keep operations running smoothly.' },
  { icon: Zap, title: 'Industrial Standard Manufacturing', description: 'ISO certified manufacturing processes ensuring every product meets stringent international quality standards.' },
  { icon: TrendingUp, title: 'Affordable Pricing', description: 'Competitive pricing without compromising on quality, maximizing your return on investment.' },
];

const stats = [
  { target: 500, suffix: '+', label: 'Projects Delivered' },
  { target: 200, suffix: '+', label: 'Satisfied Clients' },
  { target: 99, suffix: '%', label: 'On-Time Delivery' },
  { target: 24, suffix: '/7', label: 'Support Available' },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
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

      // Cards stagger
      const cards = cardsRef.current.filter(Boolean);
      gsap.fromTo(cards, { y: 60, opacity: 0, rotateX: 15 }, {
        y: 0, opacity: 1, rotateX: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      });

      // Counter animation
      if (statsRef.current.length > 0) {
        const animValues = statsRef.current.map(() => ({ val: 0 }));
        statsRef.current.forEach((el, index) => {
          if (!el || !animValues[index]) return;
          const target = stats[index]?.target || 0;
          gsap.to(animValues[index], {
            val: target,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            onUpdate: () => {
              el.textContent = Math.round(animValues[index]!.val).toString();
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-50/50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-700 text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            The Sri Veemass
            <span className="block text-brand-600">Advantage</span>
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            We don't just build hydraulic systems — we build partnerships based on trust, quality, and commitment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-brand-200 card-hover"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="font-outfit text-xl font-bold text-gray-900 mt-5 mb-3">{reason.title}</h3>
                <p className="text-gray-500 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-brand-700 via-brand-800 to-navy-900 rounded-3xl p-10 shadow-2xl shadow-brand-900/30">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-outfit font-bold text-white">
                  <span ref={(el) => { statsRef.current[i] = el; }}>0</span>
                  {stat.suffix}
                </div>
                <p className="text-brand-200 mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
