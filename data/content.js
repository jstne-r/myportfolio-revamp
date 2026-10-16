// =====================================================================
//  data/content.js
//  ---------------------------------------------------------------------
//  Almost everything you see on the site lives in this one file.
//  Edit the text, links, and lists below, save, and the site updates.
//  You don't need to touch any component code for normal content changes.
// =====================================================================

// ---------------------------------------------------------------------
//  Site-wide info (browser tab title, link previews)
// ---------------------------------------------------------------------
export const site = {
  name: "Justine Felicilda",
  description:
    "Justine Felicilda is a multimedia creator in Manila working across development, UI/UX design, and visual storytelling.",
  // Change this to your new domain once the revamped site is live.
  url: "https://justinefelicilda.vercel.app",
  // Image shown when the site is shared on Messenger, LinkedIn, etc.
  previewImage: "/images/og.png",
};

// ---------------------------------------------------------------------
//  Navbar
// ---------------------------------------------------------------------
export const navbar = {
  // The clock on the left always shows this city's time.
  timeZone: "Asia/Manila",
  cityLabel: "Manila",
  // Shown under the clock when someone hovers over it.
  homeHint: "Back to home",

  // Messages under the clock, picked by the hour in your time zone.
  // "from" and "to" are hours on a 24-hour clock (0 = midnight, 18 = 6 PM).
  // "icon" can be "sun" or "moon".
   statuses: [
    { from: 0, to: 7, icon: "moon", text: "Probably asleep (hopefully)" },
    { from: 7, to: 8, icon: "sun", text: "Looking for coffee (she needs it...)" },
    { from: 8, to: 9, icon: "sun", text: "Still feeling sleepy" },
    { from: 9, to: 12, icon: "sun", text: "Learning and working on stuff" },
    { from: 12, to: 13, icon: "sun", text: "Eating somewhere (again)" },
    { from: 13, to: 15, icon: "sun", text: "Curiosity hits her again" },
    { from: 15, to: 17, icon: "sun", text: "Doing final touches on work" },
    { from: 17, to: 19, icon: "sun", text: "Lifting heavy stuff or probably running" },
    { from: 19, to: 20, icon: "moon", text: "Don't forget to eat dinner!" },
    { from: 20, to: 21, icon: "moon", text: "Playing around on instruments" },
    { from: 21, to: 23, icon: "moon", text: "One more chapter, then bed" },
    { from: 23, to: 24, icon: "moon", text: "Laying in bed, scrolling" },
  ],

  // Caption next to the light/dark button.
  themeCaptions: {
    light: "Night owl? Dim the lights",
    dark: "Missing the sun? Bring it back",
  },
};

// ---------------------------------------------------------------------
//  Homepage headline and profile
// ---------------------------------------------------------------------
export const profile = {
  greeting: "Hi there!",
  greetingEnd: "I'm",
  name: "Justine Felicilda",
  roles: ["Artist", "Developer", "Designer"],
  details: [
    { icon: "pin", text: "Manila, PH" },
    { icon: "briefcase", text: "IT Operations Associate" },
    { text: "Remedy Skin Solutions" },
  ],

  // Main profile photo.
  photo: "/images/profile.webp",

  // Hover effect for the profile photo:
  //   "cycle"  -> flips through your poses like a flipbook
  //   "fanout" -> poses slide out from behind the photo like Polaroids
  // The two effects live in components/photo-effects/.
  photoEffect: "cycle",

  // Pose photos used by the hover effect (both effects use this list).
  // Replace the placeholder files in public/images/poses/ with your own
  // square photos, or point these paths at new files. 3 to 5 works best.
  poses: [
    { src: "/images/poses/Justine Pose 1.png", alt: "Justine posing" },
    { src: "/images/poses/Justine Pose 2.png", alt: "Justine posing" },
    { src: "/images/poses/Justine Pose 3.png", alt: "Justine posing" },
    { src: "/images/poses/Justine Pose 4.png", alt: "Justine posing" },
  ],

  bio: "Justine is a Software Engineer and a multimedia creator based in Manila, Philippines. She thrives at the intersection of logic and art, building software and designing user experiences that are intuitive, engaging, and impactful. She translates complex technical needs into elegant, interactive designs. Driven by an endless curiosity, Justine loves learning anything she can get her hands on, from new technologies to artistic mediums. This dual perspective is why she is equal parts engineer and creator, deeply enriching her technical work with a passion for film and photography.",
};

// Buttons under the bio. "href" starting with "/" stays on the site;
// anything else opens in a new tab. "icon": grid, file, behance, github.
// The button with primary: true is filled and shows an arrow on hover.
export const heroButtons = [
  { label: "My works", href: "/works", icon: "grid", primary: true },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1qrIttipuLjZpTCu6Yc6DKaCz3oYQiZMC/view?usp=sharing",
    icon: "file",
  },
];

