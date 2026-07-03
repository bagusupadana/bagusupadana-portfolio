"use client";

import { useLanguage } from "@/context/language-context";
import { profile, aboutFacts } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function About() {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-wrap px-5 py-16 sm:px-8 sm:py-24">
  <Reveal>
    <div className="mb-9 flex flex-wrap items-baseline gap-4 border-b border-line pb-7 sm:mb-14 sm:pb-11">
      <span className="font-mono text-[0.78rem] tracking-[0.1em] text-accent">
        {t.section.aboutIdx}
      </span>
      <h2 className="font-display text-[1.7rem] font-bold tracking-tight sm:text-[2.4rem]">
        {t.section.aboutTitle}
      </h2>
    </div>

    <div>
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
  <p className="text-justify text-[1.05rem] leading-relaxed text-ink sm:text-[1.3rem]">
    {profile.careerGoal[lang]}
  </p>
  <p className="text-justify text-[1.05rem] leading-relaxed text-graphite sm:text-[1.3rem]">
    {profile.bio[lang]}
  </p>
</div>
  <div className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
  {aboutFacts.map((fact) => (
    <span
      key={fact.id}
      className="rounded-sm border border-line-strong px-3 py-2 text-center font-mono text-[0.7rem] tracking-[0.05em] text-graphite"
    >
      {fact[lang]}
    </span>
  ))}
</div>
    </div>
  </Reveal>
</section>
  );
}