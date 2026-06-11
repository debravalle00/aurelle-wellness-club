import Button from "./Button";
import { links } from "../lib/content";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-taupe/15 bg-linen/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#inicio"
          className="font-serif text-2xl tracking-[0.12em] text-espresso"
          aria-label="Aurelle, ir al inicio"
        >
          AURELLE
        </a>
        <nav className="hidden items-center gap-8 text-[10px] font-bold uppercase tracking-editorial md:flex">
          <a className="transition hover:text-taupe" href="#sobre">
            Sobre Aurelle
          </a>
          <a className="transition hover:text-taupe" href="#encuentro">
            El encuentro
          </a>
          <a className="transition hover:text-taupe" href="#contacto">
            Contacto
          </a>
        </nav>
        <Button
          href={links.waitlist}
          external
          className="min-h-10 px-4 text-[9px] sm:px-5"
        >
          Unirme
        </Button>
      </div>
    </header>
  );
}
