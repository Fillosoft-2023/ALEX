'use client';

import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';

const fullText = 'Building the Infrastructure Behind Better Healthcare.';

function HeroTypewriter() {
  const [typedCount, setTypedCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    if (!isDeleting && typedCount < fullText.length) {
      timer = setTimeout(() => setTypedCount((p) => p + 1), 55);
    } else if (!isDeleting && typedCount === fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 3200);
    } else if (isDeleting && typedCount > 0) {
      timer = setTimeout(() => setTypedCount((p) => p - 1), 25);
    } else if (isDeleting && typedCount === 0) {
      timer = setTimeout(() => setIsDeleting(false), 500);
    }
    return () => clearTimeout(timer);
  }, [typedCount, isDeleting]);

  const part1 = fullText.slice(0, Math.min(typedCount, 13));
  const part2 = typedCount > 13 ? fullText.slice(13, Math.min(typedCount, 27)) : '';
  const part3 = typedCount > 27 ? fullText.slice(27, Math.min(typedCount, 35)) : '';
  const part4 = typedCount > 35 ? fullText.slice(35, Math.min(typedCount, 53)) : '';

  return (
    <span>
      {part1}
      {part2 && (
        <span className="relative inline-block italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6ee7b7] via-[#a7f3d0] to-[#dcebe2] drop-shadow-[0_0_24px_rgba(38,122,99,0.5)] filter">
          {part2}
        </span>
      )}
      {part3}
      {part4 && <span className="italic font-normal">{part4}</span>}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.7, ease: 'easeInOut' }}
        className="inline-block w-[3px] h-[0.85em] bg-emerald-400 ml-1.5 align-middle rounded-full shadow-[0_0_8px_#34d399]"
        aria-hidden="true"
      />
    </span>
  );
}

export default memo(HeroTypewriter);

