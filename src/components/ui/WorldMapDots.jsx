import worldMap from "../../assets/images/world-map.png";

export default function WorldMapDots({ className = '' }) {
  return (
    
     <img
      src={worldMap}
      alt="UnionPay"
      className={className}
      aria-hidden="true"
    />

  )
}
