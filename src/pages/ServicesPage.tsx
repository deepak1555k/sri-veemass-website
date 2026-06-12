import { useEffect } from 'react';
import Services from '../components/Services';
import CTA from '../components/CTA';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <Services />
      <CTA />
    </div>
  );
}
