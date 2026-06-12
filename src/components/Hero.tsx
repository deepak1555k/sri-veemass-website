import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Clock, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onReveal }: { onReveal: () => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    onReveal();

    const ctx = gsap.context(() => {
      // Hero entrance
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(titleRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' })
        .fromTo(subtitleRef.current, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }, '-=0.6')
        .fromTo(descRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        .fromTo(btnRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .fromTo(badgesRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.2')
        .fromTo(statsRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.5)' }, '-=0.3')
        .fromTo(scrollIndicatorRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.2');

      // Parallax background
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Stats parallax
      if (statsRef.current) {
        gsap.to(statsRef.current, {
          yPercent: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }


    }, sectionRef);

    return () => ctx.revert();
  }, [onReveal]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Video Background */}
      <div ref={videoRef} className="absolute inset-0 parallax-layer">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ transform: 'scale(1.1)' }}
        >
          <source src="https://videos.pexels.com/video-files/30456098/13053655_3840_2160_50fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div ref={subtitleRef} className="overflow-hidden">
              <div className={`inline-flex items-center gap-2 px-4 py-2 glass rounded-full ${loaded ? '' : 'translate-y-full'}`}>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300 font-medium">Trusted Since 1980 · ISO Certified</span>
              </div>
            </div>

            <div ref={titleRef} className="overflow-hidden">
              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05]">
                Powering
                <span className="block gradient-text">
                  Industry
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-400 mt-3">
                  With Precision
                </span>
              </h1>
            </div>

            <div ref={descRef}>
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                Manufacturer of Hydraulic Power packs, Hydraulic Cylinders, SPM, and Servicing of All Types of Hydraulic Pumps and Equipment. High quality hydraulic products and reliable service solutions for every industrial need.
              </p>
            </div>

            {/* CTA Buttons */}
            <div ref={btnRef} className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 text-white font-semibold rounded-2xl shadow-2xl shadow-brand-500/25 overflow-hidden transition-all duration-500"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-brand-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center gap-2">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-8 py-4 glass text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors group-hover:scale-110 transform duration-300">
                  <svg className="w-4 h-4 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                Explore Services
              </Link>
            </div>

            {/* Trust Badges */}
            <div ref={badgesRef} className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-5 h-5 text-brand-400" />
                <span className="text-sm font-medium">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Award className="w-5 h-5 text-accent-400" />
                <span className="text-sm font-medium">45+ Years</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Stats Cards - Parallax */}
          <div ref={statsRef} className="hidden lg:grid grid-cols-2 gap-4 parallax-layer">
            {[
              { value: '500+', label: 'Projects Completed', color: 'from-brand-500 to-brand-300' },
              { value: '200+', label: 'Happy Clients', color: 'from-accent-500 to-accent-400' },
              { value: '45+', label: 'Years Experience', color: 'from-green-500 to-green-300' },
              { value: '50+', label: 'Industry Partners', color: 'from-purple-500 to-purple-300' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`glass rounded-2xl p-6 card-hover ${i === 1 || i === 3 ? 'mt-8' : ''}`}
              >
                <div className="text-4xl font-outfit font-bold text-white">
                  {stat.value}
                </div>
                <p className="text-gray-400 mt-1 text-sm">{stat.label}</p>
                <div className={`mt-3 h-1 w-16 bg-gradient-to-r ${stat.color} rounded-full`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link to="/about" className="group flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
