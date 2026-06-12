import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import VideoDivider from '../components/VideoDivider';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Industries from '../components/Industries';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const isReady = true;

  useEffect(() => {
    if (!isReady) return;

    const ctx = gsap.context(() => {
      // Parallax for background shapes across sections
      gsap.utils.toArray<HTMLElement>('.parallax-bg').forEach((el) => {
        gsap.to(el, {
          yPercent: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    });

    return () => ctx.revert();
  }, [isReady]);

  return (
    <>
      <Hero onReveal={() => {}} />
      <About />
      <VideoDivider
        videoSrc="https://videos.pexels.com/video-files/31801787/13548940_3840_2160_25fps.mp4"
        overlayColor="bg-brand-900/70"
        title="Engineered for Power"
        subtitle="Discover our comprehensive range of hydraulic solutions designed for maximum performance and reliability."
      />
      <Industries />
      <Services />
      <VideoDivider
        videoSrc="https://videos.pexels.com/video-files/7622781/7622781-uhd_3840_2160_25fps.mp4"
        overlayColor="bg-navy-950/70"
        title="Trusted by Industry Leaders"
        subtitle="Powering critical operations across 200+ companies worldwide with precision hydraulic systems."
      />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
