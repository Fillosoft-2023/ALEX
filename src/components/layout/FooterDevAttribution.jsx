'use client';

import { useState, useEffect } from 'react';

export default function FooterDevAttribution() {
  const fullText = "Website designed and developed by Fillosoft Technologies";
  const [typedLength, setTypedLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    if (!isDeleting && typedLength < fullText.length) {
      timer = setTimeout(() => {
        setTypedLength((prev) => prev + 1);
      }, 55);
    } else if (!isDeleting && typedLength === fullText.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 3500);
    } else if (isDeleting && typedLength > 0) {
      timer = setTimeout(() => {
        setTypedLength((prev) => prev - 1);
      }, 25);
    } else if (isDeleting && typedLength === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 600);
    }
    return () => clearTimeout(timer);
  }, [typedLength, isDeleting]);

  // Syntax highlighting for the code line:
  // prefix: "Website designed and developed by " (len 34)
  // target: "Fillosoft Technologies" (len 22)
  const prefixCut = Math.min(typedLength, 34);
  const targetCut = typedLength > 34 ? typedLength - 34 : 0;

  const prefixText = fullText.slice(0, prefixCut);
  const targetText = fullText.slice(34, 34 + targetCut);

  return (
    <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-center anim-view">
      <a
        href="https://www.fillosoft.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center space-x-1.5 font-mono text-[11px] sm:text-xs text-ivory/70 hover:text-white transition-colors"
      >
        {/* Terminal Prompt Symbol */}
        <span className="text-emerald-400 font-bold select-none">&gt;&gt;</span>
        
        {/* Code Comment Prefix */}
        <span className="text-emerald-300/80">
          {prefixText}
        </span>

        {/* Highlighted Brand Name */}
        {targetText && (
          <span className="font-semibold text-emerald-400 underline underline-offset-4 decoration-emerald-500/50 group-hover:decoration-emerald-400 transition-colors">
            {targetText}
          </span>
        )}

        {/* Blinking Code Terminal Cursor */}
        <span
          className="inline-block w-[6px] h-[13px] bg-emerald-400 align-middle animate-pulse ml-0.5 shadow-[0_0_6px_#34d399]"
          aria-hidden="true"
        />
      </a>
    </div>
  );
}

