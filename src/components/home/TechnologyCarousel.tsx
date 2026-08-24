"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/Cristal-dry-nexis-uso.jpg",
  "/CDN-Sujeira-2.jpg",
  "/CDN-Sujeira-1.jpg",
];

export default function TechnologyCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="relative w-full flex-1 overflow-hidden rounded-2xl">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={src} className="relative h-full w-full shrink-0">
              <Image
                src={src}
                alt={`Tecnologia Cristal Dry Nexis em uso — foto ${i + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 384px, 100vw"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Ver foto ${i + 1}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-6 bg-brand-accent" : "w-2.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
