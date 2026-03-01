import { useState, useEffect } from 'react';

function ScrollProgress() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(Math.round((scrolled / total) * 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (progress === 0) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full border border-white/10 bg-[var(--bg2)/90] backdrop-blur-md flex items-center justify-center">
      <span className="text-xs font-semibold text-white/70">{progress}%</span>
    </div>
  );
}

export default ScrollProgress;