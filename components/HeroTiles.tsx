"use client";

import { useEffect, useState, type CSSProperties } from "react";

type Tile = {
  bg: string;
  color: string;
  x: string;
  y: string;
  hidden: boolean;
};

const STOPS = [
  [110, 168, 255],
  [185, 140, 246],
  [233, 139, 200],
  [245, 165, 160],
];

function hash(a: number, b: number) {
  const s = Math.sin(a * 127.1 + b * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

function colorAt(x: number) {
  const p = x * 5;
  const i = Math.min(2, Math.floor(p));
  const f = p - i;
  return STOPS[i].map((v, j) => Math.round(v + (STOPS[i + 1][j] - v) * f));
}

// Row 0 is the TOP row. This is the one place that controls how many
// tiles are lit per row, top to bottom — edit START / STEP to reshape
// the progression, or swap the whole function for a hardcoded array
// (see the comment below) if you want to hand-tune every row.
const ROW_START = 6;
const ROW_STEP = 2;

function visibleCountForRow(r: number, cols: number): number {
  return Math.min(cols, ROW_START + ROW_STEP * r);

  // Alternative: fully explicit, no formula —
  // const counts = [7, 9, 11, 13, 14, 14];
  // return counts[r] ?? cols;
}

function buildGrid(cols: number, rows: number): Tile[] {
  const tiles: Tile[] = [];
  for (let r = 0; r < rows; r++) {
    const count = visibleCountForRow(r, cols);
    const cutoff = cols - count; // columns before this index are hidden

    for (let c = 0; c < cols; c++) {
      const x = c / (cols - 1);
      const k = colorAt(x);
      const hidden = c < cutoff;

      let alpha = 0;
      if (!hidden) {
        const depth = rows > 1 ? r / (rows - 1) : 1; // 0 at top row, 1 at bottom row
        const h1 = hash(c, r);
        alpha = (0.12 + 0.75 * Math.pow(depth, 1.2)) * (0.55 + 0.45 * h1);
      }

      tiles.push({
        bg: `rgba(${k.join(",")},${alpha.toFixed(2)})`,
        color: k.join(" "),
        x: `${20 + hash(c, r + 9) * 50}%`,
        y: `${15 + hash(r, c + 5) * 60}%`,
        hidden,
      });
    }
  }
  return tiles;
}

export default function HeroTiles() {
  const [grid, setGrid] = useState<{ cols: number; rows: number; tiles: Tile[] } | null>(null);

  useEffect(() => {
    const compute = () => {
      const cols = window.innerWidth < 700 ? 8 : 14;
      const rows = window.innerWidth < 700 ? 5 : 6;
      setGrid({ cols, rows, tiles: buildGrid(cols, rows) });
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  if (!grid) return <div id="hero-tiles" aria-hidden="true" />;

  return (
    <div
      id="hero-tiles"
      aria-hidden="true"
      style={{ gridTemplateColumns: `repeat(${grid.cols}, 1fr)` }}
    >
      {grid.tiles.map((t, idx) => (
        <i
          key={idx}
          style={
            {
              visibility: t.hidden ? "hidden" : "visible",
              backgroundColor: t.bg,
              "--tile-color": t.color,
              "--x": t.x,
              "--y": t.y,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}