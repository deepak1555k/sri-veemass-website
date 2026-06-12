import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VideoDividerProps {
  videoSrc: string;
  overlayColor: string;
  title: string;
  subtitle: string;
  id?: string;
}

export default function VideoDivider({ videoSrc, overlayColor, title, subtitle, id }: VideoDividerProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Video parallax
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          yPercent: 25,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Content parallax
      if (contentRef.current) {
        gsap.fromTo(contentRef.current, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'top 20%',
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id={id} ref={sectionRef} className="relative h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Video Background with Parallax */}
      <div ref={videoRef} className="absolute inset-0 parallax-layer">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ transform: 'scale(1.15)' }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className={`absolute inset-0 ${overlayColor}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Content */}
      <div ref={contentRef} className="relative text-center z-10 px-4">
        <h2 className="font-outfit text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-white/10 rounded-full parallax-bg" />
      <div className="absolute bottom-1/4 right-16 w-32 h-32 border border-white/5 rotate-45 parallax-bg" />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-white/10 rounded-full parallax-bg" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-white/15 rounded-full parallax-bg" />
    </section>
  );
}
