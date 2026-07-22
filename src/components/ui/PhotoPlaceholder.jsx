import { ImageIcon } from 'lucide-react'

/**
 * Stands in for real photography. Rendered at the exact aspect ratio/shape
 * the design calls for so swapping in a licensed photo later is a drop-in
 * change — see src/assets/README.md.
 */
// export default function PhotoPlaceholder({ label, className = '', tone = 'light' }) {
//   const base =
//     tone === 'light'
//       ? 'bg-paper border-line text-slate'
//       : 'bg-white/10 border-white/25 text-white/70'

//   return (
//     <div
//       className={`flex flex-col items-center justify-center gap-2 border border-dashed ${base} ${className}`}
//     >
//       <ImageIcon size={22} strokeWidth={1.5} />
//       <span className="eyebrow text-center px-4 opacity-80">{label}</span>
//     </div>
//   )
// }
export default function PhotoPlaceholder({ label, className = '', tone = 'light', style }) {
  const base = tone === 'light' ? 'bg-paper border-line text-slate' : 'bg-white/10 border-white/25 text-white/70'
  return (
    <div style={style} className={`flex flex-col items-center justify-center gap-2 border border-dashed ${base} ${className}`}>
      <ImageIcon size={22} strokeWidth={1.5} />
      <span className="eyebrow text-center px-4 opacity-80">{label}</span>
    </div>
  )
}
