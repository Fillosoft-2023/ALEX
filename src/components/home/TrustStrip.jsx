'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  ShieldCheck, 
  Award, 
  Building2, 
  Wrench,
  Layers,
  Sparkles
} from 'lucide-react';

export default function TrustStrip() {
  const trustPoints = [
    {
      id: 0,
      badge: "Heritage",
      metric: "12+ Years",
      title: "12+ Years Experience",
      desc: "Specialized in hospital civil engineering, MEP systems, and regional healthcare compliance.",
      icon: Award
    },
    {
      id: 1,
      badge: "Proven Portfolio",
      metric: "250+ Builds",
      title: "250+ Completed Projects",
      desc: "Proven execution across Assam, Northeast India, Siliguri, and West Bengal.",
      icon: Building2
    },
    {
      id: 2,
      badge: "Hospital Scale",
      metric: "70-100+ Beds",
      title: "70 to 100+ Bed Capacities",
      desc: "Delivering turnkey infrastructure for multi-speciality tertiary hospitals and clinical centers.",
      icon: Layers
    },
    {
      id: 3,
      badge: "Single Accountability",
      metric: "End-to-End",
      title: "Single-Point Turnkey Delivery",
      desc: "From architectural planning & civil construction to MGPS and modular OT commissioning.",
      icon: Wrench
    },
    {
      id: 4,
      badge: "Quality Benchmarks",
      metric: "NABH / NBC",
      title: "NABH & NBC Part 4 Aligned",
      desc: "Rigorous cleanroom air cascades, infection control zoning, and statutory life-safety standards.",
      icon: ShieldCheck
    },
    {
      id: 5,
      badge: "On-Ground Support",
      metric: "Guwahati HQ",
      title: "Regional Field Execution",
      desc: "Guwahati headquarters with rapid on-site logistics, engineering support, and facility maintenance.",
      icon: MapPin
    }
  ];

  const totalCards = trustPoints.length;
  const anglePerCard = 360 / totalCards; // 60 degrees

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [radius, setRadius] = useState(340);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Responsive radius calculation
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 480) {
        setRadius(215);
      } else if (window.innerWidth < 768) {
        setRadius(260);
      } else if (window.innerWidth < 1024) {
        setRadius(300);
      } else {
        setRadius(350);
      }
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  // Auto-play interval
  useEffect(() => {
    if (!isPlaying || isDragging) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalCards);
    }, 3800);
    return () => clearInterval(timer);
  }, [isPlaying, isDragging, totalCards]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  };

  // Pointer/Touch Drag handlers for interactive 3D rotation
  const handlePointerDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
    setDragOffset(0);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const diff = currentX - dragStartX;
    setDragOffset(diff);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 45) {
      handlePrev();
    } else if (dragOffset < -45) {
      handleNext();
    }
    setDragOffset(0);
  };

  // Calculated current cylinder rotation angle
  const cylinderRotation = -(activeIndex * anglePerCard) + (dragOffset * 0.15);

  return (
    <section className="w-full bg-sage/35 border-b border-teal-deep/10 py-12 sm:py-16 overflow-hidden relative">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Strip Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-teal-deep/10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold uppercase tracking-wider text-teal-deep bg-sage/60 px-3 py-1 rounded-full mb-1">
              <Sparkles className="w-3.5 h-3.5 text-forest" />
              <span>Verified Track Record &bull; Interactive 3D Showcase</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-charcoal-green tracking-tight">
              Trusted Healthcare Infrastructure Partner in Northeast India
            </h2>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2 text-xs font-semibold text-charcoal-green/80 bg-white/80 px-4 py-2 rounded-xl border border-teal-deep/15 shadow-subtle">
              <MapPin className="w-4 h-4 text-coral-accent" />
              <span>Headquartered in Guwahati, Assam</span>
            </div>

            {/* Play/Pause toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-xl bg-white/80 hover:bg-white text-charcoal-green border border-teal-deep/15 transition-all text-xs font-semibold flex items-center space-x-1.5 shadow-subtle"
              title={isPlaying ? "Pause 3D rotation" : "Resume 3D rotation"}
              aria-label={isPlaying ? "Pause 3D rotation" : "Resume 3D rotation"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-forest" /> : <Play className="w-3.5 h-3.5 text-coral-accent" />}
              <span className="text-[11px] hidden sm:inline">{isPlaying ? "Pause" : "Auto-Rotate"}</span>
            </button>
          </div>
        </div>

        {/* 3D Carousel Stage */}
        <div 
          className="relative w-full h-[360px] sm:h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none touch-pan-y"
          style={{
            perspective: '1200px',
            perspectiveOrigin: '50% 50%'
          }}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        >
          {/* Rotating 3D Cylinder Container */}
          <div
            className="relative w-[275px] sm:w-[320px] h-[275px] sm:h-[285px]"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${cylinderRotation}deg)`,
              transition: isDragging ? 'none' : 'transform 0.85s cubic-bezier(0.2, 0.9, 0.3, 1)'
            }}
          >
            {trustPoints.map((point, index) => {
              const cardAngle = index * anglePerCard;
              const Icon = point.icon;

              // Distance from active center
              let diff = (index - activeIndex) % totalCards;
              if (diff > totalCards / 2) diff -= totalCards;
              if (diff < -totalCards / 2) diff += totalCards;
              const isFront = diff === 0;
              const isAdjacent = Math.abs(diff) === 1;

              return (
                <div
                  key={point.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(index);
                  }}
                  className={`absolute inset-0 rounded-3xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-500 cursor-pointer ${
                    isFront
                      ? 'bg-white shadow-float border-2 border-teal-deep/30 ring-4 ring-forest/10 opacity-100 z-30'
                      : isAdjacent
                      ? 'bg-white/85 shadow-card border border-teal-deep/15 opacity-80 backdrop-blur-sm z-20'
                      : 'bg-white/60 shadow-subtle border border-teal-deep/10 opacity-40 backdrop-blur-md z-10 pointer-events-none'
                  }`}
                  style={{
                    transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  {/* Top Bar with Icon & Metric Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors ${
                        isFront ? 'bg-teal-deep text-white shadow-sm' : 'bg-sage/50 text-forest'
                      }`}>
                        <Icon className={`w-5 h-5 ${isFront ? 'text-coral-accent' : 'text-forest'}`} />
                      </div>

                      <span className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        isFront ? 'bg-forest/15 text-forest border border-forest/30' : 'bg-sage/40 text-charcoal-green/70'
                      }`}>
                        {point.metric}
                      </span>
                    </div>

                    <div className="text-[10px] font-bold uppercase tracking-wider text-forest mb-1">
                      {point.badge}
                    </div>
                    
                    <h3 className={`font-extrabold text-base sm:text-lg leading-snug transition-colors ${
                      isFront ? 'text-charcoal-green' : 'text-charcoal-green/85'
                    }`}>
                      {point.title}
                    </h3>
                  </div>

                  {/* Description & Status */}
                  <div className="pt-3 border-t border-teal-deep/10">
                    <p className="text-xs text-charcoal-green/75 leading-relaxed line-clamp-3">
                      {point.desc}
                    </p>

                    <div className="mt-3 flex items-center justify-between text-[11px] font-semibold text-teal-deep">
                      <span className="flex items-center space-x-1">
                        <CheckCircle className="w-3.5 h-3.5 text-forest" />
                        <span>Verified Spec</span>
                      </span>
                      {isFront && (
                        <span className="text-coral-accent font-bold text-[10px] uppercase tracking-wider">
                          Active Focus
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Overlay Buttons (Desktop / Tablet only) */}
          <div className="hidden sm:flex absolute inset-y-0 left-2 sm:left-6 items-center z-40 pointer-events-auto">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 shadow-elevated border border-teal-deep/20 flex items-center justify-center text-charcoal-green hover:text-teal-deep hover:scale-105 active:scale-95 transition-all"
              aria-label="Previous credential card"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="hidden sm:flex absolute inset-y-0 right-2 sm:right-6 items-center z-40 pointer-events-auto">
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 shadow-elevated border border-teal-deep/20 flex items-center justify-center text-charcoal-green hover:text-teal-deep hover:scale-105 active:scale-95 transition-all"
              aria-label="Next credential card"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Navigation Controls & Indicator Dots (Accessible & Unobstructed on all screens) */}
        <div className="flex items-center justify-center space-x-3 sm:space-x-4 mt-6">
          <button
            onClick={handlePrev}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-card border border-teal-deep/15 flex items-center justify-center text-charcoal-green hover:text-teal-deep active:scale-95 transition-all"
            aria-label="Previous credential card"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="flex items-center space-x-2">
            {trustPoints.map((point, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={point.id}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    isActive 
                      ? 'w-7 sm:w-8 h-2.5 bg-teal-deep shadow-sm' 
                      : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-teal-deep/25 hover:bg-teal-deep/50'
                  }`}
                  aria-label={`Go to ${point.title}`}
                />
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-card border border-teal-deep/15 flex items-center justify-center text-charcoal-green hover:text-teal-deep active:scale-95 transition-all"
            aria-label="Next credential card"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="text-center text-[11px] text-charcoal-green/60 mt-3">
          Drag horizontally or use arrows to rotate the 3D credentials cylinder
        </div>

      </div>
    </section>
  );
}