// Projects in the "Featured works" carousel on the homepage, in order
// (use their slugs). Add or remove as many as you like.
export const featuredWorks = ["bankexpo", "omart", "gametheory", "numberpuzzle"];

// ---------------------------------------------------------------------
//  Timeline (newest first)
// ---------------------------------------------------------------------
export const timeline = [
  { years: "2026 – Present", role: "IT Operations Associate", place: "Remedy Skin Solutions" },
  { years: "2024 – 2025", role: "IT Specialist", place: "Omni Channel Solutions" },
  { years: "2023 – 2024", role: "Multimedia Volunteer", place: "GDSC PLM" },
  { years: "2023", role: "IT Intern", place: "Omni Channel Solutions" },
  { years: "2022", role: "Freelancer", place: "Web design and photo/video editing" },
];

// ---------------------------------------------------------------------
//  Things I love
// ---------------------------------------------------------------------
export const interests = [
  "Art",
  "Music",
  "Drawing",
  "Guitar",
  "Photography",
  "Visual graphics",
  "Animation",
  "Film",
  "UI/UX",
  "Front-end development",
];

// ---------------------------------------------------------------------
//  On the web
// ---------------------------------------------------------------------
export const socials = [
  { platform: "GitHub", handle: "@jstne-r", href: "https://github.com/jstne-r", icon: "github" },
  { platform: "Behance", handle: "@jstne-r", href: "https://behance.net/jstne-r", icon: "behance" },
  { platform: "Instagram", handle: "@jstne.r", href: "https://instagram.com/jstne.r", icon: "instagram" },
];

// ---------------------------------------------------------------------
//  Works
// ---------------------------------------------------------------------
// The Works page shows these sections in this order.
export const workSections = ["Works", "Collaborations", "Other works"];

