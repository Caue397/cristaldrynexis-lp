"use client";

import { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
};

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left font-medium text-brand-dark"
      >
        {question}
        <span
          className={`shrink-0 text-brand-dark transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm text-zinc-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}
