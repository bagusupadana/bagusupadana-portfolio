"use client";

import { useLanguage } from "@/context/language-context";
import { profile } from "@/lib/data";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-3 px-5 sm:px-8">
        <span className="font-mono text-[0.72rem] tracking-[0.06em] text-graphite">
          © {year} Bagus Upadana 
        </span>
      </div>
    </footer>
  );
}