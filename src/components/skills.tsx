"use client";

import { useLanguage } from "@/context/language-context";
import { skillCategories } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Skills() {
  const { lang, t } = useLanguage();

  return (
    <section id="skills" className="mx-auto max-w-wrap px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <div className="mb-9 flex flex-wrap items-baseline gap-4 border-b border-line pb-7 sm:mb-14 sm:pb-11">
          <span className="font-mono text-[0.78rem] tracking-[0.1em] text-accent">
            {t.section.skillsIdx}
          </span>
          <h2 className="font-display text-[1.7rem] font-bold tracking-tight sm:text-[2.4rem]">
            {t.section.skillsTitle}
          </h2>

        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <Reveal key={category.title.id}>
            <div>
              <h3 className="mb-4 flex items-baseline justify-between border-b-2 border-ink pb-3 font-display text-[1.1rem] font-bold tracking-tight">
                {category.title[lang]}
              </h3>
              <ul className="flex flex-col">
                {category.items.map((item) => (
                  <li
                    key={item.name.id}
                    className="flex items-center justify-between gap-4 border-b border-line py-2.5 text-[0.94rem]"
                  >
                    <span>{item.name[lang]}</span>
                    <span className="shrink-0 font-mono text-[0.7rem] text-graphite">
                      {item.level[lang]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}