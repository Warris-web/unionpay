import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import FAQQuestion from './FAQQuestion'

export default function FAQCategory({ title, questions, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelRef = useRef(null)

  return (
    <div className="rounded-xl border border-line bg-white overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left faqquesh2"
      >
        <span className="font-semibold text-navy text-[15px] faqquesh1">{title}</span>
        <ChevronDown
          size={18}
          className="text-navy/60 shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
{/* 
      <div
        ref={panelRef}
        style={{ maxHeight: open ? panelRef.current?.scrollHeight ?? 2000 : 0 }}
        className="overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      > */}

      <div
        className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
            open ? "max-h-[500px]" : "max-h-0"
        }`}
        >
        <div
            ref={panelRef}
            className="overflow-y-auto max-h-[500px]"
        >
            <div className="px-5 pb-3">
            {questions.map((item, i) => (
                <FAQQuestion
                key={item.q}
                q={item.q}
                a={item.a}
                defaultOpen={open && i === 0}
                />
            ))}
            </div>
        </div>
        </div>


        {/* <div className="px-5 pb-3 ">
          {questions.map((item, i) => (
            <FAQQuestion key={item.q} q={item.q} a={item.a} defaultOpen={open && i === 0} />
          ))}
        </div> */}
      {/* </div> */}
    </div>
  )
}