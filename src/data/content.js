import  globesvg  from '../assets/images/globe.png';
import  shieldsvg  from "../assets/images/shield.png";
import  checksvg  from "../assets/images/check.png";

export const nav = [
  { label: 'About Us', href: '#about' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Nihao App', href: '#nihao' },
  { label: 'FAQs', href: '#faqs' },
]

// export const hero = {
//   eyebrow: 'UnionPay International · Ghana',
//   title: 'Achieve more.\nYour way.',
//   body: 'Global payments made simple for Ghanaian traders, travellers, and professionals. Pay smarter, anywhere in the world.',
//   cta: 'Register to get a Card',
// }

export const hero = {
  eyebrow: 'UnionPay International · Mauritius',
  title: 'Achieve More\nYour Way with\nUnionPay Mauritius',
  body: 'Your passport to 100% local acceptance, exclusive global privileges and seamless cross-border e-commerce. Welcome to a world where your payment solution adapts to your journey.',
  cta: 'Register your interest today',
}

export const heroStats = [
  { value: 180, suffix: '+', label: 'Countries', sub: 'Global coverage', icon: globesvg, },
  { value: 100, suffix: '%', label: 'Secured & Safe', sub: 'Bank-level security', icon: shieldsvg, },
  { value: 1, suffix: 'B+', label: 'Trusted by', sub: "World's largest consumer base", icon: checksvg, },
]

export const about = {
  eyebrow: 'Who we are',
  title: 'UnionPay International',
  body: "UnionPay provides safe, secure, and frictionless payment solutions, whether you're conducting business, travelling internationally, or managing everyday transactions. With acceptance in over 180 countries and regions, UnionPay helps individuals and businesses make payments with confidence, wherever life takes them.",
  promise: 'UnionPay Your Way. We put you in control, wherever your journey takes you.',
}

export const bankPartner = {
  eyebrow: 'Your card for every lifestyle',
  title: "We've partnered with Ghana's premier banks to issue a tailored suite of cards.",
  bank: 'Prudential Bank',
  tagline: 'The UnionPay card from Prudential Bank. Pay your way, everywhere.',
  body: "Wherever life takes you — the market on your street, a shop across town, or a checkout counter on the other side of the world — your Prudential Bank UnionPay card goes with you. Accepted in over 180 countries, it's one card for every day and every journey.",
  cta: 'Get your Card Today',
}

export const benefits = {
  eyebrow: 'Why choose UnionPay',
  title: 'Why Choose UnionPay in Ghana?',
  body: 'Stop worrying about payment barriers. A UnionPay card is the only tool you need to bridge the gap between local living and global commerce.',
  items: [
    { code: 'GH', title: 'Secure cashless payments in Ghana and worldwide.', body: 'In Ghana and worldwide, checkout with confidence — no cash required.' },
    { code: 'ATM', title: 'Withdraw cash at UnionPay-enabled ATMs worldwide.', body: 'Access UnionPay‑enabled ATMs worldwide, wherever you land.' },
    { code: 'FX', title: 'Competitive exchange rates for global spending.', body: 'Spend globally without the sting of unfair conversion fees.' },
    { code: 'WWW', title: 'Shop online globally with your UnionPay card.', body: 'Check out on international sites with your UnionPay card.' },
    { code: '180+', title: 'Travel to 180+ countries without carrying cash.', body: 'One card, accepted across 180+ countries and regions.' },
    { code: 'SEC', title: 'Safe, convenient payments for travel and business.', body: 'Built for travel and business, with bank‑level protection.' },
  ],
}

export const nihao = {
  eyebrow: 'Nihao China App',
  title: 'Nihao China App',
  body: 'Nihao China is an all-in-one travel app designed to help international visitors travel around China easily and confidently. The app brings together essential travel services, digital payment solutions, tourism information, destination guides, and local lifestyle experiences into one convenient platform.',
  body2: "Whether you're visiting for business, tourism, shopping, or cultural experiences, Nihao China helps simplify every step of your journey.",
  ctaPrimary: 'Download on the App Store',
  ctaSecondary: 'Get it on Google Play',
}

export const faqIntro = {
  eyebrow: 'Everything you need to know about UnionPay in Ghana',
  title: 'Frequently Asked Questions - Ghana',
}

export const faqCategories = [
  {
    title: 'General Information (UnionPay)',
    questions: [
      { q: 'What type of card is a UnionPay card?', a: 'UnionPay offers a range of card products, including Debit, Prepaid, physical, and virtual cards. In Ghana, UnionPay cards are designed to support both local and international transactions securely and conveniently.' },
      { q: 'What is the difference between UnionPay and Visa or Mastercard?', a: 'All three are global card networks. UnionPay is the world\u2019s largest card network by cards issued, with strong acceptance across Asia in addition to its 180+ country footprint, and is often paired with competitive cross-border fees.' },
    ],
  },
  {
    title: 'Using UnionPay in Ghana',
    questions: [
      { q: 'Where can I use my UnionPay card in Ghana?', a: 'Anywhere you see the UnionPay acceptance mark \u2014 in-store card terminals, online checkouts, and partner bank ATMs nationwide.' },
      { q: 'Can I withdraw cash with a UnionPay card?', a: 'Yes. UnionPay cards work at UnionPay-enabled ATMs in Ghana and at over 180 countries and regions abroad.' },
    ],
  },
  {
    title: 'Online & Global Shopping',
    questions: [
      { q: 'Can I shop on international websites with UnionPay?', a: 'Yes, your UnionPay card is accepted at millions of online merchants worldwide, including major international retailers.' },
      { q: 'Are there spending limits for online purchases?', a: 'Limits are set by your issuing bank. Check your Prudential Bank cardholder agreement or app for your specific limits.' },
    ],
  },
  {
    title: 'Security & Protection',
    questions: [
      { q: 'How is my UnionPay card protected from fraud?', a: 'UnionPay transactions run on bank-level security standards, including chip authentication and real-time fraud monitoring.' },
      { q: 'What should I do if my card is lost or stolen?', a: 'Contact Prudential Bank immediately to freeze the card and request a replacement.' },
    ],
  },
  {
    title: 'General Overview (Nihao China App)',
    questions: [
      { q: 'What is the Nihao China App?', a: 'An all-in-one travel companion for visiting China, bringing together payments, transport, translation, and local guides in one app.' },
      { q: 'Do I need a Chinese phone number to use it?', a: 'No \u2014 Nihao China is built for international visitors and works with your existing number.' },
    ],
  },
  {
    title: 'Payments & Financial Services',
    questions: [
      { q: 'Can I pay for transport and metro rides with Nihao China?', a: 'Yes, the app supports metro, bus, and ride-hailing payments directly.' },
      { q: 'Does the app support bill splitting?', a: 'Yes, you can split bills with fellow travellers within the app.' },
    ],
  },
  {
    title: 'Travel & Transportation',
    questions: [
      { q: 'Can I book trains and flights through the app?', a: 'Yes, domestic trains and flights can be booked directly within Nihao China.' },
      { q: 'Does it work in every Chinese city?', a: 'Coverage spans all major cities and is expanding to more regions over time.' },
    ],
  },
  {
    title: 'Using the App Before Travelling from Ghana',
    questions: [
      { q: 'Can I set up the app before I arrive in China?', a: 'Yes, download and set up your profile from Ghana ahead of your trip.' },
      { q: 'Do I need to link my UnionPay card in advance?', a: 'It\u2019s recommended, so payments and top-ups are ready to go the moment you land.' },
    ],
  },
  {
    title: 'Business, Trade & Canton Fair Benefits',
    questions: [
      { q: 'Does UnionPay offer benefits for Canton Fair visitors?', a: 'Yes, cardholders get access to trade-fair partner discounts and streamlined supplier payments.' },
      { q: 'Can businesses use UnionPay for bulk supplier payments?', a: 'Yes, business cardholders can settle bulk supplier invoices directly through the network.' },
    ],
  },
  {
    title: 'Budgeting & Expense Tracking',
    questions: [
      { q: 'Can I track my spending within the app?', a: 'Yes, Nihao China provides a running spend summary throughout your trip.' },
      { q: 'Does it show a breakdown by currency?', a: 'Yes, spending is shown in both Chinese Yuan and Ghanaian Cedis.' },
    ],
  },
  {
    title: 'Translation & Communication Tools',
    questions: [
      { q: 'Does Nihao China include a translator?', a: 'Yes, a built-in translator helps with menus, signage, and everyday conversations.' },
      { q: 'Can I communicate with vendors who don\u2019t speak English?', a: 'Yes, the translator supports text and voice translation for common local dialects.' },
    ],
  },
  {
    title: 'Security for Travellers & Businesses',
    questions: [
      { q: 'What safety features does the app offer while travelling?', a: 'Live location sharing, verified local guides, and 24/7 in-app support for travellers.' },
      { q: 'How is business account data protected?', a: 'Business accounts use the same bank-level encryption and monitoring as personal UnionPay accounts.' },
    ],
  },
]

export const registration = {
  eyebrow: 'Unlock your global access',
  title: 'Unlock Your Global Access',
  body: 'Fill the registration form to get a card and our partner bank will reach out to you for the next step.',
  fields: ['First Name', 'Last Name', 'Email Address', 'Phone Number'],
  cta: 'Submit',
}

export const footer = {
  tagline: 'Achieve More\nYour Way',
  columns: [
    { title: 'About UnionPay', href: '#about' },
    { title: 'Get a Card', href: '#register' },
    { title: 'Download App', href: '#nihao' },
  ],
  promise: '"UnionPay Your Way” Putting you in control, wherever your journey takes you.',
  legal: ['Privacy Policy', 'Terms & Conditions'],
}

