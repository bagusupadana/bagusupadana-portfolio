"use client";

import { useLanguage } from "@/context/language-context";

export function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <button
      type="button"
      aria-label={t.langToggle}
      onClick={() => setLang(lang === "id" ? "en" : "id")}
      className="flex h-9 items-center justify-center gap-1 rounded-sm border border-line px-3 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink transition-colors hover:border-line-strong hover:bg-paper"
    >
      <span className={lang === "id" ? "text-accent" : "text-graphite"}>
        ID
      </span>
      <span className="text-line-strong">/</span>
      <span className={lang === "en" ? "text-accent" : "text-graphite"}>
        EN
      </span>
    </button>
  );
}
