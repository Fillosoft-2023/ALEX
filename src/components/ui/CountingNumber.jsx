'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * CountingNumber Component
 * Animates a number counting up from 0 to target with an ease-out curve.
 * Triggers when scrolled into the viewport.
 */
export default function CountingNumber({ 
  value,
  target: propTarget, 
  duration = 2000, 
  suffix: propSuffix = '', 
  prefix: propPrefix = '',
  className = '' 
}) {
  let target = propTarget;
  let suffix = propSuffix;
  let prefix = propPrefix;

  if (value !== undefined) {
    const match = String(value).match(/^([^\d]*)(\d+)(.*)$/);
    if (match) {
      prefix = match[1] || '';
      target = parseInt(match[2], 10);
      suffix = match[3] || '';
    } else {
      target = 0;
    }
  } else if (target === undefined) {
    target = 0;
  }

  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let startTime = null;
          const startVal = 0;
          const endVal = target;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic: smooth deceleration towards target
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(startVal + (endVal - startVal) * easeOut);

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(endVal);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [target, duration]);

  return (
    <span ref={elementRef} className={`tabular-nums inline-block ${className}`}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
