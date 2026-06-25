export const metadata = {
  title: "Aurelle Rebirth — El Programa",
  description:
    "El programa para la mujer que está lista para su siguiente versión.",
};

export default function RebirthPage() {
  return (
    <main className="rebirth-page">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap");

        .rebirth-page {
          color-scheme: light only;
          --ivory: #FDFAF4;
          --cream: #F5EFE4;
          --sand: #E8DCC8;
          --sand-mid: #D4C4A8;
          --gold: #B8943A;
          --gold-soft: #CCA855;
          --gold-pale: #E8D4A0;
          --brown-soft: #8A6A4A;
          --brown: #5C3E22;
          --text: #2E1E0E;
          --text-mid: #6A5040;
          --text-light: #9A8070;
          background-color: var(--ivory);
          color: var(--text);
          font-family: "Jost", sans-serif;
          font-weight: 300;
          line-height: 1.7;
          overflow-x: hidden;
        }

        .rebirth-page *,
        .rebirth-page *::before,
        .rebirth-page *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .rebirth-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 80px 28px 120px;
          background: linear-gradient(180deg, #E8DCC8 0%, #D4C4A8 40%, #C4B090 100%);
          position: relative;
        }

        .rebirth-hero::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(to bottom, transparent, var(--ivory));
        }

        .rebirth-brand-label {
          font-size: 10px;
          letter-spacing: 6px;
          text-transform: uppercase;
          color: var(--brown);
          margin-bottom: 40px;
          opacity: 0.7;
        }

        .rebirth-hero h1 {
          font-family: "Cormorant Garamond", serif;
          font-weight: 300;
          font-size: clamp(60px, 16vw, 110px);
          line-height: 0.9;
          color: var(--brown);
          letter-spacing: -2px;
        }

        .rebirth-hero h1 em {
          font-style: italic;
          color: var(--brown-soft);
          display: block;
        }

        .rebirth-hero-subtitle {
          font-family: "Cormorant Garamond", serif;
          font-style: italic;
          font-size: clamp(17px, 4vw, 22px);
          color: var(--brown-soft);
          margin: 36px 0 56px;
          max-width: 380px;
          line-height: 1.6;
        }

        .rebirth-btn,
        .rebirth-btn-pago {
          display: inline-block;
          background: var(--brown);
          color: var(--ivory);
          font-family: "Jost", sans-serif;
          font-weight: 400;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.3s, transform 0.2s;
          position: relative;
          z-index: 1;
        }

        .rebirth-btn {
          padding: 18px 48px;
        }

        .rebirth-btn:hover,
        .rebirth-btn-pago:hover {
          background: var(--brown-soft);
          transform: translateY(-2px);
        }

        .rebirth-section {
          padding: 88px 28px;
          max-width: 640px;
          margin: 0 auto;
        }

        .rebirth-label {
          display: block;
          font-size: 10px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }

        .rebirth-page h2 {
          font-family: "Cormorant Garamond", serif;
          font-weight: 300;
          font-size: clamp(34px, 7vw, 52px);
          line-height: 1.1;
          color: var(--brown);
          margin-bottom: 28px;
        }

        .rebirth-page h2 em {
          font-style: italic;
          color: var(--gold);
        }

        .rebirth-page p {
          font-size: 16px;
          color: var(--text-mid);
          margin-bottom: 18px;
          line-height: 1.9;
        }

        .rebirth-page p strong {
          color: var(--text);
          font-weight: 400;
        }

        .rebirth-divider {
          width: 1px;
          height: 60px;
          background: var(--sand-mid);
          margin: 0 auto;
        }

        .rebirth-block-sand,
        .rebirth-precio-block {
          background: var(--cream);
        }

        .rebirth-block-sand,
        .rebirth-semanas,
        .rebirth-block-warm,
        .rebirth-footer-cta {
          padding: 88px 28px;
        }

        .rebirth-block-sand .rebirth-inner,
        .rebirth-semanas .rebirth-inner,
        .rebirth-block-warm .rebirth-inner {
          max-width: 640px;
          margin: 0 auto;
        }

        .rebirth-checks {
          list-style: none;
          margin-top: 40px;
        }

        .rebirth-checks li {
          font-size: 16px;
          color: var(--text-mid);
          padding: 18px 0;
          border-bottom: 1px solid var(--sand);
          display: flex;
          align-items: flex-start;
          gap: 20px;
          line-height: 1.65;
        }

        .rebirth-checks li:last-child {
          border-bottom: none;
        }

        .rebirth-checks li::before {
          content: "·";
          color: var(--gold);
          font-size: 24px;
          flex-shrink: 0;
          line-height: 1.2;
        }

        .rebirth-semanas {
          background: var(--ivory);
        }

        .rebirth-semana-item {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 20px;
          padding: 40px 0;
          border-bottom: 1px solid var(--sand);
        }

        .rebirth-semana-item:last-child {
          border-bottom: none;
        }

        .rebirth-semana-num {
          font-family: "Cormorant Garamond", serif;
          font-size: 48px;
          font-weight: 300;
          color: var(--gold-pale);
          line-height: 1;
        }

        .rebirth-semana-title {
          font-family: "Cormorant Garamond", serif;
          font-size: 22px;
          font-weight: 400;
          color: var(--brown);
          margin-bottom: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .rebirth-semana-desc {
          font-size: 15px;
          color: var(--text-light);
          line-height: 1.8;
          margin: 0;
        }

        .rebirth-incluye-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          margin-top: 40px;
          background: var(--sand);
          border: 1px solid var(--sand);
        }

        .rebirth-incluye-item {
          background: var(--ivory);
          padding: 28px 22px;
        }

        .rebirth-incluye-item strong {
          display: block;
          font-family: "Cormorant Garamond", serif;
          font-weight: 400;
          font-size: 17px;
          color: var(--brown);
          margin-bottom: 8px;
        }

        .rebirth-incluye-item span {
          font-size: 14px;
          color: var(--text-light);
          line-height: 1.6;
        }

        .rebirth-block-warm {
          background: var(--sand);
        }

        .rebirth-rebeca-quote {
          font-family: "Cormorant Garamond", serif;
          font-style: italic;
          font-size: clamp(22px, 5vw, 32px);
          color: var(--brown);
          line-height: 1.45;
          padding: 32px 0;
          border-top: 1px solid var(--sand-mid);
          border-bottom: 1px solid var(--sand-mid);
          margin: 32px 0;
          text-align: center;
        }

        .rebirth-precio-block {
          padding: 100px 28px;
          text-align: center;
          border-top: 1px solid var(--sand);
        }

        .rebirth-precio-inner {
          max-width: 500px;
          margin: 0 auto;
        }

        .rebirth-precio-block h2 {
          color: var(--brown);
        }

        .rebirth-precio-block > .rebirth-precio-inner > p {
          color: var(--text-light);
          margin-bottom: 48px;
        }

        .rebirth-precio-tag {
          font-family: "Cormorant Garamond", serif;
          font-size: 80px;
          font-weight: 300;
          color: var(--brown);
          line-height: 1;
          margin-bottom: 6px;
        }

        .rebirth-precio-tag span {
          font-size: 32px;
          vertical-align: super;
        }

        .rebirth-precio-moneda {
          font-size: 11px;
          letter-spacing: 4px;
          color: var(--text-light);
          text-transform: uppercase;
          margin-bottom: 48px;
        }

        .rebirth-btn-pago {
          padding: 20px 56px;
          width: 100%;
          max-width: 340px;
        }

        .rebirth-garantia {
          margin-top: 24px;
          font-size: 12px;
          color: var(--text-light);
          letter-spacing: 1px;
        }

        .rebirth-footer-cta {
          background: var(--sand-mid);
          text-align: center;
        }

        .rebirth-footer-cta h2 {
          max-width: 420px;
          margin: 0 auto 32px;
          color: var(--brown);
        }

        .rebirth-footer {
          background: var(--brown);
          padding: 36px 28px;
          text-align: center;
        }

        .rebirth-footer-brand {
          font-family: "Cormorant Garamond", serif;
          font-size: 20px;
          font-weight: 300;
          color: var(--ivory);
          letter-spacing: 6px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .rebirth-footer p {
          font-size: 11px;
          color: rgba(253, 250, 244, 0.3);
          letter-spacing: 1px;
          margin: 0;
        }

        @media (max-width: 500px) {
          .rebirth-incluye-grid {
            grid-template-columns: 1fr;
          }

          .rebirth-precio-tag {
            font-size: 60px;
          }
        }
      `}</style>

      <div className="rebirth-hero">
        <span className="rebirth-brand-label">Aurelle Wellness Club</span>
        <h1>
          Aurelle<em>Rebirth</em>
        </h1>
        <p className="rebirth-hero-subtitle">
          El programa para la mujer que está lista para su siguiente versión.
        </p>
        <a href="#precio" className="rebirth-btn">
          Quiero entrar
        </a>
      </div>

      <section className="rebirth-section">
        <span className="rebirth-label">El punto de partida</span>
        <h2>
          ¿Cuándo fue la última vez que te pusiste <em>primera?</em>
        </h2>
        <p>
          Hay mujeres que desde afuera lo tienen todo. La carrera, la imagen,
          el ritmo. Pero adentro algo no cierra. Hay un cansancio que no se va
          con vacaciones. Una sensación de que falta algo — y no sabés bien qué
          es.
        </p>
        <p>
          Aurelle Rebirth existe para eso. No es un curso. No es motivación de
          Instagram. Es un proceso real de cuatro semanas para que vuelvas a
          vos.
        </p>
        <p>
          <strong>
            Con herramientas concretas, acompañamiento directo y una comunidad
            de mujeres que están en el mismo camino.
          </strong>
        </p>
      </section>

      <div className="rebirth-divider" />

      <div className="rebirth-block-sand">
        <div className="rebirth-inner">
          <span className="rebirth-label">Para quién es esto</span>
          <h2>
            Este programa es para vos <em>si...</em>
          </h2>
          <ul className="rebirth-checks">
            <li>Sentís que estás viviendo en piloto automático y querés salir de ahí</li>
            <li>Te cuesta poner límites — con las personas, con el trabajo, con vos misma</li>
            <li>Tu cuerpo está mandando señales que ignorás hace tiempo</li>
            <li>Querés algo más profundo que tips de bienestar en redes sociales</li>
            <li>Estás lista para invertir en vos — en serio</li>
          </ul>
        </div>
      </div>

      <div className="rebirth-semanas">
        <div className="rebirth-inner">
          <span className="rebirth-label">El recorrido</span>
          <h2>
            Cuatro semanas. <em>Una nueva versión.</em>
          </h2>
          <div className="rebirth-semana-item">
            <div className="rebirth-semana-num">01</div>
            <div>
              <div className="rebirth-semana-title">Pausa</div>
              <p className="rebirth-semana-desc">
                Aprender a detenerse de verdad. Reconocer el ruido interno.
                Herramientas de mindfulness y presencia para empezar a
                escucharte — quizás por primera vez.
              </p>
            </div>
          </div>
          <div className="rebirth-semana-item">
            <div className="rebirth-semana-num">02</div>
            <div>
              <div className="rebirth-semana-title">Cuerpo</div>
              <p className="rebirth-semana-desc">
                Reconectar con lo que tu cuerpo guarda. Trabajo de conciencia
                corporal para entender qué estás cargando — y cómo empezar a
                soltarlo.
              </p>
            </div>
          </div>
          <div className="rebirth-semana-item">
            <div className="rebirth-semana-num">03</div>
            <div>
              <div className="rebirth-semana-title">Límites</div>
              <p className="rebirth-semana-desc">
                Identificar los patrones que te drenan energía. Poner límites
                desde el poder — no desde el miedo. En tus relaciones, tus
                hábitos y tu entorno.
              </p>
            </div>
          </div>
          <div className="rebirth-semana-item">
            <div className="rebirth-semana-num">04</div>
            <div>
              <div className="rebirth-semana-title">Nueva versión</div>
              <p className="rebirth-semana-desc">
                Integración. Definir quién querés ser. Crear una intención
                clara para lo que viene. No el final — el comienzo de tu
                elevación.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="rebirth-section">
        <span className="rebirth-label">Lo que recibís</span>
        <h2>
          Todo lo que <em>incluye</em>
        </h2>
        <div className="rebirth-incluye-grid">
          <div className="rebirth-incluye-item">
            <strong>Workbook semanal</strong>
            <span>Material de reflexión y ejercicios para cada semana del proceso</span>
          </div>
          <div className="rebirth-incluye-item">
            <strong>Audios guiados</strong>
            <span>Meditaciones y prácticas de presencia para hacer a tu ritmo</span>
          </div>
          <div className="rebirth-incluye-item">
            <strong>Comunidad privada</strong>
            <span>Grupo de mujeres Aurelle donde acompañarte durante las 4 semanas</span>
          </div>
          <div className="rebirth-incluye-item">
            <strong>Acompañamiento directo</strong>
            <span>Acceso directo a Rebeca durante todo el programa</span>
          </div>
        </div>
      </section>

      <div className="rebirth-block-warm">
        <div className="rebirth-inner">
          <span className="rebirth-label">Quién te acompaña</span>
          <h2>
            Rebeca, <em>creadora de Aurelle</em>
          </h2>
          <blockquote className="rebirth-rebeca-quote">
            "Aurelle es el espacio que yo hubiera necesitado. Un lugar donde el
            bienestar no es solo verse bien — sino sentirse en paz, conocerse de
            verdad y rodearse de mujeres que inspiran."
          </blockquote>
          <p>
            No vengo del mundo terapéutico. Vengo del mundo de la imagen, la
            presencia, el modelaje. Y aun así elegí ir adentro. Sé lo que es
            vivir con una distancia entre cómo te ven y cómo te sentís.
          </p>
          <p>
            Aurelle Rebirth es lo que quiero para vos: que dejes de vivir para
            la imagen — y empieces a vivir para vos.
          </p>
        </div>
      </div>

      <div className="rebirth-precio-block" id="precio">
        <div className="rebirth-precio-inner">
          <span className="rebirth-label">La inversión</span>
          <h2>
            Cuatro semanas que <em>cambian todo</em>
          </h2>
          <p>
            Un proceso completo de transformación. Acompañamiento real.
            Herramientas que te quedás para siempre.
          </p>
          <div className="rebirth-precio-tag">
            <span>$</span>2,500
          </div>
          <div className="rebirth-precio-moneda">MXN · pago único</div>
          <a
            href="https://buy.stripe.com/aFa5kC1RI7k93i8gK24Rq00"
            className="rebirth-btn-pago"
          >
            Quiero entrar al programa
          </a>
          <p className="rebirth-garantia">Cupos limitados · Inicio agosto 2026</p>
        </div>
      </div>

      <div className="rebirth-footer-cta">
        <h2>
          La que está lista, <em>lo sabe.</em>
        </h2>
        <a href="#precio" className="rebirth-btn">
          Reservar mi lugar
        </a>
      </div>

      <footer className="rebirth-footer">
        <div className="rebirth-footer-brand">AURELLE</div>
        <p>© 2026 Aurelle Wellness Club · aurellewellnessclub.com</p>
      </footer>
    </main>
  );
}
