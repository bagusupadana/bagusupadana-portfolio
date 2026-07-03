# Digital Portfolio

**Language / Bahasa:** [English](#english) | [Indonesia](#bahasa-indonesia)

---

## English

A personal portfolio for Bagus Upadana, following a single-page approach with light/dark mode, a bilingual system, and data-driven project content displayed through summary cards and detail modals.

### Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Available Scripts](#available-scripts)
* [Content Management](#content-management)
* [Deployment Notes](#deployment-notes)
* [Author](#author)
* [License](#license)

### Overview

This website displays:

* `Hero`, `About`, `Projects`, `Skills`, and `Contact` sections on a single page
* light/dark mode with a toggle in the navbar
* a bilingual system (Indonesian and English)
* project content sourced from `src/lib/data.ts`
* a contact form that sends data to Google Sheets via Google Apps Script

### Features

* **Light/Dark Mode**
   * follows the system preference by default
   * can be switched manually via the navbar toggle, saved automatically in the browser
* **Bilingual Content**
   * supports Indonesian and English
   * language toggle available in the navbar
   * text managed via `src/lib/dictionary.ts` (UI labels) and directly in `src/lib/data.ts` (personal content)
* **Data-Driven Portfolio**
   * all project items are managed from a single data source
   * adding a new project only requires editing the `projects` array in `src/lib/data.ts`
* **Project Card + Detail Modal**
   * projects are shown as summary cards (title, category, one-line description)
   * clicking a card opens a modal with background, goal, role, tools, and result
* **Contact Integration**
   * the contact form connects to Google Sheets via a Google Apps Script endpoint in `src/lib/config.ts`

### Tech Stack

* Framework: Next.js 15
* Language: TypeScript
* Styling: Tailwind CSS
* Theme: next-themes
* Icons: Lucide React
* Contact: Google Apps Script + Google Sheets

### Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── about.tsx
│   ├── contact.tsx
│   ├── contact-form.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── language-toggle.tsx
│   ├── navbar.tsx
│   ├── project-modal.tsx
│   ├── projects.tsx
│   ├── reveal.tsx
│   ├── skills.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── context/
│   └── language-context.tsx
└── lib/
    ├── config.ts
    ├── data.ts
    └── dictionary.ts
```

### Getting Started

1. Clone the repository

```
git clone https://github.com/bagusupadana/bagusupadana-portfolio.git
cd bagusupadana-portfolio
```

2. Install dependencies

```
npm install
```

3. Set up the contact form endpoint

Open `src/lib/config.ts` and fill in `CONTACT_FORM_ENDPOINT` with your Google Apps Script Web App URL.

4. Run the development server

```
npm run dev
```

Open `http://localhost:3000`.

### Available Scripts

```
npm run dev
npm run build
npm run start
npm run lint
```

### Content Management

**Update project and profile content**
Edit file:

```
src/lib/data.ts
```

**Update UI labels (navbar, buttons, section titles)**
Edit file:

```
src/lib/dictionary.ts
```

### License

© 2026 Bagus Upadana

---

## Bahasa Indonesia

Portofolio pribadi Bagus Upadana, mengikuti pendekatan single-page dengan mode terang/gelap, sistem bilingual, dan konten proyek berbasis data yang ditampilkan melalui kartu ringkasan dan modal detail.

### Daftar Isi

* [Overview](#overview-1)
* [Fitur](#fitur)
* [Tech Stack](#tech-stack-1)
* [Struktur Project](#struktur-project)
* [Memulai Project](#memulai-project)
* [Script yang Tersedia](#script-yang-tersedia)
* [Pengelolaan Konten](#pengelolaan-konten)
* [Catatan Deployment](#catatan-deployment)
* [Author](#author-1)
* [Lisensi](#lisensi)

### Overview

Website ini menampilkan:

* section `Hero`, `About`, `Projects`, `Skills`, dan `Contact` dalam satu halaman
* light/dark mode dengan toggle di navbar
* sistem bahasa ganda Indonesia dan English
* konten proyek yang diambil dari `src/lib/data.ts`
* form kontak yang mengirim data ke Google Sheets via Google Apps Script

### Fitur

* **Light/Dark Mode**
   * mengikuti preferensi sistem secara default
   * dapat diganti manual lewat toggle di navbar, tersimpan otomatis di browser
* **Bilingual Content**
   * mendukung Bahasa Indonesia dan English
   * toggle bahasa tersedia di navbar
   * teks dikelola lewat `src/lib/dictionary.ts` (label UI) dan langsung di `src/lib/data.ts` (konten personal)
* **Data-Driven Portfolio**
   * seluruh item proyek dikelola dari satu sumber data
   * penambahan proyek baru cukup lewat array `projects` di `src/lib/data.ts`
* **Project Card + Detail Modal**
   * proyek ditampilkan sebagai kartu ringkasan (judul, kategori, satu kalimat singkat)
   * klik kartu membuka modal berisi latar belakang, tujuan, peran, tools, dan hasil
* **Contact Integration**
   * form kontak terhubung ke Google Sheets lewat endpoint Google Apps Script di `src/lib/config.ts`

### Tech Stack

* Framework: Next.js 15
* Language: TypeScript
* Styling: Tailwind CSS
* Theme: next-themes
* Icons: Lucide React
* Contact: Google Apps Script + Google Sheets

### Struktur Project

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── about.tsx
│   ├── contact.tsx
│   ├── contact-form.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── language-toggle.tsx
│   ├── navbar.tsx
│   ├── project-modal.tsx
│   ├── projects.tsx
│   ├── reveal.tsx
│   ├── skills.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── context/
│   └── language-context.tsx
└── lib/
    ├── config.ts
    ├── data.ts
    └── dictionary.ts
```

### Memulai Project

1. Clone repository

```
git clone https://github.com/bagusupadana/bagusupadana-portfolio.git
cd bagusupadana-portfolio
```

2. Install dependencies

```
npm install
```

3. Setup endpoint form kontak

Buka `src/lib/config.ts` dan isi `CONTACT_FORM_ENDPOINT` dengan URL Web App Google Apps Script.

4. Jalankan development server

```
npm run dev
```

Buka `http://localhost:3000`.

### Script yang Tersedia

```
npm run dev
npm run build
npm run start
npm run lint
```

### Pengelolaan Konten

**Update konten proyek dan profil**
Edit file:

```
src/lib/data.ts
```

**Update label antarmuka (navbar, tombol, judul section)**
Edit file:

```
src/lib/dictionary.ts
```

### Lisensi

© 2026 Bagus Upadana
