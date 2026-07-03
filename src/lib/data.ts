export type LocalizedText = {
  id: string;
  en: string;
};

export type ProjectItem = {
  year: string;
  category: LocalizedText;
  title: string;
  summary: LocalizedText;
  background: LocalizedText;
  goal: LocalizedText;
  role: LocalizedText;
  tools: string[];
  result: LocalizedText;
  image: string;
  link?: string;
};

export type SkillCategory = {
  title: LocalizedText;
  items: { name: LocalizedText; level: LocalizedText }[];
};

export const profile = {
  name: "Ida Bagus Gede Upadana Manuaba",
  program: {
    id: "Program Studi Teknologi Informasi",
    en: "Information Technology Program",
  } as LocalizedText,
  location: "Bali, Indonesia",
  availability: {
    id: "Terbuka untuk peluang magang & kolaborasi",
    en: "Open to internships & collaboration",
  } as LocalizedText,
  roles: ["pengembang", "desainer", "pelajar", "pemecah masalah"],
  rolesEn: ["developer", "designer", "learner", "problem solver"],
  bio: {
    id: "Saya adalah mahasiswa Teknologi Informasi yang teliti dan memiliki minat besar terhadap teknologi serta inovasi digital, khususnya dalam pengembangan aplikasi web. Mampu menganalisis masalah dan bekerja sama dalam tim, serta memiliki kemauan untuk terus belajar dan beradaptasi dengan teknologi baru.",
    en: "I'm a detail-oriented Information Technology student with a strong interest in technology and digital innovation, especially in web application development. Able to analyze problems and work collaboratively in team environments with a willingness to learn and adapt to new technologies.",
  } as LocalizedText,
  interests: {
    id: "Pengembangan web, administrasi server & jaringan, dan desain antarmuka (UI/UX).",
    en: "Web development, server & network administration, and UI/UX design.",
  } as LocalizedText,
  careerGoal: {
    id: "Bercita-cita menjadi Software Engineer / Product Designer yang membangun produk berdampak bagi banyak orang, sembari terus belajar teknologi baru.",
    en: "Aspiring to become a Software Engineer / Product Designer building products that matter, while continuously learning new technologies.",
  } as LocalizedText,
  photo: "/images/profile.png",
  email: "gusdeupadana16@gmail.com",
  phone: "+62 813-3916-5838",
  linkedin: "https://linkedin.com/in/bagusupadana",
  github: "https://github.com/bagusupadana",
  instagram: "https://instagram.com/bagusupadana",
  telegram: "https://t.me/bagusupadana",
};

export const aboutFacts: LocalizedText[] = [
  { id: "Teknologi Informasi", en: "Information Technology" },
  { id: "Mahasiswa Aktif", en: "Active Student" },
  { id: "ID / EN / FR", en: "ID / EN / FR" },
  { id: "Berbasis di Bali", en: "Based in Bali" },
];

