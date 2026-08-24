"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  };

  const handlePointerDown = (event: React.PointerEvent) => {
    isDragging.current = true;
    (event.target as HTMLElement).setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(event.clientX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      setPosition((prev) => Math.max(0, prev - 5));
    } else if (event.key === "ArrowRight") {
      setPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-2xl border border-zinc-200"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <div className="absolute inset-0">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 448px, 100vw"
        />
        <span className="absolute right-4 top-4 rounded-full bg-brand-accent px-3 py-1 text-xs font-bold text-brand-dark">
          Depois
        </span>
      </div>

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 448px, 100vw"
        />
        <span className="absolute left-4 top-4 rounded-full bg-zinc-700 px-3 py-1 text-xs font-bold text-white">
          Antes
        </span>
      </div>

      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
        style={{ left: `${position}%` }}
      >
        <div
          role="slider"
          tabIndex={0}
          aria-label="Comparar antes e depois"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          onPointerDown={handlePointerDown}
          onKeyDown={handleKeyDown}
          className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-brand-dark shadow-lg"
        >
          <span aria-hidden="true">↔</span>
        </div>
      </div>
    </div>
  );
}
