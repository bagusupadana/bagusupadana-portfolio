"use client";

import { useLanguage } from "@/context/language-context";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  const { lang, t } = useLanguage();

  const links = [
  {
    id: "email",
    label: t.contact.email,
    value: profile.email,
    href: `mailto:${profile.email}`,
    show: true,
  },
  {
    id: "phone",
    label: t.contact.phone,
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^0-9+]/g, "")}`,
    show: Boolean(profile.phone),
  },
  {
    id: "linkedin",
    label: t.contact.linkedin,
    value: profile.linkedin.replace("https://", ""),
    href: profile.linkedin,
    show: Boolean(profile.linkedin),
  },
  {
    id: "github",
    label: t.contact.github,
    value: profile.github.replace("https://", ""),
    href: profile.github,
    show: Boolean(profile.github),
  },
  {
    id: "instagram",
    label: t.contact.instagram,
    value: profile.instagram.replace("https://", ""),
    href: profile.instagram,
    show: Boolean(profile.instagram),
  },
  {
    id: "telegram",
    label: t.contact.telegram,
    value: profile.telegram.replace("https://", ""),
    href: profile.telegram,
    show: Boolean(profile.telegram),
  },
].filter((link) => link.show);

  return (
    <section
      id="contact"
      className="mx-auto max-w-wrap border-t border-line px-5 py-16 sm:px-8 sm:py-24"
    >
      <Reveal>
        <div className="mb-9 flex flex-wrap items-baseline gap-4 border-b border-line pb-7 sm:mb-14 sm:pb-11">
          <span className="font-mono text-[0.78rem] tracking-[0.1em] text-accent">
            {t.section.contactIdx}
          </span>
          <h2 className="font-display text-[1.7rem] font-bold tracking-tight sm:text-[2.4rem]">
            {t.section.contactTitle}
          </h2>
        </div>
      </Reveal>

      <Reveal>
        <a
          href={`mailto:${profile.email}`}
          className="group mt-9 inline-block font-display text-[2.4rem] font-bold leading-[0.95] tracking-[-0.03em] sm:mt-12 sm:text-[5rem]"
        >
          {t.contact.cta.split("\n").map((line, i) => (
            <span key={i} className="block">
              {i === t.contact.cta.split("\n").length - 1 ? (
                <span className="bg-[linear-gradient(var(--accent),var(--accent))] bg-no-repeat bg-[length:0%_4px] bg-[position:0_100%] pb-1 transition-[background-size] duration-300 group-hover:bg-[length:100%_4px]">
                  {line}
                </span>
              ) : (
                line
              )}
            </span>
          ))}
        </a>
      </Reveal>

      <Reveal>
        <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:mt-16 sm:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex flex-col gap-2 bg-bg p-5 transition-colors hover:bg-paper sm:p-6"
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-graphite">
                {link.label}
              </span>
              <span className="font-display text-[1rem] font-semibold">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="mx-auto mt-12 max-w-2xl border-t border-line pt-12 sm:mt-16">
          <ContactForm />
        </div>
      </Reveal>
    </section>
  );
}