import CtaButton from "@/components/ui/CtaButton";

const spaces = [
  {
    label: "Escritórios",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16M4 21h16M12 21V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12M7 7h1M7 10h1M7 13h1M7 16h1M15 11h1M15 14h1M15 17h1"
      />
    ),
  },
  {
    label: "Auditórios",
    icon: (
      <>
        <rect x="4" y="6" width="4" height="4" rx="0.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="10" y="6" width="4" height="4" rx="0.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="16" y="6" width="4" height="4" rx="0.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="13" width="4" height="4" rx="0.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="10" y="13" width="4" height="4" rx="0.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="16" y="13" width="4" height="4" rx="0.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "Clínicas",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" d="M12 8v8M8 12h8" />
      </>
    ),
  },
  {
    label: "Demais espaços comerciais",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9l1-5h16l1 5M4 9v11h16V9M9 20v-6h6v6"
      />
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
            Higienização Profissional de Carpetes a mais de 35 anos.{" "}
            Pronto e limpo na hora!
          </h1>
          <p className="text-base text-zinc-200">
            Limpeza a seco com a tecnologia mais avançada do Brasil, para sua empresa não perder
            nenhum dia de serviço.{" "}
            <span className="font-semibold text-white">
              São 35 anos no mercado de higienização.
            </span>
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-base text-zinc-200">
              Nossa tecnologia de limpeza a seco é exclusiva para:
            </p>
            <ul className="grid grid-cols-2 gap-3">
              {spaces.map(({ label, icon }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-zinc-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="h-5 w-5 flex-shrink-0 text-brand-accent"
                    aria-hidden="true"
                  >
                    {icon}
                  </svg>
                  {label}
                </li>
              ))}
            </ul>
            <p className="text-base text-zinc-200">
              Higieniza e perfuma sem ocupar tempo e espaço na sua empresa.
            </p>
          </div>
          <div>
            <CtaButton
              label="Solicitar Orçamento"
              message="Olá, vim do site e gostaria de mais informações."
            />
          </div>
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg lg:aspect-auto lg:h-full">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/rppmCrT5GVY"
            title="Vídeo Cristal Dry Nexis"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
