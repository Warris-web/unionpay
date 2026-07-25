import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { privacyMeta, privacySections, privacyCta } from '../../data/privacyContent'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />

      <main className="pt-16 md:pt-20">
      {/* ================= BANNER ================= */}
      <section className="relative bg-gradient-to-br from-[#FCEAEA] via-[#EAF1FA] to-[#E8F3EC] py-10 md:py-12 overflow-hidden privacyheadpadd">
        <div className="relative max-w-3xl mx-auto px-5 md:px-6 text-center">
          <h1 className="font-display font-bold text-2xl md:text-3xl text-navy privacytitle">
            {privacyMeta.title}
          </h1>

          <span className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 text-xs font-medium text-slate privacytitledate">
            {privacyMeta.effectiveDate}
          </span>
        </div>
      </section>

      {/* ================= INTRO + SECTIONS ================= */}
      <section className="">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 ">
          {/* Intro */}
          <div className="p-5 md:p-6 space-y-4">
            {privacyMeta.intro.map((p, i) => (
              <p
                key={i}
                className="text-sm text-slate leading-relaxed fprivacytxt"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Sections */}
          <div className="rounded-2xl bg-white border border-line mt-5 divide-y divide-line overflow-hidden">
            {privacySections.map((s) => (
              <div key={s.number} className="p-5 md:p-6">
                <h2 className="font-display font-bold text-lg text-navy pl-3 mb-4 privacyhetxt">
                  {s.number}. {s.title}
                </h2>

                <p className="text-sm text-slate leading-relaxed mb-3 privacyhetxtunder">
                  {s.body}
                </p>

                {s.bullets.length > 0 && (
                  <ul className="space-y-2 pl-1">
                    {s.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-slate leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red shrink-0" />

                        <span className="privacyhetxtlabel">
                          {b.label && (
                            <span className="font-semibold text-navy privacyhetxtlabelh">
                              {b.label}{" "}
                            </span>
                          )}
                          {b.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {s.footnote && (
                  <p className="text-sm text-slate leading-relaxed mt-3 privacyhetxtlabel">
                    {s.footnote}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="bg-navy py-8">
        <div className="max-w-6xl mx-auto px-5 md:px-6 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <h3 className="font-display font-bold text-xl md:text-2xl text-white max-w-md">
            {privacyCta.title}
          </h3>

          <a
            href="#register"
            className="inline-flex items-center rounded-full border border-white/60 text-white text-sm font-medium px-6 py-3 hover:bg-white hover:text-navy transition-colors"
          >
            {privacyCta.cta}
          </a>
        </div>
      </section>
    </main>

      <Footer />
    </div>

  )
}