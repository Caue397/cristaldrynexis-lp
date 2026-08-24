type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string | string[];
  align?: "center" | "left";
  tone?: "dark" | "light";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const titleColor = tone === "dark" ? "text-brand-dark" : "text-white";
  const descriptionColor = tone === "dark" ? "text-zinc-600" : "text-zinc-200";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-accent">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${titleColor}`}>{title}</h2>
      {description &&
        (Array.isArray(description) ? (
          description.map((paragraph) => (
            <p key={paragraph} className={`text-lg ${descriptionColor}`}>
              {paragraph}
            </p>
          ))
        ) : (
          <p className={`text-lg ${descriptionColor}`}>{description}</p>
        ))}
    </div>
  );
}
