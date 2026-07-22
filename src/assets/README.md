# assets/

- `images/` — real photography, card renders, logos that need to be imported
  by path (e.g. `import cardArt from '../assets/images/card.png'`). Anything
  here goes through Vite's asset pipeline (hashing, optimization).
- `icons/` — one-off custom SVGs that aren't in `lucide-react`. Common UI
  icons should use `lucide-react` components directly instead of adding files
  here.

This project currently ships without bitmap imagery — the hero and card
visuals are built as inline SVG/CSS (see `components/ui/FlightPath.jsx`) so
there is nothing to place in `images/` yet. Drop real photography or card
renders here and reference them with a normal ES import when available.
