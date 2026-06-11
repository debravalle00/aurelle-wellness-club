export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.32em] text-taupe">
        {eyebrow}
      </p>
      <h2 className="text-balance font-serif text-4xl font-normal leading-[1.03] text-espresso sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-8 max-w-2xl text-base font-light leading-8 text-cacao sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
