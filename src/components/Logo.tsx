import Link from "next/link";

const GRID_CELLS = [
  { x: 0, y: 0, fill: "#7C5CFF", opacity: 0.28 },
  { x: 9, y: 0, fill: "#7C5CFF", opacity: 0.55 },
  { x: 18, y: 0, fill: "#22D3EE", opacity: 1 },
  { x: 0, y: 9, fill: "#7C5CFF", opacity: 0.55 },
  { x: 9, y: 9, fill: "#7C5CFF", opacity: 1 },
  { x: 18, y: 9, fill: "#7C5CFF", opacity: 0.55 },
  { x: 0, y: 18, fill: "#22D3EE", opacity: 0.9 },
  { x: 9, y: 18, fill: "#7C5CFF", opacity: 0.55 },
  { x: 18, y: 18, fill: "#7C5CFF", opacity: 0.28 },
];

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Softgrid home"
      className="inline-flex min-h-11 items-center gap-2.5"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="block shrink-0 sm:h-[26px] sm:w-[26px]"
      >
        {GRID_CELLS.map(({ x, y, fill, opacity }) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width="6"
            height="6"
            rx="1.6"
            fill={fill}
            fillOpacity={opacity}
          />
        ))}
      </svg>
      <span className="text-[21px] font-semibold tracking-[-0.03em] text-foreground sm:text-[22px]">
        Softgrid
      </span>
    </Link>
  );
}
