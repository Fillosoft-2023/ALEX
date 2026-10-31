import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Camera } from 'lucide-react';

export default function ShowcaseGallery() {
  const showcaseItems = [
    {
      title: "Hospital Civil Construction & Architecture",
      category: "Turnkey Execution",
      image: "/hospital-construction-main.jpg",
      alt: "Hospital construction framework and architectural planning in progress",
      span: "lg:col-span-8 lg:row-span-2",
      height: "h-72 lg:h-96"
    },
    {
      title: "Modular Surgical Theatres & Laminar Airflow",
      category: "Cleanrooms & Surgery",
      image: "/healthcityghy0.webp",
      alt: "Modular operation theatre with ceiling laminar airflow plenum and stainless steel scrub zone",
      span: "lg:col-span-4",
      height: "h-64 lg:h-46"
    },
    {
      title: "Degreased Medical Gas Pipeline Distribution",
      category: "Life-Support Systems",
      image: "/kapili2.jpg",
      alt: "Medical gas pipeline installation at hospital with manifold connection",
      span: "lg:col-span-4",
      height: "h-64 lg:h-46"
    },
    {
      title: "Intensive Care Unit (ICU) Bed Head Infrastructure",
      category: "Critical Care",
      image: "/healthplanetnagao1.webp",
      alt: "ICU hospital setup with bed head trunking panels and vital signs telemetry",
      span: "lg:col-span-6",
      height: "h-64"
    },
    {
      title: "Specialized Medical Equipment & Clinical Furniture",
      category: "Biomedical Procurement",
      image: "/Medical Equipment Planning & Procurement.webp",
      alt: "Hospital furniture, multi-function ICU beds, and medical equipment layout",
      span: "lg:col-span-6",
      height: "h-64"
    }
  ];

  return (
    <section className="w-full bg-ivory py-16 sm:py-24 border-b border-teal-deep/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-teal-deep bg-sage/50 px-3 py-1 rounded-full">
              <Camera className="w-3.5 h-3.5 text-forest" />
              <span>Visual Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-green tracking-tight">
              Engineering Disciplines in Action
            </h2>
            <p className="text-sm sm:text-base text-charcoal-green/75 leading-relaxed">
              Authentic on-site documentation of civil structural milestones, cleanroom installations, manifold pipelines, and hospital equipment deployment.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center space-x-1.5 font-bold text-sm text-teal-deep hover:text-coral-accent transition-colors flex-shrink-0"
          >
            <span>View all project case studies &rarr;</span>
          </Link>
        </div>

        {/* Asymmetric Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {showcaseItems.map((item, idx) => (
            <div
              key={idx}
              className={`group relative rounded-2xl overflow-hidden shadow-subtle hover:shadow-float border border-teal-deep/15 bg-charcoal-green transition-all duration-300 ${item.span} ${item.height}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-green/85 via-charcoal-green/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-coral-accent">
                  {item.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold leading-snug line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
