"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/components/ui/CtaButton";

const navLinks = [
  { href: "/#resultados", label: "Resultados" },
  { href: "/#aplicacoes", label: "Aplicações" },
  { href: "/#contratos", label: "Contratos" },
  { href: "/persianas-e-cortinas", label: "Persianas e Cortinas" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#faq", label: "Dúvidas" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-dark/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/cristal-dry-nexis-logo.png"
            alt="Cristal Dry Nexis"
            width={178}
            height={41}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-brand-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <CtaButton
              label="Solicitar Orçamento"
              className="py-3! px-6! text-sm!"
              message="Olá, vim do site e gostaria de mais informações."
            />
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/20 text-white lg:hidden"
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`h-0.5 w-full origin-center rounded-full bg-current transition-transform ${
                  isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full origin-center rounded-full bg-current transition-transform ${
                  isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <nav
        className="grid border-white/10 bg-brand-dark transition-[grid-template-rows] duration-300 ease-in-out lg:hidden"
        style={{ gridTemplateRows: isMenuOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div
            className={`mx-auto flex max-w-6xl flex-col gap-1 border-t border-white/10 px-6 py-4 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-brand-accent"
              >
                {link.label}
              </Link>
            ))}
            <CtaButton
              label="Solicitar Orçamento"
              message="Olá, vim do site e gostaria de mais informações."
              className="mt-2 w-full text-sm py-3!"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
