"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { projects, ProjectItem } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { ProjectModal } from "@/components/project-modal";

export function Projects() {
  const { lang, t } = useLanguage();
  const [active, setActive] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-wrap px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <div className="mb-9 flex flex-wrap items-baseline gap-4 border-b border-line pb-7 sm:mb-14 sm:pb-11">
          <span className="font-mono text-[0.78rem] tracking-[0.1em] text-accent">
            {t.section.projectsIdx}
          </span>
          <h2 className="mt-2 font-display text-[1.7rem] font-bold tracking-tight sm:text-[2.4rem]">
            {t.section.projectsTitle}
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <Reveal key={project.title.id}>
            <button
              type="button"
              onClick={() => setActive(project)}
              className="group flex h-full w-full flex-col overflow-hidden rounded-sm border border-line bg-paper text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-28px_rgba(0,0,0,0.45)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title[lang]}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[0.74rem] tracking-[0.1em] text-graphite">
                    {project.year}
                  </span>
                  <span className="rounded-sm border border-line-strong px-2 py-1 font-mono text-[0.68rem] uppercase tracking-[0.08em]">
                    {project.category[lang]}
                  </span>
                </div>

                <h3 className="mb-3 font-display text-[1.25rem] font-bold leading-tight tracking-tight">
                  {project.title[lang]}
                </h3>

                <p className="mb-5 flex-1 text-[0.92rem] leading-relaxed text-graphite">
                  {project.summary[lang]}
                </p>

                <span className="mt-auto inline-flex items-center gap-2 font-mono text-[0.74rem] uppercase tracking-[0.08em] text-accent">
                  {t.project.viewDetail}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}