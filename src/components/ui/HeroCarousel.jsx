import { useEffect, useRef, useState } from "react";

export default function HeroCarousel({
  children,
  interval = 5000,
}) {
  const slides = Array.isArray(children) ? children : [children];

  const [active, setActive] = useState(0);
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [interval, slides.length]);

  const goTo = (i) => {
    setActive(i);

    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setActive((cur) => (cur + 1) % slides.length);
    }, interval);
  };

  return (
    <div className="relative overflow-hidden h-[520px] md:h-[764px] heightheroslide">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            active === i
              ? "opacity-100 z-10"
              : "opacity-0 pointer-events-none z-0"
          }`}
        >
          {slide}
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 right-8 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              active === i
                ? "w-6 bg-white"
                : "w-2.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}