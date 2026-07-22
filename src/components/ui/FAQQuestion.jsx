import { useRef, useState } from 'react'
import { Minus, Plus } from 'lucide-react'

export default function FAQQuestion({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelRef = useRef(null)

  return (
    <div className="py-3">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-start gap-3 text-left group"
      >
        <span className="mt-0.5 h-5 w-5 rounded-full border border-navy/40 flex items-center justify-center shrink-0 text-navy/70 group-hover:border-red group-hover:text-red transition-colors mt10px">
          {open ? <Minus size={11} strokeWidth={2.5} /> : <Plus size={11} strokeWidth={2.5} />}
        </span>
        <span className="font-semibold text-navy text-[15px] leading-snug faqquesh2">{q}</span>
      </button>
      <div
        ref={panelRef}
        style={{ maxHeight: open ? panelRef.current?.scrollHeight ?? 400 : 0 }}
        className="overflow-hidden transition-[max-height] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
      >
        <p className="text-sm text-slate leading-relaxed pl-8 pt-2 pb-1 pr-4 faqquestxt">{a}</p>
      </div>
    </div>
  )
}