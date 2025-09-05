import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "@/lib/blogs";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

// Build-time static paths
export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}
export const dynamicParams = false;

// Utils: slugify + robust TOC
function slugify(str) {
  return (str ?? "")
    .toString()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
function extractToc(md) {
  if (!md || typeof md !== "string") return [];
  const lines = md.split(/\r?\n/);
  const toc = [];
  for (const raw of lines) {
    const line = (raw ?? "").toString();
    if (!line.trim()) continue;
    const m2 = line.match(/^##\s+(.+?)\s*$/);
    const m3 = line.match(/^###\s+(.+?)\s*$/);
    if (m2?.[1]) {
      const text = m2[1].trim();
      toc.push({ level: 2, text, id: slugify(text) });
    } else if (m3?.[1]) {
      const text = m3[1].trim();
      toc.push({ level: 3, text, id: slugify(text) });
    }
  }
  return toc;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params; // Next 15: await params
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return notFound();

  const toc = extractToc(post.content);

  const components = {
    h2({ children, ...props }) {
      const text = String(children ?? "").replace(/<[^>]+>/g, "");
      const id = slugify(text);
      return (
        <h2
          id={id}
          className="scroll-mt-24 text-[clamp(1.5rem,3.8vw,2rem)] md:text-[clamp(1.6rem,3vw,2.25rem)] xl:text-[2.25rem] font-extrabold leading-tight"
          {...props}
        >
          {children}
        </h2>
      );
    },
    h3({ children, ...props }) {
      const text = String(children ?? "").replace(/<[^>]+>/g, "");
      const id = slugify(text);
      return (
        <h3
          id={id}
          className="scroll-mt-24 text-[clamp(1.25rem,3.2vw,1.5rem)] md:text-[clamp(1.3rem,2.6vw,1.75rem)] xl:text-[1.75rem] font-bold leading-snug"
          {...props}
        >
          {children}
        </h3>
      );
    },
    a({ node, ...props }) {
      const isExternal = typeof props.href === "string" && props.href.startsWith("http");
      return (
        <a
          {...props}
          className="underline underline-offset-4 decoration-2 text-gray-900 hover:text-gray-700"
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        />
      );
    },
    ul({ children, ...props }) {
      return <ul className="space-y-2" {...props}>{children}</ul>;
    },
    li({ children, ...props }) {
      return <li className="leading-relaxed" {...props}>{children}</li>;
    },
    p({ children, ...props }) {
      return <p className="leading-7 md:leading-8" {...props}>{children}</p>;
    },
  };

  return (
    <article className="container mx-auto mt-[6rem] max-w-screen-2xl px-4 sm:px-5 md:px-6 lg:px-8 py-6 md:py-8">
      {/* Header */}
      <header className="mb-5 sm:mb-6 md:mb-8">
        <p className="text-[12px] tracking-wide uppercase text-gray-500">Article</p>
        <h1 className="mt-2 text-[clamp(1.6rem,5vw,2.4rem)] md:text-[clamp(1.9rem,4vw,3rem)] xl:text-[3rem] font-extrabold text-gray-900 leading-tight">
          {post.title}
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-[15px] text-gray-600">
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Published
          </span>
          <span className="hidden sm:block">•</span>
          <time dateTime={new Date(post.date).toISOString()} className="sm:ml-1">
            {post.date}
          </time>
        </div>
      </header>

      {/* Hero */}
      <div className="relative mb-6 md:mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1536px) 1400px, (min-width: 1280px) 1280px, (min-width: 1024px) 1120px, (min-width: 640px) 768px, 100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
      </div>

      {/* Main: mobile single, md: TOC visible, lg+: wider content with compact TOC */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {/* TOC */}
        <aside className="hidden md:block md:col-span-4 lg:col-span-2 xl:col-span-2 2xl:col-span-2">
          {toc.length > 0 && (
            <div className="lg:sticky lg:top-24 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur px-4 py-4 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-600">
                On this page
              </p>
              <nav className="space-y-2">
                {toc.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.id}`}
                    className={`block text-[15px] transition ${
                      item.level === 2
                        ? "font-medium text-gray-800 hover:text-gray-900"
                        : "pl-4 text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </aside>

        {/* Body */}
        <div className="md:col-span-8 lg:col-span-10 xl:col-span-10 2xl:col-span-10">
          {/* Lead chip */}
          {post.desc ? (
            <div className="mb-5 md:mb-6 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 sm:px-5 sm:py-4 text-gray-800">
              {post.desc}
            </div>
          ) : null}

          {/* Wider text line-length on desktop */}
          <div className="mx-auto w-full max-w-5xl">
            <div
              className="prose prose-gray max-w-none
                         prose-headings:font-extrabold
                         prose-a:text-gray-900 hover:prose-a:text-gray-700
                         prose-strong:text-gray-900
                         prose-img:rounded-xl
                         prose-li:marker:text-gray-400
                         prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:italic
                         text-[clamp(1rem,2.8vw,1.0625rem)] md:text-[clamp(1.02rem,2vw,1.125rem)]
                         leading-7 md:leading-8"
            >
              <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]} components={components}>
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 md:mt-10 overflow-hidden rounded-2xl bg-gradient-to-tr from-gray-900 to-gray-700 p-5 md:p-6 text-white shadow-lg">
            <h3 className="text-[clamp(1.125rem,3.6vw,1.375rem)] md:text-[clamp(1.2rem,2.4vw,1.5rem)] xl:text-[1.5rem] font-semibold">
              Ready to grow online?
            </h3>
            <p className="mt-1 text-gray-200">
              Get a fast, SEO‑friendly website that converts visitors into customers.
            </p>
            <a
              href="/Contact"
              className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-gray-900 transition hover:bg-gray-100"
            >
              Get a free consultation →
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
