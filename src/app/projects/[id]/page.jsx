import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Quote,
  Star,
  Video,
  ShieldCheck,
  Camera
} from 'lucide-react';
import { projectsData } from '@/data/projectsData';
import ProjectGallery from '@/components/projects/ProjectGallery';
import { getProjects, getProjectBySlug } from '@/lib/api';

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    id: String(project.id),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = await getProjectBySlug(id);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Alex Healthcare System`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = await getProjectBySlug(id);

  if (!project) {
    notFound();
  }

  const allProjects = await getProjects();
  // Related projects
  const otherProjects = allProjects.filter((p) => String(p.id) !== String(project.id)).slice(0, 3);

  return (
    <div className="w-full bg-ivory">
      
      {/* 1. Project Hero */}
      <section className="relative w-full bg-charcoal-green text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover object-center animate-kenburns"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-green via-charcoal-green/90 to-charcoal-green/75 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 anim-view">
          <div className="max-w-3xl space-y-4">
            
            <Link
              href="/projects"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-sage hover:text-coral-accent transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all projects</span>
            </Link>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-coral-accent bg-white/10 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span className="text-[11px] font-medium bg-white/10 text-ivory px-3 py-1 rounded-full flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-coral-accent" />
                <span>{project.location}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-normal">
              {project.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Metadata Strip */}
      <section className="w-full bg-white border-b border-teal-deep/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 anim-view">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-charcoal-green">
            <div>
              <span className="text-charcoal-green/60 uppercase tracking-wider font-semibold block text-[10px]">Client / Organization</span>
              <strong className="text-sm font-bold text-teal-deep">{project.client}</strong>
            </div>
            <div>
              <span className="text-charcoal-green/60 uppercase tracking-wider font-semibold block text-[10px]">Location</span>
              <strong className="text-sm font-bold text-charcoal-green">{project.location}</strong>
            </div>
            <div>
              <span className="text-charcoal-green/60 uppercase tracking-wider font-semibold block text-[10px]">Facility Scope</span>
              <strong className="text-sm font-bold text-forest">{project.capacity}</strong>
            </div>
            <div>
              <span className="text-charcoal-green/60 uppercase tracking-wider font-semibold block text-[10px]">Completion Date</span>
              <strong className="text-sm font-bold text-charcoal-green">{project.date}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Scope & Project Highlights */}
      <section className="w-full py-16 sm:py-24 border-b border-teal-deep/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 anim-view">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Project Description */}
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-teal-deep bg-sage/50 px-3 py-1 rounded-full">
                  Case Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-green">
                  Project Background &amp; Engineering Execution
                </h2>
                <p className="text-sm sm:text-base text-charcoal-green/80 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Verified Photography & Facility Gallery */}
              <ProjectGallery images={project.gallery} projectTitle={project.title} />

              {/* YouTube Video Embed if available (Star Hospital) */}
              {project.videoEmbed && (
                <div className="bg-white rounded-2xl p-6 border border-teal-deep/15 shadow-subtle space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-teal-deep">
                    <Video className="w-4 h-4 text-forest" />
                    <span>Project Documentary &amp; Facility Walkthrough</span>
                  </div>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-inner">
                    <iframe
                      src={project.videoEmbed}
                      title={`${project.title} Video Documentary`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                  <p className="text-[11px] text-charcoal-green/60 text-center">
                    Official video documentation of {project.title} facility and complete medical gas installation.
                  </p>
                </div>
              )}

              {/* Scope of Work */}
              {project.scopeList && project.scopeList.length > 0 && (
                <div className="bg-white rounded-2xl p-7 sm:p-8 border border-teal-deep/15 shadow-subtle space-y-6">
                  <h3 className="text-lg sm:text-xl font-bold text-charcoal-green border-b border-teal-deep/10 pb-3">
                    Delivered Infrastructure Scope
                  </h3>
                  <ul className="space-y-3">
                    {project.scopeList.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-charcoal-green/80 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-forest mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Verified Client Testimonial (if available for this project) */}
              {project.testimonial && (
                <div className="bg-sage/30 rounded-2xl p-7 sm:p-8 border border-teal-deep/15 space-y-4">
                  <div className="flex items-center space-x-1 text-coral-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="text-xs font-bold text-charcoal-green ml-2">Verified Client Endorsement</span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-green/85 leading-relaxed italic">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <div className="pt-2 text-xs">
                    <strong className="text-charcoal-green block">{project.testimonial.author}</strong>
                    <span className="text-charcoal-green/70">{project.testimonial.role}, {project.testimonial.facility}</span>
                  </div>
                </div>
              )}

            </div>

            {/* Right Sidebar: Key Highlights & Related (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Project Highlights Card */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="bg-white rounded-2xl p-6 border border-teal-deep/15 shadow-subtle space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-deep">
                    Engineering Benchmarks
                  </div>
                  <div className="space-y-3">
                    {project.highlights.map((h, idx) => (
                      <div key={idx} className="p-3 bg-ivory rounded-xl border border-teal-deep/10 flex items-center justify-between">
                        <span className="text-xs text-charcoal-green/70">{h.label}</span>
                        <strong className="text-xs font-bold text-teal-deep">{h.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Inquiry Action Box */}
              <div className="bg-teal-deep text-white rounded-3xl p-7 shadow-elevated space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-coral-accent bg-white/10 px-2.5 py-1 rounded-full">
                  Similar Requirements?
                </span>
                <h3 className="text-xl font-bold leading-snug">
                  Execute Your Project With Proven Engineering
                </h3>
                <p className="text-xs text-ivory/80 leading-relaxed">
                  Our project team can deliver identical engineering precision and execution for your hospital or clinical expansion.
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs font-bold text-teal-deep bg-ivory hover:bg-white transition-all shadow-sm"
                  >
                    <span>Request Similar Project Estimate</span>
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 text-coral-accent" />
                  </Link>
                </div>
              </div>

              {/* Related Projects */}
              <div className="bg-white rounded-2xl p-6 border border-teal-deep/15 shadow-subtle space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-deep">
                  More Completed Projects
                </div>
                <div className="space-y-3">
                  {otherProjects.map((other) => (
                    <Link
                      key={other.id}
                      href={`/projects/${other.id}`}
                      className="block p-3 rounded-xl hover:bg-ivory border border-teal-deep/10 transition-colors group"
                    >
                      <div className="text-xs font-bold text-charcoal-green group-hover:text-teal-deep flex items-center justify-between">
                        <span>{other.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-coral-accent" />
                      </div>
                      <div className="text-[11px] text-charcoal-green/60 mt-0.5">{other.location} &bull; {other.category}</div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
