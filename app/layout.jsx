import "./globals.css";

export const metadata = {
  title: "Aurelle Wellness Club | CDMX",
  description:
    "Una experiencia de bienestar creada para mujeres que buscan pausar, reconectar y sentirse inspiradas.",
  openGraph: {
    title: "Aurelle Wellness Club",
    description: "Pilates · Brunch · Conexión",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
