import { footer } from '../../data/content'
import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bgDB1E33 text-white footerbg">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-[1fr_1fr_1.4fr]">
        <div>
          <a href='' className="relative rounded-md overflow-hidden flex shrink-0 mb-6">
           <img src={logo} alt="Logo" className='width65linkimg' />
          </a>
          <p className="font-display text-xl font-semibold leading-tight whitespace-pre-line footerlogotxt">
            {footer.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {footer.columns.map((c) => (
            <a key={c.title} href={c.href} className="text-white/90 hover:text-white/60 transition-colors w-fit footerlink">
              {c.title}
            </a>
          ))}
        </div>

        <div className="flex-col gap-6 md:items-end">
          <p className="italic text-white/90 leading-relaxed max-w-sm footertxtunion">
            {footer.promise}
          </p>

          <div className="flex gap-6 text-sm text-white/85 pt3point6em">
            {footer.legal.map((l, index) => (
              <a
                key={l}
                href="#"
                className={`hover:text-white transition-colors footerprivacylink ${
                  index === 1 ? "mlauto" : ""
                }`}
              >
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
