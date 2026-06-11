export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
}) {
  const styles =
    variant === "primary"
      ? "border border-taupe bg-taupe text-ivory hover:border-espresso hover:bg-espresso"
      : "border border-taupe/35 bg-transparent text-espresso hover:border-taupe hover:bg-ivory";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition duration-300 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
