import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from '@/lib/api';

export const metadata = {
  title: 'Healthcare Architecture & Engineering Insights | Alex Healthcare Facilities',
  description: 'Technical articles, NABH planning guidelines, cleanroom engineering, and modular OT case studies from our hospital infrastructure specialists.',
};

export default async function BlogIndexPage() {
  const postsData = await getPosts();
  const posts = Array.isArray(postsData) ? postsData : [];

  const featured = posts.find(p => p.featured) || posts[0];
  const list = featured ? posts.filter(p => p.id !== featured.id) : posts;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-teal-400 font-mono text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
            Technical Publications &amp; Case Studies
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Healthcare Infrastructure Insights
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed">
            In-depth engineering analysis, NABH hospital spatial planning benchmarks, modular operating theater standards, and biomedical gas piping protocols.
          </p>
        </div>

        {/* Featured Hero Article */}
        {featured && (
          <div className="mb-20">
            <Link
              href={`/blogs/${featured.slug}`}
              className="group block relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 relative h-72 sm:h-96 w-full overflow-hidden">
                  <Image
                    src={featured.image || '/heroa-bg.jpg'}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent lg:hidden" />
                </div>
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-0 lg:pr-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      {featured.category}
                    </span>
                    <span className="text-xs text-neutral-500 font-mono">
                      {featured.read_time || '5 min read'}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-teal-300 transition-colors mb-4 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                    {featured.summary}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-800 text-xs text-neutral-400">
                    <span>{featured.author_name}</span>
                    <span className="font-semibold text-teal-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Technical Case Study &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="group flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 overflow-hidden hover:border-teal-500/40 transition-all duration-300"
            >
              <div className="relative h-52 w-full overflow-hidden bg-neutral-800">
                <Image
                  src={post.image || '/heroa-bg.jpg'}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-neutral-950/80 backdrop-blur-md text-teal-400 border border-neutral-700">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2 font-mono">
                    <span>{post.read_time}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors mb-2.5 leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3 mb-4">
                    {post.summary}
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500">
                  <span className="truncate max-w-[180px]">{post.author_name}</span>
                  <span className="text-teal-400 font-semibold group-hover:translate-x-0.5 transition-transform">Read &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
