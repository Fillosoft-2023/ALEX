import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/api';
import { mediaUrl } from '@/lib/media';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found | Alex Healthcare' };

  return {
    title: `${post.title} | Alex Healthcare Facilities Insights`,
    description: post.summary || post.meta_description,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const isYouTube = Boolean(
    post.video_embed &&
    (post.video_embed.includes('youtube.com') || post.video_embed.includes('youtu.be'))
  );

  const coverPhoto = mediaUrl(
    post.image ||
    (Array.isArray(post.gallery) && post.gallery.find((g) => !/\.(mp4|webm|ogg|mov|mkv)$/i.test(g))) ||
    '/heroa-bg.jpg'
  );

  const galleryPhotos = Array.isArray(post.gallery)
    ? post.gallery.filter((g) => !/\.(mp4|webm|ogg|mov|mkv)$/i.test(g)).map(mediaUrl)
    : [];

  return (
    <article className="min-h-screen bg-neutral-950 text-neutral-100 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Link href="/blogs" className="hover:text-teal-400 transition-colors">&larr; Back to Publications</Link>
          <span>/</span>
          <span className="text-teal-400">{post.category}</span>
        </div>

        {/* Header */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-neutral-800 mb-10 text-xs sm:text-sm text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-white">{post.author_name}</span>
            <span>&bull;</span>
            <span className="font-mono">{post.read_time}</span>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20">
            {post.category}
          </span>
        </div>

        {/* Cover Photo */}
        {coverPhoto && (
          <div className="relative h-72 sm:h-[450px] w-full rounded-2xl overflow-hidden mb-12 border border-neutral-800 bg-neutral-900">
            <Image
              src={coverPhoto}
              alt={post.title}
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Summary Lead */}
        {post.summary && (
          <div className="p-6 rounded-xl bg-neutral-900/60 border-l-4 border-teal-500 text-neutral-300 text-base sm:text-lg italic leading-relaxed mb-10">
            {post.summary}
          </div>
        )}

        {/* Featured Video (if uploaded or linked) */}
        {post.video_embed && (
          <div className="mb-12 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/60 p-4">
            <div className="flex items-center gap-2 mb-3 px-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                Article Video Presentation
              </span>
            </div>
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black">
              {isYouTube ? (
                <iframe
                  src={post.video_embed}
                  title={`${post.title} Video Presentation`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <video
                  src={post.video_embed}
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="prose prose-invert prose-teal max-w-none space-y-6 text-neutral-300 leading-relaxed text-base sm:text-lg">
          {post.content ? (
            post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))
          ) : (
            <p>Technical details forthcoming.</p>
          )}
        </div>

        {/* Multi-Photo Gallery (if photos are uploaded) */}
        {galleryPhotos.length > 0 && (
          <section className="mt-14 pt-10 border-t border-neutral-800">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Photo Documentation &amp; Gallery
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  High-resolution visual archives and clinical facility references ({galleryPhotos.length} photos)
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryPhotos.map((photoUrl, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 transition-all duration-300 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/5"
                >
                  <Image
                    src={photoUrl}
                    alt={`${post.title} visual archive ${idx + 1}`}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-[11px] font-mono text-teal-400">
                      Photo {idx + 1} of {galleryPhotos.length}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-14 pt-8 border-t border-neutral-800">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Topic Categories</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-neutral-900 border border-neutral-800 text-neutral-300"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-950 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Equipping a Healthcare or Clinical Facility?
          </h3>
          <p className="text-sm text-neutral-400 max-w-lg mx-auto mb-6">
            Consult our biomedical engineers and infrastructure specialists for turnkey hospital gas pipelines, modular OT design, and ICU equipment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-xs tracking-wider uppercase bg-teal-500 text-neutral-950 hover:bg-teal-400 transition-colors"
          >
            Contact Engineering Team &rarr;
          </Link>
        </div>

      </div>
    </article>
  );
}
