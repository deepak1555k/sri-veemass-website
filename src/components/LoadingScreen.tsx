import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { Droplets } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const duration = 2200;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);
      if (p < 100) requestAnimationFrame(tick);
      else {
        setTimeout(() => {
          if (ref.current) {
            gsap.to(ref.current, {
              yPercent: -100,
              duration: 0.8,
              ease: 'power4.inOut',
              onComplete: () => {
                gsap.set(ref.current, { yPercent: 0, clearProps: 'all' });
                onComplete();
              },
            });
          } else {
            onComplete();
          }
        }, 300);
      }
    };

    requestAnimationFrame(tick);
  }, [onComplete]);

  return (
    <div
      ref={ref}
      className="loading-screen"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
          <Droplets className="w-9 h-9 text-white" />
        </div>
        <div className="font-outfit text-2xl font-bold text-white tracking-tight">
          SREEVIMASS
        </div>
        <div className="text-brand-400 text-xs tracking-[0.3em] uppercase font-medium">
          Hydraulics
        </div>
      </div>

      <div className="loading-bar mt-8">
        <div
          className="loading-bar-inner"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-gray-500 text-xs mt-3 font-medium">
        {Math.round(progress)}%
      </div>
    </div>
  );
}
