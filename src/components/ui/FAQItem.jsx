import { useRef, useState } from 'react'
import { Plus } from 'lucide-react'

export default function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)

  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center gap-4 py-6 text-left group"
      >
        <span className="eyebrow text-slate/60 w-8 shrink-0 mt20px">{String(index + 1).padStart(2, '0')}</span>
        <span className="flex-1 font-display text-base md:text-lg font-medium text-ink group-hover:text-red transition-colors">
          {q}
        </span>
        <span
          className="shrink-0 h-8 w-8 rounded-full border border-line flex items-center justify-center transition-transform duration-300"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <Plus size={16} strokeWidth={2} />
        </span>
      </button>
      <div
        ref={panelRef}
        style={{
          maxHeight: open ? panelRef.current?.scrollHeight ?? 500 : 0,
        }}
        className="overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      >
        <p className="pb-6 pl-12 pr-8 text-slate leading-relaxed">{a}</p>
      </div>
    </div>
  )
}
