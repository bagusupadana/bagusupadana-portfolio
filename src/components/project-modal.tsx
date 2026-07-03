"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { ProjectItem } from "@/lib/data";

export function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectItem | null;
  onClose: () => void;
}) {
  const { lang, t } = useLanguage();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    panelRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.title[lang]}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-y-auto rounded-t-sm border border-line bg-bg sm:rounded-sm"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.project.close}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-sm border border-line bg-bg text-ink transition-colors hover:border-line-strong hover:bg-paper"
        >
          <X size={16} />
        </button>

        <div className="relative aspect-[16/9] w-full shrink-0">
          <Image
            src={project.image}
            alt={project.title[lang]}
            fill
            sizes="(max-width: 640px) 100vw, 640px"
            className="object-cover"
          />
        </div>

        <div className="p-6 sm:p-9">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[0.74rem] tracking-[0.1em] text-graphite">
              {project.year}
            </span>
            <span className="rounded-sm border border-line-strong px-2 py-1 font-mono text-[0.68rem] uppercase tracking-[0.08em]">
              {project.category[lang]}
            </span>
          </div>

          <h3 className="mb-6 font-display text-[1.6rem] font-bold leading-tight tracking-tight sm:text-[2rem]">
            {project.title[lang]}
          </h3>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-graphite">
                {t.project.background}
              </dt>
              <dd className="mt-1 text-justify text-[0.94rem] leading-relaxed text-ink">
                {project.background[lang]}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-graphite">
                {t.project.goal}
              </dt>
              <dd className="mt-1 text-justify text-[0.94rem] leading-relaxed text-ink">
                {project.goal[lang]}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-graphite">
                {t.project.role}
              </dt>
              <dd className="mt-1 text-justify text-[0.94rem] leading-relaxed text-ink">
                {project.role[lang]}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-graphite">
                {t.project.tools}
              </dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-sm bg-bg-soft px-2.5 py-1 font-mono text-[0.7rem] text-graphite"
                  >
                    {tool}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-7 border-t border-line pt-6">
  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-accent">
    {t.project.result}
  </dt>
  <dd className="mt-1 max-w-[60ch] text-justify text-[0.94rem] leading-relaxed text-ink">
    {project.result[lang]}
  </dd>
</div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 font-mono text-[0.78rem] uppercase tracking-[0.06em] text-bg transition-all hover:bg-accent"
            >
              {t.project.visitProject}
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
