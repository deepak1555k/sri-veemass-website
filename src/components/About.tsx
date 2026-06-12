import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  'State-of-the-art manufacturing facility',
  'Expert team of hydraulic engineers',
  'Custom solutions for every industry',
  'Rigorous quality testing standards',
  'On-time delivery guarantee',
  'Comprehensive after-sales support',
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const isoRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax
      if (imgRef.current) {
        gsap.fromTo(imgRef.current.querySelector('img'), {
          yPercent: 15,
          scale: 1.1,
        }, {
          yPercent: -10,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Floating cards
      if (badgeRef.current) {
        gsap.fromTo(badgeRef.current, { y: 30, opacity: 0 }, {
          y: 0, opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          },
        });
      }

      if (isoRef.current) {
        gsap.fromTo(isoRef.current, { y: -30, opacity: 0, rotation: -10 }, {
          y: 0, opacity: 1, rotation: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          },
        });
      }

      // Content reveal
      if (contentRef.current) {
        gsap.fromTo(contentRef.current, { y: 80, opacity: 0 }, {
          y: 0, opacity: 1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // Mission/Vision cards stagger
      gsap.fromTo([missionRef.current, visionRef.current], { y: 40, opacity: 0 }, {
        y: 0, opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 55%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div ref={imgRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-bg.jpg"
                alt="Sri Veemass Hydraulic Workshop"
                className="w-full h-[500px] object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
            </div>
            <div ref={badgeRef} className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-[200px] will-change-transform">
              <div className="text-5xl font-outfit font-bold gradient-text">45+</div>
              <p className="text-gray-600 font-medium mt-1">Years of Excellence</p>
            </div>
            {/* Floating ISO Card */}
            <div ref={isoRef} className="absolute -top-4 -left-4 bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl shadow-2xl p-4 text-white will-change-transform">
              <div className="text-lg font-bold">ISO 9001</div>
              <p className="text-brand-200 text-xs">Certified Company</p>
            </div>
          </div>

          {/* Content Side */}
          <div ref={contentRef} className="space-y-8">
            <div ref={contentRef}>
              <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-700 text-sm font-semibold rounded-full mb-4">
                About Sri Veemass
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Building Trust Through
                <span className="block text-brand-600">Engineering Excellence</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Sri Veemass Hydraulic is a trusted name in the field of hydraulic solutions. We are engaged in manufacturing high quality Hydraulic Power packs, Hydraulic Cylinders, SPM and servicing all types of Hydraulic Pumps and Equipment.
            </p>

            <p className="text-gray-500 leading-relaxed">
              With a commitment to quality, precision and customer satisfaction, we deliver products that ensure performance, durability and efficiency for all industrial applications.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div ref={missionRef} className="p-5 bg-brand-50/50 rounded-2xl border border-brand-100">
                <Target className="w-8 h-8 text-brand-600 mb-3" />
                <h4 className="font-semibold text-gray-900">Our Mission</h4>
                <p className="text-sm text-gray-600 mt-1">
                  To deliver innovative, reliable hydraulic solutions that exceed expectations.
                </p>
              </div>
              <div ref={visionRef} className="p-5 bg-accent-500/5 rounded-2xl border border-accent-100">
                <Eye className="w-8 h-8 text-accent-600 mb-3" />
                <h4 className="font-semibold text-gray-900">Our Vision</h4>
                <p className="text-sm text-gray-600 mt-1">
                  To be the global leader in custom hydraulic manufacturing and engineering.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
