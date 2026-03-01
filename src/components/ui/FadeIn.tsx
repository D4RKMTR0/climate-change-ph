import { useEffect, useRef, useState } from 'react';
import { type ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface Props {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: Direction;
}

function FadeIn({ children, delay = 0, duration = 700, distance = 24, direction = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (inView) return 'translate(0, 0)';
    switch (direction) {
      case 'up':    return `translateY(${distance}px)`;
      case 'down':  return `translateY(-${distance}px)`;
      case 'left':  return `translateX(${distance}px)`;
      case 'right': return `translateX(-${distance}px)`;
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transform: getTransform(),
        opacity: inView ? 1 : 0,
        transition: `transform ${duration}ms ease, opacity ${duration}ms ease`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default FadeIn;