export const projects: ProjectItem[] = [
  {
  year: "2025",
  category: { id: "Aplikasi Web", en: "Web Application" },
  title: "Book2Stay — Platform Booking Penginapan",
  summary: {
    id: "Platform booking online untuk mempermudah pencarian dan pemesanan kamar penginapan.",
    en: "An online booking platform that simplifies searching for and reserving accommodation.",
  },
  background: {
    id: "Dibuat untuk memenuhi mata kuliah Aplikasi Berbasis Platform. Banyak usaha penginapan kecil masih melakukan proses booking secara manual, sehingga kurang efisien bagi pemilik maupun tamu.",
    en: "Built for the Platform-Based Application course. Many small accommodation businesses still handle bookings manually, making the process inefficient for both owners and guests.",
  },
  goal: {
    id: "Membangun aplikasi web yang mempermudah proses pencarian kamar, booking online, dan pengelolaan data penginapan.",
    en: "Build a web application that simplifies room search, online booking, and accommodation data management.",
  },
  role: {
    id: "Back-End Developer — bertanggung jawab pada logika sistem, pengelolaan data kamar dan reservasi, serta integrasi antara front-end dan database.",
    en: "Back-End Developer — responsible for system logic, room and reservation data management, and integration between front-end and database.",
  },
  tools: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  result: {
    id: "Aplikasi booking penginapan yang mudah digunakan untuk melihat informasi kamar, melakukan reservasi, dan mengelola data penginapan secara lebih efisien.",
    en: "An easy-to-use accommodation booking app for viewing room information, making reservations, and managing stay data more efficiently.",
  },
  image: "/images/projects/project-1.png",
},
  {
  year: "2025",
  category: { id: "Administrasi Server & Jaringan", en: "Server & Network Administration" },
  title: "BoreHouse — Sistem Manajemen Stok Barang",
  summary: {
    id: "Aplikasi manajemen inventaris berbasis web untuk mencatat stok barang secara digital.",
    en: "A web-based inventory management app for digitally recording stock items.",
  },
  background: {
    id: "Dibuat untuk memenuhi mata kuliah Integrasi & Pemeliharaan Sistem. Banyak warung masih mencatat stok barang secara manual, sehingga rawan kesalahan dan sulit dipantau.",
    en: "Built for the Integration & System Maintenance course. Many small shops still record stock manually, which is error-prone and hard to monitor.",
  },
  goal: {
    id: "Membangun sistem digital yang memudahkan pengelolaan stok barang dan dapat diakses dari desktop maupun smartphone.",
    en: "Build a digital system that simplifies stock management and can be accessed from desktop or smartphone.",
  },
  role: {
    id: "Network Engineer — merancang arsitektur client-server, mengonfigurasi jaringan, dan mengintegrasikan akses cloud.",
    en: "Network Engineer — designed the client-server architecture, configured the network, and set up cloud access.",
  },
  tools: ["PHP", "MySQL", "Ubuntu Server", "Ngrok"],
  result: {
    id: "Aplikasi manajemen inventaris yang dapat diakses melalui desktop maupun smartphone, mempercepat dan mempermudah pengelolaan stok barang.",
    en: "An inventory management app accessible from both desktop and smartphone, making stock management faster and easier.",
  },
  image: "/images/projects/project-2.png",
},
  {
  year: "2025",
  category: { id: "UI/UX Design", en: "UI/UX Design" },
  title: "Sinar Catering Real Food — Aplikasi Nutrition Tracker",
  summary: {
    id: "Case-based project berupa desain aplikasi untuk membantu user mengatur pola makan sehat dan memantau nutrisi harian.",
    en: "A case-based project featuring an app design that helps users maintain a healthy diet and track daily nutrition.",
  },
  background: {
    id: "Dibuat untuk memenuhi mata kuliah Kewirausahaan Teknologi. Masih banyak orang kesulitan menjaga pola makan yang teratur dan kurang memahami kebutuhan nutrisi tubuh.",
    en: "Built for the Technology Entrepreneurship course. Many people still struggle to maintain a regular diet and lack understanding of their body's nutritional needs.",
  },
  goal: {
    id: "Merancang desain aplikasi yang membantu user mengatur pola makan sehat serta memantau asupan nutrisi harian secara mudah dan informatif.",
    en: "Design an application that helps users maintain a healthy diet and easily track their daily nutritional intake.",
  },
  role: {
    id: "UI/UX Designer — melakukan analisis kebutuhan, desain UI/UX, pembuatan prototype, hingga evaluasi desain agar sesuai kebutuhan user.",
    en: "UI/UX Designer — conducted needs analysis, UI/UX design, prototyping, and design evaluation to match user needs.",
  },
  tools: ["Canva", "Coolors", "Fontpair", "Freepik"],
  result: {
    id: "Desain aplikasi yang user-friendly, informatif, dan memudahkan user dalam memantau serta mengatur pola makan sehari-hari.",
    en: "A user-friendly, informative app design that makes it easy for users to monitor and manage their daily eating habits.",
  },
  image: "/images/projects/project-3.png",
},
];