// Each project gets its own page at /works/<slug>.
//   section     -> must match one of workSections above
//   year        -> shown as a badge next to the title
//   summary     -> one line for the project cards
//   description -> full text on the project page
//   website     -> { label, href } or null to hide the row
//   detailLabel -> "Platform" or "Tools"
//   thumbnail   -> image on the project cards
//   images      -> screenshots on the project page, in this order
export const works = [
  {
    slug: "bankexpo",
    section: "Works",
    title: "Bank Expo",
    year: "2022",
    summary: "A mobile UI design for a banking app.",
    description:
      "Bank Expo is a UI design project focused on a modern, user-friendly interface for a banking app. Its clean, intuitive layout makes it easy to move between the app's banking services and features.",
    website: { label: "Behance", href: "https://www.behance.net/gallery/174247765/Online-Bank-System-(UI)" },
    detailLabel: "Platform",
    details: "Android / macOS",
    thumbnail: "/images/works/bankexpo-thumb.webp",
    images: [
      { src: "/images/works/bankexpo-cover.webp", alt: "Bank Expo UI/UX overview" },
      { src: "/images/works/bankexpo-1.webp", alt: "Bank Expo screen 1" },
      { src: "/images/works/bankexpo-2.webp", alt: "Bank Expo screen 2" },
      { src: "/images/works/bankexpo-3.webp", alt: "Bank Expo screen 3" },
      { src: "/images/works/bankexpo-4.webp", alt: "Bank Expo screen 4" },
    ],
  },
  {
    slug: "bossyoks",
    section: "Works",
    title: "Boss Yoks",
    year: "2020",
    summary: "A website promoting a new unlimited wings restaurant in Manila.",
    description:
      "Boss Yoks is a website built to help promote a newly opened unlimited wings restaurant in Sampaloc, Manila. Customers can explore the menu, find the location, and learn more about what the restaurant offers.",
    website: { label: "jstne-r.github.io/boss-yoks", href: "https://jstne-r.github.io/boss-yoks/" },
    detailLabel: "Platform",
    details: "Windows / macOS",
    thumbnail: "/images/works/bossyoks-thumb.webp",
    images: [
      { src: "/images/works/bossyoks-cover.webp", alt: "Boss Yoks UI/UX overview" },
      { src: "/images/works/bossyoks-1.webp", alt: "Boss Yoks website" },
    ],
  },
  {
    slug: "organikolokal",
    section: "Works",
    title: "Organiko Lokal",
    year: "2022",
    summary: "An e-commerce site for local organic products and sustainable farming.",
    description:
      "Organiko Lokal is an e-commerce website that promotes local organic products and sustainable farming. It connects local farmers directly with customers looking for fresh, organic produce.",
    website: { label: "jstne-r.github.io/ecommerce-for-farmers", href: "https://jstne-r.github.io/ecommerce-for-farmers/" },
    detailLabel: "Platform",
    details: "Windows / macOS",
    thumbnail: "/images/works/organikolokal-thumb.webp",
    images: [
      { src: "/images/works/organikolokal-cover.webp", alt: "Organiko Lokal UI/UX overview" },
      { src: "/images/works/organikolokal-1.webp", alt: "Organiko Lokal website" },
    ],
  },
  {
    slug: "gametheory",
    section: "Works",
    title: "Game Theory Generator",
    year: "2023",
    summary: "A web app that generates answers using a game theory framework.",
    description:
      "Game Theory Generator is a web app where users enter their inputs and get answers based on a game theory framework, making it easy to explore different concepts and strategies. It's built to be approachable, with a clean, modern interface.",
    website: { label: "jstne-r.github.io/game-theory-strategy", href: "https://jstne-r.github.io/game-theory-strategy/" },
    detailLabel: "Platform",
    details: "Windows / macOS",
    thumbnail: "/images/works/gametheory-thumb.webp",
    images: [
      { src: "/images/works/gametheory-1.webp", alt: "Game Theory Generator screen 1" },
      { src: "/images/works/gametheory-2.webp", alt: "Game Theory Generator screen 2" },
      { src: "/images/works/gametheory-3.webp", alt: "Game Theory Generator screen 3" },
      { src: "/images/works/gametheory-4.webp", alt: "Game Theory Generator screen 4" },
    ],
  },
  {
    slug: "omart",
    section: "Collaborations",
    title: "O-mart",
    year: "2024",
    summary: "A redesigned exclusive store platform with better UX and mobile support.",
    description:
      "A complete redesign of O-mart, an exclusive store platform, focused on user experience, visual design, and mobile responsiveness. Beyond the new interface, the project included editing and optimizing product images and rewriting product descriptions for consistency, clarity, and better SEO.",
    website: { label: "omnichannelsolph.store", href: "https://omnichannelsolph.store/" },
    detailLabel: "Platform",
    details: "Windows / macOS / Linux / iOS / Android",
    thumbnail: "/images/works/omart-thumb.webp",
    images: [{ src: "/images/works/omart-1.webp", alt: "O-mart redesigned store" }],
  },
  {
    slug: "numberpuzzle",
    section: "Collaborations",
    title: "Number Puzzle",
    year: "2023",
    summary: "A classic number puzzle game that puts your logic to the test.",
    description:
      "Number Puzzle is a collaborative project to build a visually appealing, easy-to-play number puzzle game. Players arrange numbered tiles in the right order, with a clean, modern interface that keeps it engaging.",
    website: { label: "Behance", href: "https://www.behance.net/gallery/174253071/Mobile-Game-(UI)" },
    detailLabel: "Platform",
    details: "Android",
    thumbnail: "/images/works/numberpuzzle-thumb.webp",
    images: [
      { src: "/images/works/numberpuzzle-1.webp", alt: "Number Puzzle screen 1" },
      { src: "/images/works/numberpuzzle-2.webp", alt: "Number Puzzle screen 2" },
      { src: "/images/works/numberpuzzle-3.webp", alt: "Number Puzzle screen 3" },
      { src: "/images/works/numberpuzzle-4.webp", alt: "Number Puzzle screen 4" },
    ],
  },
  {
    slug: "pubmats",
    section: "Other works",
    title: "Pubmats",
    year: "Collection",
    summary: "Posters, promo materials, and presentations for events and campaigns.",
    description:
      "A collection of posters, promotional materials, and presentations made for various events and campaigns.",
    website: null,
    detailLabel: "Tools",
    details: "Photoshop / Canva / Figma",
    thumbnail: "/images/works/pubmats-thumb.webp",
    images: [
      { src: "/images/works/pubmats-craftys-brand-kit.webp", alt: "Craftys brand kit" },
      { src: "/images/works/pubmats-coffee-crafts.webp", alt: "Coffee Crafts promotional material" },
      { src: "/images/works/pubmats-organization-poster.webp", alt: "Organization poster" },
      { src: "/images/works/pubmats-discrimination-webinar.webp", alt: "Discrimination webinar post" },
      { src: "/images/works/pubmats-sogie-bill.webp", alt: "SOGIE Bill informative posts" },
      { src: "/images/works/pubmats-savings-poster.webp", alt: "Savings poster" },
    ],
  },
];

// Helper used by the pages. You don't need to edit this.
export function getWork(slug) {
  return works.find((w) => w.slug === slug);
}
