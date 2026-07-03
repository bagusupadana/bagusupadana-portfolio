"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Hero() {
  const { lang, t } = useLanguage();
  const words = lang === "id" ? profile.roles : profile.rolesEn;
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle");

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const interval = setInterval(() => {
      setPhase("exit");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setPhase("enter");
        requestAnimationFrame(() => setPhase("idle"));
      }, 420);
    }, 2600);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="profile" className="mx-auto max-w-wrap px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
      <div id="top" className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.3fr_0.9fr]">
  <div>
    <div className="mb-3 flex flex-wrap items-baseline gap-3">
  <span className="font-mono text-[0.78rem] tracking-[0.1em] text-accent">
    {t.section.profileIdx}
  </span>
  <h2 className="font-display text-[1.7rem] font-bold tracking-tight sm:text-[2.4rem]">
    {t.section.profileTitle}
  </h2>
</div>

    <span className="mb-7 inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-graphite sm:mb-10">
            <span className="h-2 w-2 animate-pulse2 rounded-full bg-accent" />
            {profile.availability[lang]} — {profile.location}
          </span>

          <h1 className="font-display text-[3.2rem] font-extrabold leading-[0.92] tracking-[-0.03em] sm:text-[5.2rem] lg:text-[6.4rem]">
            {profile.name}
          </h1>

          <div className="mt-7 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-display text-[1.6rem] font-semibold tracking-tight sm:mt-9 sm:text-[2.3rem]">
            <span className="text-graphite">{t.hero.lead}</span>
            <span className="font-mono text-[0.7em] font-normal text-line-strong">
              [
            </span>
            <span
              className={`inline-block text-accent transition-transform duration-300 ${
                phase === "exit"
                  ? "cycle-exit"
                  : phase === "enter"
                  ? "cycle-enter"
                  : ""
              }`}
            >
              {words[index]}
            </span>
            <span className="font-mono text-[0.7em] font-normal text-line-strong">
              ]
            </span>
          </div>

          <p className="mt-7 max-w-[54ch] text-[1.02rem] leading-relaxed text-graphite text-justify sm:mt-9 sm:text-[1.18rem]">
  {profile.bio[lang]}
</p>

          <div className="mt-9 flex flex-col items-start gap-3 border-t border-line pt-6 sm:mt-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 font-mono text-[0.78rem] uppercase tracking-[0.06em] text-bg transition-all hover:bg-accent hover:-translate-y-0.5"
            >
              {t.hero.cta}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-[360px] overflow-hidden rounded-sm border border-line bg-paper">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 360px"
              className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}