export const skillCategories: SkillCategory[] = [
  {
    title: { id: "Technical Skill", en: "Technical Skill" },
    items: [
      { name: { id: "Pengembangan Web", en: "Web Development" }, level: { id: "mahir", en: "strong" } },
      { name: { id: "Pengembangan Aplikasi", en: "Application Development" }, level: { id: "mahir", en: "strong" } },
      { name: { id: "Analisis Sistem", en: "System Analysis" }, level: { id: "menengah", en: "intermediate" } },
      { name: { id: "Manajemen Basis Data", en: "Database Management" }, level: { id: "mahir", en: "strong" } },
      { name: { id: "Administrasi Server & Jaringan", en: "Server & Network Administration" }, level: { id: "menengah", en: "intermediate" } },
      { name: { id: "Desain UI/UX", en: "UI/UX Design" }, level: { id: "mahir", en: "strong" } },
      { name: { id: "Desain Sistem UI/UX", en: "UI/UX System Design" }, level: { id: "menengah", en: "intermediate" } },
      { name: { id: "Analisis Kebutuhan", en: "Requirement Analysis" }, level: { id: "menengah", en: "intermediate" } },
      { name: { id: "Pengumpulan Informasi", en: "Information Gathering" }, level: { id: "menengah", en: "intermediate" } },
      { name: { id: "Analisis Bisnis Dasar", en: "Basic Business Analysis" }, level: { id: "dasar", en: "basic" } },
    ],
  },
  {
    title: { id: "Soft Skill", en: "Soft Skill" },
    items: [
      { name: { id: "Pemecahan Masalah", en: "Problem Solving" }, level: { id: "kuat", en: "strong" } },
      { name: { id: "Berpikir Analitis & Kritis", en: "Analytical & Critical Thinking" }, level: { id: "kuat", en: "strong" } },
      { name: { id: "Perencanaan Proyek", en: "Project Planning" }, level: { id: "menengah", en: "intermediate" } },
      { name: { id: "Kolaborasi Tim", en: "Team Collaboration" }, level: { id: "kuat", en: "strong" } },
      { name: { id: "Komunikasi & Presentasi", en: "Communication & Presentation" }, level: { id: "kuat", en: "strong" } },
      { name: { id: "Manajemen Waktu", en: "Time Management" }, level: { id: "kuat", en: "strong" } },
      { name: { id: "Adaptabilitas", en: "Adaptability" }, level: { id: "kuat", en: "strong" } },
    ],
  },
  {
    title: { id: "Bahasa Pemrograman", en: "Programming Languages" },
    items: [
      { name: { id: "PHP", en: "PHP" }, level: { id: "mahir", en: "strong" } },
      { name: { id: "HTML", en: "HTML" }, level: { id: "mahir", en: "strong" } },
      { name: { id: "CSS", en: "CSS" }, level: { id: "mahir", en: "strong" } },
      { name: { id: "JavaScript", en: "JavaScript" }, level: { id: "mahir", en: "strong" } },
      { name: { id: "TypeScript", en: "TypeScript" }, level: { id: "menengah", en: "intermediate" } },
      { name: { id: "SQL", en: "SQL" }, level: { id: "mahir", en: "strong" } },
      { name: { id: "Python", en: "Python" }, level: { id: "menengah", en: "intermediate" } },
      { name: { id: "Java", en: "Java" }, level: { id: "menengah", en: "intermediate" } },
      { name: { id: "Kotlin", en: "Kotlin" }, level: { id: "dasar", en: "basic" } },
      { name: { id: "C++", en: "C++" }, level: { id: "dasar", en: "basic" } },
    ],
  },
  {
    title: { id: "Software / Tools", en: "Software / Tools" },
    items: [
    { name: { id: "Visual Studio Code", en: "Visual Studio Code" }, level: { id: "harian", en: "daily" } },
    { name: { id: "Git & GitHub", en: "Git & GitHub" }, level: { id: "harian", en: "daily" } },
    { name: { id: "XAMPP / Laragon", en: "XAMPP / Laragon" }, level: { id: "mahir", en: "strong" } },
    { name: { id: "Postman", en: "Postman" }, level: { id: "menengah", en: "intermediate" } },
    { name: { id: "Apidog", en: "Apidog" }, level: { id: "menengah", en: "intermediate" } },
    { name: { id: "Chrome DevTools", en: "Chrome DevTools" }, level: { id: "menengah", en: "intermediate" } },
    { name: { id: "Figma", en: "Figma" }, level: { id: "mahir", en: "strong" } },
    { name: { id: "Canva", en: "Canva" }, level: { id: "mahir", en: "strong" } },
    { name: { id: "Cisco Packet Tracer", en: "Cisco Packet Tracer" }, level: { id: "menengah", en: "intermediate" } },
    { name: { id: "GNS3", en: "GNS3" }, level: { id: "dasar", en: "basic" } },
    { name: { id: "VirtualBox / VMware", en: "VirtualBox / VMware" }, level: { id: "menengah", en: "intermediate" } },
    { name: { id: "Ngrok", en: "Ngrok" }, level: { id: "menengah", en: "intermediate" } },
    { name: { id: "Wireshark", en: "Wireshark" }, level: { id: "dasar", en: "basic" } },
    { name: { id: "SQL Server Management Studio", en: "SQL Server Management Studio" }, level: { id: "menengah", en: "intermediate" } },
    { name: { id: "phpMyAdmin", en: "phpMyAdmin" }, level: { id: "mahir", en: "strong" } },
    { name: { id: "MySQL Workbench", en: "MySQL Workbench" }, level: { id: "menengah", en: "intermediate" } },
    { name: { id: "Apache NetBeans IDE", en: "Apache NetBeans IDE" }, level: { id: "menengah", en: "intermediate" } },
    { name: { id: "Android Studio", en: "Android Studio" }, level: { id: "menengah", en: "intermediate" } },
    { name: { id: "Microsoft Office 365", en: "Microsoft Office 365" }, level: { id: "harian", en: "daily" } },
    { name: { id: "Google Workspace", en: "Google Workspace" }, level: { id: "harian", en: "daily" } },
    ],
  },
  {
    title: { id: "Bahasa", en: "Languages" },
    items: [
      { name: { id: "Bahasa Indonesia", en: "Indonesian" }, level: { id: "native", en: "native" } },
      { name: { id: "Bahasa Inggris", en: "English" }, level: { id: "mahir", en: "advanced" } },
      { name: { id: "Bahasa Prancis", en: "French" }, level: { id: "dasar", en: "elementary" } },
    ],
  },
];