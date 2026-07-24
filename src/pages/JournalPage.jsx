import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export default function JournalPage({ setCurrentPage, showToast }) {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const selectedPost = blogPosts.find(p => p.id === selectedPostId);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-ZA', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (selectedPost) {
    const related = blogPosts.filter(p => p.id !== selectedPost.id).slice(0, 3);

    return (
      <div className="min-h-screen pt-20">
        <article>
          {/* Article Header */}
          <div className="bg-[#1F1611] text-white relative overflow-hidden grain-overlay">
            <div className="glow-orb w-96 h-96 bg-[#B8651B] -top-40 -left-40 opacity-30"></div>
            <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
              <button
                onClick={() => setSelectedPostId(null)}
                className="text-sm text-white/60 hover:text-[#E8A04E] flex items-center gap-2 mb-8 transition-colors bg-transparent border-none cursor-pointer p-0"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Journal
              </button>

              <div className="flex items-center gap-3 mb-6 text-xs">
                <span className="px-3 py-1 rounded-full bg-[#B8651B]/20 text-[#E8A04E] font-semibold tracking-wide">
                  {selectedPost.category}
                </span>
                <span className="text-white/60">{selectedPost.readTime}</span>
              </div>

              <h1 className="font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8">
                {selectedPost.title}
              </h1>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B8651B] to-[#E8A04E] text-white flex items-center justify-center font-semibold">
                  {selectedPost.author.split(' ').map(n=>n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold">{selectedPost.author}</div>
                  <div className="text-xs text-white/60">{selectedPost.authorRole} · {formatDate(selectedPost.date)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Article Featured Image */}
          <div className="max-w-5xl mx-auto px-6 lg:px-8 -mt-8 relative z-10">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-[#1F1611]">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Body Content */}
          <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
            <div
              className="blog-content text-lg leading-relaxed text-[#3D2F25]"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />

            <div className="mt-12 pt-8 border-t border-[#E8DDD0] flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="text-xs font-semibold tracking-[0.15em] uppercase text-[#7A6B5E]">Share</div>
                <button
                  onClick={() => showToast('Article link copied to clipboard!')}
                  className="w-9 h-9 rounded-full border border-[#E8DDD0] flex items-center justify-center hover:bg-[#1F1611] hover:text-white transition-colors bg-transparent cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
              <button onClick={() => setCurrentPage('contact')} className="btn-outline text-sm">
                Ask a Question
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Related */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 bg-[#F2E8DA]">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8651B] mb-4">— Keep Reading</div>
            <h2 className="font-display text-3xl font-semibold mb-10 text-[#1F1611]">More from the journal</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map(p => (
                <article
                  key={p.id}
                  onClick={() => setSelectedPostId(p.id)}
                  className="card card-hover overflow-hidden cursor-pointer group"
                >
                  <div className="aspect-[16/10] img-zoom bg-[#1F1611]">
                    <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-[#B8651B]/10 text-[#B8651B] font-semibold tracking-wide">{p.category}</span>
                      <span className="text-[#7A6B5E]">{p.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2 text-[#1F1611] group-hover:text-[#B8651B] transition-colors leading-snug">{p.title}</h3>
                    <p className="text-sm text-[#7A6B5E] leading-relaxed">{p.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </article>
      </div>
    );
  }

  const featured = blogPosts[0];

  return (
    <div className="min-h-screen pt-20">

      {/* Header */}
      <section className="pt-24 pb-20 bg-[#1F1611] text-white relative overflow-hidden grain-overlay">
        <div className="glow-orb w-96 h-96 bg-[#B8651B] -top-40 -left-40 opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E8A04E] mb-4">— Renovation Journal</div>
          <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl">
            Guides, tips, and <em className="italic font-medium text-[#E8A04E]">project stories</em>.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Renovation guides, solar tips, paint system breakdowns, and real project stories from the Deskab Projects team in Centurion.
          </p>
        </div>
      </section>

      {/* Journal List */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured Article */}
          <article
            onClick={() => setSelectedPostId(featured.id)}
            className="card card-hover overflow-hidden cursor-pointer group grid md:grid-cols-2 mb-16"
          >
            <div className="aspect-[16/10] md:aspect-auto md:h-full img-zoom bg-[#1F1611]">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 text-xs">
                <span className="px-2.5 py-1 rounded-full bg-[#B8651B]/10 text-[#B8651B] font-semibold tracking-wide">Featured · {featured.category}</span>
                <span className="text-[#7A6B5E]">{featured.readTime}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4 text-[#1F1611] group-hover:text-[#B8651B] transition-colors leading-tight">
                {featured.title}
              </h2>
              <p className="text-[#7A6B5E] leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#B8651B] to-[#8B4A14] text-white flex items-center justify-center text-xs font-semibold">
                  {featured.author.split(' ').map(n=>n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-[#1F1611]">{featured.author}</div>
                  <div className="text-xs text-[#7A6B5E]">{formatDate(featured.date)}</div>
                </div>
              </div>
            </div>
          </article>

          <div className="flex items-center gap-4 mb-8">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B8651B]">— All Articles</div>
            <div className="flex-1 h-px bg-[#E8DDD0]"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPostId(post.id)}
                className="card card-hover overflow-hidden cursor-pointer group"
              >
                <div className="aspect-[16/10] img-zoom bg-[#1F1611]">
                  <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-[#B8651B]/10 text-[#B8651B] font-semibold tracking-wide">{post.category}</span>
                    <span className="text-[#7A6B5E]">{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-[#1F1611] group-hover:text-[#B8651B] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#7A6B5E] leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-[#7A6B5E] pt-4 border-t border-[#E8DDD0]">
                    <span className="font-medium text-[#1F1611]">{post.author}</span>
                    <span>·</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
