import Button from "../components/Button";
import Header from "../components/Header";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { eventDetails, inclusions, links } from "../lib/content";

const socialItems = [
  { label: "WhatsApp", href: links.whatsapp },
  { label: "Instagram", href: links.instagram },
  { label: "TikTok", href: links.tiktok },
];

function WaitlistNote({ align = "left" }) {
  return (
    <p
      className={`mt-3 text-xs font-light leading-6 text-cacao/75 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      Solo 15 lugares · $1,500 MXN
    </p>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />

      <section
        id="inicio"
        className="relative flex min-h-screen items-center overflow-hidden border-b border-taupe/15 bg-[linear-gradient(135deg,#F6F0E8_0%,#F8F3ED_48%,#EFE5DA_100%)] px-5 pb-20 pt-32 sm:px-8 lg:px-12"
      >
        <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-ivory/70 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blush/25 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1280px]">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <Reveal>
              <div className="max-w-2xl">
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-taupe/45" />
                  <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-taupe">
                    Pilates · Conversación · Conexión
                  </p>
                </div>
                <h1 className="mt-9 font-serif text-[clamp(4.7rem,9.1vw,8.8rem)] font-normal leading-[0.88] tracking-[-0.045em] text-espresso">
                  Aurelle
                  <span className="mt-3 block text-[0.56em] italic tracking-[-0.025em] text-taupe">
                    Wellness Club
                  </span>
                </h1>
                <p className="mt-9 max-w-lg text-sm font-light leading-7 text-cacao sm:text-base">
                  Hay un momento en que te das cuenta que hace tiempo que no
                  eres tú. No fue de un día para el otro. Poco a poco, dejaste de
                  estar en la lista.
                </p>
                <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <div>
                    <Button
                      href={links.waitlist}
                      external
                      className="border-espresso bg-espresso hover:border-taupe hover:bg-taupe"
                    >
                      Reservar mi lugar
                    </Button>
                    <WaitlistNote />
                  </div>
                  <a
                    href="#sobre"
                    className="inline-flex min-h-12 items-center justify-center text-[10px] font-bold uppercase tracking-[0.2em] text-espresso underline decoration-taupe/50 underline-offset-8 transition duration-300 hover:text-taupe"
                  >
                    Descubrir Aurelle
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative border border-ivory/15 bg-espresso p-7 text-ivory shadow-soft backdrop-blur-sm sm:p-10 lg:p-12">
                <div className="absolute -left-3 -top-3 h-12 w-12 border-l border-t border-ivory/35" />
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-sand">
                  Una tarde para ti
                </p>
                <p className="mt-8 max-w-md font-serif text-3xl italic leading-[1.25] text-ivory sm:text-4xl">
                  No es un evento más. Las que estén ahí van a saberlo.
                </p>
                <div className="mt-12 border-t border-ivory/20">
                  {["Movimiento consciente", "Conexión femenina", "Conexiones con intención"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-5 border-b border-ivory/20 py-5"
                      >
                        <span className="text-[8px] font-bold tracking-[0.2em] text-gold">
                          0{index + 1}
                        </span>
                        <span className="font-serif text-lg text-ivory">
                          {item}
                        </span>
                      </div>
                    ),
                  )}
                </div>
                <div className="mt-8 flex items-center justify-between gap-4 text-[8px] uppercase tracking-[0.28em] text-sand">
                  <span>Antü Movement Studio, Polanco, CDMX</span>
                  <span className="h-px w-12 bg-ivory/35" />
                  <span>24 de Octubre, 2026</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 flex items-center gap-4 text-[8px] uppercase tracking-[0.3em] text-cacao/70 lg:mt-16">
            <span className="h-px w-10 bg-taupe/30" />
            Primera experiencia Aurelle
          </div>
        </div>
      </section>

      <section className="bg-linen px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1120px]">
          <Reveal>
            <div className="max-w-3xl border-y border-taupe/20 py-14">
              <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.32em] text-taupe">
                La charla
              </p>
              <h2 className="font-serif text-4xl font-normal leading-[1.03] text-espresso sm:text-5xl lg:text-6xl">
                Ana Paola Corona
              </h2>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.28em] text-taupe">
                Psicóloga
              </p>
              <p className="mt-8 text-base font-light leading-8 text-cacao sm:text-lg">
                Ana Paola guiará una conversación íntima sobre cómo volver a
                escucharte, poner límites y reconocer lo que tu cuerpo lleva
                tiempo intentando decirte.
              </p>
              <a
                href="https://www.instagram.com/anapaola.corona"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex text-[10px] font-bold uppercase tracking-[0.2em] text-espresso underline decoration-taupe/50 underline-offset-8 transition duration-300 hover:text-taupe"
              >
                @anapaola.corona
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="sobre"
        className="bg-ivory px-5 py-24 sm:px-8 lg:px-12 lg:py-40"
      >
        <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          <Reveal>
            <p className="font-serif text-3xl italic leading-tight text-taupe lg:text-4xl">
              Pausa.
              <br />
              Presencia.
              <br />
              Comunidad.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex max-w-3xl flex-col items-start text-left">
              <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.32em] text-taupe">
                Nuestra esencia
              </p>
              <h2 className="text-balance font-serif text-4xl font-normal leading-[1.03] text-espresso sm:text-5xl lg:text-6xl">
                Sobre Aurelle
              </h2>
              <div className="mt-8 max-w-2xl space-y-5 text-base font-light leading-8 text-espresso sm:text-lg">
                <p>Aurelle nació de una historia personal.</p>
                <p>
                  De chica vi de cerca lo que pasa cuando una mujer no se ve a
                  sí misma. Y sin entenderlo, me convertí en la persona a quien
                  las mujeres acudían, para sentirse más seguras, más ellas
                  mismas, más en paz.
                </p>
                <p>
                  Con los años también lo viví yo. Relaciones donde no me
                  respeté, momentos donde no me puse primero. Fue a través de
                  la terapia, el trabajo interno y la reconexión conmigo misma
                  que entendí de dónde venía todo eso.
                </p>
                <p>
                  Aurelle es el espacio que yo hubiera necesitado. Un lugar
                  donde el bienestar no es solo verse bien, sino sentirse en
                  paz, conocerse de verdad y rodearse de mujeres reales.
                </p>
                <p>
                  Si estás aquí, creo que algo en ti también está lista para
                  volver a ti.
                </p>
                <div className="pt-3 font-serif text-xl italic leading-8 text-espresso">
                  <p>Con amor,</p>
                  <p>Rebeca</p>
                  <p className="text-base text-espresso">Creadora de Aurelle 🤍</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="encuentro"
        className="border-y border-taupe/15 bg-linen px-5 py-24 sm:px-8 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24">
              <div>
                <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.32em] text-taupe">
                  La primera experiencia
                </p>
                <h2 className="text-balance max-w-4xl font-serif text-4xl font-normal leading-[1.02] text-espresso sm:text-6xl lg:text-7xl">
                  Primer encuentro Aurelle en CDMX
                </h2>
              </div>
              <p className="max-w-xl text-base font-light leading-8 text-cacao sm:text-lg">
                15 mujeres. Una tarde para recordar cómo se siente ser tú.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid border-y border-taupe/25 md:grid-cols-3">
            {eventDetails.map((detail, index) => (
              <Reveal key={detail.label} delay={index * 100}>
                <article className="min-h-40 border-b border-taupe/20 py-8 md:border-b-0 md:border-r md:px-8 md:last:border-r-0">
                  <p className="text-[9px] font-bold uppercase tracking-editorial text-taupe">
                    {detail.label}
                  </p>
                  <p className="mt-8 font-serif text-2xl text-espresso sm:text-3xl">
                    {detail.value}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="font-serif text-2xl text-espresso">
                Las que estuvieron ahí van a saberlo. Y tú también.
              </p>
              <p className="mt-3 text-sm leading-7 text-cacao">
                La ubicación exacta será compartida luego de la confirmación ·
                Solo 15 lugares
              </p>
            </div>
            <div>
              <Button href={links.waitlist} external>
                Reservar mi lugar
              </Button>
              <WaitlistNote />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory px-5 py-24 sm:px-8 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <SectionHeading
              eyebrow="Todo está en los detalles"
              title="Qué incluye la experiencia"
              description="Cada detalle fue elegido con intención. Cuando alguien te ve de verdad, algo se mueve."
              align="center"
            />
          </Reveal>

          <div className="mt-16 grid border-l border-t border-taupe/20 sm:grid-cols-2 lg:grid-cols-5">
            {inclusions.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="h-full min-h-64 border-b border-r border-taupe/20 bg-ivory p-7 transition duration-300 hover:bg-linen/60">
                  <p className="text-[9px] font-bold tracking-[0.24em] text-gold">
                    0{index + 1}
                  </p>
                  <p className="mt-12 font-serif text-2xl leading-tight text-espresso">
                    {item.title}
                  </p>
                  <p className="mt-5 text-sm font-light leading-7 text-cacao">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="border-y border-taupe/15 bg-linen px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
      >
        <div className="mx-auto grid max-w-[1120px] gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
          <Reveal>
            <SectionHeading
              eyebrow="Hablemos"
              title="Contacto"
              description="¿Quieres ser parte de Aurelle o colaborar con nosotras? Nos encantaría conocerte."
            />
          </Reveal>
          <Reveal>
            <div className="border-t border-taupe/25">
              {socialItems.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b border-taupe/25 py-6 text-[10px] font-bold uppercase tracking-editorial text-espresso transition duration-300 hover:px-3 hover:text-taupe"
                >
                  {social.label}
                  <span className="font-serif text-base font-normal italic text-taupe">
                    Conectar
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <Reveal className="mx-auto max-w-4xl">
          <div className="border-y border-taupe/20 py-12 text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.36em] text-taupe">
              Esto es para ti si.
            </p>
            <p className="mx-auto mt-8 max-w-3xl font-serif text-3xl font-normal leading-[1.25] text-espresso sm:text-4xl lg:text-5xl">
              Dices que sí cuando quieres decir que no, y después te odias por
              eso. Tu cabeza no para ni cuando quieres dormir. Haces todo bien
              hacia afuera y por dentro algo no cierra. No recuerdas cuándo fue
              la última vez que te pusiste primera.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-ivory px-5 py-28 text-center sm:px-8 lg:py-44">
        <Reveal className="mx-auto max-w-5xl">
          <p className="text-[9px] font-bold uppercase tracking-[0.36em] text-taupe">
            Tu lugar te espera
          </p>
          <h2 className="mt-8 text-balance font-serif text-5xl font-normal leading-[0.98] text-espresso sm:text-7xl lg:text-8xl">
            Solo 15 lugares. Las que estén ahí van a saberlo.
          </h2>
          <div className="mx-auto my-10 h-px w-16 bg-taupe/40" />
          <div className="inline-block">
            <Button href={links.waitlist} external>
              Reservar mi lugar
            </Button>
            <WaitlistNote align="center" />
          </div>
        </Reveal>
      </section>

      <section className="border-y border-taupe/15 bg-linen px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="mx-auto max-w-[1120px]">
          <div className="flex flex-col items-start justify-between gap-10 border-y border-taupe/20 py-12 sm:flex-row sm:items-center">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-taupe">
                Aurelle Rebirth
              </p>
              <h2 className="mt-5 max-w-2xl font-serif text-4xl font-normal leading-[1.05] text-espresso sm:text-5xl">
                Cuatro semanas para regular tu sistema nervioso y volver a ti.
              </h2>
            </div>
            <Button href="/rebirth" variant="secondary">
              Conoce el programa
            </Button>
          </div>
        </Reveal>
      </section>

      <footer className="bg-linen px-5 py-12 text-footer sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 border-t border-taupe/20 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-2xl tracking-[0.12em] text-footer">
              AURELLE
            </p>
            <p className="mt-2 text-[9px] uppercase tracking-editorial text-footer">
              Wellness Club
            </p>
          </div>
          <div className="text-left sm:text-right">
            <div className="flex flex-wrap gap-5 text-[9px] font-bold uppercase tracking-[0.18em] sm:justify-end">
              {socialItems.slice(1).map((social) => (
                <a
                  key={social.label}
                  className="transition hover:text-espresso"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                </a>
              ))}
              <a
                className="transition hover:text-espresso"
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
            <p className="mt-5 text-xs text-footer/80">
              © 2026 Aurelle Wellness Club. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
