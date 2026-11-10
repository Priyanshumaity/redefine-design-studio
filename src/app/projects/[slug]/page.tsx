import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return PROJECTS.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.brief } : {};
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) notFound();
  const index = PROJECTS.findIndex((item) => item.slug === project.slug);
  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];

  return <article className="min-h-screen bg-[#171613] pb-20 pt-28 text-[#F5F1E9] sm:pt-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <Link href="/projects" className="inline-flex items-center gap-2 pt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D9C484] transition-colors hover:text-white"><ArrowLeft className="h-3.5 w-3.5" /> All projects</Link>
      <header className="grid gap-8 border-b border-white/15 py-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:py-14">
        <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9C484]">{project.category} · {project.location}</p><h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-5xl">{project.title}</h1><p className="mt-5 max-w-2xl text-base leading-7 text-white/70">{project.tagline}</p></div>
        <dl className="grid grid-cols-2 gap-x-5 gap-y-5 border-t border-white/15 pt-6 text-sm lg:border-t-0 lg:pt-0"><div><dt className="text-[10px] uppercase tracking-[0.15em] text-white/45">Location</dt><dd className="mt-1 text-white/90">{project.location}</dd></div><div><dt className="text-[10px] uppercase tracking-[0.15em] text-white/45">Status</dt><dd className="mt-1 text-white/90">{project.status}</dd></div><div><dt className="text-[10px] uppercase tracking-[0.15em] text-white/45">Area</dt><dd className="mt-1 text-white/90">{project.area}</dd></div><div><dt className="text-[10px] uppercase tracking-[0.15em] text-white/45">Year</dt><dd className="mt-1 text-white/90">{project.year}</dd></div></dl>
      </header>
      <div className="relative mt-8 aspect-[16/9] overflow-hidden bg-[#25231E] sm:mt-10"><Image src={project.coverImage} alt={`${project.title} exterior view`} fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" /></div>
      <section className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20 lg:py-16"><div><p className="max-w-3xl text-lg leading-8 text-white/90">{project.brief}</p><div className="mt-9 space-y-5 text-sm leading-7 text-white/65 sm:text-base">{project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div><aside className="border border-white/15 bg-white/[0.035] p-5 sm:p-6"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D9C484]">Integrated disciplines</p><ul className="mt-5 space-y-3 text-sm leading-5 text-white/75">{project.disciplines.map((discipline) => <li className="flex gap-2.5" key={discipline}><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D9C484]" />{discipline}</li>)}</ul></aside></section>
      <section className="border-t border-white/15 pt-10 sm:pt-12"><div className="flex items-end justify-between gap-5"><div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9C484]">Project gallery</p><h2 className="mt-2 text-2xl font-semibold uppercase tracking-[-0.03em] sm:text-3xl">Views & Perspectives</h2></div><p className="hidden text-xs text-white/45 sm:block">Four selected views</p></div><div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">{project.gallery.slice(0, 4).map((image, galleryIndex) => <div key={`${image}-${galleryIndex}`} className="relative aspect-[4/3] overflow-hidden bg-[#25231E]"><Image src={image} alt={`${project.title} view ${galleryIndex + 1}`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-[1.025]" /></div>)}</div></section>
      <section className="mt-12 grid gap-7 border-t border-white/15 pt-10 lg:grid-cols-[minmax(0,1fr)_20rem]"><div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D9C484]">Key design considerations</p><ul className="mt-5 grid gap-3 sm:grid-cols-2">{project.highlights.map((highlight) => <li key={highlight} className="border-l border-[#D9C484] pl-3 text-sm leading-6 text-white/70">{highlight}</li>)}</ul></div><Link href="/contact" className="group inline-flex min-h-14 items-center justify-between bg-[#D9C484] px-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#171613] transition-colors hover:bg-white">Discuss a similar project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link></section>
      <Link href={`/projects/${nextProject.slug}`} className="group mt-14 flex items-center justify-between border-t border-white/15 pt-7 text-white transition-colors hover:text-[#D9C484]"><span><span className="block text-[10px] font-semibold uppercase tracking-[0.17em] text-white/45">Next project</span><span className="mt-2 block text-lg font-semibold">{nextProject.title}</span></span><ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>
    </div>
  </article>;
}
