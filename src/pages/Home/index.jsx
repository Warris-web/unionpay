import { useRef, useState } from 'react'
import { ArrowRight, Banknote, Globe2,ChevronDown, Landmark, ShieldCheck, ShoppingBag, Smartphone, Wallet } from 'lucide-react'
import { FaBeer, FaCoffee, FaHome, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion'
import FAQCategory from '../../components/ui/FAQCategory'
import Reveal from '../../components/ui/Reveal'
import CountUp from '../../components/ui/CountUp'
import WorldMapDots from '../../components/ui/WorldMapDots'
import PhotoPlaceholder from '../../components/ui/PhotoPlaceholder'
import FAQItem from '../../components/ui/FAQItem'
import HeroCarousel from '../../components/ui/HeroCarousel'
import HeroShape from "../../components/ui/HeroShape";
import cardlifestyle from '../../assets/images/099cd76f0110a4b7c11c1416749744e57e11dfb6.jpg'
import pb from '../../assets/images/prudent.png'
import cardtwo from '../../assets/images/Frame1984077848.png'
import traderPhoto from '../../assets/images/registration-trader.jpg';
import watercolor from "../../assets/images/watercolor.png";
import playstore from "../../assets/images/play-store.png";
import appstore from "../../assets/images/app-store.png";
import nihaophone from "../../assets/images/nihao-phone.png";
import slide1 from "../../assets/images/image2.png";
import slide2 from "../../assets/images/image2.png";
import slide3 from "../../assets/images/image2.png";

const heroSlides = [
  {
    image: slide1,
    title: "ACHIEVE MORE\nYOUR WAY.",
    body:
      "Global payments made simple for Ghanaian traders, travellers, and professionals. Pay smarter, anywhere in the world.",
    cta: "Register to get a Card",
    color: "#E41E3F",
  },
  {
    image: slide2,
    title: "ACHIEVE MORE\nYOUR WAY.",
    body:
      "Global payments made simple for Ghanaian traders, travellers, and professionals. Pay smarter, anywhere in the world.",
    cta: "Register to get a Card",
    color: "#D11F45",
  },
  {
    image: slide3,
    title: "ACHIEVE MORE\nYOUR WAY.",
    body:
      "Global payments made simple for Ghanaian traders, travellers, and professionals. Pay smarter, anywhere in the world.",
    cta: "Register to get a Card",
    color: "#C71637",
  },
];

import {
  hero,
  heroStats,
  about,
  bankPartner,
  benefits,
  nihao,
  registration,
  faqCategories, 
  faqIntro,
} from '../../data/content'



const benefitIcons = [ShieldCheck, Landmark, Banknote, ShoppingBag, Globe2, Wallet]


export default function Home() {
  return (
    <main id="top" className="overflow-x-clip">
      {/* ================= HERO ================= */}

    <section className="relative pt-16 md:pt-[72px] overflow-hidden hmeheaderpt">
      <HeroCarousel>
        {heroSlides.map((slide, index) => (
        <div
          key={index}
          className="relative h-[620px] md:h-[760px] overflow-hidden"
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-[100%_20%]"
          />

          {/* Red SVG Shape */}
          <HeroShape color={slide.color} />

          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto h-full px-6 md:px-10 flex items-center">
            <div className="max-w-lg">
              <Reveal>
                <h1 className="font-display font-extrabold text-white text-5xl md:text-7xl leading-[1.05] hmecourselh1">
                  {slide.title.split("\n").map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-8 text-white/90 text-lg leading-9 max-w-md hmecourselp">
                  {slide.body}
                </p>
              </Reveal>

              <Reveal delay={220}>
                <a
                  href="#register"
                  className="inline-block mt-10 text-white text-xl pb-1 hover:opacity-90 hmecoursellink"
                >
                  {slide.cta}
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      ))}
      </HeroCarousel>
    </section>

      {/* ================= ABOUT / WHO WE ARE ================= */}
      <section id="about" className="bg-white pt-20 pb-0">
        <div className="hmewidth83percent mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <span className="eyebrow text-slate whoweare">{about.eyebrow}</span>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="font-display font-bold text-3xl md:text-[2.6rem] mt-4 text-navy whowearep">{about.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-slate text-lg leading-relaxed mt-6 whowearetxt">{about.body}</p>
          </Reveal>
        </div>

        {/* <div className="relative mt-16 pt-2 pb-24 pt-6em">
          <WorldMapDots className="absolute inset-x-0 bottom-0 h-[70%] w-full opacity-90" />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
              {heroStats.map((s, i) => (
                <Reveal key={s.label} delay={i * 90}>
                  <div className="rounded-xl bg-navy text-white p-6 h-full">
                    <div className="font-display font-bold text-2xl">
                      <CountUp value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-2 font-semibold text-sm">{s.label}</div>
                    <div className="text-white/70 text-sm mt-0.5">{s.sub}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={260}>
              <div className="max-w-md ml-auto mt-16 text-right">
                <span className="eyebrow text-navy/70">Our brand promise is simple:</span>
                <p className="font-display text-2xl md:text-[1.7rem] font-semibold text-navy mt-2 leading-snug">
                  {about.promise}
                </p>
              </div>
            </Reveal>
          </div>
        </div> */}
        <div className="relative mt-16 py-24 overflow-hidden whowearemargin640">
        {/* World Map Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* <WorldMapDots className="w-full max-w-[1500px] h-auto opacity-80" /> */}
          <WorldMapDots className="absolute inset-0 w-full h-full object-contain pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">

          {/* Cards */}
          {/* <div className="grid sm:grid-cols-3 gap-5">
            {heroStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="rounded-xl bg-navy text-white p-6 min-h-[170px] worldmapdesignh">
                  <div className="font-display font-bold text-2xl worldmapdesigncount">
                    <FaGlobe />
                  </div>

                  <div className="mt-2 font-semibold text-xl worldmapdesignh1">
                   <CountUp value={s.value} suffix={s.suffix} /> {s.label}
                  </div>

                  <div className="text-white/70 text-base mt-1 worldmapdesignp">
                    {s.sub}
                  </div>
                </div>
              </Reveal>
            ))}
          </div> */}

        <div className="grid sm:grid-cols-3 gap-5">
          {heroStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="rounded-xl bg-navy text-white p-6 min-h-[170px] worldmapdesignh">
                <div className="w-16 h-16 rounded-full bg-[#C9D2DC] flex items-center justify-center worldiconbg">
                  <img
                    src={s.icon}
                    alt={s.label}
                    className="w-9 h-9 object-contain worldiconbgimg"
                  />
                </div>

                <div className="mt-5 font-semibold text-xl worldmapdesignh1">
                  <CountUp value={s.value} suffix={s.suffix} /> {s.label}
                </div>

                <div className="text-white/70 text-base mt-2 worldmapdesignp">
                  {s.sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {/* Promise */}
        <Reveal delay={260}>
          <div className="max-w-xl mx-auto mt-24 text-left brndpromisemargin">
            <span className="eyebrow text-navy/70 hmebrandpromise">
              Our brand promise is simple:
            </span>

            <p className="font-display text-4xl font-semibold text-navy mt-3 leading-tight hmebrandpromiseabt">
              {about.promise}
            </p>
          </div>
        </Reveal>
  </div>
        </div>
      </section>

      {/* ================= YOUR CARD FOR EVERY LIFESTYLE ================= */}
      
      <section className="relative min-h-[360px] md:min-h-[506px] overflow-hidden">

        {/* Background Image */}
        <img
          src={cardlifestyle}
          alt="UnionPay"
          className="absolute inset-0 w-full h-full object-cover" style={{objectPosition: "78% 36%"}}
        />

        {/* Main Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                90deg,
                rgba(5,42,97,.98) 0%,
                rgba(5,42,97,.95) 32%,
                rgba(5,42,97,.82) 48%,
                rgba(5,42,97,.45) 60%,
                rgba(5,42,97,.12) 72%,
                rgba(5,42,97,0) 84%
              )
            `,
          }}
        />

        {/* Soft Glow */}
        <div
          className="absolute inset-y-0 left-0 w-[60%]"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,42,97,1) 0%, rgba(5,42,97,.9) 50%, rgba(5,42,97,.25) 80%, rgba(5,42,97,0) 100%)",
            filter: "blur(14px)",
            transform: "translateX(18px)",
          }}
        />

        {/* Bottom Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,.15), transparent 30%)",
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
            <div className="max-w-[540px]">

              <Reveal>
                <h2 className="font-display font-bold text-white text-4xl md:text-[60px] leading-[1.05] tracking-[-0.02em] hmecardlifestletxth">
                  Your Card For Every Lifestyle
                </h2>
              </Reveal>

              <Reveal delay={80}>
                <p className="mt-6 text-lg md:text-xl leading-8 text-white/90 max-w-[430px] hmecardlifestletxthp">
                  We've partnered with Ghana's premier banks to issue a tailored suite of cards.
                </p>
              </Reveal>

            </div>
          </div>
        </div>

      </section>

      {/* ================= PRUDENTIAL BANK PARTNER ================= */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="">
                <img src={pb} alt="UnionPay" className="" />
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy prudentbankh1">{bankPartner.bank}</h2>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <p className="text-red font-medium prudentbankp">{bankPartner.tagline}</p>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1fr_1.15fr] gap-10 md:gap-16 mt-14 items-center mt7-5em">
          <Reveal delay={100}>
            <img src={cardtwo} alt="UnionPay" className="" />
          </Reveal>

          <Reveal delay={160}>
            <div>
              <p className="text-slate leading-relaxed prudentbanktxt">{bankPartner.body}</p>
              <a
                href="#register"
                className="inline-flex items-center gap-2 mt-7 text-navy pb-0.5 hover:gap-3 transition-all prudentbanktxtlink"
              >
                {bankPartner.cta} 
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}

      <section id="benefits" className="py-16 md:py-20 mw98percent pb0  pt0">
        <div className="relative overflow-hidden">
          {/* Background Shape */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1600 700"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#E31837"
              d="
                M40 0
                H1520
                Q1595 0 1595 55
                L1460 635
                Q1445 700 1370 700
                H0
                Q0 700 0 660
                V0
                Q0 0 40 0
                Z
              "
            />
          </svg>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 text-white pr8point3em">
            <Reveal>
              <h2 className="font-display font-bold text-3xl md:text-5xl max-w-md leading-tight benefithead">
                {benefits.title}
              </h2>
            </Reveal>

            <Reveal delay={70}>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-white/90 leading-relaxed benefitheadp">
                {benefits.body}
              </p>
            </Reveal>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-10 gap-y-12">
              {benefits.items.map((b, i) => {
                const Icon = benefitIcons[i % benefitIcons.length]

                return (
                  <Reveal key={b.title} delay={i * 70}>
                    <div>
                      <Icon
                        size={48}
                        strokeWidth={1.8}
                        className="text-white"
                      />

                      <h3 className="mt-5 text-xl font-semibold leading-snug benefittdxt">
                        {b.title}
                      </h3>

                      {/* <p className="mt-3 text-sm md:text-base leading-relaxed text-white/85">
                        {b.body}
                      </p> */}
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>


      {/* ================= NIHAO APP ================= */}
    <section id="nihao" className="py-16 lg:py-24 px-4 nihobody">
      <div className="">

        <div
          className="relative overflow-hidden rounded-[40px]"
          style={{
            clipPath: "polygon(0 0,100% 0,96% 100%,0 100%)",borderTopLeftRadius:"0"
          }}
        >
          {/* Background */}
          <img
            src={watercolor}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Content */}
          <div className="relative z-10 grid lg:grid-cols-2 items-center gap-12 px-8 md:px-14 py-16 lg:py-20 hmewatercolormtmb">

            {/* Left */}
            <div className="max-w-[600px]">

              <Reveal>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy nihaochinaapptop">
                  {nihao.title}
                </h2>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-8 text-lg leading-9 text-navy/90 nihaochinaapptoptxt">
                  {nihao.body}
                </p>
              </Reveal>

              <Reveal delay={180}>
                <p className="mt-6 text-lg leading-9 text-navy/90 nihaochinaapptoptxt1">
                  {nihao.body2}
                </p>
              </Reveal>

              <Reveal delay={250}>
                <div className="mt-10 flex flex-wrap gap-5 nihaochinaapptoptxtdownload">

                  <img
                    src={appstore}
                    alt="App Store"
                    className="h-14 w-auto cursor-pointer transition hover:scale-105"
                  />

                  <img
                    src={playstore}
                    alt="Google Play"
                    className="h-14 w-auto cursor-pointer transition hover:scale-105"
                  />

                </div>
              </Reveal>

            </div>

            {/* Phone */}
            <Reveal delay={120}>
              <div className="flex justify-center lg:justify-end">

                <img
                  src={nihaophone}
                  alt="Nihao China"
                  className="w-[320px] sm:w-[380px] lg:w-[500px]"
                />

              </div>
            </Reveal>

          </div>

        </div>

      </div>
    </section>

      {/* ================= FAQS ================= */}
      <section>
        {/* <div className="bg-navy text-white py-14 rounded-tr-[110px] md:rounded-tr-[200px]">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <h2 className="font-display font-bold text-2xl md:text-3xl">Frequently Asked Questions</h2>
            </Reveal>
            <Reveal delay={60}>
              <p className="text-white/80 mt-2">Everything you need to know about UnionPay in Ghana</p>
            </Reveal>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 md:px-8 py-16">
          {faqs.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div> */}
        
      </section>
      <FAQSection />

      


      {/* ================= REGISTRATION ================= */}
      <section id="register">
        <div className="relative flex min-h-[340px] md:min-h-[420px]">
          <div className="relative flex-[1.15] overflow-hidden">
            <img
              src={traderPhoto}
              alt="UnionPay"
              className="absolute inset-0 w-full h-full object-cover flipimagetrader"
            />
            <div
            className="absolute top-0 right-[-70px] h-full w-[140px] bg-[#9c001d]/70"
            style={{
              clipPath: "polygon(0% 0px, 100% 0px, 65% 100%, 33% 100%)", right: "-49px"
            }}
          />

          </div>

          <div
            className="relative flex-1 bg-red flex items-center px-8 md:px-14 py-14 bgE31837"
          >
            <div className="max-w-sm text-white -ml-[3%] mauto mw71percent100">
              <Reveal>
                <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight traderh1">
                  {registration.title}
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="text-white/90 leading-relaxed mt-4 traderp">{registration.body}</p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="bg-navy py-16 md:py-20 rounded-br-[110px] md:rounded-br-[200px] regform">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <Reveal>
              <RegistrationForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

function RegistrationForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h3 className="font-display font-bold text-xl text-white mb-8 regformhead">Registration Form</h3>
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
        <Field label="First Name" name="firstName" />
        <Field label="Last Name" name="lastName" />
        <Field label="Email Address" name="email" type="email" />
        <Field label="Phone Number" name="phone" type="tel" />
        <Field label="Message" name="message" type="textarea" className="sm:col-span-2" />
      </div>
      <div className='text-center'>
        <button
          type="submit"
          className="mt-9 rounded-lg bg-red text-white font-semibold px-9 py-3 hover:bg-red-deep transition-colors duration-300 formsubmitbtn"
        >
          {registration.cta}
        </button>
      </div>
    </form>
  )
}

// function Field({ label, name, type = 'text' }) {
//   return (
//     <label className="flex flex-col gap-2">
//       <span className="text-sm font-medium text-white">{label}</span>
//       <input
//         name={name}
//         type={type}
//         required
//         className="bg-transparent border-b border-white/40 py-1.5 text-sm text-white focus:border-white outline-none transition-colors placeholder:text-white/40"
//       />
//     </label>
//   )
// }

function Field({ label, name, type = "text", className = "" }) {
  return (
    <label className={`flex flex-col ${className}`}>
      <span className="text-sm font-medium text-white regformheadfield">{label}</span>

      {type === "textarea" ? (
        <textarea
          name={name}
          required
          rows={1}
          className="bg-transparent border-b border-white/40 py-1.5 text-sm text-white focus:border-white outline-none transition-colors placeholder:text-white/40 resize-none"
        />
      ) : (
        <input
          name={name}
          type={type}
          required
          className="bg-transparent border-b border-white/40 py-1.5 text-sm text-white focus:border-white outline-none transition-colors placeholder:text-white/40"
        />
      )}
    </label>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)

  // ===== Shape Settings ======
  const HEADER_HEIGHT = 150
  const LEFT_RADIUS = 0
  const TOP_RIGHT_RADIUS = 39
  const CUT_X = 1295 // move diagonal left/right
  const CUT_Y = 230 // where the diagonal ends
  const COLOR = "#003D6D"





  return (
    <section id="faqs" className="" style={{maxWidth:"97%"}}>
      <button
        onClick={() => setOpen(o => !o)}
        className="relative w-full overflow-hidden text-left"
        aria-expanded={open}
      >
        {/* HEADER SHAPE */}
        <svg
          viewBox={`0 0 1440 ${HEADER_HEIGHT}`}
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: HEADER_HEIGHT }}
        >

          <path
            fill={COLOR}
            d={`
              M ${LEFT_RADIUS} 0
              H ${1440 - TOP_RIGHT_RADIUS}
              Q 1440 0 1440 ${TOP_RIGHT_RADIUS}
              L ${CUT_X} ${CUT_Y}
              H ${LEFT_RADIUS}
              Q 0 ${CUT_Y} 0 ${CUT_Y - LEFT_RADIUS}
              V ${LEFT_RADIUS}
              Q 0 0 ${LEFT_RADIUS} 0
              Z
            `}
          />
          
        </svg>

        {/* CONTENT */}
        <div className="absolute inset-0 z-10">
          <div className="max-w-6xl mx-auto h-full px-5 md:px-8 flex items-center justify-between">
            <div className=''>
              <h2 className="font-display font-bold text-2xl md:text-5xl text-white faqh1">
                Frequently Asked Questions
              </h2>

              <p className="mt-2 text-white/80 faqp">
                {faqIntro.eyebrow}
              </p>
            </div>

            <span className="h-14 w-14 rounded-full border border-white/30 flex items-center justify-center" style={{ border: "#00000033 solid 1px"}}>
              <ChevronDown
                size={22}
                className="text-white transition-transform duration-300"
                style={{
                  transform: open ? "rotate(180deg)" : "rotate(0deg)"
                }}
              />
            </span>
          </div>
        </div>
      </button>

      {/* FAQ PANEL */}
      {/* <div
        ref={panelRef}
        style={{
          maxHeight: open
            ? panelRef.current?.scrollHeight ?? 4000
            : 0
        }}
        className="overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      > */}
      <motion.div
  initial={false}
  animate={{
    height: open ? "auto" : 0,
    opacity: open ? 1 : 0,
  }}
  transition={{ duration: 0.45 }}
  className="overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 faqundertxttop">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-navy mb-8 faqundertxt">
            {faqIntro.title}
          </h3>

          <div className="space-y-3">
            {faqCategories.map((cat, i) => (
              <FAQCategory
                key={cat.title}
                title={cat.title}
                questions={cat.questions}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </div>
      {/* </div> */}
      </motion.div>
    </section>
  )
}
