import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { industriesData } from '../data/industriesData';

gsap.registerPlugin(ScrollTrigger);

const industries = Object.values(industriesData).map((ind) => ({
  name: ind.name,
  image: ind.image,
  link: `/industry/${ind.id}`,
}));

export default function Industries() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  const pairedIndustries = [];
  for (let i = 0; i < industries.length; i += 2) {
    pairedIndustries.push(industries.slice(i, i + 2));
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = scrollWrapperRef.current;
      if (!wrapper) return;

      const totalScroll = wrapper.scrollWidth - window.innerWidth;

      gsap.to(wrapper, {
        x: -totalScroll,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          end: () => "+=" + totalScroll
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="industries" ref={containerRef} className="h-screen w-full overflow-hidden bg-navy-950 relative">
      {/* Scrollable Wrapper */}
      <div ref={scrollWrapperRef} className="flex h-full w-max will-change-transform">
        
        {/* Intro Panel */}
        <div className="w-screen h-full flex-shrink-0 relative flex items-center justify-center">
          {/* Background */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Hydraulic machinery"
              loading="lazy"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-navy-950/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
            <span className="text-brand-400 font-bold tracking-[0.3em] uppercase mb-6 block text-sm sm:text-base">
              Trusted Worldwide
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-outfit font-bold text-white mb-8 leading-tight drop-shadow-xl">
              Diverse Industry Experience
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto">
              From Automation to Heavy Hydraulics.
            </p>
            <div className="mt-20 flex flex-col items-center gap-6 opacity-80">
              <span className="text-sm uppercase tracking-[0.2em] text-white">Scroll to explore</span>
              <div className="w-px h-24 bg-gradient-to-b from-brand-400 via-brand-500 to-transparent animate-pulse" />
            </div>
          </div>
        </div>

        {/* Industry Panels (2 per screen) */}
        {pairedIndustries.map((pair, panelIndex) => (
          <div key={panelIndex} className="w-screen h-full flex-shrink-0 flex">
            {pair.map((industry, index) => {
              const globalIndex = panelIndex * 2 + index;
              return (
                <div key={industry.name} className={`w-1/2 h-full relative group ${index !== 0 ? 'border-l border-white/10' : ''}`}>
                  {/* Background Image with slight scale for premium feel */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.name}
                      loading="lazy"
                      className="w-full h-full object-cover transform scale-100 transition-transform duration-[2000ms] group-hover:scale-110 will-change-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent opacity-95 group-hover:opacity-80 transition-opacity duration-700" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-12 lg:p-16 w-full">
                    <div className="flex items-center gap-4 mb-6 overflow-hidden">
                      <div className="h-[2px] w-8 bg-brand-500" />
                      <span className="text-brand-400 font-mono text-lg tracking-widest">
                        {String(globalIndex + 1).padStart(2, '0')} // {industries.length}
                      </span>
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                      {industry.name}
                    </h2>
                    
                    <p className="text-gray-300 text-base md:text-lg max-w-lg mb-8 leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      Powering the future of the {industry.name.toLowerCase()} sector with precision engineering and unmatched reliability.
                    </p>

                    <Link 
                      to={industry.link}
                      className="inline-flex items-center gap-3 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-500/30 group/btn w-fit"
                    >
                      Explore Solutions
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
