"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/context/language-context";
import { CONTACT_FORM_ENDPOINT } from "@/lib/config";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!CONTACT_FORM_ENDPOINT) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ nama: name, email, subjek: subject, pesan: message }),
      });

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-[0.95rem] font-semibold text-ink">
          {t.form.name}
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={t.form.namePlaceholder}
          className="w-full rounded-sm border border-line bg-paper px-4 py-3 text-[0.98rem] text-ink placeholder:text-graphite/70 focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-[0.95rem] font-semibold text-ink">
          {t.form.email}
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={t.form.emailPlaceholder}
          className="w-full rounded-sm border border-line bg-paper px-4 py-3 text-[0.98rem] text-ink placeholder:text-graphite/70 focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-[0.95rem] font-semibold text-ink">
          {t.form.subject}
        </label>
        <input
          id="subject"
          type="text"
          required
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          placeholder={t.form.subjectPlaceholder}
          className="w-full rounded-sm border border-line bg-paper px-4 py-3 text-[0.98rem] text-ink placeholder:text-graphite/70 focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-[0.95rem] font-semibold text-ink">
          {t.form.message}
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={t.form.messagePlaceholder}
          className="w-full resize-y rounded-sm border border-line bg-paper px-4 py-3 text-[0.98rem] text-ink placeholder:text-graphite/70 focus:border-accent"
        />
      </div>

      <div className="flex flex-wrap items-center justify-end gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 font-mono text-[0.78rem] uppercase tracking-[0.06em] text-bg transition-all hover:bg-accent disabled:opacity-60"
        >
          {status === "sending" ? t.form.sending : t.form.submit}
        </button>

        {status === "success" && (
          <span className="text-[0.9rem] text-accent">{t.form.success}</span>
        )}
        {status === "error" && (
          <span className="text-[0.9rem] text-graphite">
            {CONTACT_FORM_ENDPOINT ? t.form.error : t.form.notConfigured}
          </span>
        )}
      </div>
    </form>
  );
}