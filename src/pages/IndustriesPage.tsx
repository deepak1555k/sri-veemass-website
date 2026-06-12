import { useEffect } from 'react';
import Industries from '../components/Industries';

export default function IndustriesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <Industries />
    </div>
  );
}
