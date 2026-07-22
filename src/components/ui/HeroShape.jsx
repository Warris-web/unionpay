export default function HeroShape({ color = "#E41E3F" }) {
  return (
    <svg
      className="absolute inset-y-0 -left-8 md:-left-12 h-full w-[68%] md:w-[60%] z-10"
      viewBox="0 0 720 800"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill={color}
        d="
          M0 0
          H720
          L525 705
          C500 770 455 800 390 800
          H0
          Z
        "
      />
    </svg>
  );
}