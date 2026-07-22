import { useEffect, useState } from 'react'
import { nav } from '../../data/content'
import { Menu, X } from 'lucide-react'
import logo from "../../assets/images/logo-header.png";


export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_0_theme(colors.line)]' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between md:h-[72px] headerdiv">
        <a href="#top" className="flex items-center gap-2">
          <span className="relative rounded-md overflow-hidden flex shrink-0">
            <img src={logo} alt="Logo" />
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-navy/80 hover:text-red transition-colors headerlink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* <a
          href="#register"
          className="hidden md:inline-flex items-center rounded-full bg-red text-white text-sm font-semibold px-5 py-2.5 hover:bg-navy transition-colors duration-300"
        >
          Get a Card
        </a> */}

        <button className="md:hidden text-navy" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-line px-5 py-4 flex flex-col gap-4">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="font-medium text-navy/80" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            href="#register"
            className="text-center rounded-full bg-red text-white text-sm font-semibold px-5 py-2.5"
            onClick={() => setOpen(false)}
          >
            Get a Card
          </a>
        </div>
      )}
    </header>
  )
}
