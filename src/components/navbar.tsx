"use client";

import { useLanguage } from "@/context/language-context";
import { profile } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";

export function Navbar() {
  const { t } = useLanguage();

  const links = [
    { href: "#profile", label: t.nav.profile },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex h-[62px] max-w-wrap items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-[1.05rem] font-bold tracking-tight"
        >
          {profile.name}
          <span className="text-accent">{profile.initialsMark}</span>
        </a>
        <nav className="flex items-center gap-4 sm:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden font-mono text-[0.74rem] uppercase tracking-[0.08em] text-graphite transition-colors hover:text-ink sm:inline"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
